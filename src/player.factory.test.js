import Gameboard from "./gameboard.factory";
import Ship from "./ship.factory";
import {Player, randomMove, possibleMoves} from "./player.factory";
import * as _ from 'lodash'

describe("Player board", () => {
  test("Player has board", () => {
    const player = Player(Gameboard());
    expect(player.hasOwnProperty("board")).toBe(true);
  });
  test("Player board as getBoard prop", () => {
    const player = Player(Gameboard());
    expect(player.board.hasOwnProperty("getBoard")).toBe(true);
  });
  test("Player getBoard[0][0]as ship prop", () => {
    const player = Player(Gameboard());
    expect(player.board.getBoard[0][0].hasOwnProperty("ship")).toBe(true);
  });
  test("Player getBoard[9][9] as ship prop", () => {
    const player = Player(Gameboard());
    expect(player.board.getBoard[9][9].hasOwnProperty("ship")).toBe(true);
  });
});
describe("Players attack", () => {
  test("Player can atack ship", () => {
    const enemy = Player(Gameboard());
    const player1 = Player(Gameboard());
    enemy.board.placeShip({ lin: [0, 0], col: [0, 1] }, Ship(2));
    player1.attack(enemy, { lin: 0, col: 0 });
    expect(enemy.board.getBoard[0][0].wasHit).toBe(true);
  });
  test("Player2 can miss attack", () => {
    const enemy = Player(Gameboard());
    const player2 = Player(Gameboard());
    player2.attack(enemy, { lin: 1, col: 1 });
    expect(enemy.board.getBoard[1][1].missed).toBe(true);
  });
});
describe("Computer Moves", () => {
  test('randomMove returns one coord', () => {
    expect(randomMove([{col:1, lin:1},{col:1, lin:2}]).hasOwnProperty('lin')).toBe(true)
    expect(randomMove([{col:1, lin:1},{col:1, lin:2}]).hasOwnProperty('col')).toBe(true)
    expect(randomMove([{col:1, lin:1}])).toEqual({col:1, lin:1})
  })
})
describe('PossibleMoves', () => {
  test('returns array of coordinates', () =>{
    const enemy = {board: 
                    { getBoard:[
                      [{coord:1},{coord:2}],
                      [{coord:3},{coord:4}]
                    ]
                    }
                  }
    expect(possibleMoves(enemy)).toEqual([1,2,3,4])
  })
   test('returns array of NOT MISSED coordinates', () =>{
    const enemy = {board: 
                    { getBoard:[
                      [{coord:1, missed:true},{coord:2, missed:true}],
                      [{coord:3},{coord:4}]
                    ]
                    }
                  }
    expect(possibleMoves(enemy)).toEqual([3,4])
  })
  test('returns array of not hit coordinates', () =>{
    const enemy = {board: 
                    { getBoard:
                    [
                      [{coord:1, wasHit:true},{coord:2, wasHit:true}],
                      [{coord:3, wasHit:true},{coord:4}]
                    ]
                    }
                  }
    expect(possibleMoves(enemy)).toEqual([4])
  })
})
describe("Players play", () => {
  test("Player makes a move", () => {
    const player = Player(Gameboard())
    const enemy = Player(Gameboard())
    const initialEnemyBoard = _.cloneDeep(enemy.board.getBoard)
    player.play(enemy)
    expect(initialEnemyBoard!==enemy.board.getBoard).toBe(true)
  })
    test("Player makes another move", () => {
    const player = Player(Gameboard())
    const enemy = Player(Gameboard())
    const initialEnemyBoard = _.cloneDeep(enemy.board.getBoard)
    player.play(enemy)
    expect(initialEnemyBoard!==enemy.board.getBoard).toBe(true)
  })
})