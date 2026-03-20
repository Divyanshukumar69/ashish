import { Link, useLocation } from 'react-router-dom';
import {  useState, useEffect  } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'py-3' 
          : 'py-5'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-4 md:px-8`}>
        <nav className={`flex justify-between items-center transition-all duration-500 px-6 md:px-8 h-16 md:h-18 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 ${
            isScrolled 
              ? 'bg-white/80 backdrop-blur-2xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)]' 
              : 'bg-white/40 backdrop-blur-md shadow-none'
          }`}
        >
          {/* Logo with Icon */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
               <span className="material-symbols-outlined text-2xl font-bold">school</span>
            </div>
            <span className="text-lg md:text-xl font-headline font-black text-primary tracking-tighter">
              Ashish Kumar
            </span>
          </Link>
          
          {/* Desktop Links - Floating Pill Style */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/5 p-1 rounded-2xl border border-slate-900/5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-5 py-2 text-sm font-bold tracking-tight rounded-xl transition-all ${
                  location.pathname === link.path
                    ? "bg-white text-primary shadow-sm"
                    : "text-slate-500 hover:text-primary hover:bg-white/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-3">
              <button 
                onClick={() => window.dispatchEvent(new Event('openAssistance'))} 
                className="hidden sm:flex bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/10 active:scale-95"
              >
                Get Help
              </button>

              {/* Mobile Burger */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900/5 text-primary active:scale-90 transition-all"
              >
                 <span className="material-symbols-outlined text-2xl font-black">
                   {isMobileMenuOpen ? 'close' : 'menu'}
                 </span>
              </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-x-4 top-24 bottom-4 bg-white z-[90] lg:hidden transition-all duration-500 rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] border border-slate-100 overflow-hidden ${
         isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
         <div className="p-8 h-full flex flex-col justify-between">
            <div className="space-y-8">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Main Navigation</p>
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block text-4xl font-headline font-black tracking-tighter transition-all ${
                      location.pathname === link.path
                        ? "text-primary tracking-normal"
                        : "text-slate-300 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6">
                <button 
                    onClick={() => window.dispatchEvent(new Event('openAssistance'))}
                    className="w-full bg-primary text-on-primary py-5 rounded-[1.8rem] font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/30 active:scale-95 transition-transform"
                >
                    Get Help
                </button>
                <p className="text-center text-xl font-headline font-black text-slate-900">9798263469</p>
            </div>
         </div>
      </div>
    </header>
  );
}
