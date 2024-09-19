import React, { Component } from 'react';
import SliderBlock from '../SliderComponent/SliderBlock';
import './MainContent.css';
import image1 from './image/pc.svg';
import image2 from './image/pc2.svg';
import image3 from './image/pc3.svg';

class MainContent extends Component {
    render() {
        const sliderData = [
            {
                id: 1,
                image: image1, 
                beginnerLevel: 'Beginner',
                courseTitle: 'Webflow Basics',
                price: '$ 24.00 USD',
                buttonText: 'Enroll Now'
            },
            {
                id: 2,
                image: image2,
                beginnerLevel: 'Intermediate',
                courseTitle: 'Advanced CSS',
                price: '$ 34.00 USD',
                buttonText: 'Join Now'
            },
            {
                id: 3,
                image: image3,
                beginnerLevel: 'Advanced',
                courseTitle: 'React Mastery',
                price: '$ 49.00 USD',
                buttonText: 'Get Started'
            }
        ];

        return (
            <main>
                <div className="block-trending">
                    <div className="block-trending1">
                        <div className="block-trending2">
                            <div className="text-trending">
                                <p className="dm-sansFont text-trending1">Trending</p>
                            </div>
                            <p className="poppinsFont text-trending2">The Most Popular Courses</p>
                            <p className="dm-sansFont text-trending3">Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="slider-container">
                            {sliderData.map(data => (
                                <SliderBlock
                                    key={data.id}
                                    image={data.image}
                                    beginnerLevel={data.beginnerLevel}
                                    courseTitle={data.courseTitle}
                                    price={data.price}
                                    buttonText={data.buttonText}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default MainContent;
