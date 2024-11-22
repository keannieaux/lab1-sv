import React from 'react';
import IntroBlock from '../IntroductionBlock/IntroBlock'; 
import PremiumBlock from '../PremiumBlock/PremiumBlock'; 
import MainContent from '../MainComponent/MainContent'; 
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <IntroBlock />
            <PremiumBlock />
            <MainContent />
            </Container>
    );
};

export default Home;
