import React, {Component} from 'react';
import SliderBlock from '../SliderComponent/SliderBlock';

class MainContent extends Component{
    render(){
        return(
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
                <div>
            <SliderBlock />
          </div>
              </div>
            </div>
          </main>
        );
    }
}

export default MainContent;