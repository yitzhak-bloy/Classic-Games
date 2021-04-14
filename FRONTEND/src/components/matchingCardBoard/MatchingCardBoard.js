import "./MatchingCardBoard.css"

import Card from '../card/Card'

const MatchingCardBoard = () => {
  let index = [...Array(36).keys()];
  console.log("🚀 ~ file: MatchingCardBoard.js ~ line 3 ~ MatchingCardBoard ~ index", index)
  

  return (
    <div className='MatchingCard__board'>
      <div className='MatchingCard__squares'>
      {
        index.map((i) => {
          return (
            <Card className='MatchingCard__square' key={i}/>
          )
        })
      }
      </div>
    </div>
  )
};

export default MatchingCardBoard;
