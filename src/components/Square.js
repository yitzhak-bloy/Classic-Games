import './Square.css'

const Square = ({ state, clickHandler }) => {
  const key = Object.keys(state)[0];
  const handler = () => {
    clickHandler(key)
  }
   
  return (
    <div onClick={handler} className='square'>
      <h2>{state[key]}</h2>
    </div>
  )
};

export default Square;