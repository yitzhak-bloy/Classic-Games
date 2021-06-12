import CardGame from "../cord-game/CardGame";

const listGame = [
  { name: "TicTacToe game", link: "/ticTacToe" },
  { name: "Snake game", link: "/snake" },
  { name: "Matching-Card game", link: "/matchingCard" },
];

const ListGame = () => {
  return (
    <>
      {listGame.map((game) => (
        <CardGame name={game.name} link={game.link} />
      ))}
    </>
  );
};

export default ListGame;
