import { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import './Card.css'

const Card = ({ color }) =>  {
  const [flipped, setFlipped] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 15, tension: 300, friction: 80 }
  })

  return (
    <div onClick={() => setFlipped(state => !state)}>
      <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`), backgroundColor: color }} />
    </div>
  )
}

export default Card;