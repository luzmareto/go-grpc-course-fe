import { set, useForm } from "react-hook-form";
import FormInput from "../FormInput/FormInput";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { getAuthClient } from "../../api/grpc/client";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth";
import { RpcError } from "@protobuf-ts/runtime-rpc";
import useGrpcApi from "../../hooks/useGrpcApi";

const changePasswordSchema = yup.object().shape({
    current_password: yup.string().required('Kata sandi saat ini wajib diisi'),
    new_password: yup.string().required('Kata sandi baru saat ini wajib diisi').min(8, 'Kata sandi baru minimal 8 karakter'),
    confirm_new_password: yup.string().required('Kata sandi baru saat ini wajib diisi').oneOf([yup.ref('new_password')], 'Konfirmasi kata sandi baru tidak sesuai'), 
})

interface ChangePasswordFromValues{
    current_password: string;
    new_password: string;
    confirm_new_password: string;
}

function ChangePasswordSection() {
    const submitApi = useGrpcApi();


    const form = useForm<ChangePasswordFromValues>({
        resolver: yupResolver(changePasswordSchema)
    });

    const submitHandler = async (values: ChangePasswordFromValues) => {
    await submitApi.callApi(getAuthClient().changePassword({
        newPassword: values.new_password,
        newPasswordConfirmation: values.confirm_new_password,
        oldPassword: values.current_password,
    }), {
        defaultError: (res) => {
            if (res.response.base?.message === 'Old password is not match') {
                    Swal.fire({
                    icon: 'error',
                    title: 'Ganti Password Gagal',
                    text: 'Kata sandi lama tidak sesuai',
                })
            }
        },
        useDefaultError: false,
    });

    Swal.fire({
        icon: 'success',
        title: 'Password Berhasil Diubah',
    })

    form.reset();    
    }
     
        

    return (
        <div className="p-4 p-lg-5 border bg-white">
            <h2 className="h3 mb-3 text-black">Ubah Kata Sandi</h2>
            <form onSubmit={form.handleSubmit(submitHandler)}>
                <FormInput<ChangePasswordFromValues>
                    errors={form.formState.errors}
                    name="current_password"
                    register={form.register}
                    type="password"
                    label="Kata Sandi Saat Ini"
                    disabled={submitApi.isLoading}
                />
                <FormInput<ChangePasswordFromValues>
                    errors={form.formState.errors}
                    name="new_password"
                    register={form.register}
                    type="password"
                    label="Kata Sandi Baru"
                    disabled={submitApi.isLoading}
                />
                <FormInput<ChangePasswordFromValues>
                    errors={form.formState.errors}
                    name="confirm_new_password"
                    register={form.register}
                    type="password"
                    label="Konfirmasi Kata Sandi Baru"
                    disabled={submitApi.isLoading}
                />
            <button type="submit" className="btn btn-primary" disabled={submitApi.isLoading}>Perbarui Kata Sandi</button>
            </form>
        </div>
    )
}

export default ChangePasswordSection;
