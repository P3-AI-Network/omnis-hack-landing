import { Play } from "lucide-react";

// About Section
const AboutSection = () => {
  return (
    <section className="bg-gray-800 py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative">
            <img 
              src="/api/placeholder/400/300" 
              alt="Hackathon presentation"
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-white space-y-6">
          <h2 className="text-4xl font-bold">About Omnis</h2>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mollis quam malesuada scelerisque ultrices gravida
            lobortis ac. Et vitae, et aliquam sed.
          </p>
          <p className="text-white font-medium">42 Drive, Florida, USA</p>
          
          <div className="flex gap-8 pt-4">
            <div>
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm text-gray-400">Judges</div>
            </div>
            <div>
              <div className="text-3xl font-bold">$1M+</div>
              <div className="text-sm text-gray-400">Cashprizes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
