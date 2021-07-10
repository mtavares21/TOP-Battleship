import React from "react";
import { useDrop } from "react-dnd";
import shipFactory from "../ship.factory";
import { ItemTypes } from "./Constants";

function dropCoord(item, coord) {
  const shipLin = !!item.rotate
    ? Array(Number(item.length))
        .fill(0)
        .map((c, i) => i)
    : Array(Number(item.length)).fill(0);
  const shipCol = !!item.rotate
    ? Array(Number(item.length)).fill(0)
    : Array(Number(item.length))
        .fill(0)
        .map((c, i) => i);
  const shipCoord = {
    lin: shipLin.map((l) => l + coord.lin),
    col: shipCol.map((c) => c + coord.col),
  };
  return shipCoord;
}

export default function Cell({
  color,
  attack,
  coord,
  player,
  setBoard,
  itemType,
  setDock,
}) {
  const Type = () => {
    if (itemType === "P1") {
      return ItemTypes.P1SHIP;
    } else if (itemType === "P2") {
      return ItemTypes.P2SHIP;
    } else {
      return ItemTypes.NOSHIPS;
    }
  };

  // Connect DnD dropTarget to cells
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: Type(),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
      canDrop: (item, monitor) => {
        return (
          !!monitor.isOver() &&
          Math.max(...dropCoord(item, coord).lin) <= 9 &&
          Math.max(...dropCoord(item, coord).col) <= 9 &&
          Math.min(...dropCoord(item, coord).lin) >= 0 &&
          Math.min(...dropCoord(item, coord).col) >= 0
        );
      },
      drop: (item) => {
        setDock((prev) => prev.filter((ship) => ship.key !== item.id))
        player.board.placeShip(
          dropCoord(item, coord),
          shipFactory(item.length)
        );
        setBoard();
      },
    }),
    [coord, player]
  );

  return (
    <div
      ref={drop}
      onClick={attack}
      style={{
        width: "25px",
        height: "25px",
        backgroundColor: isOver ? "#195570" : color,
      }}
    ></div>
  );
}
