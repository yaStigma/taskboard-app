'use client';
import React, {useState} from 'react';
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
  const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<LoginInput>({
        resolver: yupResolver(schema),
      })
      const onSubmit:SubmitHandler<LoginInput> = (data) => console.log(data)
    return(
        <div className='w-[361px] lg:w-[434px]'>
            <h2 className='font-font-family font-bold text-4xl leading-tight text-neutral-title dark:text-neutral-white mb-[10px] lg:text-[42px]'>Welcome Back!</h2>
            <p className='font-font-family font-normal text-xs leading-tight text-neutral-body-text dark:text-neutral-white mb-[32px]'>We can assign tasks, set deadlines, and track progress effortlessly.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-[32px] flex flex-col w-[361px] lg:w-[434px]'>
      <label className='font-font-family font-bold text-base leading-tight text-neutral-title dark:text-neutral-white mb-[8px]'>Username</label>
      <input {...register("username")}  className='w-[361px] lg:w-[434px] h-[64px] pt-[24px] pb-[24px] pl-[16px] pr-[16px] rounded-[15px] border-2 border-neutral-stroke bg-neutral-background  dark:border-dark-stroke dark:bg-dark-card text-neutral-title dark:text-neutral-white'/>
      <p className='font-font-family font-normal text-xs leading-tight text-red-700 mt-[4px] mb-[4px]'>{errors.username?.message}</p>
      </div>
      <div className='mb-[32px] flex flex-col w-[361px] lg:w-[434px]'>
      <label className='font-font-family font-bold text-base leading-tight text-neutral-title dark:text-neutral-white mb-[8px]'>Password</label>
      <div className='relative'>
      <input {...register("password")} 
      type={showPassword ? "text" : "password"}
      className='w-[361px] lg:w-[434px] h-[64px] pt-[24px] pb-[24px] pl-[16px] pr-[16px] rounded-[15px] border-2 border-neutral-stroke bg-neutral-background dark:border-dark-stroke dark:bg-dark-card text-neutral-title dark:text-neutral-white'/>
      <button
              type="button"
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute right-[16px] top-[50%] transform -translate-y-[50%] text-neutral-title dark:text-neutral-white"
            >
              {showPassword ? <img src="/icons/ri_eye-close-line.svg" alt="icon eye close" /> : <img src="/icons/solar_eye-outline.svg" alt="icon eye close" />} 
            </button>
      </div>

      <p className='font-font-family font-normal text-xs leading-tight text-red-700 mt-[4px] mb-[4px]'>{errors.password?.message}</p>
</div>
<p className='font-font-family font-normal text-[16px] leading-tight text-neutral-title dark:text-neutral-white mb-[32px]'>Forgot password?</p>
     <div className='flex flex-row gap-[16px] mb-[32px] lg:mb-[142px]'>
      <button type="submit" className='w-[283px] h-[64px] lg:w-[354px] rounded-[10px] border-0 bg-neutral-title text-neutral-white dark:bg-neutral-white dark:text-dark-card text-[18px]'>Sign in</button>
      <button type="button" className='w-[64px] h-[64px]  rounded-[48px] border-2 border-neutral-stroke dark:border-dark-stroke bg-neutral-background dark:bg-dark-card text-center block'><img  className='inline' src="/icons/googleIcon.svg" alt="google login" /></button>
</div>
<p className='font-font-family font-normal text-[18px] text-center leading-tight text-neutral-title dark:text-neutral-white'>Don’t have account? Create account</p>
    </form>
        </div>
    )
    
};
