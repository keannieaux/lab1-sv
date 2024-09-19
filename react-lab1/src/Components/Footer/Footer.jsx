import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <footer className="footer">
        <div className="block-footer">
          <div className="block-footer1">
            <div className="block-footer2">
              <p>Join our newsletter</p>
              <div className="button-pole">
                <div className="pole"></div>
                <div className="button-sub">
                  <p>Subscribe</p>
                </div>
              </div>
            </div>
            <div className="block-footer3">
              {/* Дополнительный контент футера */}
              <div className="block-contact">
                <p>© Learnico by Your Name</p>
                <div className="img-contact">
                  <img src="../general/image/facebook.svg" alt="facebook" />
                  <img src="../general/image/twitter.svg" alt="twitter" />
                  <img src="../general/image/instagram.svg" alt="instagram" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
        );
    }
}

export default Footer;