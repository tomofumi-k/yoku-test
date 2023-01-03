import React from "react";

const button=(onclick,text)=>{
  return(
    <button onclick={onclick}>
      {text}
    </button>
  )
}

export default button;