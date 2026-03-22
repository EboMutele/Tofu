"use client";

import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  // Mock Data States for reactivity
  const [userList, setUserList] = useState([
    { id: 1, email: "kilta@example.com", plan: "YEARLY_PRO", joined: "2024-03-22", status: "ACTIVE", verified: true, spent: "8,500" },
    { id: 2, email: "tony@tofutips.com", plan: "MONTHLY_PRO", joined: "2024-03-21", status: "ACTIVE", verified: true, spent: "900" },
    { id: 3, email: "newuser@gmail.com", plan: "FREE", joined: "2024-03-23", status: "LIMIT_REACHED", verified: false, spent: "0" },
  ]);

  const [paymentList, setPaymentList] = useState([
    { id: "TXN-8821", user: "kilta@example.com", amount: "8,500", date: "23 Mar, 11:22", method: "M-PESA", status: "SUCCESS" },
    { id: "TXN-8820", user: "tony@tofutips.com", amount: "900", date: "23 Mar, 10:45", method: "M-PESA", status: "SUCCESS" },
    { id: "TXN-8819", user: "refund@test.com", amount: "900", date: "22 Mar, 15:30", method: "CARD", status: "REFUNDED" },
  ]);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      window.location.href = "/admin/login";
    } else {
      setAuthorized(true);
      setLoading(false);
    }
  }, []);

  const handleTransactionAction = (txnId: string, action: 'REFUND' | 'FLAG') => {
    const txn = paymentList.find(p => p.id === txnId);
    if (!txn) return;

    // 1. Update Transaction Status
    setPaymentList(prev => prev.map(p => 
      p.id === txnId ? { ...p, status: action === 'REFUND' ? 'REFUNDED' : 'FLAGGED' } : p
    ));

    // 2. Demote and Flag User
    setUserList(prev => prev.map(u => 
      u.email === txn.user ? { ...u, plan: 'FREE', status: 'FLAGGED_FRAUD' } : u
    ));

    alert(`Action Successful: Transaction ${txnId} ${action === 'REFUND' ? 'Refunded' : 'Flagged'}. User ${txn.user} has been demoted to FREE tier and account flagged.`);
  };

  if (loading) return <div className="flex-1 flex items-center justify-center text-white">Verifying Authorization...</div>;
  if (!authorized) return null;

  const stats = [
    { label: "Active Subs", value: "1,248", change: "+14.2%", color: "text-green-400" },
    { label: "Daily Revenue", value: "KES 42.5K", change: "+8.1%", color: "text-brand" },
    { label: "Churn Rate", value: "2.1%", change: "-0.5%", color: "text-blue-400" },
  ];

  const handleUserAction = (userId: number, action: 'GRANT_PRO' | 'SUSPEND' | 'DELETE' | 'RESET_PASS') => {
    switch (action) {
      case 'GRANT_PRO':
        setUserList(prev => prev.map(u => u.id === userId ? { ...u, plan: 'MONTHLY_PRO', spent: '900' } : u));
        alert("Administrative Privilege Granted: User upgraded to PRO.");
        break;
      case 'SUSPEND':
        setUserList(prev => prev.map(u => u.id === userId ? { ...u, status: 'SUSPENDED' } : u));
        alert("Account Restriction Applied: User has been suspended.");
        break;
      case 'DELETE':
        if (confirm("CRITICAL: Permanent deletion of user record. Proceed?")) {
          setUserList(prev => prev.filter(u => u.id !== userId));
        }
        break;
      case 'RESET_PASS':
        alert("Security: Password reset link has been dispatched to the user's registered email.");
        break;
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-8 mb-4">
              <div>
                <h2 className="text-2xl font-black text-white">Users & Accounts</h2>
                <p className="text-gray-500 text-sm">Managing active and flagged core accounts.</p>
              </div>
            </div>
            <div className="glass rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
              <table className="w-full text-left">
                <thead className="bg-white/[0.03] text-gray-500 text-[10px] uppercase tracking-[0.2em] font-black">
                  <tr>
                    <th className="p-6">User Context</th>
                    <th className="p-6">Subscription</th>
                    <th className="p-6">Status / Auth</th>
                    <th className="p-6">LTV (KES)</th>
                    <th className="p-6 text-right">Admin Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.03] text-sm">
                  {userList.map(u => (
                    <tr key={u.id} className="hover:bg-white/[0.01] transition-colors group">
                      <td className="p-6 text-white font-bold tracking-tight">{u.email}</td>
                      <td className="p-6">
                        <span className={`px-2.5 py-1 rounded-full text-[9px] font-black tracking-widest border ${
                          u.plan === 'YEARLY_PRO' ? 'bg-brand/10 text-brand border-brand/20' : 
                          u.plan === 'MONTHLY_PRO' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
                          u.plan === 'FREE' ? 'bg-white/5 text-gray-400 border-white/10' :
                          'bg-red-500/10 text-red-400 border-red-500/20'
                        }`}>
                          {u.plan}
                        </span>
                      </td>
                      <td className="p-6">
                        <span className={`${u.status === 'ACTIVE' ? 'text-green-400' : 'text-red-500'} font-bold flex items-center gap-1.5`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${u.status === 'ACTIVE' ? 'bg-green-400' : 'bg-red-500 animate-pulse'}`}></span>
                          {u.status}
                        </span>
                      </td>
                      <td className="p-6 text-white font-mono font-bold tracking-tighter">{u.spent}</td>
                      <td className="p-6 text-right">
                        <div className="flex gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                          {u.plan === 'FREE' && (
                            <button onClick={() => handleUserAction(u.id, 'GRANT_PRO')} className="text-[10px] font-black uppercase text-brand border border-brand/20 px-3 py-1.5 rounded-lg hover:bg-brand hover:text-white transition-all">Grant PRO</button>
                          )}
                          <button onClick={() => handleUserAction(u.id, 'RESET_PASS')} className="text-[10px] font-black uppercase text-blue-400 border border-blue-500/20 px-3 py-1.5 rounded-lg hover:bg-blue-500 hover:text-white transition-all">Reset Pass</button>
                          <button onClick={() => handleUserAction(u.id, 'SUSPEND')} className="text-[10px] font-black uppercase text-yellow-500 border border-yellow-500/20 px-3 py-1.5 rounded-lg hover:bg-yellow-500 hover:text-white transition-all">Suspend</button>
                          <button onClick={() => handleUserAction(u.id, 'DELETE')} className="text-[10px] font-black uppercase text-red-500 border border-red-500/20 px-3 py-1.5 rounded-lg hover:bg-red-500 hover:text-white transition-all">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case "transactions":
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <h2 className="text-2xl font-black text-white flex items-center gap-3">
              Transactions Module
              <span className="text-xs bg-brand/20 text-brand px-3 py-1 rounded-full font-black uppercase tracking-widest">Fraud Prevention Active</span>
            </h2>
            
            <div className="glass rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
              <div className="p-6 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Global Transaction Feed</span>
              </div>
              <table className="w-full text-left">
                <thead className="bg-white/[0.02] text-gray-500 text-[10px] uppercase tracking-widest">
                  <tr>
                    <th className="p-6">TXN Details</th>
                    <th className="p-6">Amount</th>
                    <th className="p-6">Status</th>
                    <th className="p-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.03] text-sm text-gray-300">
                  {paymentList.map(p => (
                    <tr key={p.id} className="group">
                      <td className="p-6">
                        <div className="font-mono text-white text-xs">{p.id}</div>
                        <div className="text-[10px] text-gray-500 mt-0.5">{p.user} • {p.date}</div>
                      </td>
                      <td className="p-6 font-bold text-white">KES {p.amount}</td>
                      <td className="p-6">
                        <span className={`px-2.5 py-1 rounded-full text-[9px] font-black border ${
                          p.status === 'REFUNDED' ? 'bg-red-500/20 text-red-400 border-red-500/30' : 
                          p.status === 'FLAGGED' ? 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30' :
                          'bg-green-500/20 text-green-400 border-green-500/30'}`}>
                          {p.status}
                        </span>
                      </td>
                      <td className="p-6 text-right">
                        {p.status === 'SUCCESS' && (
                          <div className="flex gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                            <button 
                              onClick={() => handleTransactionAction(p.id, 'REFUND')}
                              className="bg-red-500/10 text-red-500 border border-red-500/20 px-3 py-1.5 rounded-lg text-[10px] font-black hover:bg-red-500 hover:text-white transition-all transform active:scale-95 uppercase tracking-tighter"
                            >
                              Refund & Demote
                            </button>
                            <button 
                              onClick={() => handleTransactionAction(p.id, 'FLAG')}
                              className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-3 py-1.5 rounded-lg text-[10px] font-black hover:bg-yellow-500 hover:text-white transition-all transform active:scale-95 uppercase tracking-tighter"
                            >
                              Flag Fraud
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case "input":
        return (
          <div className="max-w-3xl animate-in zoom-in-95 duration-500">
            <h2 className="text-2xl font-black text-white mb-8">Internal Prediction Engine</h2>
            <div className="glass p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black ml-1">Home Selection</label>
                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-brand transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black ml-1">Away Selection</label>
                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-brand transition-all font-medium" />
                  </div>
                </div>
                <button className="w-full bg-brand text-white font-black py-5 rounded-2xl shadow-2xl shadow-brand/30 uppercase tracking-[0.2em] mt-6 hover:bg-brand-light transition-all">
                  Deploy Selection
                </button>
              </form>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-12 animate-in fade-in duration-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map(s => (
                <div key={s.label} className="glass p-10 rounded-[2.5rem] border border-white/5 relative group cursor-pointer hover:border-brand/40 transition-all hover:translate-y-[-4px] duration-500">
                  <div className="text-gray-500 text-[10px] uppercase font-black tracking-[0.2em] mb-4">{s.label}</div>
                  <div className="text-4xl font-black text-white tracking-tighter">{s.value}</div>
                  <div className={`mt-4 text-[11px] font-bold ${s.color} bg-white/5 inline-block px-3 py-1 rounded-full`}>{s.change}</div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    window.location.href = "/admin/login";
  };

  return (
    <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-16 min-h-[90vh]">
      <aside className="w-full lg:w-72 space-y-4 shrink-0 px-2">
        <div className="mb-12 cursor-default group">
            <h1 className="text-3xl font-black text-white tracking-tighter italic">TOFU <span className="text-brand group-hover:animate-pulse">CORE</span></h1>
            <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.4em] ml-1 mt-1">Command & Control</p>
        </div>
        
        <div className="space-y-1">
            <button onClick={() => setActiveTab('overview')} className={`w-full text-left px-6 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 ${activeTab === 'overview' ? 'bg-brand text-white shadow-2xl shadow-brand/40' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
              Execution Overview
            </button>
            <button onClick={() => setActiveTab('users')} className={`w-full text-left px-6 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 ${activeTab === 'users' ? 'bg-brand text-white shadow-2xl shadow-brand/40' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
              Authorized Users
            </button>
            <button onClick={() => setActiveTab('transactions')} className={`w-full text-left px-6 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 ${activeTab === 'transactions' ? 'bg-brand text-white shadow-2xl shadow-brand/40' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
              Transactions Module
            </button>
            <button onClick={() => setActiveTab('input')} className={`w-full text-left px-6 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 ${activeTab === 'input' ? 'bg-brand text-white shadow-2xl shadow-brand/40' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
              Neural Manual Entry
            </button>
        </div>
        
        <div className="pt-12 mt-12 border-t border-white/5">
            <button onClick={handleLogout} className="w-full text-center py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all shadow-xl shadow-red-900/10 active:scale-95">
                Sever Administrative Link
            </button>
        </div>
      </aside>

      <main className="flex-1 min-w-0 pb-12 overflow-x-hidden">
        {renderContent()}
      </main>
    </div>
  );
}
