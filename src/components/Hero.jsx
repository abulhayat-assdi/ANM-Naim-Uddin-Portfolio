import { useEffect, useState } from 'react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center gradient-radial-purple pt-20"
        >
            <div className="container-custom py-20">
                {/* Mobile Layout - Custom Order: Name → Image → Description */}
                <div className="flex flex-col lg:hidden gap-8 items-center">
                    {/* Name and Title - First on Mobile */}
                    <div className="text-white text-center">
                        <h1 className={`text-5xl md:text-6xl font-bold leading-tight text-shadow transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                            A.N.M Nayeem Uddin
                        </h1>
                        <h2 className={`text-2xl md:text-3xl font-medium text-purple-100 mt-4 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                            Marketing Professional
                        </h2>
                    </div>

                    {/* Profile Image - Second on Mobile */}
                    <div className={`flex justify-center transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                                <img
                                    src="/images/profile-hero-new.png"
                                    alt="A.N.M Nayeem Uddin"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-400 rounded-full opacity-50 blur-xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400 rounded-full opacity-50 blur-xl"></div>
                        </div>
                    </div>

                    {/* Description and Button - Third on Mobile */}
                    <div className={`text-white text-center space-y-6 transition-all duration-600 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        <p className="text-lg md:text-xl text-purple-50 leading-relaxed max-w-3xl mx-auto">
                            A fast tracker with rich & diversified exposure of more than 15 years in Strategic Planning, Marketing, Brand promotion, Development, Innovation, execution and people leadership.
                        </p>
                        <div className="pt-4">
                            <button
                                onClick={() => {
                                    const element = document.getElementById('about');
                                    element?.scrollIntoView({ behavior: 'auto' });
                                }}
                                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover-scale shadow-lg hover:shadow-xl transition-default"
                            >
                                About Me
                            </button>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout - Traditional 2 Column: Left (All Text) | Right (Image) */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - All Text Content Together */}
                    <div className={`text-white space-y-6 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-shadow">
                            A.N.M Nayeem Uddin
                        </h1>
                        <h2 className="text-3xl font-medium text-purple-100">
                            Marketing Professional
                        </h2>
                        <p className="text-xl text-purple-50 leading-relaxed">
                            A fast tracker with rich & diversified exposure of more than 15 years in Strategic Planning, Marketing, Brand promotion, Development, Innovation, execution and people leadership.
                        </p>
                        <div className="pt-4">
                            <button
                                onClick={() => {
                                    const element = document.getElementById('about');
                                    element?.scrollIntoView({ behavior: 'auto' });
                                }}
                                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover-scale shadow-lg hover:shadow-xl transition-default"
                            >
                                About Me
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Profile Image */}
                    <div className={`flex justify-end transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        <div className="relative">
                            <div className="w-96 h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                                <img
                                    src="/images/profile-hero-new.png"
                                    alt="A.N.M Nayeem Uddin"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-400 rounded-full opacity-50 blur-xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400 rounded-full opacity-50 blur-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
