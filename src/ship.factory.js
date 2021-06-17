

function shipFactory (length) {
    let [damage, setDamage] = [length, (newDamage)=> damage=newDamage]
// hit() takes a number and marks position as hit
    const hit = () => {
        const newDamage = damage-1
        setDamage(newDamage)
    return damage
    }
// isSunk() calculates if the ship is sunk based on length and hit positions
    const isSunk = () => {
        return damage === 0
    }
   return Object.assign({}, {
            damage,
            length: length && length>0 && length<=5? length: null,
            hit,
            isSunk
            } 
        )
}

export default shipFactory