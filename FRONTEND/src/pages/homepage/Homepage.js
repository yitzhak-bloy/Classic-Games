import ListGames from "../../components/homepage-components/listGame/ListGames";
import "./Homepage.css";
import gameboy from "../../svg/gameboy.svg";

const Homepage = () => {
  return (
    <>
      <div className='initial-site-view'>
        <div className='contect-site-view'>
          <h1>Welcome to ClassicGames</h1>
          <h3>A whole world of classic games</h3>
        </div>
        <img className='gameboy' src={gameboy} alt='gameboy' />
      </div>
      <ListGames />
    </>
  );
};

export default Homepage;
