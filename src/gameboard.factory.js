function Gameboard () {
  let curBoard = createBoard_()
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
        return Object.assign({
                    coord:{
                      lin:l,
                      col:c
                    },
                    ship:null,
                    missed:false,
                    wasHit:false,
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
      curBoard[coord.lin][coord.col].wasHit = true
      }
  };
  // Check if all ships are sunk
  const allSunk = () => {
    const cellsWithShip = curBoard
                        .flatMap( cell => cell)
                        .filter( cell => cell.ship !== null)
    const sumDamage = cellsWithShip
                        .map( cell => cell.ship.damage)
                        .reduce( (prev,cur)=>prev+cur,0)
    return cellsWithShip.length>0 && sumDamage===0 ? true : false 
  }
  // Remove all ships
  const reset =() => {
    curBoard = createBoard_()
  }
  return { 
    get getBoard(){return curBoard},
    placeShip,
    receiveAttack,
    allSunk,
    reset
  }
}


export default Gameboard;
