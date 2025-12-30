import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f5eee0] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-2xl font-light text-stone-900 mb-6 leading-relaxed">
              Rooted in western beauty, Kaleo is a quiet luxury ranch retreat —
              crafted for those seeking silence, space, and soulful moments in nature.
            </h3>

            <p className="text-stone-600 mb-8 leading-relaxed max-w-md">
              From golden sunsets to open ranch land, every stay invites you to slow
              down and reconnect with the land.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-sm text-sm font-medium hover:bg-stone-100 transition-colors"
            >
              Book a Visit ✦
            </Link>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">
                Address
              </p>
              <p className="text-lg text-stone-400 hover:text-stone-700 leading-relaxed">
                Kaleo Retreat <br />
                Texas Hill Country <br />
                United States
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">
                Phone
              </p>
              <a
                href="tel:+15129876543"
                className="text-lg text-stone-400 hover:text-stone-700 transition-colors"
              >
                +1 (512) 987-6543
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">
                Experience
              </p>
              <p className="text-stone-400 hover:text-stone-700 leading-relaxed">
                Private stays • Open landscapes • Timeless western calm
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">
                Follow Us
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-stone-500 hover:text-stone-700"><Facebook size={24} /></a>
                <a href="#" className="text-stone-500 hover:text-stone-700"><Instagram size={24} /></a>
                <a href="#" className="text-stone-500 hover:text-stone-700"><Youtube size={24} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-stone-700 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0 text-stone-700">
            © {new Date().getFullYear()} KALEO Ranch Retreat — Crafted with care
          </p>

          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center rounded-sm">
              <span className="text-2xl font-bold">✦</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
