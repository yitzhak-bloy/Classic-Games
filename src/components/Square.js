import './Square.css'

const Square = ({ state, clickHandler }) => {
  const handler = () => {
    clickHandler(state[0])
  }
   
  return (
    <div onClick={handler} className='square'>
      <h2>{state[1]}</h2>
    </div>
  )
};

export default Square;