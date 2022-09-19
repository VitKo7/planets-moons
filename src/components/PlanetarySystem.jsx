import { useState } from 'react'
import cn from 'classnames';
import Planet from './Planet';

const PlanetarySystem = ({ planet, moons }) => {
  const [moonsCount, setMoonsCount] = useState([]);

  const handleClick = (id) => {
    if (moonsCount.includes(id)) {
      setMoonsCount([...moonsCount.filter(item => item !== id)]);
    } else {
      setMoonsCount([...moonsCount, id])
    }
  }

  return (
    <div className='planetary_system'>
      <Planet title={planet.title} circles={moonsCount} />
      <div className='moons'>
        {
          moons.map(moon => (
            <div key={moon.id} className={cn('moon', { selected: moonsCount.includes(moon.id) })}
              onClick={() => handleClick(moon.id)}>
              {moon.title}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PlanetarySystem