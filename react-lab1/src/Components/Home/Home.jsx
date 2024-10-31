import React from 'react';
import IntroBlock from '../IntroductionBlock/IntroBlock'; // Adjust the path based on your structure
import PremiumBlock from '../PremiumBlock/PremiumBlock'; // Adjust the path based on your structure
import MainContent from '../MainComponent/MainContent'; // Adjust the path based on your structure

const Home = () => {
    return (
        <div className="home">
            <IntroBlock />
            <PremiumBlock />
            <MainContent />
        </div>
    );
};

export default Home;
