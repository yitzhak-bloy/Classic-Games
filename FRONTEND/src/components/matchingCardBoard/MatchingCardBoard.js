import "./MatchingCardBoard.css"

const MatchingCardBoard = () => {
  let index = [...Array(36).keys()];
  console.log("🚀 ~ file: MatchingCardBoard.js ~ line 3 ~ MatchingCardBoard ~ index", index)
  

  return (
    <div className='MatchingCard__board'>
      <div className='MatchingCard__squares'>
      {
        index.map((i) => {
          return (
            <div className='MatchingCard__square' key={i}>
              {/* {i} */}
            </div>
          )
        })
      }
      </div>
    </div>
  )
};

export default MatchingCardBoard;
