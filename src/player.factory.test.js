import Player from "./player.factory";

describe("Player Factory", () => {
  describe("Player has own board",()=>{
    const testPlayer = Player()
    expect(testPlayer.board.getBoard.length).toBe(10)
  })
  describe("Players can atack given oponent", () => {
  // Test outgoing commands: expect to send info
    test("Player1 can atack", () => {
      const receiveAttack = jest.fn();
      const enemy = { receiveAttack };
      const player1 = Player();
      player1.attack(enemy,{ lin: [0], col: [0] });
      expect(receiveAttack.mock.calls.length).toBe(1);
    });
    test("Player2 can attack missed", () => {
      const receiveAttack = jest.fn();
      const enemy = { receiveAttack };
      const player2 = Player();
      player2.attack(enemy,{ lin: [1], col: [1] });
      expect(receiveAttack.mock.calls.length).toBe(1);
    });
    test("Player1 valid atack", () => {
      const receiveAttack = jest.fn();
      const enemy = { receiveAttack };
      const player2 = Player();
      player2.attack(enemy,{ lin: [1], col: [1] });
      expect(receiveAttack.mock.calls[0][0]).toEqual({ lin: [1], col: [1] });
    });
  });
  describe("Computer plays", () => {
    // Computer needs info about missed and successfull atacks
    // Test outgoing commands: expect to send info
    test("Hit play and player gets enemy board a move", () => {
      const receiveAttack = jest.fn();
      const getBoard = [
        ['fakeShip', 'fakeShip', 'fakeShip', 'fakeShip', 'fakeShip', null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ]
      const enemy = { getBoard,
                      receiveAttack 
                     };
      
      const computer = Player();
      computer.play(enemy)
      expect(receiveAttack.mock.calls.length).toBe(1)
    })
  test("Hit play and player calls for attack", () => {
      const getBoard=[
        ['fakeShip', 'fakeShip', 'fakeShip', 'fakeShip', 'fakeShip', null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ]
      const receiveAttack = jest.fn();
      const enemy = { getBoard,
                      receiveAttack 
                     };
      
      const computer = Player();
      computer.play(enemy)
      expect(receiveAttack.mock.calls.length>0).toBeTruthy()
    })
  })
  describe("Hit play and player chooses valid move", () =>{
    test("A message is sent to receiveAttack", () => {
      const getBoard = [
        ['fakeShip', 'fakeShip', 'fakeShip', 'fakeShip', 'fakeShip', null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ]
      const receiveAttack = jest.fn();
      const enemy = { getBoard,
                      receiveAttack 
                     };
      const computer = Player();
      computer.play(enemy)
      expect(receiveAttack.mock.calls.length).toBe(1)
    })
    test("Attack coordinates have col prop", () => {
      const getBoard = [
        ['fakeShip', 'fakeShip', 'fakeShip', 'fakeShip', 'fakeShip', null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ]
      const receiveAttack = jest.fn();
      const enemy = { getBoard,
                      receiveAttack 
                     };
      
      const computer = Player();
      computer.play(enemy)
      expect(receiveAttack.mock.calls[0][0].hasOwnProperty('col')).toBeTruthy()
    })
     test("Attack coordinates have lin prop", () => {
      const getBoard=[
        ['fakeShip', 'fakeShip', 'fakeShip', 'fakeShip', 'fakeShip', null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ]
      const receiveAttack = jest.fn();
      const enemy = { getBoard,
                      receiveAttack 
                     };
      
      const computer = Player();
      computer.play(enemy)
      expect(receiveAttack.mock.calls[0][0].hasOwnProperty('lin')).toBeTruthy()
    })
    test("Attack coordinates have lin prop is a number", () => {
      const receiveAttack = jest.fn();
       const getBoard = [
        ['fakeShip', 'fakeShip', 'fakeShip', 'fakeShip', 'fakeShip', null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ]
      const enemy = { getBoard,
                      receiveAttack 
                     };
     
      const computer = Player();
      computer.play(enemy)
      expect(typeof(receiveAttack.mock.calls[0][0].lin)==="number").toBeTruthy()
    })
   test("Attack coordinates have col prop is a number", () => {
       const getBoard = [
        ['fakeShip', 'fakeShip', 'fakeShip', 'fakeShip', 'fakeShip', null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ]
      const receiveAttack = jest.fn();
      const enemy = { getBoard,
                      receiveAttack 
                     };
     
      const computer = Player();
      computer.play(enemy)
      expect(typeof(receiveAttack.mock.calls[0][0].col)==="number").toBeTruthy()
    })
     test("Attack coordinates for NOT missed NO ship", () => {
      const getBoard = [
        [ null , 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
      ]
      const receiveAttack = jest.fn();
      const enemy = { getBoard,
                      receiveAttack 
                     };
      const computer = Player();
      computer.play(enemy)
      expect(receiveAttack.mock.calls[0][0]).toEqual({lin:0, col:0})
    })
     test("Attack coordinates for NOT missed IS ship", () => {
      const getBoard = [
        [ 'fakeShip' , 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
      ]
      const receiveAttack = jest.fn();
      const enemy = { getBoard,
                      receiveAttack 
                     };
      
      const computer = Player();
      computer.play(enemy)
      expect(receiveAttack.mock.calls[0][0]).toEqual({lin:0, col:0})
    })
        test("Another attack coordinates for NOT missed NO ship", () => {
      const receiveAttack = jest.fn();
      const getBoard = [
        [ 'missed' , 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', null, 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
        ['missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed', 'missed'],
      ]
      const enemy = { getBoard,
                      receiveAttack 
                     };
      const computer = Player();
      computer.play(enemy)
      expect(receiveAttack.mock.calls[0][0]).toEqual({lin:8, col:2})
    })
  })
});