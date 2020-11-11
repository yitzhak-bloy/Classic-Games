import './Square.css'

const Square = ({ state, keys, clickHandler }) => {  
  const handler = () => {
    clickHandler(keys)
  }
   
  return (
    <div onClick={handler} className='square'>
      <h1>{state}</h1>
    </div>
  )
};

export default Square;