import { Link } from 'react-router-dom';
import {  useEffect  } from 'react';

export default function Home() {
  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash === '#testimonials') {
        const el = document.getElementById('testimonials');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    // Check on mount
    handleHashScroll();
    
    // Listen for changes
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);


  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative lg:min-h-[870px] min-h-[700px] flex items-center overflow-hidden bg-surface py-20 lg:py-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 text-center lg:text-left">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary-fixed px-4 py-1.5 rounded-full text-on-primary-fixed font-label text-[10px] md:text-xs font-bold tracking-wider uppercase mx-auto lg:mx-0">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              Vanguard Admissions 2024
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold text-primary tracking-tighter leading-tight lg:leading-[1.05]">
              Your Trusted <span className="text-secondary">Admission</span> Guide
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed mx-auto lg:mx-0">
              Connecting Students to Colleges with Ease. Navigate the complexities of academic selection with personalized mentorship and strategic insight.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <button onClick={() => window.dispatchEvent(new Event('openAssistance'))} className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all scale-100 active:scale-95">
                Get Admission Help
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <Link to="/contact" className="bg-surface-container-highest text-primary px-8 py-4 rounded-xl font-bold hover:bg-surface-container-high transition-all flex items-center justify-center">
                Contact Ashish Kumar
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-fixed rounded-full blur-[100px] opacity-40"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary-fixed rounded-full blur-[80px] opacity-30"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2">
              <img alt="Student Success" className="w-full h-[600px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdXMjv2_qUIl2A-ruASjoGe22F2VddiyNcZdimlZZmtjHNFTaTBRJ8WoYf13TsWYrrf6R5XfzScgSiHKP6p7-qKhaA7PKcQVcgZaDjaq2S-pd5FNHrFbwWtDkJDwO1EkSGaTqqiDHpgKp1IjwsFey1c69JJRXHp6bao3BLZGa3GqoIQgkSJ9D02Ccx4Q1p6iAQVNDWxVSfok3BixXEDKeXXe4u-qASRHla1qc_k39O3yHe0gMYB1hZI9eF4V9aTKoSfP1JSycCNMKi"/>
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img alt="Student" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5bbLMJ5AOUA3mmhXjlm_UuOoUIyzTKgdF0zocAsYLxGjXNroDMEBYpziXG-bdzbRFTl-_dObs6MN9OTLZqXGRKaMhn_MPFWQYP7H0s8WF2GqnzCM5l0Knc4AMZZzxS7QIQ845HSB16uDEqVrh-vPzwmQD_W0bCUZ07dw9c26Fi6xSAbCmcY3EOwkvfavvbyXAaUT_2izziiWNvA-xfNgFqyyGRjAz3uHziw8y57Xhyk_mNtC1FHLkCI8hH2K_SF8t2nGGkdRTvY4_"/>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img alt="Student" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9IsdqEqIHVgbjUbJBmTumvpfNcCQ5RwByDMOlqYg3jHfU_15Ke-iWhYfrRomt5uvsHnnRwgTndfvEh7x9kUpvfUg4ZHyKtRBPAqUUxEMKxCWTL4zBz140b1mh7WKk2oepcDYSTxCRJsXa05aFMxeRgyRzxVyZ1QFCzGNO8Oz-lPaf8YEOlXZjOBOBs1Rd72ox5Y6oWwGklYu-_J4cjZMehKBttwjobFppO0kCSr-RGqayt5LcPa6v_t28-su88KdtVXLbvyv_RWzb"/>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">Join 500+ Students</p>
                    <p className="text-xs text-on-surface-variant">Placed in Top Tier Institutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Pathway Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-headline font-extrabold text-primary tracking-tight">Your Success Pathway</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">A structured roadmap designed to take you from initial curiosity to confirmed campus arrival.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative group">
              <div className="bg-surface-container-lowest p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-on-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">forum</span>
                </div>
                <div className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-2">Step 01</div>
                <h3 className="text-xl font-bold text-primary mb-3">Inquiry</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Share your academic goals and preferences with us for a tailored evaluation.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-outline-variant">
                <span className="material-symbols-outlined text-4xl">chevron_right</span>
              </div>
            </div>
            
            <div className="relative group">
              <div className="bg-surface-container-lowest p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-on-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">psychology</span>
                </div>
                <div className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-2">Step 02</div>
                <h3 className="text-xl font-bold text-primary mb-3">Guidance</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Receive expert counseling on college selection and course compatibility.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-outline-variant">
                <span className="material-symbols-outlined text-4xl">chevron_right</span>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-surface-container-lowest p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-on-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">assignment_turned_in</span>
                </div>
                <div className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-2">Step 03</div>
                <h3 className="text-xl font-bold text-primary mb-3">Admission</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">We handle the documentation and application process for a seamless entry.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-outline-variant">
                <span className="material-symbols-outlined text-4xl">chevron_right</span>
              </div>
            </div>

            <div className="group">
              <div className="bg-surface-container-lowest p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent">
                <div className="w-14 h-14 bg-secondary-container rounded-xl flex items-center justify-center text-on-secondary-container mb-6 shadow-lg shadow-secondary-container/20">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                </div>
                <div className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-2">Step 04</div>
                <h3 className="text-xl font-bold text-primary mb-3">Confirmation</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Finalize your seat and begin your journey toward academic excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div id="testimonials" className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-block px-3 py-1 rounded bg-secondary-fixed text-on-secondary-fixed text-xs font-bold font-label tracking-widest uppercase">Testimonials</div>
              <h2 className="text-4xl font-headline font-extrabold text-primary tracking-tight">Student Success Stories</h2>
              <p className="text-on-surface-variant leading-relaxed">Real stories from students who achieved their dreams through our guided pathway. We pride ourselves on every successful admission.</p>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container hover:text-primary transition-all">
                <span className="material-symbols-outlined">west</span>
              </button>
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container hover:text-primary transition-all">
                <span className="material-symbols-outlined">east</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-10 rounded-3xl relative overflow-hidden group border border-transparent hover:border-primary/10 transition-all">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex gap-1 mb-6 text-secondary">
                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
              </div>
              <p className="text-on-surface font-medium italic mb-8 leading-relaxed">"Ashish Kumar's guidance was pivotal in my journey. From choosing the right medical college to finishing the paperwork, everything was handled with extreme professionalism."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden">
                  <img alt="Sarah J." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOlejQyNY307pzS5FqwdpUjEy_2wm0H2Fu7NEXtxAO7nMw4rzM-0tmz3d3DsR3WP3mGQ569vF8dlTHf8Dy-VisN5zp1eTdil9UK6_u5IvbopJ7XcKz-g73uDFnMibznfTj63v3Ja3XkhCmYYHb7fLICCKogVg1Ra2STlMhDNYtFHYqWJjfRNfoVkNBsQLCFG9S5vLsKcrDO6D7af3-j6qIP4QU2cxpvGeKOBtI5iskC3tVum25Y0pWfqfMFjhL2mRz4DarI0dkEpEf"/>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Sarah Jenkins</h4>
                  <p className="text-xs text-on-surface-variant font-medium">MBBS Student, Apex University</p>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-10 rounded-3xl relative overflow-hidden group border border-transparent hover:border-primary/10 transition-all">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex gap-1 mb-6 text-secondary">
                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
              </div>
              <p className="text-on-surface font-medium italic mb-8 leading-relaxed">"I was confused between three different engineering specializations. The guidance phase really helped me identify my strengths and secure a seat in my dream college."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden">
                  <img alt="Michael R." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxd4wTnDHDntwEsYNxX__GEmvg-8HK_dd072cN1Qdvj7Lv-R4wSYB08RdYkov-MICMFKsQ2euu7A3H5Zs6D1lPIo7xfibVHxIRcHgOFzk2KUS5DJzPsAZsdk9SEhezIoZ1jNmBRv4H08KwvYZkuw5cZYuKiv0q6hTeGsjdiWKE-IlcWookyz4RMPpq3-rO3oMLu9iTyV3pg8c10pnFH0keGK1gQU7Kwv6gIgK_iJYTWEr73I0OmSbLzPl6Vw_ZNyEF4LYn-juJMKzV"/>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Michael Reed</h4>
                  <p className="text-xs text-on-surface-variant font-medium">B.Tech Student, Global Institute</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-10 rounded-3xl relative overflow-hidden group border border-transparent hover:border-primary/10 transition-all">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex gap-1 mb-6 text-secondary">
                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
              </div>
              <p className="text-on-surface font-medium italic mb-8 leading-relaxed">"Transparent, quick, and highly reliable. They made a very stressful process feel like a walk in the park. Highly recommended for any serious applicant."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden">
                  <img alt="Elena K." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIH4bqoY9zOmQH23DbEVlBNf5gdT7dk4DRB4HRaukyQI2k52Tbwo_lvAa55dQNcAFuDjbV51Bc4EhBfEoWJy0zpbkgNlird42_DlAsePQGlKM1elWKNPTCttKmJbKCKb-dzM8x2fTL9fKi7s3BFENjFKGFwn7FkVJZM3O6jmu7kfbgeGS41yV7xOcrpQ6M-HMlISAvwsELxyAJUd8Tj4I7MTDLBRa5BFr8v94ZPCcaMmfJKtfCjOCBeA2I5EA0XHow9Fa06onYep5g"/>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Elena Kapoor</h4>
                  <p className="text-xs text-on-surface-variant font-medium">MBA Candidate, Heritage Business School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-primary rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px]"></div>
            </div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white tracking-tight leading-tight">Ready to Take the First Step?</h2>
              <p className="text-on-primary-container text-lg max-w-2xl mx-auto font-medium">Don't let uncertainty hold you back. Let Ashish Kumar provide the clarity you need to secure your academic future today.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <button onClick={() => window.dispatchEvent(new Event('openAI'))} className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:brightness-110 transition-all scale-100 active:scale-95">
                  Start My Journey
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
