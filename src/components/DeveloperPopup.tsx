import React, { useState, useEffect } from 'react';

export default function DeveloperPopup() {
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const handleOpen = () => {
         setIsOpen(true);
         document.body.style.overflow = 'hidden';
      };
      window.addEventListener('openDev', handleOpen);
      return () => {
         window.removeEventListener('openDev', handleOpen);
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
         className="fixed inset-0 z-[3000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
         onClick={close}
      >
         <div
            className="bg-[#131424] w-full max-w-[340px] rounded-[2.5rem] p-6 border border-white/10 shadow-[0_32px_128px_-16px_rgba(0,0,0,0.8)] relative animate-in zoom-in slide-in-from-bottom-12 duration-500 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
         >
            {/* Dev Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 transform">
               <div className="bg-[#4D47FF] text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-b-xl shadow-lg shadow-[#4D47FF]/20">Dev</div>
            </div>

            {/* Close Button */}
            <button
               onClick={close}
               className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all group active:scale-90 border border-white/5"
            >
               <span className="material-symbols-outlined text-white/50 group-hover:text-white text-lg">close</span>
            </button>

            {/* Profile Section */}
            <div className="text-center mt-6">
               <div className="w-28 h-28 mx-auto rounded-[2rem] bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-2xl mb-4 group transition-transform hover:scale-105 duration-500">
                  <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-[#131424]">
                     <img
                        src="/divyanshu.jpg"
                        alt="Divyanshu Kumar"
                        className="w-full h-full object-cover grayscale brightness-110"
                     />
                  </div>
               </div>

               <h3 className="text-2xl font-headline font-extrabold text-white tracking-tight mb-0.5">Divyanshu Kumar</h3>
               <p className="text-indigo-400 font-bold tracking-tight text-[11px] uppercase opacity-90">Software Engineer · NextGen</p>
            </div>

            {/* Contact Links */}
            <div className="mt-8 space-y-3">
               {/* Call Card */}
               <a
                  href="tel:9798263469"
                  className="flex items-center gap-3 bg-white/5 border border-white/5 hover:bg-white/10 p-4 rounded-2xl transition-all group"
               >
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                     <span className="material-symbols-outlined font-bold text-xl">call</span>
                  </div>
                  <div>
                     <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Call</p>
                     <p className="text-white font-bold text-base tracking-tight">+91 9798263469</p>
                  </div>
               </a>

               {/* WhatsApp Card */}
               <a
                  href="https://api.whatsapp.com/send/?phone=919798263469&text=Hello&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/5 border border-white/5 hover:bg-white/10 p-4 rounded-2xl transition-all group"
               >
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                     <span className="material-symbols-outlined font-bold text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                  </div>
                  <div className="flex-1">
                     <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">WhatsApp</p>
                     <p className="text-white font-bold text-base tracking-tight">Chat with me</p>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-[8px] font-black uppercase">Online</div>
               </a>

               {/* Website Card */}
               <div className="flex items-center gap-3 bg-white/5 border border-white/5 p-4 rounded-2xl opacity-60">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                     <span className="material-symbols-outlined font-bold text-xl">language</span>
                  </div>
                  <div>
                     <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Website</p>
                     <p className="text-white font-bold text-base font-mono tracking-tight">nextgensoftware.in</p>
                  </div>
               </div>
            </div>

            {/* Tech Stack Branding */}
            <div className="mt-8 pt-5 border-t border-white/5 text-center">
               <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-xs">code</span>
                  React + Node.js + Socket.io
               </p>
            </div>

         </div>
      </div>
   );
}
