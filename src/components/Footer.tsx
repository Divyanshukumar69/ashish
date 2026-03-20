import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFB] pt-24 pb-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Identity Column */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="inline-block group">
              <span className="text-3xl font-extrabold text-primary tracking-tighter font-headline flex items-center gap-2">
                <span className="material-symbols-outlined text-4xl group-hover:rotate-12 transition-transform">school</span>
                Ashish Kumar
              </span>
            </Link>
            <p className="text-lg text-on-surface-variant font-medium leading-relaxed max-w-sm">
              Transforming academic aspirations into successful careers through elite university coordination and personalized mentorship since 2009.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 active:scale-95">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a href="mailto:ashishkumar@gmail.com" className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 active:scale-95">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=919798263469&text=Hello" className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 active:scale-95">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
              </a>
            </div>
          </div>

          {/* Quick Links & Services Columns */}
          <div className="lg:col-span-1 border-l border-slate-200 hidden lg:block"></div>
          
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h5 className="text-primary font-black uppercase tracking-[0.2em] text-xs">Admissions</h5>
              <ul className="space-y-4">
                <li><Link className="text-on-surface-variant hover:text-primary font-bold transition-colors flex items-center gap-3 group" to="/services">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors"></span>
                    Medical (MBBS)
                </Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary font-bold transition-colors flex items-center gap-3 group" to="/services">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors"></span>
                    Engineering (B.Tech)
                </Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary font-bold transition-colors flex items-center gap-3 group" to="/services">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors"></span>
                    Education (B.Ed)
                </Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary font-bold transition-colors flex items-center gap-3 group" to="/services">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors"></span>
                    Vocational Training
                </Link></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h5 className="text-primary font-black uppercase tracking-[0.2em] text-xs">Connect</h5>
              <div className="space-y-6">
                  <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <span className="material-symbols-outlined text-xl">location_on</span>
                      </div>
                      <p className="text-sm font-medium text-on-surface-variant leading-relaxed">
                          Ct Station Rd, PWD Colony,<br />Purnia, Bihar 854301
                      </p>
                  </div>
                  <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <span className="material-symbols-outlined text-xl">support_agent</span>
                      </div>
                      <p className="text-sm font-medium text-on-surface-variant leading-relaxed">
                          9798263469<br />
                          <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Available 9AM - 8PM</span>
                      </p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Developer Signature */}
        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-primary font-black uppercase tracking-[0.2em] text-[10px]">Ashish Kumar Education Hub</p>
            <p className="text-slate-400 text-sm font-medium">© 2024 All Rights Reserved. </p>
          </div>
          
          {/* Premium Developer Credit Button */}
          <div 
            onClick={() => window.dispatchEvent(new Event('openDev'))}
            className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl cursor-pointer hover:shadow-xl hover:bg-slate-50 transition-all border border-slate-100 group shadow-sm active:scale-95"
          >
             <div className="w-10 h-10 rounded-xl bg-slate-900 overflow-hidden shadow-lg transition-transform group-hover:rotate-6">
                <img src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-business-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg" alt="Dev" className="w-full h-full object-cover" />
             </div>
             <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 leading-none mb-1">Developer</p>
                <p className="text-sm font-headline font-extrabold text-slate-900 leading-none flex items-center gap-1 group-hover:text-primary transition-colors">
                    Divyanshu Kumar
                    <span className="material-symbols-outlined text-xs animate-pulse">verified</span>
                </p>
             </div>
          </div>

          <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-slate-400 text-[10px] px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm font-black uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Secure Server
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
