import React, {Component} from 'react';
import Header from './Components/Header/Header';
import MainContent from './Components/MainComponent/MainContent';
import Footer from './Components/Footer/Footer';
import IntroBlock from './Components/IntroductionBlock/IntroBlock';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <IntroBlock/>
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
