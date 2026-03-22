"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Link from 'next/link';

function AuthForm() {
  const searchParams = useSearchParams();
  const [isLogin, setIsLogin] = useState(false);
  const [isVerifyPending, setIsVerifyPending] = useState(false);

  useEffect(() => {
    const mode = searchParams.get("mode");
    if (mode === "login") setIsLogin(true);
    if (mode === "signup") setIsLogin(false);
  }, [searchParams]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLogin) {
      // Simulate signup and show verification notice
      setIsVerifyPending(true);
    } else {
      // Simulate login
      window.location.href = '/dashboard';
    }
  };

  if (isVerifyPending) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-160px)] px-6 relative overflow-hidden bg-[#070707]">
        <div className="max-w-md w-full glass p-10 rounded-[2.5rem] border border-brand/20 text-center relative z-10 backdrop-blur-3xl animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 rounded-full bg-brand/10 mx-auto flex items-center justify-center mb-6 border border-brand/30">
            <span className="text-4xl">📧</span>
          </div>
          <h2 className="text-2xl font-black text-white mb-4 tracking-tight">Verify Your Email</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            We've sent a verification link to your email address. Please click the link to activate your account and access your <span className="text-white font-bold tracking-tight">Free Core</span> predictions.
          </p>
          <div className="space-y-4">
            <button 
              onClick={() => window.location.href = '/dashboard'}
              className="w-full bg-brand text-white font-black py-4 rounded-2xl hover:bg-brand-light transition-all shadow-xl"
            >
              I've Verified My Email
            </button>
            <button 
              onClick={() => setIsVerifyPending(false)}
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Didn't receive it? Resend Link
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-160px)] px-6 relative overflow-hidden bg-[#070707]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[100px] -z-10 mix-blend-screen opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] -z-10 mix-blend-screen opacity-20" />

      <div className="max-w-md w-full glass p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative z-10 backdrop-blur-3xl">
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-brand mx-auto flex items-center justify-center font-black text-2xl text-white shadow-2xl mb-6 transform -rotate-6 hover:rotate-0 transition-all duration-500 cursor-default">
            T
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight leading-tight">
            {isLogin ? "Welcome Back!" : "Join the Elite"}
          </h1>
          <p className="text-gray-400 mt-2 text-sm font-medium">
            {isLogin ? "Enter your details to access your dashboard." : "Sign up for daily AI-driven football predictions."}
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-[10px] text-brand uppercase font-black tracking-widest ml-1">Email Address</label>
            <input 
              type="email" 
              placeholder="name@email.com" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-all placeholder:text-gray-600 font-medium" 
              required
            />
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] text-brand uppercase font-black tracking-widest ml-1">Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-all placeholder:text-gray-600 font-medium" 
                required
              />
            </div>
            
            {!isLogin && (
              <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                <label className="text-[10px] text-brand uppercase font-black tracking-widest ml-1">Repeat Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-all placeholder:text-gray-600 font-medium" 
                  required
                />
              </div>
            )}
          </div>

          <button 
            type="submit"
            className="w-full bg-brand text-white font-black py-4 rounded-2xl hover:bg-brand-light transition-all shadow-xl hover:shadow-brand/20 active:scale-95 text-sm uppercase tracking-widest"
          >
            {isLogin ? "Log In Now" : "Create Account"}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-xs font-medium">
            {isLogin ? "New to Tofu Tips?" : "Already Have an Account?"}
          </p>
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="mt-2 text-white font-bold text-sm hover:text-brand transition-colors decoration-brand decoration-2 underline-offset-4 hover:underline"
          >
            {isLogin ? "Create an Account Instead" : "Log In to Your Account"}
          </button>
        </div>

        {!isLogin && (
          <div className="mt-8 text-center px-4">
            <p className="text-[10px] text-white/20 leading-relaxed">
              By signing up, you agree to our Terms of Service. New users receive the <span className="text-brand/50 font-bold">FREE CORE</span> package by default.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={<div className="flex-1 flex items-center justify-center text-white">Loading Auth...</div>}>
      <AuthForm />
    </Suspense>
  );
}

