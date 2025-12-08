import React from "react";

const Footer = () => {
  return (
      <footer className="bg-stone-900 text-stone-300 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-light text-white mb-6 leading-relaxed">
                We welcome kindred spirits. Whether you're looking for silence, space, or simply a change in pace — Kaleo is open.
              </h3>
              <a
                href="/contact"
                className="inline-block bg-white text-stone-900 px-8 py-3 rounded-sm text-sm font-medium hover:bg-stone-100 transition-colors"
              >
                Book a Visit ✦
              </a>
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">Address</p>
                <p className="text-lg leading-relaxed">
                  Ranch — 1847 Dusty Creek Road<br />
                  Fredericksburg, TX 78624<br />
                  United States
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">Phone</p>
                <a href="tel:+15125550198" className="text-lg hover:text-white transition-colors">
                  +1 (512) 555-0198
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-700 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="mb-4 md:mb-0">Copyright © Developed by Lucas Gusso • Powered by Webflow</p>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8  flex items-center justify-center rounded-sm">
                <span className="text-2xl font-bold">✦</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
