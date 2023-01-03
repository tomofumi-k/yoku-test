import React from "react";

const Resouces =({resouces})=>{
  return(
    <React.Fragment>
      {resouces.map((resouce)=>(
        <p key={resouce.fact}>{resouce.length}</p>
      ))}
    </React.Fragment>
  );
};

export default Resouces;