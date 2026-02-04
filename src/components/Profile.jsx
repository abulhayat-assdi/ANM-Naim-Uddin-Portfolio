import { smoothScrollTo } from '../utils/smoothScroll';

const Profile = () => {

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom">
                <div className="bg-white rounded-3xl shadow-2xl card-shadow p-8 md:p-12 -mt-32 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {/* Profile Image */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative">
                                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary-200 shadow-xl">
                                    <img
                                        src="/images/profile-about-new.png"
                                        alt="A.N.M Nayeem Uddin"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                                    ✨
                                </div>
                            </div>
                        </div>

                        {/* About Content */}
                        <div className="lg:col-span-2 space-y-6">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-800 mb-2">
                                    About Me
                                </h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed">
                                A fast tracker with rich & diversified exposure of more than 15 years in Strategic Planning, Marketing, Brand promotion, Development, Innovation, execution and people leadership with different national and international Brands.
                            </p>

                            <p className="text-gray-600 text-lg leading-relaxed">
                                Working with the mission to create value for customer, company, society and career. Always love to take challenge and sustainable solutions.
                            </p>

                            <p className="text-gray-600 text-lg leading-relaxed">
                                Work in a position that offers dynamic & challenging career opportunities to lead the organization towards sustainable growth.
                            </p>




                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
