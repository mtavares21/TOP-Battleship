import shipFactory from './ship.factory';

describe( 'Ship Factory Tests', () =>{

    test( 'Factory returns an Object', () =>{
        expect(shipFactory()).toBeInstanceOf(Object)
    })
    test( 'Factory returns an Object with correct props', () =>{
        expect(shipFactory()).toHaveProperty('damage')
        expect(shipFactory()).toHaveProperty('length')
        expect(shipFactory()).toHaveProperty('hit')
        expect(shipFactory()).toHaveProperty('isSunk')
    })
    
    describe( 'Ship Length', () =>{
        test( 'length 3', () => {
            expect(shipFactory(3).length).toBe(3)
        })
        test( 'length 5', () => {
            expect(shipFactory(5).length).toBe(5)
        })
        test( 'length 0', () => {
            expect(shipFactory(0).length).toBe(null)
        })
        test( 'length 10', () => {
            expect(shipFactory(10).length).toBe(null)
        })
    })
    describe('Ship Hit Method', () =>{
        test('Ship hit', () => {
            const ship = shipFactory(3)
            ship.hit()
            expect(ship.damage).toBe(2)
        })
        test('Ship hit limit higth', () => {
            const ship = shipFactory(5)
            ship.hit()
            expect(ship.damage).toEqual(4)
        })
        test('Several hits', () => {
            const ship = shipFactory(5)
            ship.hit()
            ship.hit()
            ship.hit()
            ship.hit()
            expect(ship.damage).toBe(1)
        })
    })
    describe('Ship isSunk method', () => {
        test('Small ship is sunk', () =>{
            const ship = shipFactory(1)
            ship.hit()
            expect(ship.isSunk()).toBeTruthy()
        })
        test('Small ship is NOT sunk', () =>{
            const ship = shipFactory(1)
            expect(ship.isSunk()).toBeFalsy()
        })
        test('Big ship is sunk', () =>{
            const ship = shipFactory(5)
            ship.hit()
            ship.hit()
            ship.hit()
            ship.hit()
            ship.hit()
            expect(ship.isSunk()).toBeTruthy()
        })
        test('Big ship is NOT sunk', () =>{
            const ship = shipFactory()
            expect(ship.isSunk()).toBeFalsy()
        })
    })
})
