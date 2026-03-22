import Link from 'next/link';

export default function PremiumPicks() {
  // In a real app, we would verify the user's session and subscription tier here.
  const isPremium = false; 

  const mockSlips = [
    {
      id: "SLIP-A-102",
      totalOdds: 6.85,
      confidence: "94%",
      aiNotes: "Strong home advantage for main selections. Goals expected in Serie A matchup.",
      picks: [
        { id: 1, home: "Bayern Munich", away: "Dortmund", time: "19:30", league: "Bundesliga", pred: "HOME_WIN", odds: 1.65 },
        { id: 2, home: "Liverpool", away: "Chelsea", time: "21:00", league: "Premier League", pred: "HOME_WIN", odds: 1.95 },
        { id: 3, home: "Napoli", away: "Juventus", time: "22:45", league: "Serie A", pred: "GG_AND_O25", odds: 2.15 },
      ]
    },
    {
      id: "SLIP-B-103",
      totalOdds: 7.10,
      confidence: "89%",
      aiNotes: "Capitalising on weak defensive records in La Liga fixtures.",
      picks: [
        { id: 4, home: "Barcelona", away: "Betis", time: "20:00", league: "La Liga", pred: "HOME_WIN", odds: 1.50 },
        { id: 5, home: "PSG", away: "Marseille", time: "22:00", league: "Ligue 1", pred: "HOME_WIN", odds: 1.75 },
        { id: 6, home: "Inter", away: "Lazio", time: "20:45", league: "Serie A", pred: "GG_AND_O25", odds: 2.70 },
      ]
    }
  ];

  if (!isPremium) {
    return (
      <div className="container mx-auto px-6 py-20 min-h-[calc(100vh-160px)] flex items-center justify-center relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[100px] -z-10 mix-blend-screen opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen opacity-30" />

        <div className="max-w-3xl w-full glass p-10 rounded-[2.5rem] border border-brand/20 shadow-2xl relative z-10 backdrop-blur-3xl text-center">
          <div className="inline-block glass px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] text-brand border border-brand/10 uppercase mb-8">
            Premium Access
          </div>
          
          <div className="w-20 h-20 rounded-2xl bg-brand/10 mx-auto flex items-center justify-center mb-10 border border-brand/30 shadow-[0_0_30px_rgba(220,31,92,0.15)] transform -rotate-12">
            <span className="text-4xl">💎</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Unlock High-Value <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">AI Accumulators</span>
          </h2>
          
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
            Every day, our AI engine scrutinizes over 2,000 matches to curate two exclusive slips with total odds exceeding 6.0+.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left mb-12 px-2">
            <div className="glass p-5 rounded-2xl border border-white/5 hover:border-brand/30 transition-all group">
              <h3 className="text-brand font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand group-hover:animate-pulse"></span>
                Strategic Mastery
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                6.0+ average total odds target, focused on ROI and strategic long-term consistency.
              </p>
            </div>
            <div className="glass p-5 rounded-2xl border border-white/5 hover:border-brand/30 transition-all group">
              <h3 className="text-brand font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand group-hover:animate-pulse"></span>
                Claude AI Verdict
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Advanced AI tactical verification notes for every selected match in the slip.
              </p>
            </div>
            <div className="glass p-5 rounded-2xl border border-white/5 hover:border-brand/30 transition-all group">
              <h3 className="text-brand font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand group-hover:animate-pulse"></span>
                VIP Network
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Direct access to the Premium VIP Telegram channel with instant slip notifications.
              </p>
            </div>
            <div className="glass p-5 rounded-2xl border border-white/5 hover:border-brand/30 transition-all group">
              <h3 className="text-brand font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand group-hover:animate-pulse"></span>
                Higher Confidence
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Minimum confidence threshold of 88% required for any premium slip generation.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/pricing" className="w-full sm:w-auto bg-brand text-white font-black px-12 py-4 rounded-xl hover:bg-brand-light transition-all shadow-xl hover:shadow-brand/20 active:scale-95 text-sm uppercase tracking-widest">
              Upgrade to Premium
            </Link>
            <Link href="/picks/free" className="w-full sm:w-auto text-gray-400 hover:text-white font-bold py-4 px-8 text-sm transition-colors decoration-brand/30 decoration-2 underline-offset-8 hover:underline">
              View Free Picks
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          Premium Slips <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text text-sm uppercase tracking-widest font-black">Pro</span>
        </h1>
        <p className="text-gray-400">Claude AI verified high-value accumulators.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {mockSlips.map((slip) => (
          <div key={slip.id} className="glass rounded-2xl overflow-hidden border border-brand/20 shadow-[0_0_20px_rgba(220,31,92,0.05)] relative">
            <div className="absolute top-0 right-0 p-4">
              <span className="text-xs font-bold bg-white/10 text-white px-3 py-1 rounded-full">AI Confidence: {slip.confidence}</span>
            </div>
            
            <div className="p-6 border-b border-white/5 bg-white/[0.02]">
              <div className="text-sm text-gray-400 mb-1">Slip ID: {slip.id}</div>
              <div className="text-4xl font-black text-brand mb-4">{slip.totalOdds.toFixed(2)} Odds</div>
              <p className="text-sm text-gray-300 italic flex items-start gap-2">
                <span className="text-brand text-lg leading-none">"</span>
                {slip.aiNotes}
              </p>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {slip.picks.map((pick) => (
                  <div key={pick.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div>
                      <div className="font-semibold text-white">{pick.home} vs {pick.away}</div>
                      <div className="text-xs text-brand/80">{pick.league} • {pick.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-gray-400 tracking-wider mb-1">{pick.pred.replace(/_/g, " ")}</div>
                      <div className="font-mono text-white">{pick.odds.toFixed(2)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
