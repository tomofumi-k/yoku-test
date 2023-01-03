import React from "react";

const Resources =({resources})=> {
  return(
    <React.Fragment>
      {resources.map((resource)=> (
        <p key={resources.fact}>{resources.string}</p>
      ))}
    </React.Fragment>
  );
};

export default Resources;