import {  useState, useEffect  } from 'react';

export default function AdmissionBooking() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingTime, setBookingTime] = useState("");

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };
    window.addEventListener('openBooking', handleOpen);
    return () => {
      window.removeEventListener('openBooking', handleOpen);
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
          ...data,
          _honey: ""
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
      className="fixed inset-0 z-[3000] flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-md animate-in fade-in duration-300"
      onClick={close}
    >
      <div 
        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-[0_32px_128px_-16px_rgba(0,0,0,0.8)] relative animate-in zoom-in slide-in-from-bottom-12 duration-500 overflow-hidden flex flex-col md:flex-row border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar Panel - Smaller and Clear Top on Mobile */}
        <div className="md:w-[30%] bg-secondary text-on-secondary p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-white/10">
            <div className="relative z-10 flex flex-row md:flex-col justify-between items-center md:items-start">
              <button 
                onClick={close} 
                className="group flex items-center gap-2 text-white/50 hover:text-white transition-all order-2 md:order-1"
              >
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-sm">close</span>
                </div>
                <span className="font-headline font-bold uppercase tracking-widest text-[8px] hidden md:block">Close</span>
              </button>

              <div className="md:mt-12 order-1 md:order-2">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[8px] font-black uppercase tracking-widest text-white mb-3">2024 Session</span>
                <h2 className="text-xl md:text-3xl font-headline font-black text-white leading-tight tracking-tighter">
                   B.Ed <br className="hidden md:block" /> Guidance.
                </h2>
              </div>
            </div>

            <div className="relative z-10 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md mt-6 hidden md:block">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Status</p>
                <p className="text-xs font-bold text-white">Direct Management Review</p>
            </div>
        </div>

        {/* Main Content Area - Fields are clearly visible here */}
        <div className="flex-1 bg-white overflow-y-auto p-6 md:p-10 custom-scrollbar">
            {isSuccess ? (
              <div className="text-center space-y-8 animate-in fade-in zoom-in duration-500 py-10">
                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <h3 className="text-2xl font-headline font-black text-primary tracking-tight">Sent Successfully!</h3>
                <p className="text-slate-500 text-sm font-medium max-w-xs mx-auto">
                    We'll contact you for the **{bookingTime}** slot soon.
                </p>
                <button onClick={close} className="px-8 py-3 bg-secondary text-on-secondary rounded-xl font-black uppercase tracking-widest text-[10px]">Return</button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                 <div className="space-y-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block px-1">Student Full Name</label>
                       <input name="name" required className="w-full bg-[#F8FAFC] border-2 border-slate-100 focus:border-secondary focus:bg-white focus:ring-0 transition-all p-4 rounded-xl font-bold text-slate-900 placeholder:text-slate-300" placeholder="Rahul Sharma" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block px-1">Email Address</label>
                         <input name="email" type="email" required className="w-full bg-[#F8FAFC] border-2 border-slate-100 focus:border-secondary focus:bg-white focus:ring-0 transition-all p-4 rounded-xl font-bold text-slate-900 placeholder:text-slate-300" placeholder="student@example.com" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block px-1">Phone Number</label>
                         <input name="phone" type="tel" required className="w-full bg-[#F8FAFC] border-2 border-slate-100 focus:border-secondary focus:bg-white focus:ring-0 transition-all p-4 rounded-xl font-bold text-slate-900 placeholder:text-slate-300" placeholder="9798263469" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block px-1">Preferred Date</label>
                         <input name="date" type="date" required className="w-full bg-[#F8FAFC] border-2 border-slate-100 focus:border-secondary focus:bg-white focus:ring-0 transition-all p-4 rounded-xl font-bold text-slate-900" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block px-1">Preferred Slot</label>
                         <select name="time" required className="w-full bg-[#F8FAFC] border-2 border-slate-100 focus:border-secondary focus:bg-white focus:ring-0 transition-all p-4 rounded-xl font-bold text-slate-900">
                            <option>Morning (9AM - 12PM)</option>
                            <option>Afternoon (12PM - 4PM)</option>
                            <option>Evening (4PM - 8PM)</option>
                         </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                         <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block px-1">Admission Query</label>
                         <textarea name="query" className="w-full bg-[#F8FAFC] border-2 border-slate-100 focus:border-secondary focus:bg-white focus:ring-0 transition-all p-4 rounded-xl font-bold text-slate-900 h-24 placeholder:text-slate-300" placeholder="Ask about fees, eligibility, or college info..."></textarea>
                    </div>
                 </div>

                 <div className="pt-4 pb-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-4 ${isSubmitting ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-secondary text-on-secondary shadow-lg shadow-secondary/20 hover:shadow-secondary/30 active:scale-95'}`}
                    >
                       {isSubmitting ? "Sending..." : "Confirm B.Ed Consultation"}
                    </button>
                    <div className="mt-6 flex items-center justify-center gap-2 text-[8px] font-black text-slate-300 uppercase tracking-widest">
                       <span className="material-symbols-outlined text-xs">shield</span>
                       Direct Institutional Data Transmission
                    </div>
                 </div>
              </form>
            )}
        </div>

      </div>
    </div>
  );
}
