import React, { useState, useEffect } from 'react';

const ITI_TRADES = [
  { id: 1, name: "Electrician", duration: "2 Years", icon: "bolt", color: "from-amber-400 to-orange-600", scope: "Industrial Wiring, Power Distribution, Equipment Maintenance." },
  { id: 2, name: "Fitter", duration: "2 Years", icon: "build", color: "from-blue-400 to-indigo-600", scope: "Machine Assembly, Structuring, Metal Fitting, Industrial Fabrication." },
  { id: 3, name: "Mechanic Diesel", duration: "1 Year", icon: "settings", color: "from-red-400 to-rose-600", scope: "Engine Overhauling, Fuel Systems, Heavy Vehicle Diagnostics." },
  { id: 4, name: "Welder", duration: "1 Year", icon: "potted_plant", color: "from-teal-400 to-emerald-600", scope: "Arc/Gas Welding, Metal Joining, Offshore/Construction projects." },
  { id: 5, name: "Wireman", duration: "2 Years", icon: "cable", color: "from-purple-400 to-fuchsia-600", scope: "Residential/Commercial Wiring, Control Panels, Power Lines." },
  { id: 6, name: "Draftsman Civil", duration: "2 Years", icon: "architecture", color: "from-sky-400 to-blue-600", scope: "Building Plans, Structural Drawings, Estimating, Site Supervision." }
];

export default function ITIPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };
    window.addEventListener('openITI', handleOpen);
    return () => {
      window.removeEventListener('openITI', handleOpen);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const close = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={close}
    >
      <div 
        className="bg-[#F8F9FA] w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-[0_32px_128px_-16px_rgba(0,0,0,0.8)] relative animate-in zoom-in slide-in-from-bottom-12 duration-500 overflow-hidden border border-white/20 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar Panel - Smaller Top on Mobile */}
        <div className="md:w-[25%] bg-[#0F1113] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-white/5">
            <div className="relative z-10 flex flex-row md:flex-col justify-between items-center md:items-start w-full">
              <button 
                onClick={close} 
                className="group flex items-center gap-2 text-white/50 hover:text-white transition-all order-2 md:order-1"
              >
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-sm">close</span>
                </div>
                <span className="font-headline font-bold uppercase tracking-widest text-[8px] hidden md:block">Close</span>
              </button>

              <div className="md:mt-10 order-1 md:order-2">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-fixed text-[8px] font-black uppercase tracking-[0.3em] mb-2">ITI 2024</span>
                <h2 className="text-xl md:text-3xl font-headline font-black text-white leading-tight tracking-tighter">
                   Trades <br className="hidden md:block" /> Explorer.
                </h2>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/5 hidden md:block">
                <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em]">Direct Admissions</p>
            </div>
        </div>

        {/* Content Panel - Clearly Visible Trades */}
        <div className="flex-1 bg-white overflow-y-auto p-6 md:p-10 custom-scrollbar">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-16">
                {ITI_TRADES.map((trade) => (
                    <div 
                        key={trade.id} 
                        className="group bg-[#F9FAFB] rounded-2xl p-5 border border-slate-100 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className={`w-10 h-10 bg-gradient-to-br ${trade.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                                <span className="material-symbols-outlined text-xl">{trade.icon}</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-base font-headline font-black text-slate-900 leading-tight mb-0.5">{trade.name}</h4>
                                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{trade.duration}</span>
                            </div>
                        </div>
                        <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-4">
                            {trade.scope}
                        </p>
                        <button 
                          onClick={() => { close(); window.dispatchEvent(new Event('openConsultation')); }}
                          className="w-full py-2.5 bg-white border border-slate-200 rounded-lg text-[9px] font-black uppercase tracking-widest text-[#0F1113] hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                        >
                            Enquire Trade
                        </button>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
