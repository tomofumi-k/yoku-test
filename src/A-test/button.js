import React from "react";

const button=(onClick,text)=>{
  return(
    <button onclick={onClick}>
      {text}
    </button>
  )
}

export default button;