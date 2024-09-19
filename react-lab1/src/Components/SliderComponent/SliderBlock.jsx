import React, {Component} from 'react';
import './SliderBlock.css';
import pcIcon from './image/pc.svg';

class SliderBlock extends Component{
    render(){
        return(
                <div className="img-trending">
                  <div className="img-pc">
                  <div className="shopping_cart">
                  <img src={pcIcon} alt="pc" />
                  </div>
                    <div className="text-img-pc">
                      <div className="text-block-pc">
                        <div className="button-img-pc">
                          <p className="dm-sansFont text-img-pc1">Beginner</p>
                        </div>
                        <p className="poppinsFont text-img-pc2">Webflow Basics</p>
                        <p className="dm-sansFont text-img-pc3">$ 24.00 USD</p>
                      </div>
                      <div className="button-img-pc1">
                        <p className="dm-sansFont text-img-pc4">Enroll Now</p>
                      </div>
                    </div>
                  </div>
                </div>
        );
    }
}

export default SliderBlock;