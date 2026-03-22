import Link from 'next/link';

export default function Home() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-20 text-left pb-16">
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
      </div>
    </div>
  );
}
