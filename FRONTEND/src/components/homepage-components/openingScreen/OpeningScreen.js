import gameboy from "../../../svg/gameboy.svg";

import "./OpeningScreen.css";

const OpeningScreen = () => {
  return (
    <div className='initial-site-view'>
      <div className='contect-site-view'>
        <h1>Welcome to ClassicGames</h1>
        <h3>A whole world of classic games</h3>
      </div>
      <img className='gameboy' src={gameboy} alt='gameboy' />
    </div>
  );
};

export default OpeningScreen;
