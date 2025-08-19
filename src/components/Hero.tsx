import { useEffect, useState } from "react";

const HeroSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 31,
        hours: 16,
        mins: 20,
        secs: 50
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.secs > 0) {
                    return { ...prev, secs: prev.secs - 1 };
                } else if (prev.mins > 0) {
                    return { ...prev, mins: prev.mins - 1, secs: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-gray-800 py-20 px-6 relative">
            {/* Decorative elements */}
            <div className="absolute top-20 left-20 w-8 h-8 border-4 border-orange-500"></div>
            <div className="absolute top-32 right-32 w-4 h-4 border-2 border-pink-500"></div>
            <div className="absolute bottom-40 left-1/3 w-6 h-6 bg-yellow-500 rounded-full"></div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-pink-500"></div>
                    </div>

                    <div>
                        <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8">
                            Omnis<br />
                            Hackathon 2025
                        </h1>

                        <div className="flex gap-8 text-white">
                            <div className="text-center">
                                <div className="text-4xl font-bold">{timeLeft.days}</div>
                                <div className="text-sm opacity-70">Days</div>
                            </div>
                            <div className="text-4xl font-bold">:</div>
                            <div className="text-center">
                                <div className="text-4xl font-bold">{timeLeft.hours}</div>
                                <div className="text-sm opacity-70">Hours</div>
                            </div>
                            <div className="text-4xl font-bold">:</div>
                            <div className="text-center">
                                <div className="text-4xl font-bold">{timeLeft.mins}</div>
                                <div className="text-sm opacity-70">Mins</div>
                            </div>
                            <div className="text-4xl font-bold">:</div>
                            <div className="text-center">
                                <div className="text-4xl font-bold">{timeLeft.secs}</div>
                                <div className="text-sm opacity-70">Secs</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="border-2 border-red-500 p-4 rounded-lg w-[500px] h-[600px]">
                        <img
                            src="/image.png"
                            alt="Hackathon participant"
                            className="rounded-lg absolute top-10 left-10 max-w-[600px] max-h-[600px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;