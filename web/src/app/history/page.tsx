export default function PredictionHistory() {
  const mockHistory = [
    { id: 1, date: "2026-03-21", match: "Arsenal vs Chelsea", pred: "HOME_WIN", odds: 1.85, result: "2-0", status: "WIN" },
    { id: 2, date: "2026-03-21", match: "Real Madrid vs Barca", pred: "GG_AND_O25", odds: 2.10, result: "3-1", status: "WIN" },
    { id: 3, date: "2026-03-20", match: "Juventus vs Milan", pred: "HOME_WIN", odds: 2.20, result: "1-1", status: "LOSS" },
    { id: 4, date: "2026-03-20", match: "PSG vs Lyon", pred: "HOME_WIN", odds: 1.50, result: "3-0", status: "WIN" },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Prediction History</h1>
          <p className="text-gray-400">Track our algorithm's historical accuracy and ROI.</p>
        </div>
        
        <div className="flex gap-4">
          <div className="glass px-6 py-3 rounded-xl border-t border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.1)] text-center">
            <span className="text-gray-400 text-xs uppercase tracking-wider">Win Rate</span>
            <div className="text-2xl font-black text-green-400">75%</div>
          </div>
          <div className="glass px-6 py-3 rounded-xl border-t border-brand shadow-[0_0_15px_rgba(220,31,92,0.1)] text-center">
            <span className="text-gray-400 text-xs uppercase tracking-wider">Total ROI</span>
            <div className="text-2xl font-black text-brand">+24%</div>
          </div>
        </div>
      </div>

      <div className="glass rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10 text-gray-300 text-sm">
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Match</th>
                <th className="p-4 font-medium text-center">Prediction</th>
                <th className="p-4 font-medium text-center">Odds</th>
                <th className="p-4 font-medium text-center">Result</th>
                <th className="p-4 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mockHistory.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 text-gray-400">{item.date}</td>
                  <td className="p-4 font-semibold text-white">{item.match}</td>
                  <td className="p-4 text-center">
                    <span className="text-xs font-bold text-gray-300">{item.pred.replace(/_/g, " ")}</span>
                  </td>
                  <td className="p-4 text-center font-mono text-gray-300">{item.odds.toFixed(2)}</td>
                  <td className="p-4 text-center font-mono font-bold text-white">{item.result}</td>
                  <td className="p-4 text-right">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider ${
                      item.status === 'WIN' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {item.status}
                    </span>
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
