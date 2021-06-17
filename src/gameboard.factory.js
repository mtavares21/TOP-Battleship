function Gameboard () {
  let curBoard = createBoard_()
  const ships = []
  // Create empty board
  function createBoard_  (){
    // Create empty board
    let board = [];
    for (let i = 0; i < 10; i++) {
      board.push(Array(10).fill(null));
    }
    // Populate with object of cell info
   board = board.map( (item, l)=>{ 
   return item.map( (cell, c)=>{ 
        return Object.assign({},{
                    coord:{
                      lin:l,
                      col:c
                    },
                    ship:null,
                    missed:false
                    })
    })
})
    return board;
  };
  // Place ship in coordinates
  const placeShip = (coord, ship) => {
    for (let i = 0; i < coord.col.length; i++) {
      curBoard[coord.lin[i]][coord.col[i]].ship = ship;
    }
    ships.push({...ship, ...coord})
    return curBoard;
  };
  // Check if attack is missed
  const attackIsMissed_ = (coord) => {
    return curBoard[coord.lin][coord.col].ship === null ? true : false;
  };
  // Receive attack is
  const receiveAttack = (coord) => {
    if(attackIsMissed_(coord)){
      curBoard[coord.lin][coord.col].missed = true
    } else { 
      curBoard[coord.lin][coord.col].ship.hit()
      }
  };
  // Check if all ships are sunk
  const allSunk = () => {
    const sumDamage = ships.map( ship => ship.damage)
                            .reduce( (prev,cur)=>prev+cur,0)
    return ships.length>0 && sumDamage===0 ? true : false 
  }
  return { 
    get getBoard(){return curBoard},
    placeShip,
    receiveAttack,
    allSunk
  }
}


export default Gameboard;
