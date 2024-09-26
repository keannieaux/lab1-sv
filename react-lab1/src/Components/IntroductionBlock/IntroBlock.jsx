import React, { Component } from "react";
import playIcon from "./image/play.svg";
import familyIcon from "./image/family.svg";
import './IntroBlock.css';

class IntroBlock extends Component{
    render(){
        return(
            <div className="main">
            <div className="main-block" id="homes">
                <div className="main-block1">
                    <div className="main-block2">
                        <p className="poppinsFont main-text1" id="beco">Become an No-Code expert and find a job</p>
                        <p className="dm-sansFont main-text2" id="lor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel molestie magna curabitur tincidunt nunc sit amet.</p>
                    </div>
                    <div className="main-block3">
                        <div className="main-button1 user-only" id="knopka-cours">
                            <p className="dm-sansFont button-text1" id="ex">Explore Courses</p>
                        </div>
                        <div className="main-button2">
                            <p className="dm-sansFont button-text1" id="wat">Watch Video</p>
                            <img src={playIcon} alt="play" />
                        </div>
                    </div>
                </div>
                <div>
                    <img src={familyIcon} alt="family" id="fam" />
                </div>
            </div>
        </div>
        );
    }
}

export default IntroBlock;