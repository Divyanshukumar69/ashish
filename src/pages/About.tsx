export default function About() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section: The Academic Vanguard */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 lg:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center text-center lg:text-left">
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed text-[10px] md:text-xs font-bold tracking-widest font-label mb-6 uppercase">
              Trusted Admission Guide
            </span>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary tracking-tight leading-[1.1] mb-6 lg:mb-8">
              Bridge the Gap to Your <span className="text-secondary">Dream Career.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-8 lg:mb-10 mx-auto lg:mx-0">
              Ashish Kumar serves as the premier liaison between aspiring students and India's top educational institutions. 
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-3 px-5 py-4 bg-surface-container-lowest rounded-xl shadow-sm border border-slate-100 font-bold">
                <span className="material-symbols-outlined text-secondary text-2xl lg:text-3xl">verified</span>
                <div className="text-left font-bold">
                  <p className="text-sm font-bold text-primary">15+ Years</p>
                  <p className="text-[10px] text-on-surface-variant">Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-4 bg-surface-container-lowest rounded-xl shadow-sm border border-slate-100 font-bold">
                <span className="material-symbols-outlined text-secondary text-2xl lg:text-3xl">school</span>
                <div className="text-left font-bold">
                  <p className="text-sm font-bold text-primary">50+ Colleges</p>
                  <p className="text-[10px] text-on-surface-variant">Partnerships</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img alt="Professional consultation" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX_qXGm2-L6sS1pAMkGQ9aWlO1KAoBRygv0DrA_TAdMVLjhSvGGoWUxKQRDC7DYTHeCzUBzEjA3oaDlny60O8urR3rvJPv7CsSAA9C2Hmz8PpPCo-SRYdYpf-LY7NuUHN36m_YGq5SdLXd0vAg5RaPqX1uNLFUqW62tJ5ioQvQEvoQ9cBEzuSG2W7fuRg0v3zx2hjgE8ca3etWckPcog3CGtbxdOKJ6qB2Gy84B6bbb3bT6BA3np_qGsNNkbbQoYfEphPoVNSuQ8ah" />
            </div>
            <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-secondary-container p-4 lg:p-6 rounded-2xl text-on-secondary-container shadow-2xl">
              <span className="text-3xl lg:text-4xl font-black block">10k+</span>
              <span className="text-[10px] lg:text-xs font-black uppercase tracking-widest opacity-80">Students Guided</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Why My Guidance Works? */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl font-extrabold text-primary mb-4">Why My Guidance Works?</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Our methodology is built on transparency, deep institutional insights, and a student-first philosophy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-2xl shadow-sm border-l-4 border-secondary">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">handshake</span>
              <h3 className="text-2xl font-bold text-primary mb-4">Trusted Coordinator &amp; Direct Liaison</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                We aren't just consultants; we are Coordinator of opportunity. By maintaining direct channels with college administrations and management, we bypass bureaucratic delays, ensuring your application gets the attention it deserves.
              </p>
            </div>
            <div className="bg-primary p-10 rounded-2xl text-on-primary">
              <span className="material-symbols-outlined text-4xl mb-6">lock_reset</span>
              <h3 className="text-xl font-bold mb-4">Zero-Stress Process</h3>
              <p className="opacity-80 leading-relaxed">
                From documentation to seat locking, we handle the heavy lifting while you focus on preparing for your future academic life.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm group hover:bg-surface-bright transition-all">
              <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors">
                <span className="material-symbols-outlined text-primary">network_node</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">Strong Connections</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Access to an exclusive network of premier colleges across engineering, medicine, and management.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm group hover:bg-surface-bright transition-all">
              <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors">
                <span className="material-symbols-outlined text-primary">fact_check</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">Honest Appraisal</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">No false promises. We provide realistic guidance based on your profile and current institutional requirements.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm group hover:bg-surface-bright transition-all">
              <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors">
                <span className="material-symbols-outlined text-primary">support_agent</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">End-to-End Support</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Support doesn't end at admission. We guide you through the initial settling-in phase and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section: A Friendly Word from Ashish */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <img alt="Portrait of Ashish Kumar" className="rounded-3xl shadow-xl aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsTiXW4vAdtbuGkzWK-a-KGSWTtjlATI3WWL9PgRWJ-D3N6gjHT7GgWwC4_qDGbpzTVoLMyfYFlZtrL-9SdUKFfi2VyKBJT46KSB23llggZWl0MPhrchoFN0h1F--uaHRrbA7KzqDTHWGnLG4IX3AkatwXgysTw_qwvK4qAqF7zPM7oeHxASmoiqJtnDSSo5PEOG3Jw0Yqnm0fOsAPuqLjCpAIoSVWlnXsFvOEhYA_Pz6Kwje3IIhmAaBdyy7Ipcjvn7ji2pYHltBg" />
                <div className="absolute -top-4 -right-4 bg-secondary p-4 rounded-full shadow-lg">
                  <span className="material-symbols-outlined text-white text-3xl">format_quote</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="font-headline text-4xl font-extrabold text-primary mb-8 italic">A Friendly Word from Ashish</h2>
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                <p>
                  "Choosing a college is perhaps one of the most significant decisions you'll ever make. Over the last 15 years, I've seen many students miss out on great opportunities simply because they didn't have the right person in their corner to navigate the administrative hurdles."
                </p>
                <p>
                  "My role is to be that bridge. I leverage my personal relationships with college leaderships to ensure that our students get a fair, fast, and hassle-free admission experience. My promise to you is transparency: you will always know exactly where you stand."
                </p>
                <p className="font-headline font-bold text-primary text-2xl pt-4">
                  — Ashish Kumar
                  <span className="block text-sm font-normal text-on-surface-variant mt-1 uppercase tracking-widest">Founder &amp; Chief Admission Strategist</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA: Start Journey */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="bg-primary-container rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[20rem]">school</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-6 relative z-10">Ready for a Hassle-Free Future?</h2>
          <p className="text-on-primary-container text-xl max-w-2xl mx-auto mb-10 relative z-10">
            Connect with Ashish Kumar today for a personalized consultation and secure your seat in your preferred college.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button onClick={() => window.dispatchEvent(new Event('openAI'))} className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-bold text-lg hover:brightness-110 shadow-lg transition-all">
              Start My Journey
            </button>
            <button onClick={() => window.location.href = '/#testimonials'} className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
              View Success Stories
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
