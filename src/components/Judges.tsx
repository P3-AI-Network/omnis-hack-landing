import { Plus } from "lucide-react";

const JudgesSection = () => {
  const judges = [
    {
      name: "Franki Wright",
      title: "Full Stack Engineer",
      image: "/api/placeholder/120/120"
    },
    {
      name: "John Henry",
      title: "Software Engineer",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Jerry Wallace",
      title: "Javascript Engineer",
      image: "/api/placeholder/120/120"
    },
    {
      name: "James Valdes",
      title: "Full-Stack Developer",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Erny Sukmana",
      title: "Lead Engineer",
      image: "/api/placeholder/120/120"
    }
  ];

  return (
    <section className="bg-gray-800 py-20 px-6 relative">
      <div className="absolute bottom-20 right-20 w-4 h-4 bg-pink-500"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-white">Judges</h2>
          <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition-colors">
            See all Judges
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {judges.map((judge, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-600">
                <img 
                  src={judge.image} 
                  alt={judge.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{judge.name}</h3>
              <p className="text-gray-400">{judge.title}</p>
            </div>
          ))}
          
          {/* Join as Speaker Card */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-gray-600 flex items-center justify-center">
              <Plus className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">Join as a Speaker</h3>
          </div>
        </div>
      </div>
    </section>
  );
};


export default JudgesSection;