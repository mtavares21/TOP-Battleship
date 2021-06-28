const shipFactory = (length) => {

  let damage = length

  const hit = (ship) => ({ 
    hit: ()=> {
        ship.damage--
    }
  })
  // isSunk() calculates if the ship is sunk based on length and hit positions
  const isSunk = (ship) => ({
    isSunk: () => ship.damage === 0
  });

   const ship = {
      damage,
      length: length && length > 0 && length <= 5 ? length : null,
  }
  
  return Object.assign(ship, hit(ship), isSunk(ship) )
};

export default shipFactory;
