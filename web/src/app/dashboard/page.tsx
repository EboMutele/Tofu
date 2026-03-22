export default function UserDashboard() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">My Account</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 glass p-8 rounded-3xl border border-white/5">
          <h2 className="text-xl font-bold text-white mb-6">Subscription Status</h2>
          
          <div className="bg-brand/10 border border-brand/30 p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 rounded-full blur-[40px] -z-10" />
            
            <div>
              <div className="text-sm font-bold text-brand uppercase tracking-wider mb-2">Current Plan</div>
              <div className="text-4xl font-black text-white">Free Tier</div>
              <p className="text-gray-400 text-sm mt-3 max-w-sm">
                You are currently receiving standard daily predictions. Upgrade to unlock 6.0+ odds AI-verified accumulators.
              </p>
            </div>
            
            <a href="/pricing" className="bg-brand text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-light transition-all shadow-[0_0_20px_rgba(220,31,92,0.4)] whitespace-nowrap hover:scale-105 active:scale-95 text-center w-full sm:w-auto">
              Upgrade to Pro
            </a>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl border border-white/5">
          <h2 className="text-xl font-bold text-white mb-6">Account Details</h2>
          <div className="space-y-6">
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Email</div>
              <div className="text-white font-medium text-lg">admin@tofutips.com</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Member Since</div>
              <div className="text-white font-medium text-lg">March 2026</div>
            </div>
            <button className="w-full mt-4 glass bg-white/5 text-gray-300 hover:text-white font-bold py-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
