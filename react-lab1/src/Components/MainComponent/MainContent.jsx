import React from 'react';
import SliderBlock from '../SliderComponent/SliderBlock';
import './MainContent.css';
import sliderData from '../../data/data.json'; // Adjusted path to your JSON file

function MainContent () {
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
                        {sliderData.map((item) => (
                            <SliderBlock
                                key={item.id}
                                image={item.image} 
                                beginnerLevel={item.beginnerLevel}
                                courseTitle={item.courseTitle}
                                price={item.price}
                                buttonText={item.buttonText}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
