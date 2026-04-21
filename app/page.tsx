import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.jpeg"
                alt="Nova Sites Logo"
                width={40}
                height={40}
                className="rounded-lg object-contain"
              />
              <span className="font-bold text-xl text-gray-900 hidden sm:block">Nova Sites</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#services" className="text-gray-600 hover:text-gray-900 transition">Services</Link>
              <Link href="#about" className="text-gray-600 hover:text-gray-900 transition">About</Link>
              <Link href="#process" className="text-gray-600 hover:text-gray-900 transition">Process</Link>
              <Link href="#contact" className="px-5 py-2.5 rounded-full gradient-hero text-white font-medium hover:opacity-90 transition shadow-md">Get Started</Link>
            </div>
            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="w-full h-full gradient-hero rounded-l-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
                🚀 Professional Web Development in Libya
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
                Build Your{" "}
                <span className="text-gradient">
                  Digital Presence
                </span>{" "}
                with Confidence
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                We help businesses create professional websites that showcase their services and connect with customers quickly and effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#contact" className="px-8 py-4 rounded-full gradient-hero text-white font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-indigo-500/30">
                  Start Your Project
                </Link>
                <Link href="#services" className="px-8 py-4 rounded-full border-2 border-gray-200 font-semibold text-lg hover:border-gray-300 transition text-gray-700">
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 gradient-hero opacity-20 blur-2xl rounded-full"></div>
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-2xl border border-gray-100 overflow-hidden">
                  <Image
                    src="/logo.jpeg"
                    alt="Nova Sites"
                    width={280}
                    height={280}
                    className="rounded-2xl object-contain bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-gray-900">What We Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From concept to launch, we provide end-to-end web development services tailored to your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌐",
                color: "from-indigo-500 to-purple-500",
                title: "Custom Websites",
                description: "Unique, professional websites designed to reflect your brand and engage your audience."
              },
              {
                icon: "📱",
                color: "from-sky-500 to-cyan-500",
                title: "Responsive Design",
                description: "Sites that look and work perfectly on every device - desktop, tablet, and mobile."
              },
              {
                icon: "⚡",
                color: "from-amber-500 to-orange-500",
                title: "Fast Performance",
                description: "Optimized websites that load quickly and provide smooth user experiences."
              },
              {
                icon: "🔍",
                color: "from-emerald-500 to-green-500",
                title: "SEO Ready",
                description: "Built with search engine optimization in mind to help customers find you online."
              },
              {
                icon: "🛠️",
                color: "from-rose-500 to-pink-500",
                title: "Ongoing Support",
                description: "We're here to help with updates, maintenance, and improvements after launch."
              },
              {
                icon: "💼",
                color: "from-violet-500 to-purple-500",
                title: "Business Focus",
                description: "Websites designed to showcase your services and convert visitors into customers."
              }
            ].map((service, index) => (
              <div key={index} className="gradient-card p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100%", label: "Client Satisfaction" },
              { value: "Libya", label: "Proudly Based" },
              { value: "24/7", label: "Online Presence" },
              { value: "∞", label: "Possibilities" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 gradient-hero opacity-10 blur-3xl rounded-full"></div>
                <div className="relative gradient-card border border-gray-100 rounded-3xl p-8 overflow-hidden">
                  <Image
                    src="/logo.jpeg"
                    alt="Nova Sites Logo"
                    width={400}
                    height={400}
                    className="rounded-2xl w-full h-auto object-contain bg-gray-50"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6 text-gray-900">Your Partners in Digital Growth</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                We're a newly established web development agency based in <strong className="text-gray-900">Musrata, Libya</strong>, passionate about helping local and international businesses establish a strong online presence.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Founded by <strong className="text-gray-900">Yousef Arebi</strong> and <strong className="text-gray-900">Mustafa</strong>, Nova Sites combines technical expertise with a deep understanding of what makes businesses succeed online.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-3xl font-bold text-gradient mb-1">100%</div>
                  <div className="text-gray-600 text-sm">Client Focus</div>
                </div>
                <div className="text-center p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-3xl font-bold text-gradient mb-1">Libya</div>
                  <div className="text-gray-600 text-sm">Based & Proud</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">How We Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-gray-900">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and efficient. Here's how we bring your vision to life.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discover", desc: "We learn about your business, goals, and audience.", icon: "💡" },
              { step: "02", title: "Design", desc: "We create a custom design that reflects your brand.", icon: "🎨" },
              { step: "03", title: "Develop", desc: "We build your website with clean, efficient code.", icon: "💻" },
              { step: "04", title: "Deliver", desc: "We launch your site and provide ongoing support.", icon: "🚀" }
            ].map((item, index) => (
              <div key={index} className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition">
                <div className="text-5xl font-bold text-gray-100 mb-4">{item.step}</div>
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-sky-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">💬</div>
          <blockquote className="text-2xl sm:text-3xl font-medium text-white mb-8">
            "Your website is often the first impression customers have of your business. Make it count."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.jpeg"
                alt="Nova Sites"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Nova Sites Team</div>
              <div className="text-indigo-200 text-sm">Musrata, Libya</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gradient-card border border-gray-200 rounded-3xl p-12 shadow-xl">
            <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-3xl">📩</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Let's discuss your project and see how we can help your business grow online.
            </p>
            <a
              href="mailto:contact@novasites.ly"
              className="inline-block px-8 py-4 rounded-full gradient-hero text-white font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-indigo-500/30"
            >
              Contact Us
            </a>
            <p className="text-gray-500 text-sm mt-4">or email us at yousef.hsarebi@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 mt-auto bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="Nova Sites"
                width={40}
                height={40}
                className="rounded-lg object-contain bg-white"
              />
              <div>
                <span className="font-bold text-lg text-gray-900 block">Nova Sites</span>
                <span className="text-gray-500 text-sm">Musrata, Libya</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Nova Sites. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-700 transition text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-700 transition text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
