"use client";

import { useSearchParams } from "next/navigation";
import Link from 'next/link';
import { Suspense } from "react";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "monthly";
  const price = plan === "monthly" ? "900" : "8,500";
  const duration = plan === "monthly" ? "month" : "year";

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12 px-6">
      <div className="max-w-xl w-full glass p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-[40px] -z-10" />
        
        <div className="mb-10 text-center">
          <Link href="/pricing" className="text-sm text-gray-500 hover:text-brand transition-colors mb-6 inline-block">← Back to Plans</Link>
          <h1 className="text-3xl font-black text-white tracking-tight">Complete Upgrade</h1>
          <p className="text-gray-400 mt-2 text-sm">Secure your {plan} pro subscription access.</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400 font-medium">Selected Plan</span>
              <span className="text-white font-bold">{plan === 'monthly' ? 'Monthly Pro' : 'Yearly Pro'}</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-white/5">
              <span className="text-lg font-bold text-white">Total Charge</span>
              <div className="text-right">
                <span className="text-2xl font-black text-brand">KES {price}</span>
                <span className="text-gray-500 text-xs block">/{duration}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs text-brand uppercase font-black tracking-widest ml-1">Payment Method</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 p-4 rounded-xl border border-brand bg-brand/10 text-white font-bold text-sm">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                M-PESA
              </button>
              <button className="flex items-center justify-center gap-2 p-4 rounded-xl border border-white/10 bg-white/5 text-gray-400 font-bold text-sm hover:border-white/20 transition-all">
                Card
              </button>
            </div>
            
            <div className="mt-6">
              <label className="text-[10px] text-gray-500 uppercase font-black tracking-widest ml-1 mb-2 block">M-PESA Number</label>
              <input 
                type="text" 
                placeholder="2547XXXXXXXX" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-all placeholder:text-gray-600 font-medium" 
                required
              />
            </div>
          </div>

          <button 
            type="button"
            onClick={() => { alert('In this demo, payment is simulated. Moving to Pro status!'); window.location.href = '/dashboard'; }}
            className="w-full bg-brand text-white font-black py-4 rounded-xl hover:bg-brand-light transition-all shadow-xl hover:shadow-brand/20 active:scale-95 text-sm uppercase tracking-widest mt-4"
          >
            Pay & Activate Pro
          </button>
          
          <p className="text-[10px] text-center text-gray-600 px-6">
            By clicking "Pay & Activate", you authorize Tofu Tips to process your payment for the selected {plan} plan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="flex-1 flex items-center justify-center text-white">Loading Checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
