import OpeningScreen from "../../components/homepage-components/openingScreen/OpeningScreen";
import ListGames from "../../components/homepage-components/listGame/ListGames";
import Footer from "../../components/homepage-components/footer/Footer";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <OpeningScreen />
      <ListGames />
      <Footer />
    </>
  );
};

export default Homepage;
