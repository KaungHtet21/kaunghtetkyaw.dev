import React from "react";
import './Quote.css'

function Quote({flexValue}) {
  return (
    <div className="quote" style={{flex: flexValue}}>
      <figure>
        <blockquote>
          He swims up to this older fish and says,
          <br />
          "I'm trying to find this thing they call the ocean."
          <br />
          "The ocean?" says the older fish, "that's what you're right now."
          <br />
          "This?" says the younger fish,
          <br />
          "This is water. What I want is the ocean."
        </blockquote>
        <figcaption>&mdash; Dorothea From Soul</figcaption>
      </figure>
    </div>
  );
}

export default Quote;
