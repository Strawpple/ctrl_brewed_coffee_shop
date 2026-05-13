import { motion } from "framer-motion";
import {
  FaFacebookF,
  // FaInstagram,
  FaMapMarkerAlt,
  FaCoffee,
} from "react-icons/fa";

export default function CtrlBrewedLandingPage() {
  const coldCoffee = [
    "Latte",
    "Caramel Macchiato",
    "Matcha",
    "Salted Caramel",
    "Spanish Latte",
    "White Chocolate",
    "Strawberry",
    "Hazelnut",
    "Mocha",
  ];

  const nonCoffee = [
    "White Chocolate",
    "Milky Strawberry",
    "Milky Matcha",
    "Chocolate",
    "Cookies n Cream",
  ];

  const sodaSeries = [
    "Green Apple",
    "Blueberry",
    "Strawberry",
    "Blue Lemonade",
  ];

  const hotCoffee = [
    "Caramel Macchiato",
    "Matcha",
    "Spanish Latte",
    "Salted Caramel",
    "Mocha",
  ];

  return (
    <div className="min-h-screen bg-[#1B120D] text-white overflow-hidden relative font-sans">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/10 blur-[140px] rounded-full"></div>

      {/* Navbar */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full flex items-center gap-6 shadow-2xl">
        <h1 className="font-black tracking-wide text-orange-300">
          CTRL+BREWED
        </h1>

        <div className="hidden md:flex gap-5 text-sm text-gray-200">
          <a href="#menu" className="hover:text-orange-300 transition-all">
            Menu
          </a>
          <a href="#about" className="hover:text-orange-300 transition-all">
            About
          </a>
          <a href="#visit" className="hover:text-orange-300 transition-all">
            Visit
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 lg:px-16 pt-36 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-md">
              <FaCoffee className="text-orange-300" />
              <span className="text-sm tracking-wide text-gray-200">
                Code • Create • Connect
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black leading-none mb-6">
              CTRL<span className="text-orange-400">+</span>
              <br />
              <span className="text-orange-200 italic font-light">
                BREWED
              </span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl mb-10">
              A modern coffee space in Panabo City made for creators,
              professionals, students, and coffee lovers. Enjoy handcrafted
              drinks, cozy vibes, and a creative atmosphere.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="px-7 py-4 bg-orange-400 text-black font-semibold rounded-2xl hover:scale-105 hover:bg-orange-300 transition-all duration-300 shadow-2xl"
              >
                Explore Menu
              </a>

              <a
                href="https://maps.app.goo.gl/WLXSFNSq7NsRTA4q6"
                target="_blank"
                className="px-7 py-4 border border-white/10 bg-white/5 rounded-2xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                Visit Store
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-orange-400/20 blur-[100px] rounded-full"></div>

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-5 shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <img
                src="/logo/logo.jpg"
                alt="CTRL+BREWED"
                className="rounded-[28px] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="px-6 lg:px-16 py-20 border-y border-white/5 bg-white/[0.03]"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Crafted Drinks",
              desc: "Freshly made coffee and refreshing beverages with premium flavors.",
            },
            {
              title: "Creative Atmosphere",
              desc: "Perfect for studying, coding, meetings, and meaningful conversations.",
            },
            {
              title: "Community Vibes",
              desc: "Where coffee meets creativity and connections are brewed daily.",
            },
          ].map((item) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={item.title}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-8 hover:border-orange-300/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-orange-300">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="px-6 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-orange-300 text-sm mb-4">
              Signature Drinks
            </p>

            <h2 className="text-5xl font-black mb-5">Our Menu</h2>

            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Carefully crafted beverages made to energize your day and inspire
              your creativity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Cold Coffee",
                size: "16oz • 22oz",
                price: "₱59 • ₱69",
                items: coldCoffee,
              },
              {
                title: "Non-Coffee",
                size: "16oz • 22oz",
                price: "₱59 • ₱69",
                items: nonCoffee,
              },
              {
                title: "Soda Series",
                size: "16oz • 22oz",
                price: "₱49 • ₱59",
                items: sodaSeries,
              },
              {
                title: "Hot Coffee",
                size: "8oz • 16oz",
                price: "₱69 • ₱79",
                items: hotCoffee,
              },
            ].map((section) => (
              <motion.div
                whileHover={{ y: -6 }}
                key={section.title}
                className="group bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl hover:border-orange-300/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-orange-300 mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{section.size}</p>
                  </div>

                  <span className="bg-orange-400/20 text-orange-200 px-4 py-2 rounded-full text-sm">
                    Best Seller
                  </span>
                </div>

                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-white/5 pb-4 hover:translate-x-2 transition-all duration-300"
                    >
                      <span className="text-lg text-gray-100">{item}</span>

                      <span className="font-semibold text-orange-200">
                        {section.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 bg-gradient-to-r from-orange-400/20 to-amber-200/10 border border-orange-200/10 rounded-[32px] p-7 text-center backdrop-blur-xl">
            <p className="text-xl font-semibold text-orange-100">
              Add-ons: Shot of Espresso +₱15
            </p>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section
        id="visit"
        className="px-6 lg:px-16 py-24 bg-white/[0.03] border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="uppercase tracking-[0.4em] text-orange-300 text-sm mb-4">
              Visit Us
            </p>

            <h2 className="text-5xl font-black mb-6 leading-tight">
              Coffee Built For
              <br />
              Creative Minds
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
              Visit CTRL+BREWED at Purok 1, Salvacion, Panabo City and enjoy a
              relaxing atmosphere with handcrafted drinks and cozy café vibes.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://www.facebook.com/profile.php?id=61563731111433"
                target="_blank"
                className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-blue-500/20 border border-blue-400/20 hover:scale-105 transition-all duration-300"
              >
                <FaFacebookF /> Facebook
              </a>

              {/* <a
                href="https://instagram.com"
                target="_blank"
                className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-pink-500/20 border border-pink-400/20 hover:scale-105 transition-all duration-300"
              >
                <FaInstagram /> Instagram
              </a> */}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[28px] p-6 backdrop-blur-xl max-w-sm">
              <h3 className="text-xl font-bold mb-3 text-orange-300">
                Store Hours
              </h3>

              <p className="text-gray-300">Monday - Sunday</p>
              <p className="text-orange-200 text-lg font-semibold">
                2:00 PM - 10:00 PM
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 border border-white/10 rounded-[36px] p-4 overflow-hidden backdrop-blur-xl shadow-2xl"
          >
            <iframe
              title="CTRL+BREWED Coffee Shop Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7646.742804676675!2d125.6894812!3d7.315200199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9456da451a06b%3A0x6e6857cb06d422bd!2sCtrl%20%2B%20Brewed!5e1!3m2!1sen!2sph!4v1778646820067!5m2!1sen!2sph"
              className="w-full h-[450px] rounded-[28px]"
              loading="lazy"
            ></iframe>

             </motion.div>
        </div>
      </section>

      {/* Floating Button */}
      <a
        href="https://m.me"
        target="_blank"
        className="fixed bottom-6 right-6 bg-orange-400 text-black p-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50"
      >
        <FaMapMarkerAlt size={22} />
      </a>

      {/* Footer */}
      <footer className="px-6 lg:px-16 py-10 border-t border-white/5 text-center text-gray-400">
        <h2 className="text-3xl font-black text-orange-300 mb-3">
          CTRL+BREWED
        </h2>

        <p className="mb-5 text-gray-500">
          Code • Create • Connect
        </p>

        <div className="flex justify-center gap-5 mb-5">
          <a href="https://www.facebook.com/profile.php?id=61563731111433" target="_blank">
            <FaFacebookF className="hover:text-orange-300 transition-all" />
          </a>
        </div>

        <p className="text-sm text-gray-600">
          © 2026 CTRL+BREWED • Crafted with creativity and caffeine.
        </p>
      </footer>
    </div>
  );
}
