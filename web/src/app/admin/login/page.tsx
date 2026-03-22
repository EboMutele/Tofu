"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") { // Simulated admin credential
      localStorage.setItem("isAdmin", "true");
      window.location.href = "/admin";
    } else {
      setError("Invalid administrative credentials. Access denied.");
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-160px)] px-6 bg-[#050505] relative overflow-hidden">
      {/* Security Shield Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-md w-full glass p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative z-10 backdrop-blur-3xl text-center">
        <div className="w-20 h-20 rounded-full bg-red-500/10 mx-auto flex items-center justify-center mb-8 border border-red-500/30">
          <span className="text-3xl">🛡️</span>
        </div>
        
        <h1 className="text-3xl font-black text-white mb-2 tracking-tighter">SECURE ACCESS</h1>
        <p className="text-gray-500 text-sm mb-10">Administrative Control Panel Authorization</p>

        <form onSubmit={handleLogin} className="space-y-6 text-left">
          <div className="space-y-2">
            <label className="text-[10px] text-red-400 uppercase font-black tracking-widest ml-1">Admin Security Key</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all font-mono" 
              required
            />
            {error && <p className="text-[10px] text-red-500 mt-2 font-bold ml-1">⚠️ {error}</p>}
          </div>

          <button 
            type="submit"
            className="w-full bg-red-600 text-white font-black py-4 rounded-xl hover:bg-red-500 transition-all shadow-xl shadow-red-900/20 uppercase tracking-widest"
          >
            Authorize Access
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-white/5">
          <p className="text-[10px] text-gray-600 leading-relaxed uppercase tracking-tighter cursor-default">
            Unauthorized access to this panel is strictly prohibited and monitored.
          </p>
        </div>
      </div>
    </div>
  );
}
