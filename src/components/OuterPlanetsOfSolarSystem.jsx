import PlanetarySystem from './PlanetarySystem'
import { planets, moons } from '../data/mockData'

const OuterPlanetsOfSolarSystem = () => {
  return (
    <div>
      {planets.map(planet => (
        <PlanetarySystem key={planet.id} planet={planet} moons={moons.filter(moon => moon.planetId === planet.id)} />
      ))}
    </div>
  )
}

export default OuterPlanetsOfSolarSystem