import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2';
import FormInput from '../../components/FormInput/FormInput';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { AuthServiceClient } from '../../../pb/auth/auth.client';

const loginSchema = yup.object().shape({
    email: yup.string().email('Email tidak valid').required('Email wajib diisi'),
    password: yup.string().required('Password wajib diisi valid').min(6, 'Password minimal 6 karakter'),
})

interface LoginFormValues {
    email: string;
    password: string;
}

const Login = () => {
    const form = useForm<LoginFormValues>({
        resolver: yupResolver(loginSchema),
    });

    const submitHandler = async (values: LoginFormValues) => {
        console.log(values)

        // integrasi backend
        const transport = new GrpcWebFetchTransport ({
            baseUrl: 'http://localhost:8080',   
        })
        const client = new AuthServiceClient(transport);
        const res = await client.login({
            email: values.email,
            password: values.password
        })

         if (res.response.base ?? true){
            Swal.fire({
            icon: 'error',
            title: "Login gagal",
            text: "Silahkan periksa kembali email dan password anda",
            confirmButtonText: 'Ok'
        })
        return
    }

    console.log(res.response.accessToken);
    localStorage.setItem('access_token',res.response.accessToken)

        Swal.fire({
            icon: 'success',
            title: "Login sukses",
            confirmButtonText: 'Ok'
        })
    }

    return (
        <div className="login-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="login-wrap p-4">
                            <h2 className="section-title text-center mb-5">Masuk</h2>
                            <form onSubmit={form.handleSubmit(submitHandler)} className="login-form">
                                <FormInput<LoginFormValues>
                                    errors={form.formState.errors }
                                    name="email"
                                    register={form.register}
                                    type="text"
                                    placeholder="Alamat Email"
                                />
                                <FormInput<LoginFormValues>
                                    errors={form.formState.errors }
                                    name="password"
                                    register={form.register}
                                    type="password"
                                    placeholder="Kata Sandi"
                                />
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">Masuk</button>
                                </div>
                                <div className="text-center mt-4">
                                    <p>Belum punya akun? <Link to="/register" className="text-primary">Daftar di sini</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;