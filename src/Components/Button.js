import React from "react";

export default function Button({ value, onClick }) {
  return <input type="button" value={value} onClick={onClick} style={{ 
    width: '120px',
    height: '30px',
    backgroundColor: 'white',
    fontFamily: 'Lobster, cursive',
    fontSize: '15px',
    color:'#757575',
    marginLeft:'20px',
    border: 'none',
    padding:'5px',
    textAlign:'center'
  }} />
}
