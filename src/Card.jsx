import React from "react";

const Card = (props) => {
  const { id, name, email } = props;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200X200`} alt={`robot ${id}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
