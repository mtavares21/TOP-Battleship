import React from "react";

function Dock({ children }) {
  return (
    <div>
      <h1 style={{color:'white', textAlign:'center'}}>dock</h1>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center",
        alignSelf:'center',
        width: "200px",
        height: "260px",
        backgroundColor: "white",
      }}
    >
      {children}
    </div>
    </div>
  );
}

export default Dock;
