import "./MatchingCardBoard.css"

import Card from '../card/Card'

const MatchingCardBoard = () => {
  let index = [...Array(16).keys()];
  console.log("🚀 ~ file: MatchingCardBoard.js ~ line 3 ~ MatchingCardBoard ~ index", index)

  const arrayCard = [
    {
      index: 0,
      color: 'green'
    }, 
    {
      index: 1,
      color: 'green'
    },
    {
      index: 2,
      color: 'red'
    },
    {
      index: 3,
      color: 'red'
    },
    {
      index: 4,
      color: 'blue'
    },
    {
      index: 5,
      color: 'blue'
    },
    {
      index: 6,
      color: 'yellow'
    },
    {
      index: 7,
      color: 'yellow'
    },
    {
      index: 8,
      color: 'pink'
    }, 
    {
      index: 9,
      color: 'pink'
    },
    {
      index: 10,
      color: 'orange'
    },
    {
      index: 11,
      color: 'orange'
    },
    {
      index: 12,
      color: 'purple'
    },
    {
      index: 13,
      color: 'purple'
    },
    {
      index: 14,
      color: 'brown'
    },
    {
      index: 15,
      color: 'brown'
    },
  ]
  
  return (
    <div className='MatchingCard__board'>
      <div className='MatchingCard__squares'>
      {
        arrayCard.map((i) => <Card className='MatchingCard__square' key={i.index} color={i.color} />)
      }
      </div>
    </div>
  )
};

export default MatchingCardBoard;
