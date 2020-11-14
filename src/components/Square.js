import './Square.css'

const Square = ({ state, keys, clickHandler }) => {  
  const handler = () => {
    clickHandler(keys)
  }
  
  return (
    <div onClick={handler} className='square'>
      { state === ("O") || state === ("X") ? <h1>{state}</h1> : null }
    </div>
  )
};

export default Square;