export default function PricingPage() {
  return (
    <div className="container mx-auto px-6 py-20 text-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[120px] -z-10 mix-blend-screen" />

      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Choose Your Winning Strategy</h1>
      <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
        Unlock premium AI insights and higher accumulator odds to maximize your long-term betting ROI.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
        {/* Free Plan */}
        <div className="glass p-8 rounded-3xl border border-white/10 hover:border-brand/30 transition-colors flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
          <p className="text-gray-400 mb-6 min-h-[48px]">Daily selections from the rule-based engine.</p>
          <div className="text-5xl font-black text-white mb-8">$0<span className="text-lg text-gray-500 font-normal">/mo</span></div>
          
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-gray-300"><span className="text-brand font-bold">✓</span> 1 Accumulator Slip Daily</li>
            <li className="flex items-center gap-3 text-gray-300"><span className="text-brand font-bold">✓</span> ~3.0 Total Odds Target</li>
            <li className="flex items-center gap-3 text-gray-300"><span className="text-brand font-bold">✓</span> Community Telegram Access</li>
          </ul>
          
          <button className="w-full glass bg-white/5 text-white font-bold py-3 rounded-xl hover:bg-white/10 transition-colors">
            Current Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="glass p-8 rounded-3xl border border-brand shadow-[0_0_30px_rgba(220,31,92,0.15)] flex flex-col relative transform md:-translate-y-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase">
            Most Popular
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
          <p className="text-gray-400 mb-6 min-h-[48px]">Claude AI verified selections for maximum ROI.</p>
          <div className="text-5xl font-black text-brand mb-8">$29<span className="text-lg text-gray-500 font-normal">/mo</span></div>
          
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-gray-300"><span className="text-brand font-bold">✓</span> 2 Premium Accumulators Daily</li>
            <li className="flex items-center gap-3 text-gray-300"><span className="text-brand font-bold">✓</span> 6.0+ Total Odds Target</li>
            <li className="flex items-center gap-3 text-white font-medium"><span className="text-brand font-bold">✓</span> Claude AI Match Analysis Notes</li>
            <li className="flex items-center gap-3 text-gray-300"><span className="text-brand font-bold">✓</span> Premium Telegram Channel</li>
            <li className="flex items-center gap-3 text-gray-300"><span className="text-brand font-bold">✓</span> High Confidence Focus</li>
          </ul>
          
          <button className="w-full bg-brand text-white font-bold py-3 rounded-xl hover:bg-brand-light transition-colors hover:shadow-[0_0_20px_rgba(220,31,92,0.4)]">
            Upgrade to Premium
          </button>
        </div>

        {/* VIP Plan */}
        <div className="glass p-8 rounded-3xl border border-white/10 hover:border-brand/30 transition-colors flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-2">VIP</h3>
          <p className="text-gray-400 mb-6 min-h-[48px]">For serious syndicates and massive rollovers.</p>
          <div className="text-5xl font-black text-white mb-8">$99<span className="text-lg text-gray-500 font-normal">/mo</span></div>
          
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-gray-300"><span className="text-brand font-bold">✓</span> Everything in Premium</li>
            <li className="flex items-center gap-3 text-gray-300"><span className="text-brand font-bold">✓</span> Over/Under 2.5 specialized slips</li>
            <li className="flex items-center gap-3 text-gray-300"><span className="text-brand font-bold">✓</span> Expected Value (EV) calculation</li>
            <li className="flex items-center gap-3 text-gray-300"><span className="text-brand font-bold">✓</span> 1-on-1 Support Integration</li>
          </ul>
          
          <button className="w-full glass bg-white/5 text-white font-bold py-3 rounded-xl hover:bg-white/10 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
