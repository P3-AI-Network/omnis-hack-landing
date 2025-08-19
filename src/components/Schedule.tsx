// Schedule Section
const ScheduleSection = () => {
  const scheduleItems = [
    {
      time: "09:00-10:00",
      title: "Event Registration",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada consectetur adipiscing elit."
    },
    {
      time: "10:00-11:00",
      title: "Introduction",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada consectetur adipiscing elit."
    },
    {
      time: "12:00-02:00",
      title: "Hackathon Starts",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada consectetur adipiscing elit."
    },
    {
      time: "03:00-04:00",
      title: "Results",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada consectetur adipiscing elit."
    }
  ];

  return (
    <section className="bg-gray-800 py-20 px-6 relative">
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-pink-500"></div>
      <div className="absolute top-60 right-20 w-6 h-6 border-2 border-orange-500"></div>
      <div className="absolute bottom-40 left-40 w-6 h-6 border-2 border-orange-500"></div>
      <div className="absolute bottom-20 right-40 w-4 h-4 bg-yellow-500 rounded-full"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Hackathon Schedule</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis
          quam malesuada scelerisque ultrices gravida
        </p>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white">Friday, 10 January 2020</h3>
        </div>
        
        <div className="space-y-8 mb-12">
          {scheduleItems.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start text-left">
              <div className="md:text-right">
                <span className="text-lg font-semibold text-white">{item.time}</span>
              </div>
              <div className="md:col-span-3 space-y-2">
                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition-colors">
          See All Schedule
        </button>
      </div>
    </section>
  );
};
export default ScheduleSection;