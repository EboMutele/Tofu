export default function PremiumPicks() {
  // In a real app, we would verify the user's session and subscription tier here.
  const isPremium = true; 

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
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="glass max-w-lg mx-auto p-10 rounded-3xl border border-brand/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand to-brand-light"></div>
          <div className="text-5xl mb-6">🔒</div>
          <h2 className="text-2xl font-bold text-white mb-4">Premium Access Required</h2>
          <p className="text-gray-400 mb-8">Unlock AI-verified high-confidence accumulators with total odds of 6.0+ every single day.</p>
          <a href="/pricing" className="inline-block bg-brand text-white font-bold py-3 px-8 rounded-lg hover:scale-105 transition-transform">
            View Plans
          </a>
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
