import {  useState, useEffect  } from 'react';

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingTime, setBookingTime] = useState("");

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };
    window.addEventListener('openConsultation', handleOpen);
    return () => {
      window.removeEventListener('openConsultation', handleOpen);
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
    setBookingTime(data.date + " at " + data.time);

    try {
      const response = await fetch("https://formsubmit.co/ajax/divyanshucmd@gmail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `Admission Portal Website - B.Ed Consultation Booked by ${data.name}`,
          ...data
        })
      });
      if (response.ok) setIsSuccess(true);
    } catch (err) {
      alert("Error booking consultation.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={close}
    >
      <div 
        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-[0_32px_128px_-16px_rgba(0,0,0,0.8)] relative animate-in zoom-in slide-in-from-bottom-12 duration-500 overflow-hidden flex flex-col md:flex-row border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar Panel - Compact Top on Mobile */}
        <div className="md:w-[30%] bg-[#1A1C1E] text-white p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-white/10">
            <div className="relative z-10 flex flex-row md:flex-col justify-between items-center md:items-start w-full">
              <button 
                onClick={close} 
                className="group flex items-center gap-2 text-white/50 hover:text-white transition-all order-2 md:order-1"
              >
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-sm">close</span>
                </div>
                <span className="font-headline font-bold uppercase tracking-widest text-[8px] hidden md:block">Cancel Session</span>
              </button>

              <div className="md:mt-10 order-1 md:order-2">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-fixed text-[8px] font-black uppercase tracking-[0.3em] mb-2">Academic Desk</span>
                <h2 className="text-xl md:text-3xl font-headline font-black text-white leading-tight tracking-tighter">
                   Free <br className="hidden md:block" /> Session.
                </h2>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/5 mt-6 hidden md:block">
                <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">Fast-track Entry</p>
            </div>
        </div>

        {/* Content Area - Clear and Visible Fields */}
        <div className="flex-1 bg-white overflow-y-auto p-6 md:p-10 custom-scrollbar">
            {isSuccess ? (
              <div className="text-center space-y-8 animate-in fade-in zoom-in duration-500 py-10">
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/10">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
                </div>
                <h3 className="text-2xl font-headline font-black text-primary tracking-tight">Booking Done!</h3>
                <p className="text-slate-500 text-sm font-medium max-w-xs mx-auto">
                    Confirmed for **{bookingTime}**. We'll email you soon.
                </p>
                <button onClick={close} className="px-10 py-3 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-[10px]">Close</button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block px-1">Student Full Name</label>
                       <input name="name" required className="w-full bg-[#F8FAFC] border-2 border-slate-100 focus:border-primary focus:bg-white focus:ring-0 transition-all p-4 rounded-xl font-bold text-slate-900" placeholder="Rahul Sharma" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block px-1">WhatsApp/Mobile</label>
                       <input name="phone" type="tel" required className="w-full bg-[#F8FAFC] border-2 border-slate-100 focus:border-primary focus:bg-white focus:ring-0 transition-all p-4 rounded-xl font-bold text-slate-900" placeholder="9798263469" />
                    </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block px-1">Consultation Date</label>
                       <input name="date" type="date" required className="w-full bg-[#F8FAFC] border-2 border-slate-100 focus:border-primary focus:bg-white focus:ring-0 transition-all p-4 rounded-xl font-bold text-slate-900" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block px-1">Time Slot</label>
                       <select name="time" required className="w-full bg-[#F8FAFC] border-2 border-slate-100 focus:border-primary focus:bg-white focus:ring-0 transition-all p-4 rounded-xl font-bold text-slate-900">
                          <option>Morning (9AM - 12PM)</option>
                          <option>Afternoon (12PM - 4PM)</option>
                          <option>Evening (4PM - 8PM)</option>
                       </select>
                    </div>
                 </div>

                 <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block px-1">B.Ed Query / Fee Inquiry</label>
                       <textarea name="query" className="w-full bg-[#F8FAFC] border-2 border-slate-100 focus:border-primary focus:bg-white focus:ring-0 transition-all p-4 rounded-xl font-bold text-slate-900 h-28" placeholder="Fee structure, Session info, College location..."></textarea>
                 </div>

                 <div className="pt-8 pb-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all flex items-center justify-center gap-4 ${isSubmitting ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98]'}`}
                    >
                       {isSubmitting ? "Sheduling..." : "Confirm Free Consultation"}
                    </button>
                    <p className="text-center mt-6 text-[8px] font-black text-slate-300 uppercase tracking-widest">Bridging Academic Gaps</p>
                 </div>
              </form>
            )}
        </div>

      </div>
    </div>
  );
}
