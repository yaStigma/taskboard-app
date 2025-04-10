'use client';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

interface LoginInput {
    username: string
    password: string
  }
const schema = yup
  .object({
    username: yup.string().min(2, "Username too short").max(15, "Username too long")
    .required("Username is required"),
    password: yup.string().min(3, "Password too Short!").max(50, "Password too Long!").required("Pleace, enter your password"),
  })
  .required()

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<LoginInput>({
        resolver: yupResolver(schema),
      })
      const onSubmit:SubmitHandler<LoginInput> = (data) => console.log(data)
    return(
        <div>
            <h2 className='font-font-family font-bold text-4xl leading-tight text-neutral-title dark:text-neutral-white mb-[10px] lg:text-[42px]'>Welcome Back!</h2>
            <p className='font-font-family font-normal text-xs leading-tight text-neutral-body-text dark:text-neutral-white mb-[32px]'>We can assign tasks, set deadlines, and track progress effortlessly.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-[32px] flex flex-col w-[361px]'>
      <label className='font-font-family font-bold text-base leading-tight text-neutral-title dark:text-neutral-white mb-[8px]'>Username</label>
      <input {...register("username")}  className='w-[361px] h-[64px] pt-[24px] pb-[24px] pl-[16px] pr-[16px] rounded-[15px] border-2 border-neutral-stroke bg-neutral-background'/>
      <p className='font-font-family font-normal text-xs leading-tight text-red-700 mb-[4px]'>{errors.username?.message}</p>
      </div>
      <div className='mb-[32px] flex flex-col w-[361px]'>
      <label className='font-font-family font-bold text-base leading-tight text-neutral-title dark:text-neutral-white mb-[8px]'>Password</label>
      <input {...register("password")} className='w-[361px] h-[64px] pt-[24px] pb-[24px] pl-[16px] pr-[16px] rounded-[15px] border-2 border-neutral-stroke bg-neutral-background'/>
      <p className='font-font-family font-normal text-xs leading-tight text-red-700 mb-[4px]'>{errors.password?.message}</p>
</div>
<p className='font-font-family font-normal text-[16px] leading-tight text-neutral-title dark:text-neutral-white mb-[32px]'>Forgot password?</p>
     <div className='flex flex-row gap-[16px] mb-[32px]'>
      <button type="submit" className='w-[283px] h-[64px]  rounded-[10px] border-0 bg-neutral-title text-neutral-white text-[18px]'>Sign in</button>
      <button type="button" className='w-[64px] h-[64px]  rounded-[48px] border-2 border-neutral-stroke bg-neutral-background text-center block'><img  className='inline' src="/icons/googleIcon.svg" alt="google login" /></button>
</div>
    </form>
        </div>
    )
    
};
