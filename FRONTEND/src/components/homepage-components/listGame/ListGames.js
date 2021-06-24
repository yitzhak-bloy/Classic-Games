import CardGame from "../cord-game/CardGame";
import "./ListGames.css";

const listGames = [
  { name: "TicTacToe", link: "/ticTacToe" },
  { name: "Snake", link: "/snake" },
  { name: "Matching-Card", link: "/matchingCard" },
  // { name: "Coming soon!", link: "/" },
];

const ListGames = () => {
  return (
    <ul className='list-game'>
      {listGames.map((game) => (
        <li key={game.name}>
          <CardGame name={game.name} link={game.link} />
        </li>
      ))}
    </ul>
  );
};

export default ListGames;
