import {  useForm } from 'react-hook-form';
import { Link,  useNavigate } from 'react-router-dom';
import FormInput from '../../components/FormInput/FormInput';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { getAuthClient } from '../../api/grpc/client';
import Swal from 'sweetalert2';
import useGrpcApi from '../../hooks/useGrpcApi';

const registerSchema = yup.object().shape({
    full_name: yup.string().required("Nama lengkap wajib diisi"),
    email: yup.string().email('Format email tidak valid').required("Email wajib diisi"),
    password: yup.string().required("Kata sandi wajib diisi").min(8, "Kata sandi minimal 8 karakter"),
    password_confirmation: yup.string().required("Konfirmasi kata sandi wajib diisi").oneOf([yup.ref('password')], 'Kata sandi tidak sesuai')
})

interface RegisterFormValues {
    full_name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const Register = () => {
    const registerApi = useGrpcApi();
    const navigate = useNavigate();
    const form = useForm<RegisterFormValues>({
        resolver: yupResolver(registerSchema),
    });

    const submitHandler = async (values: RegisterFormValues) => {
        await registerApi.callApi(getAuthClient().register({
                email: values.email,
                fullName: values.full_name,
                password: values.password,
                passwordConfirmation: values.password_confirmation,
        }), {
            useDefaultError: false,
            defaultError(res) {
                if (res.response.base?.message === "User already exist") { //message dari backend
                Swal.fire({
                title: 'Registrasi Gagal',
                text: 'Email sudah terdaftar di dalam sistem kami',
                icon: 'error',
            })
            }
            },
        })

        Swal.fire({
                title: 'Registrasi berhasil',
                text: 'Silahkan masuk menggunakan akun Anda',
                icon: 'success',
            })
            navigate('/login')
    } 

    return (
        <div className="login-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="login-wrap p-4">
                            <h2 className="section-title text-center mb-5">Daftar</h2>
                            <form onSubmit={form.handleSubmit(submitHandler)} className="login-form">
                                <FormInput<RegisterFormValues> 
                                    errors={form.formState.errors}
                                    name='full_name'
                                    register={form.register}
                                    type='text'
                                    placeholder='Nama Lengkap'
                                    disabled={registerApi.isLoading}
                                />
                                <FormInput<RegisterFormValues> 
                                    errors={form.formState.errors}
                                    name='email'
                                    register={form.register}
                                    type='text'
                                    placeholder='Alamat Email'
                                />
                                <FormInput<RegisterFormValues> 
                                    errors={form.formState.errors}
                                    name='password'
                                    register={form.register}
                                    type='password'
                                    placeholder='Kata sandi'
                                    disabled={registerApi.isLoading}
                                />
                                <FormInput<RegisterFormValues> 
                                    errors={form.formState.errors}
                                    name='password_confirmation'
                                    register={form.register}
                                    type='password'
                                    placeholder='Konfimasi kata sandi'
                                    disabled={registerApi.isLoading}
                                />
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block" disabled={registerApi.isLoading}>Buat Akun</button>
                                </div>
                                <div className="text-center mt-4">
                                    <p>Sudah punya akun? <Link to="/login" className="text-primary">Masuk di sini</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
