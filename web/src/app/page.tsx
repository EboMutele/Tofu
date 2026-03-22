import Link from 'next/link';

export default function Home() {
  const mockPicks = [
    { id: 1, home: "Arsenal", away: "Wolves", time: "17:30", league: "Premier League", pred: "HOME_WIN", odds: 1.45 },
    { id: 2, home: "Real Madrid", away: "Sevilla", time: "20:00", league: "La Liga", pred: "HOME_WIN", odds: 1.55 },
    { id: 3, home: "AC Milan", away: "Roma", time: "22:45", league: "Serie A", pred: "GG_AND_O25", odds: 1.95 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-130px)] px-6 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      
      <div className="max-w-4xl w-full text-center space-y-8 z-10 pt-10">
        <div className="inline-block glass px-4 py-1.5 rounded-full text-sm font-medium text-brand mb-4">
          ✨ The Ultimate SaaS Prediction Platform
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Win more with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">
            AI-Driven Intelligence
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Tofu Tips systematically analyzes thousands of metrics to deliver filtered, verified, high-confidence football predictions and optimized accumulator slips directly to you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link href="/picks/free" className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-brand text-white font-bold text-lg hover:scale-105 hover:bg-brand-light transition-all shadow-[0_0_30px_rgba(220,31,92,0.4)]">
            Get Free Picks
          </Link>
          <Link href="/pricing" className="w-full sm:w-auto px-8 py-3.5 rounded-lg glass text-white font-bold text-lg hover:bg-white/10 transition-all">
            Upgrade to Pro
          </Link>
        </div>

        {/* Free Picks Section */}
        <div className="w-full pt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Today's Free Picks</h2>
            <Link href="/picks/free" className="text-brand text-sm hover:underline font-semibold transition-all">View All →</Link>
          </div>
          <div className="glass rounded-2xl overflow-hidden shadow-xl text-left border border-white/5">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-gray-400 text-xs uppercase tracking-wider">
                    <th className="p-4 font-semibold">Match</th>
                    <th className="p-4 font-semibold text-center">Prediction</th>
                    <th className="p-4 font-semibold text-right">Odds</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {mockPicks.map((pick) => (
                    <tr key={pick.id} className="hover:bg-white/[0.04] transition-colors">
                      <td className="p-4">
                        <div className="font-semibold text-white">{pick.home} <span className="text-gray-500 font-normal mx-1">vs</span> {pick.away}</div>
                        <div className="text-xs text-gray-400 mt-1">{pick.time} • <span className="text-brand/80">{pick.league}</span></div>
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-block bg-brand/20 text-brand px-3 py-1 rounded-md text-xs font-bold tracking-wide">
                          {pick.pred.replace(/_/g, " ")}
                        </span>
                      </td>
                      <td className="p-4 text-right font-mono text-white font-medium">
                        {pick.odds.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-24 text-left pb-8">
          <div className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden">
            <div className="absolute w-1/2 h-1 top-0 left-0 bg-gradient-to-r from-brand to-transparent"></div>
            <h3 className="text-xl font-bold text-white mb-2">Automated Extraction</h3>
            <p className="text-gray-400 text-sm">We aggregate raw data and strictly filter it through precision algorithms to drop risky scores.</p>
          </div>
          <div className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform cursor-default border border-brand/40 shadow-[0_0_15px_rgba(220,31,92,0.1)]">
            <h3 className="text-xl font-bold text-white mb-2">Odds Validation</h3>
            <p className="text-gray-400 text-sm">Every prediction is validated against the best local bookmaker odds for maximum value.</p>
          </div>
          <div className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden">
            <div className="absolute w-1/2 h-1 top-0 right-0 bg-gradient-to-l from-brand to-transparent"></div>
            <h3 className="text-xl font-bold text-white mb-2">Claude AI Verification</h3>
            <p className="text-gray-400 text-sm">Premium accumulators are generated and verified contextually by an advanced AI engine.</p>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="w-full pt-16 pb-24" id="pricing">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Unlock premium accumulators and deeper AI analysis to maximize your win rate.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left items-stretch">
            {/* Free Tier */}
            <div className="glass p-8 rounded-3xl relative overflow-hidden border border-white/10 hover:border-white/20 transition-colors flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
              <div className="flex items-baseline gap-2 mb-8 mt-2">
                <span className="text-4xl font-black text-white">KES 0</span>
                <span className="text-gray-400 font-medium">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 text-gray-300 flex-1 text-sm">
                <li className="flex items-center gap-3"><span className="text-brand font-bold text-lg">✓</span> Daily Free Selections</li>
                <li className="flex items-center gap-3 text-gray-500"><span className="text-gray-600 font-bold text-lg">✕</span> Premium Slips</li>
                <li className="flex items-center gap-3 text-gray-500"><span className="text-gray-600 font-bold text-lg">✕</span> AI Verification</li>
              </ul>
              <div className="block w-full text-center py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm opacity-60">
                Included By Default
              </div>
            </div>

            {/* Monthly Pro */}
            <div className="glass p-8 rounded-3xl relative overflow-hidden border border-white/10 hover:border-brand/30 transition-colors flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Monthly Pro</h3>
              <div className="flex items-baseline gap-2 mb-8 mt-2">
                <span className="text-4xl font-black text-white">KES 900</span>
                <span className="text-gray-400 font-medium">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 text-gray-300 flex-1 text-sm">
                <li className="flex items-center gap-3"><span className="text-brand font-bold text-lg">✓</span> Daily Premium Slips</li>
                <li className="flex items-center gap-3"><span className="text-brand font-bold text-lg">✓</span> Claude AI Verification</li>
                <li className="flex items-center gap-3"><span className="text-brand font-bold text-lg">✓</span> Priority Support</li>
              </ul>
              <Link href="/checkout?plan=monthly" className="block w-full text-center py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm transition-all border border-white/10">
                Choose Monthly
              </Link>
            </div>
            
            {/* Yearly Pro */}
            <div className="glass p-8 rounded-3xl relative overflow-hidden border border-brand/40 shadow-[0_0_30px_rgba(220,31,92,0.15)] transform md:-translate-y-4 flex flex-col">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand to-brand-light"></div>
              <div className="absolute top-5 right-5 bg-brand/20 text-brand text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">Best Value</div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Yearly Pro</h3>
              <div className="flex items-baseline gap-2 mb-8 mt-2">
                <span className="text-4xl font-black text-brand">KES 8,500</span>
                <span className="text-gray-400 font-medium">/yr</span>
              </div>
              <ul className="space-y-4 mb-8 text-gray-300 flex-1 text-sm">
                <li className="flex items-center gap-3 font-semibold text-white"><span className="text-brand font-bold text-lg">✓</span> Save KES 2,300/yr</li>
                <li className="flex items-center gap-3"><span className="text-brand font-bold text-lg">✓</span> All Monthly Features</li>
                <li className="flex items-center gap-3"><span className="text-brand font-bold text-lg">✓</span> VIP Beta Access</li>
              </ul>
              <Link href="/checkout?plan=yearly" className="block w-full text-center py-4 rounded-xl bg-brand hover:bg-brand-light text-white font-bold text-sm transition-all shadow-lg hover:shadow-brand/20">
                Choose Yearly
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
