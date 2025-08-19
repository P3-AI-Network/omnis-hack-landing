import { useState } from "react";

// Newsletter Section
const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="bg-gray-700 py-16 px-6 relative">
      <div className="absolute top-10 right-20 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-pink-500 transform rotate-45"></div>
      <div className="absolute top-16 right-24 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-pink-500 transform rotate-45"></div>
      <div className="absolute top-12 right-28 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-pink-500 transform rotate-45"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 leading-tight">
            Join our newsletter to get latest<br />
            updates about conference.
          </h2>
          
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b-2 border-gray-500 text-white pb-2 focus:border-pink-500 focus:outline-none"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-red-500 text-white px-8 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
        
        <div className="lg:text-right space-y-4">
          <div className="flex justify-end gap-4 mb-6">
            <a href="#" className="text-white hover:text-pink-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-pink-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-4">Omnis Hackathon 2025</h3>
          
          <div className="space-y-2 text-sm text-gray-400">
            <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="block hover:text-white transition-colors">Terms of conference</a>
            <a href="#" className="block hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};


export default NewsletterSection;