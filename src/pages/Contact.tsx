import {  useState  } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <header className="mb-16">
        <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-primary tracking-tight mb-4">Let's start your journey.</h1>
        <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          Connect with the academic vanguard. Whether you're aiming for undergraduate excellence or post-graduate mastery, we're here to guide every step.
        </p>
      </header>

      {/* Bento Grid Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Quick Actions & Info */}
        <div className="lg:col-span-5 space-y-8">
          {/* Info Card */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_16px_32px_0_rgba(25,28,29,0.04)]">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <span className="text-xs font-bold tracking-widest text-primary font-label uppercase">Phone Number</span>
                </div>
                <p className="text-2xl font-headline font-bold text-on-surface">9798263469</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <span className="text-xs font-bold tracking-widest text-primary font-label uppercase">Email Address</span>
                </div>
                <p className="text-2xl font-headline font-bold text-on-surface">Ashishkumar@gmail.com</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span className="text-xs font-bold tracking-widest text-primary font-label uppercase">Academic Center Coordinator</span>
                </div>
                <p className="text-xl font-body text-on-surface-variant">Ct Station Rd, PWD Colony, Purnia, Bihar 854301</p>
              </div>
            </div>
            <div className="mt-10 pt-10 border-t border-surface-variant/30">
              <a href="https://api.whatsapp.com/send/?phone=919798263469&text=Hello&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold hover:brightness-95 transition-all">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                MAKE CHAT ON WHATSAPP
              </a>
              <p className="text-center text-sm mt-4 text-on-surface-variant italic">Instant support for urgent admission queries</p>
            </div>
          </div>

          {/* Quick Response Beacon */}
          <div className="bg-surface-container-low p-8 rounded-xl relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                  </span>
                  <h3 className="font-headline font-bold text-lg">Quick Response</h3>
                </div>
                <p className="text-on-surface-variant">Our academic counselors are currently online and active.</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-headline font-extrabold text-secondary tracking-tighter">15m</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Avg Response</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0_16px_32px_0_rgba(25,28,29,0.04)] h-full min-h-[500px] flex flex-col justify-center">
            {isSuccess ? (
              <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <h2 className="text-3xl font-headline font-extrabold text-primary">Inquiry Received!</h2>
                <p className="text-on-surface-variant max-w-md mx-auto">We've received your details. Our academic coordinator will review your request and get back to you shortly at the email provided.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-headline font-extrabold text-primary mb-8 tracking-tight">Student Inquiry Form</h2>
                <form className="space-y-6" onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  
                  const formData = new FormData(e.currentTarget);
                  // FormSubmit.co expects data in a specific format for AJAX
                  const data = Object.fromEntries(formData.entries());

                  try {
                    const response = await fetch("https://formsubmit.co/ajax/42cf3ea3b6bc1efe4538952be537f988", {
                        method: "POST",
                        headers: { 
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                            _subject: `Admission Portal Website - Contact Inquiry from ${data.name}`,
                            ...data
                        })
                    });

                    if (response.ok) {
                        setIsSuccess(true);
                    } else {
                        throw new Error("Failed to send");
                    }
                  } catch (err) {
                    alert("Message sending failed. Please check your internet connection.");
                  } finally {
                    setIsSubmitting(false);
                  }
                }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold tracking-wide text-on-surface-variant font-label">Full Name</label>
                      <input name="name" required className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 transition-all p-4 rounded-t-lg" placeholder="John Doe" type="text"/>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold tracking-wide text-on-surface-variant font-label">Student Email</label>
                      <input name="email" required className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 transition-all p-4 rounded-t-lg" placeholder="john@university.com" type="email"/>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold tracking-wide text-on-surface-variant font-label">Interested Course</label>
                    <select name="course" className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 transition-all p-4 rounded-t-lg appearance-none">
                      <option>Undergraduate Program</option>
                      <option>Post-Graduate Research</option>
                      <option>Professional Certification</option>
                      <option>Admission Counseling Only</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold tracking-wide text-on-surface-variant font-label">Your Message</label>
                    <textarea name="message" required className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 transition-all p-4 rounded-t-lg resize-none" placeholder="How can we assist your academic journey?" rows={4}></textarea>
                  </div>

                  <div className="pt-4">
                    <button 
                      className={`w-full py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'bg-surface-variant text-on-surface-variant cursor-not-allowed' : 'bg-secondary-container text-on-secondary-container hover:shadow-lg'}`} 
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-on-surface-variant border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <span className="material-symbols-outlined">send</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center gap-3 text-on-surface-variant pt-4">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                    <p className="text-sm">Your information is sent via direct institutional transmission.</p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="mt-12 lg:mt-24 px-6 lg:px-0">
        <div className="rounded-[2.5rem] overflow-hidden lg:h-[600px] h-[450px] relative shadow-2xl border border-surface-variant/30">
          <iframe 
            src="https://maps.google.com/maps?q=Ct%20Station%20Rd%2C%20PWD%20Colony%2C%20Purnia%2C%20Bihar%20854301&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            className="w-full h-full border-0 grayscale opacity-90 contrast-125"
            allowFullScreen
            loading="lazy"
            title="Location Map"
          ></iframe>
          
          <div className="absolute lg:bottom-10 lg:left-10 bottom-6 left-6 right-6 lg:right-auto lg:w-96">
            <div className="bg-white p-6 lg:p-8 rounded-[2rem] shadow-2xl border border-surface-variant/20 animate-in slide-in-from-bottom-8 lg:slide-in-from-left-8 duration-700">
              <div className="flex items-center gap-4 lg:gap-5 mb-4 lg:mb-6">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-2xl lg:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg lg:text-xl text-primary leading-tight">Academic Center</h4>
                  <p className="text-[10px] text-secondary font-black uppercase tracking-widest">PWD Colony, Purnia</p>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm lg:text-base font-medium mb-6 lg:mb-8 leading-relaxed">
                Ct Station Rd, PWD Colony, Purnia, Bihar 854301
              </p>
              <a 
                href="https://www.google.com/maps/dir//Ct+Station+Rd,+PWD+Colony,+Purnia,+Bihar+854301/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center w-full bg-secondary-container text-on-secondary-container px-6 py-4 rounded-xl font-headline font-bold hover:shadow-xl transition-all group text-sm"
              >
                Get Directions
                <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1 text-base">near_me</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
