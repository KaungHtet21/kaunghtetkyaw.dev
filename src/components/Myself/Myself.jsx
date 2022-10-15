import React from "react";
import "./Myself.css";

function Myself({flexValue}) {
  return (
    <div className="m-wrapper" style={{flex: flexValue}}>
      <div className="glass">
        <h2>Software Developer</h2>
        <p>
          Currently a student at MIIT. Started learning Android Development two
          years and now I'm trying to broaden my knowledge as much as I can. My
          goals are to become a professional Mobile Developer and GDE
          represented by Myanmar. Sometimes I consider myself as very stupid
          because that helps me to be humble and see my weaknesses. And only
          stupid ideas can change the world right?
        </p>
      </div>
    </div>
  );
}

export default Myself;
