import Gameboard from "./gameboard.factory";
import shipFactory from "./ship.factory";

describe("Gameboard Factory", () => {
    // Allow readonly access to current state of the board (query)
    test("Board has correct length", () => {
      const testBoard = Gameboard()
      expect(testBoard.getBoard.length).toEqual(10)
    })
    test("Board cells have correct length", () => {
      const testBoard = Gameboard()
      expect(testBoard.getBoard[0].length).toEqual(10)
      expect(testBoard.getBoard[5].length).toEqual(10)
      expect(testBoard.getBoard[9].length).toEqual(10)
    })
    test("Board cells have coord prop", () => {
      const testBoard = Gameboard()
      expect(testBoard.getBoard[0][0].hasOwnProperty('coord')).toBe(true)
      expect(testBoard.getBoard[5][9].hasOwnProperty('coord')).toBe(true)
      expect(testBoard.getBoard[9][5].hasOwnProperty('coord')).toBe(true)
    })
    test("Board cells have ship prop", () => {
      const testBoard = Gameboard()
      expect(testBoard.getBoard[0][0].hasOwnProperty('ship')).toBe(true)
      expect(testBoard.getBoard[5][9].hasOwnProperty('ship')).toBe(true)
      expect(testBoard.getBoard[9][5].hasOwnProperty('ship')).toBe(true)
    })
    test("Board cells have missed prop", () => {
      const testBoard = Gameboard()
      expect(testBoard.getBoard[0][0].hasOwnProperty('missed')).toBe(true)
      expect(testBoard.getBoard[5][9].hasOwnProperty('missed')).toBe(true)
      expect(testBoard.getBoard[9][5].hasOwnProperty('missed')).toBe(true)
    })
    test("Board cells coord have lin prop", () => {
      const testBoard = Gameboard()
      expect(testBoard.getBoard[0][0].coord.hasOwnProperty('lin')).toBe(true)
      expect(testBoard.getBoard[5][9].coord.hasOwnProperty('lin')).toBe(true)
      expect(testBoard.getBoard[9][5].coord.hasOwnProperty('lin')).toBe(true)
    })
    test("Board cells coord have col prop", () => {
      const testBoard = Gameboard()
      expect(testBoard.getBoard[0][0].coord.hasOwnProperty('lin')).toBe(true)
      expect(testBoard.getBoard[5][9].coord.hasOwnProperty('lin')).toBe(true)
      expect(testBoard.getBoard[9][5].coord.hasOwnProperty('lin')).toBe(true)
    })
    test("Board cells have correct coord", () => {
      const testBoard = Gameboard()
      expect(testBoard.getBoard[0][0].coord).toEqual({lin:0,col:0})
      expect(testBoard.getBoard[5][9].coord).toEqual({lin:5,col:9})
      expect(testBoard.getBoard[9][9].coord).toEqual({lin:9,col:9})
    })
     test("Board cells ships have hit prop", () => {
      const testBoard = Gameboard()
      expect(testBoard.getBoard[0][0].hit).toBe(false)
      expect(testBoard.getBoard[5][9].hit).toBe(false)
      expect(testBoard.getBoard[9][5].hit).toBe(false)
    })
    test("Try change the board directly must fail", () => {
      const testBoard = Gameboard()
      expect( () => testBoard.getBoard = [ 'fakeShip' ]).toThrowError()
    })
    // Place ships in board (command)
    test("Place small ship in board", () => { 
      const testBoard = Gameboard()
      const fakeShip = {length:1}
      testBoard.placeShip({lin:[0], col:[0]}, fakeShip)
       // Test direct side effect
       expect(testBoard.getBoard[0][0].ship).toEqual(fakeShip)
    })
    test("Place big ship in board", () => { 
      const testBoard = Gameboard()
      const fakeShip = {length:5}
      testBoard.placeShip({lin:[0,0,0,0,0], col:[0,1,2,3,4]}, fakeShip)
       // Test direct side effect
       expect(testBoard.getBoard[0][0].ship).toEqual(fakeShip)
       expect(testBoard.getBoard[0][1].ship).toEqual(fakeShip)
       expect(testBoard.getBoard[0][2].ship).toEqual(fakeShip)
       expect(testBoard.getBoard[0][3].ship).toEqual(fakeShip)
       expect(testBoard.getBoard[0][4].ship).toEqual(fakeShip)
    })
    test("Place several ships in board", () => { 
      const testBoard = Gameboard()
      const smallFakeShip = {length:1}
      const bigFakeShip = {length:5}
      testBoard.placeShip({lin:[1], col:[0]}, smallFakeShip)
      testBoard.placeShip({lin:[0,0,0,0,0], col:[0,1,2,3,4]}, bigFakeShip)
       // Test direct side effect
       expect(testBoard.getBoard[1][0].ship).toEqual(smallFakeShip)
       expect(testBoard.getBoard[0][0].ship).toEqual(bigFakeShip)
       expect(testBoard.getBoard[0][1].ship).toEqual(bigFakeShip)
       expect(testBoard.getBoard[0][2].ship).toEqual(bigFakeShip)
       expect(testBoard.getBoard[0][3].ship).toEqual(bigFakeShip)
       expect(testBoard.getBoard[0][4].ship).toEqual(bigFakeShip)
       
    })
    // receiveAttack() sets missed or hit() given some coordinates(), 
    // test if outgoing message is send 
    test("Receive attack missed", () => {
      const testBoard = Gameboard()
      testBoard.receiveAttack({lin:[0], col:[0]})
      expect(testBoard.getBoard[0][0].missed).toBe(true)
    })
    test("Receive another missed attack", () => {
      const testBoard = Gameboard()
      testBoard.receiveAttack({lin:[2], col:[0]})
     expect(testBoard.getBoard[2][0].missed).toBe(true)
    })
    test("Receive attack calls hit", () => {
      const testBoard = Gameboard()
      const hit = jest.fn()
      const fakeShip = { hit }
      testBoard.placeShip({lin:[1], col:[0]}, fakeShip)
      testBoard.receiveAttack({lin:[1], col:[0]})
      expect(hit.mock.calls.length).toBe(1)
    })
     test("Receive another attack calls hit", () => {
      const testBoard = Gameboard()
      const hit = jest.fn()
      const fakeShip = {damage:1, hit}
      testBoard.placeShip({lin:[9], col:[4]}, fakeShip)
      testBoard.receiveAttack({lin:[9], col:[4]})
      expect(hit.mock.calls.length).toBe(1)
    })
    test("Receive attack sets ship damage", () => {
      const testBoard = Gameboard()
      testBoard.placeShip({lin:[0],col:[0]},shipFactory(1))
      testBoard.receiveAttack( {lin:[0],col:[0]} )
      expect(testBoard.getBoard[0][0].ship.damage).toBe(0)
    })
    test("Receive another attack sets ship damage", () => {
      const testBoard = Gameboard()
      testBoard.placeShip({lin:[0,1],col:[0,0]},shipFactory(2))
      testBoard.receiveAttack( {lin:[0],col:[0]} )
      expect(testBoard.getBoard[0][0].ship.damage).toBe(1)
    })
    test("Receive attack hit set hit prop to true", () => {
      const testBoard = Gameboard()
      const hit = jest.fn()
      const fakeShip = { damage:1, hit }
      testBoard.placeShip({lin:[9], col:[4]}, fakeShip)
      testBoard.receiveAttack({lin:[9], col:[4]})
      expect(testBoard.getBoard[9][4].hit).toBe(true)
    })
    test("Receive several attacks on different cells sets damage for entire ship", () => { 
      const testBoard = Gameboard()
      testBoard.placeShip({lin:[0,0,0], col:[0,1,2]}, shipFactory(3))
      testBoard.receiveAttack({lin:[0], col:[0]})
      testBoard.receiveAttack({lin:[0], col:[1]})
      // Test direct side effect
      expect(testBoard.getBoard[0][1].ship.damage).toBe(1)
    })
    // Report if all the ships are sunk()
    test("AllSunk(): No ships", () => {
      const testBoard = Gameboard()
      expect(testBoard.allSunk()).toBe(false)
    })
    test("AllSunk(): No ships sunk", () =>{
      const testBoard = Gameboard()
      const fakeShip1 = { damage: 1 }
      const fakeShip2 = { damage: 3 }
      testBoard.placeShip({col:[1], lin:[1]}, fakeShip1)
      testBoard.placeShip({col:[1,2,3], lin:[3,3,3]}, fakeShip2)
      expect( testBoard.allSunk()).toBe(false)
    })
    test("AllSunk(): All ships sunk", () =>{
      const testBoard = Gameboard()
      const fakeShip1 = { damage: 0 }
      const fakeShip2 = { damage: 0 }
      testBoard.placeShip({col:[1], lin:[1]}, fakeShip1)
      testBoard.placeShip({col:[1,2,3], lin:[3,3,3]}, fakeShip2)
      expect( testBoard.allSunk()).toBe(true)
    })
  });
