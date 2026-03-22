import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="container mx-auto px-6 py-20 text-center relative max-w-7xl">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10 mix-blend-screen" />

      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Choose Your <span className="text-brand">Edge</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          From casual following to professional betting, select the plan that fits your strategy. 
          All premium plans include Claude AI-verified accumulator slips.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left items-stretch">
        {/* Free Plan */}
        <div className="glass p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all flex flex-col relative group">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Free Core</h3>
            <p className="text-gray-400 text-sm">Essential daily predictions for every football fan.</p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-black text-white">KES 0</span>
              <span className="text-gray-500 font-medium">/mo</span>
            </div>
            <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest font-bold">Forever Free</p>
          </div>
          
          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-brand text-xs font-bold">✓</span>
              Daily Free Selections
            </li>
            <li className="flex items-center gap-3 text-gray-300 text-sm text-opacity-50 line-through">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-gray-600 text-xs font-bold">✕</span>
              Premium Accumulators
            </li>
            <li className="flex items-center gap-3 text-gray-300 text-sm text-opacity-50 line-through">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-gray-600 text-xs font-bold">✕</span>
              Claude AI Match Analysis
            </li>
            <li className="flex items-center gap-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-brand text-xs font-bold">✓</span>
              Public Telegram Access
            </li>
          </ul>
          
          <button className="w-full py-4 rounded-xl border border-white/10 text-white font-bold text-sm bg-white/5 cursor-default opacity-60">
            Current Plan
          </button>
        </div>

        {/* Monthly Pro */}
        <div className="glass p-8 rounded-3xl border border-white/10 hover:border-brand/30 transition-all flex flex-col relative group z-10 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Monthly Pro</h3>
            <p className="text-gray-400 text-sm">Complete access to high-confidence premium picks.</p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-black text-white">KES 900</span>
              <span className="text-gray-500 font-medium">/mo</span>
            </div>
            <p className="text-xs text-brand mt-2 uppercase tracking-widest font-bold">Billed Monthly</p>
          </div>
          
          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-3 text-gray-200 text-sm font-medium">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center text-brand text-xs font-bold">✓</span>
              All Free Features
            </li>
            <li className="flex items-center gap-3 text-white text-sm font-semibold">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center text-brand text-xs font-bold">✓</span>
              Premium Accumulator Slips
            </li>
            <li className="flex items-center gap-3 text-white text-sm font-semibold">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center text-brand text-xs font-bold">✓</span>
              Claude AI Verification
            </li>
            <li className="flex items-center gap-3 text-gray-200 text-sm">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center text-brand text-xs font-bold">✓</span>
              Priority Telegram Support
            </li>
          </ul>
          
          <Link href="/checkout?plan=monthly" className="w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm text-center transition-all">
            Get Started Pro
          </Link>
        </div>

        {/* Yearly Pro */}
        <div className="glass p-8 rounded-3xl border border-brand/40 shadow-[0_0_50px_rgba(220,31,92,0.15)] flex flex-col relative transform lg:-translate-y-4 scale-105 z-20 overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand to-brand-light"></div>
          <div className="absolute top-6 right-6 bg-brand/20 text-brand text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
            Save KES 2,300
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Yearly Pro</h3>
            <p className="text-gray-400 text-sm">Our best value for long-term consistency.</p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-black text-brand line-glow">KES 8,500</span>
              <span className="text-gray-400 font-medium">/yr</span>
            </div>
            <p className="text-xs text-white/50 mt-2 uppercase tracking-widest font-bold italic">Equivalent to KES 708/mo</p>
          </div>
          
          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-3 text-white text-sm font-bold">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand flex items-center justify-center text-white text-xs font-bold shadow-[0_0_10px_rgba(220,31,92,0.5)]">✓</span>
              Everything in Monthly Pro
            </li>
            <li className="flex items-center gap-3 text-white text-sm font-semibold">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand flex items-center justify-center text-white text-xs font-bold shadow-[0_0_10px_rgba(220,31,92,0.5)]">✓</span>
              Reduced Yearly Cost
            </li>
            <li className="flex items-center gap-3 text-white text-sm font-semibold">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand flex items-center justify-center text-white text-xs font-bold shadow-[0_0_10px_rgba(220,31,92,0.5)]">✓</span>
              VIP Beta Access
            </li>
          </ul>
          
          <Link href="/checkout?plan=yearly" className="w-full py-4 rounded-xl bg-brand hover:bg-brand-light text-white font-extrabold text-sm text-center transition-all shadow-xl hover:shadow-brand/30">
            Secure Yearly Access
          </Link>
        </div>
      </div>

      <div className="mt-20 glass p-8 rounded-3xl max-w-4xl mx-auto border border-white/5">
        <h4 className="text-white font-bold mb-4">Frequently Asked Questions</h4>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <p className="text-brand text-sm font-bold mb-1">What is Claude AI Verification?</p>
            <p className="text-gray-400 text-xs leading-relaxed">Our system uses Gemini-based models and rule-engines to find games, then filters them through Claude 3.5 Sonnet to verify the narrative, injuries, and tactical context before generating slips.</p>
          </div>
          <div>
            <p className="text-brand text-sm font-bold mb-1">How do I pay in KES?</p>
            <p className="text-gray-400 text-xs leading-relaxed">We support local payment methods including M-PESA and Card payments. Select your plan to proceed to the secure checkout.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

