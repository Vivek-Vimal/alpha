import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home'
import Drop from './components/Drop/Drop';
import Map from './components/Map/Map';
import Airdrop from './components/Airdrop/Airdrop';
import TokkenSupply from './components/TokkenSupply/TokkenSupply';
import Comment from './components/comment/Comment';

function App() {



  return (
    <div className="App">
      <Header />
      {/* <div
  className="owl-carousel owl-carousel-light owl-carousel-light-init-fadeIn owl-theme manual  nav-style-1 nav-inside nav-inside-plus nav-dark nav-lg nav-font-size-lg show-nav-hover mb-0"
  data-plugin-options="{'autoplayTimeout': 1000000}"
  data-dynamic-height="['700px','700px','700px','550px','500px']"
  style={{ height: 700 }}
>
  <div className="owl-stage-outer">
    <div className="owl-stage">
      
      <div
        className="owl-item position-relative"
        style={{
          backgroundImage: "url(img/demos/airdrop/slides/slide-1-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-6">
              <div className="d-flex flex-column justify-content-center h-100">
                <p
                  className="custom-font-slider-2 text-dark"
                  data-plugin-animated-letters=""
                  data-plugin-options="{'startDelay': 750, 'minWindowWidth': 0, 'animationSpeed': 30}"
                >
                  CANARYX FOUNDER NFT
                </p>
                <h2
                  className="custom-font-slider-1 mb-0 font-weight-bold appear-animation"
                  data-appear-animation="blurIn"
                  data-appear-animation-delay={500}
                  data-plugin-options="{'minWindowWidth': 0}"
                >
                  Airdrop Claim
                </h2>
                <div
                  className="divider divider-primary divider-small text-start mt-2 mb-4 mx-0 appear-animation"
                  data-appear-animation="fadeInUpShorter"
                  data-appear-animation-delay={750}
                >
                  <hr className="my-0" />
                </div>
                <p
                  className="text-3-5 line-height-9 appear-animation"
                  data-appear-animation="fadeInUpShorter"
                  data-appear-animation-delay={1000}
                >
                  Each CanaryX Fonder NFT is eligible for an exclusive drop of
                  the CanaryX Exchange Token{" "}
                </p>
                <div
                  className="appear-animation"
                  data-appear-animation="fadeInUpShorter"
                  data-appear-animation-delay={1250}
                >
                  <div className="d-flex align-items-center mt-2">
                    <a
                      href="#claim"
                      className="btn btn-dark btn-modern text-uppercase font-weight-bold text-2 py-3 btn-px-4"
                    >
                      Claim
                    </a>
                    <a
                      href="#"
                      className="btn btn-primary btn-modern text-uppercase font-weight-bold text-2 py-3 btn-px-4 ms-4"
                    >
                      Connect Wallet
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="position-absolute left-100pct bottom-0 transform3dx-n50 w-75 ms-5">
            <img
              src="img/demos/airdrop/slides/slide-1-1.png"
              className="img-fluid mw-100 w-auto appear-animation"
              alt=""
              data-appear-animation="fadeIn"
              data-appear-animation-delay={100}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
        <Home />
        <Drop />
        <Map />
        <Airdrop />
        <TokkenSupply />
        <Comment />
      <Footer/>
    </div>
  );
}

export default App;
