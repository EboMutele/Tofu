export default function FreePicks() {
  const mockPicks = [
    { id: 1, home: "Arsenal", away: "Wolves", time: "17:30", league: "Premier League", pred: "HOME_WIN", odds: 1.45 },
    { id: 2, home: "Real Madrid", away: "Sevilla", time: "20:00", league: "La Liga", pred: "HOME_WIN", odds: 1.55 },
    { id: 3, home: "AC Milan", away: "Roma", time: "22:45", league: "Serie A", pred: "GG_AND_O25", odds: 1.95 },
  ];

  const totalOdds = mockPicks.reduce((acc, curr) => acc * curr.odds, 1).toFixed(2);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Free Daily Picks</h1>
          <p className="text-gray-400">Our algorithm's top free selections for today.</p>
        </div>
        <div className="mt-4 md:mt-0 glass px-6 py-3 rounded-xl border-t border-brand shadow-[0_0_15px_rgba(220,31,92,0.1)]">
          <span className="text-gray-400 text-sm">Accumulator Odds</span>
          <div className="text-2xl font-black text-brand">{totalOdds}</div>
        </div>
      </div>

      <div className="glass rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10 text-gray-300 text-sm">
                <th className="p-4 font-medium">Time / League</th>
                <th className="p-4 font-medium">Match</th>
                <th className="p-4 font-medium text-center">Prediction</th>
                <th className="p-4 font-medium text-right">Odds</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mockPicks.map((pick) => (
                <tr key={pick.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4">
                    <div className="text-white font-medium">{pick.time}</div>
                    <div className="text-xs text-brand/80 font-semibold">{pick.league}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-semibold text-white">{pick.home}</div>
                    <div className="text-sm text-gray-400">vs {pick.away}</div>
                  </td>
                  <td className="p-4 text-center">
                    <span className="inline-block bg-brand/20 text-brand px-3 py-1 rounded-full text-xs font-bold tracking-wider">
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
  );
}
