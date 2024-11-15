import React from 'react';
import IntroBlock from '../IntroductionBlock/IntroBlock'; 
import PremiumBlock from '../PremiumBlock/PremiumBlock'; 
import MainContent from '../MainComponent/MainContent'; 

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
