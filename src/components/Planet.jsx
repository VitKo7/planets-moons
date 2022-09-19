const Planet = ({ title, circles }) => {

  const showOrbits = () => {
    if (!circles.length) return null;

    return circles.map((circle, index) => {
      return <div key={circle} className='orbit'
        style={{ width: `${110 + (index * 15)}px`, height: `${110 + (index * 15)}px` }}
      />;
    });
  };

  return (
    <div className='planet'>
      <span>
        {title}
        <span className='quantity'> {circles.length ? circles.length : null} </span>
      </span>
      {showOrbits()}
    </div>
  )
}

export default Planet