export default function AdminDashboard() {
  const pendingApprovals = [
    { id: 1, type: "PREMIUM", matches: 3, odds: 7.20, status: "PENDING_AI" },
    { id: 2, type: "FREE", matches: 2, odds: 2.85, status: "READY" }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-white mb-8 gap-2 flex items-center">
        <span className="bg-red-500 w-3 h-3 rounded-full animate-pulse"></span>
        Admin Control Panel
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass p-6 rounded-2xl border border-white/5">
          <h2 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-4">Prediction Engine</h2>
          <div className="space-y-4">
            <button className="w-full bg-brand/20 text-brand border border-brand/50 font-bold py-3 rounded-xl hover:bg-brand hover:text-white transition-all shadow-[0_0_15px_rgba(220,31,92,0.1)] focus:ring-2 focus:ring-brand/50 outline-none">
              Force Run Scraper Pipeline
            </button>
            <button className="w-full glass text-white border border-white/10 font-bold py-3 rounded-xl hover:bg-white/10 transition-all focus:ring-2 focus:ring-white/20 outline-none">
              Trigger AI Premium Validator
            </button>
          </div>
        </div>

        <div className="glass p-6 rounded-2xl border border-white/5">
          <h2 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-4">Pending Approvals</h2>
          <div className="space-y-3">
            {pendingApprovals.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row justify-between sm:items-center bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors gap-4">
                <div>
                  <div className="text-white font-bold flex items-center gap-2">
                    {item.type} Slip 
                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full">{item.status}</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{item.matches} matches | <span className="text-brand font-mono font-bold">{item.odds} odds</span></div>
                </div>
                <div className="flex gap-2">
                  <button className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-500 hover:text-white transition-colors">Approve</button>
                  <button className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-500 hover:text-white transition-colors">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
