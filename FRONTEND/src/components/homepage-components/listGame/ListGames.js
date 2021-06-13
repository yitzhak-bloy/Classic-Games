import CardGame from "../cord-game/CardGame";
import "./ListGames.css";

const listGames = [
  { name: "TicTacToe", link: "/ticTacToe" },
  { name: "Snake", link: "/snake" },
  { name: "Matching-Card", link: "/matchingCard" },
];

const ListGames = () => {
  return (
    <div className='list-game'>
      {listGames.map((game) => (
        <CardGame name={game.name} link={game.link} />
      ))}
    </div>
  );
};

export default ListGames;
