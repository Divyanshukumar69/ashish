export default function Services() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <header className="relative bg-primary overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container via-primary to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest mb-6 uppercase">Expert Guidance</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-primary tracking-tighter leading-none mb-8">
              Your Future, <br /><span className="text-secondary-fixed-dim">Architected.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-primary-container leading-relaxed mb-10 max-w-2xl">
              Navigating the academic landscape requires precision. We provide elite Coordinator and mentorship for B.Ed, ITI, and high-impact vocational programs.
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative border-4 border-white/10">
              {/* Put the image user attached in public/profile.png */}
              <img alt="Expert Guide Profile" className="w-full h-full object-cover" src="/course_pr.png" />
            </div>
            {/* Decorative background elements */}
            <div className="absolute -inset-4 bg-secondary/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* Programs Grid (Bento Style) */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-headline font-extrabold text-primary tracking-tight mb-4">Academic Programs</h2>
            <p className="text-outline max-w-xl">Comprehensive guidance for professional certifications and technical excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 group">
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden p-8 h-full shadow-[0_16px_32px_0_rgba(25,28,29,0.04)] transition-all hover:bg-surface-bright">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="material-symbols-outlined text-primary text-4xl">school</span>
                      <h3 className="text-3xl font-headline font-bold text-primary">B.Ed (Bachelor of Education)</h3>
                    </div>
                    <p className="text-on-surface-variant mb-8 leading-relaxed">
                      Shape the next generation. Our B.Ed guidance program connects aspiring educators with premier NCTE-approved institutions, ensuring a seamless transition into professional teaching.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">Eligibility</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2 text-sm text-on-surface">
                            <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                            Graduation with 50% aggregate
                          </li>
                          <li className="flex items-start gap-2 text-sm text-on-surface">
                            <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                            Reserved category relaxation (45%)
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">Admission Process</h4>
                        <ol className="space-y-3">
                          <li className="text-sm text-on-surface flex gap-3">
                            <span className="font-bold text-primary">01</span> Counseling &amp; Document Verification
                          </li>
                          <li className="text-sm text-on-surface flex gap-3">
                            <span className="font-bold text-primary">02</span> College Allotment &amp; Selection
                          </li>
                        </ol>
                      </div>
                    </div>
                    <button onClick={() => window.dispatchEvent(new Event('openBooking'))} className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-lg font-bold transition-transform active:scale-95 shadow-md">
                      Book B.Ed Consultation
                    </button>
                  </div>
                  <div className="w-full md:w-64 shrink-0">
                    <img alt="Educational setting" className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFq6UZXmovpANIN9_aPPrRAK1vFKn9gy8P8RYyCA-iyb-YWwvYrMkvu3fTmGwrzVcPP7fa68TN80kzj-IIexK3aF11es-1E_k9KI2PIcgp0gpCr3yZMmS9KvJsRs7OXnPfAuoNX3YpTYX8stslYiVA62Qqal0iC24ckIyUo4JYtR7ltc-KJdeHL_gMPD4FC7o8uluErHX81GZn_1DukSlRe73VPAYL4QmmpVi6SMa3j-xo9XlUakAjQKWD5TJKY1J4kOeKUXxCid90" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 group">
              <div className="bg-tertiary text-on-tertiary rounded-xl p-8 h-full shadow-[0_16px_32px_0_rgba(25,28,29,0.04)] transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-tertiary-fixed text-4xl">engineering</span>
                  <h3 className="text-2xl font-headline font-bold">ITI Programs</h3>
                </div>
                <p className="text-on-tertiary-container text-sm mb-8 leading-relaxed">
                  Master technical crafts with NCVT recognized ITI courses. We guide you through trades like Electrician, Fitter, and Civil Draughtsman.
                </p>
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-tertiary-fixed uppercase tracking-widest mb-4">Admission Steps</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm">
                      <span className="w-6 h-6 rounded-full bg-tertiary-container flex items-center justify-center text-xs">1</span>
                      Trade Selection Support
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <span className="w-6 h-6 rounded-full bg-tertiary-container flex items-center justify-center text-xs">2</span>
                      Direct Merit Admission
                    </li>
                  </ul>
                </div>
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-tertiary-fixed uppercase tracking-widest mb-4">Eligibility</h4>
                  <p className="text-sm">Minimum 10th Standard / Matriculation from a recognized board.</p>
                </div>
                <button onClick={() => window.dispatchEvent(new Event('openITI'))} className="w-full bg-tertiary-fixed text-on-tertiary-fixed px-6 py-3 rounded-lg font-bold transition-transform active:scale-95">
                  Explore ITI Trades
                </button>
              </div>
            </div>

            <div className="md:col-span-12">
              <div className="bg-surface-container-low rounded-xl p-10 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 mb-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    New Industry-Ready Courses
                  </div>
                  <h3 className="text-4xl font-headline font-extrabold text-primary mb-6">Vocational Programs</h3>
                  <p className="text-on-surface-variant text-lg mb-8 max-w-2xl">
                    Fast-track your career with high-demand vocational certificates. From Digital Marketing to Hospitality Management, we bridge the gap between education and employability.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                    <div className="bg-surface-container-lowest p-6 rounded-xl">
                      <span className="material-symbols-outlined text-secondary mb-3">verified</span>
                      <h5 className="font-bold text-primary mb-2">Certification</h5>
                      <p className="text-xs text-outline">Recognized by NSDC and industry bodies.</p>
                    </div>
                    <div className="bg-surface-container-lowest p-6 rounded-xl">
                      <span className="material-symbols-outlined text-secondary mb-3">trending_up</span>
                      <h5 className="font-bold text-primary mb-2">Career Focus</h5>
                      <p className="text-xs text-outline">Hands-on practical training modules.</p>
                    </div>
                    <div className="bg-surface-container-lowest p-6 rounded-xl">
                      <span className="material-symbols-outlined text-secondary mb-3">diversity_3</span>
                      <h5 className="font-bold text-primary mb-2">Placement</h5>
                      <p className="text-xs text-outline">Direct recruitment assistance.</p>
                    </div>
                  </div>
                  <button onClick={() => window.dispatchEvent(new Event('openVocational'))} className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold shadow-lg hover:shadow-primary/20 transition-all">
                    Apply for Vocational Training
                  </button>
                </div>
                <div className="w-full md:w-1/3 relative">
                  <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl"></div>
                  <img alt="Vocational training" className="relative w-full aspect-square object-cover rounded-full shadow-2xl border-8 border-surface-container-lowest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo8nnHNLbdm045OOz4Ea_-B8Byu3L26o1hBAw_wBMtzZql3FwPoSjfnXT9tpoGeecclQKlSwj6qlynZ0VLFv_YXWAW7e3_9KwVKiUUbzayH5Z-AdiDjskN4vAFJI2GrDmrnEIzQ2KgZQEX6wvTqaKVj7sFPLBOX8ieF4X-lHNm564Cvo4dYjSQsEpQ6zt-v7Vv_whtGgWGfyr74xucz07J8-lIdXuISVdDCKnljaBQNG_5XGrJlRWgzvUY_kUcajGnnmcWEWXTbBSP" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-headline font-extrabold text-primary mb-4">Our Guidance Framework</h2>
            <p className="text-outline">Step-by-step navigation from inquiry to enrollment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative p-8 border-l-4 border-primary bg-surface group hover:bg-primary transition-colors duration-500">
              <span className="block text-5xl font-extrabold opacity-10 mb-4 group-hover:text-white">01</span>
              <h4 className="text-xl font-bold mb-3 group-hover:text-white">Initial Consultation</h4>
              <p className="text-sm text-on-surface-variant group-hover:text-on-primary-container">We assess your background and aspirations to recommend the perfect fit.</p>
            </div>
            <div className="relative p-8 border-l-4 border-primary bg-surface group hover:bg-primary transition-colors duration-500">
              <span className="block text-5xl font-extrabold opacity-10 mb-4 group-hover:text-white">02</span>
              <h4 className="text-xl font-bold mb-3 group-hover:text-white">College Selection</h4>
              <p className="text-sm text-on-surface-variant group-hover:text-on-primary-container">Curation of institutions that match your budget and location preferences.</p>
            </div>
            <div className="relative p-8 border-l-4 border-primary bg-surface group hover:bg-primary transition-colors duration-500">
              <span className="block text-5xl font-extrabold opacity-10 mb-4 group-hover:text-white">03</span>
              <h4 className="text-xl font-bold mb-3 group-hover:text-white">Documentation</h4>
              <p className="text-sm text-on-surface-variant group-hover:text-on-primary-container">End-to-end assistance with application forms and verification processes.</p>
            </div>
            <div className="relative p-8 border-l-4 border-primary bg-surface group hover:bg-primary transition-colors duration-500">
              <span className="block text-5xl font-extrabold opacity-10 mb-4 group-hover:text-white">04</span>
              <h4 className="text-xl font-bold mb-3 group-hover:text-white">Confirmation</h4>
              <p className="text-sm text-on-surface-variant group-hover:text-on-primary-container">Securing your seat and guiding you through the first day of your new journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-8">
          <div className="bg-primary-container rounded-3xl p-12 text-center text-on-primary-container relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <h2 className="text-3xl md:text-5xl font-headline font-extrabold mb-6 relative z-10">Start Your Journey Today</h2>
            <p className="text-lg mb-10 opacity-90 relative z-10 max-w-xl mx-auto">Don't leave your academic future to chance. Get expert guidance from Ashish Kumar's Admissions team.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <button onClick={() => window.dispatchEvent(new Event('openConsultation'))} className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-bold text-lg shadow-xl scale-100 hover:scale-105 transition-transform">
                Book Free Consultation
              </button>
              <button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold text-lg border border-primary-fixed-dim/30">
                View Prospectus
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
