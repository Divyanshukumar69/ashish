import {  useState, useEffect  } from 'react';

export default function AssistancePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };
    window.addEventListener('openAssistance', handleOpen);
    return () => {
      window.removeEventListener('openAssistance', handleOpen);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const close = () => {
    setIsOpen(false);
    setIsSuccess(false);
    document.body.style.overflow = 'unset';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/divyanshucmd@gmail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `Admission Portal Website - Expert Help Requested by ${data.name}`,
          ...data
        })
      });
      if (response.ok) setIsSuccess(true);
    } catch (err) {
      alert("Error sending request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[3000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={close}
    >
      <div 
        className="bg-white w-full max-w-2xl rounded-[2rem] shadow-[0_32px_128px_-16px_rgba(0,0,0,0.8)] relative animate-in zoom-in slide-in-from-bottom-12 duration-500 overflow-hidden border border-white/20 p-6 md:p-10 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={close}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-all group active:scale-95 border border-slate-100"
        >
           <span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-sm">close</span>
        </button>

        {isSuccess ? (
          <div className="space-y-8 py-8 animate-in fade-in zoom-in duration-500">
             <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto shadow-xl group">
                <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">recommend</span>
             </div>
             <p className="text-on-surface-variant text-sm font-medium leading-relaxed max-w-sm mx-auto">
                Inquiry received. We'll contact you within 2-4 hours.
             </p>
             <button onClick={close} className="px-8 py-3 bg-slate-900 text-white rounded-xl font-black uppercase tracking-widest text-[10px]">Close</button>
          </div>
        ) : (
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-3">
               <span className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-[8px] font-black uppercase tracking-[0.3em] mb-2">Support Advice</span>
               <h2 className="text-3xl font-headline font-black text-primary leading-tight tracking-tighter">
                  Need Professional Support?
               </h2>
               <p className="text-on-surface-variant text-sm font-medium leading-relaxed max-w-sm mx-auto">
                  Provide your mobile below to bridge the gap to your dream campus.
               </p>
            </div>

            <div className="space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1">Your Full Name</label>
                    <input name="name" required className="w-full bg-[#F8FAFC] border-2 border-slate-50 focus:border-primary focus:bg-white focus:ring-0 transition-all p-4 rounded-xl font-bold text-slate-900" placeholder="Rahul Sharma" />
                  </div>
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1">Contact Number</label>
                    <input name="phone" type="tel" required className="w-full bg-[#F8FAFC] border-2 border-slate-50 focus:border-primary focus:bg-white focus:ring-0 transition-all p-4 rounded-xl font-bold text-slate-900" placeholder="9798263469" />
                  </div>
               </div>
               <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1">Specific Query</label>
                  <textarea name="query" className="w-full bg-[#F8FAFC] border-2 border-slate-50 focus:border-primary focus:bg-white focus:ring-0 transition-all p-4 rounded-xl font-bold text-slate-900 h-24 h-24" placeholder="Course info, College etc..."></textarea>
               </div>
            </div>

            <div className="pt-4 pb-4">
               <button 
                 type="submit" 
                 disabled={isSubmitting}
                 className={`w-full py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] transition-all flex items-center justify-center gap-4 ${isSubmitting ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98]'}`}
               >
                  {isSubmitting ? "Sheduling..." : "Submit Support Request"}
               </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
