import { lazy, Suspense } from 'react';

// Lazy load components
const Hero = lazy(() => import('../components/Hero'));
const Profile = lazy(() => import('../components/Profile'));
const Contact = lazy(() => import('../components/Contact'));

const Home = () => {
    return (
        <Suspense fallback={<div className="h-screen"></div>}>
            <Hero />
            <Profile />
            <Contact />
        </Suspense>
    );
};

export default Home;
