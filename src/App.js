// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureOne from "./components/FeatureOne";

import Tokenomics from "./components/Tokenomics";
// import SocialMediaPromotion from "./components/SocialMediaPromotion";
import DevSection from "./components/DevSection";

import RoadMap from "./components/RoadMap";

import FAQ from "./components/FAQ";
import FeatureTwo from "./components/FeatureTwo";

function App() {
  // const features = [
  //   {
  //     src: wallet1,
  //     title: "Value",
  //     description:
  //       "Swap from your own wallet. Be your own bank. No centralized bridges or wrapping assets",
  //   },
  //   {
  //     src: profit1,
  //     title: "Yield",
  //     description:
  //       "Provide Liquidity and Earn Yield on your Native Assets with Impermanent Loss Protection",
  //   },
  //   {
  //     src: insurance1,
  //     title: "Insurance",
  //     description: "Get Impermanent Loss Protection on your Liquidity Pools",
  //   },
  //   {
  //     src: wallet1,
  //     title: "Staking",
  //     description:
  //       "Earn Yield on your Native Assets with Impermanent Loss Protection",
  //   },
  // ];
  return (
    <div className="home">
      {/* <Router>
        <Header />
        <Routes>
          <Route path="/" component={<HeroSection />} />
          <Route path="/about" component={<FeatureOne />} />
          <Route path="/about2" component={<FeatureTwo />} />
          <Route path="/tokenomics" component={<Tokenomics />} />
          <Route path="/how-to-buy" component={<DevSection />} />
          <Route path="/roadmap" component={<RoadMap />} />
        </Routes>
      </Router> */}
      {/* <DailyStats /> */}
      {/* <Route path="about" element={<FeatureOne />} />
        <Route path="about2" element={<FeatureTwo />} /> */}
      {/* <div className="features-list-container">
        {features.map((feature, index) => {
          return (
            <Card key={index} title={feature.title} imgUrl={feature.src}>
              {<p>{feature.description}</p>}
            </Card>
          );
        })}
      // </div> */}
      {/* // <Route path="tokenomics" element={<Tokenomics />} />
      //   <Route path="how-to-buy" element={<DevSection />} />

      //   <Route path="roadmap" element={<RoadMap />} />
      // </Routes> */}
      {/*// </Router>*/}
      <Header />
      <HeroSection />
      <FeatureOne />
      <FeatureTwo />
      <Tokenomics />
      <DevSection />
      <RoadMap />
      <FAQ />
      {/* <SocialMediaPromotion /> */}
      {/* <BlogSection /> */}
    </div>
  );
}

export default App;
