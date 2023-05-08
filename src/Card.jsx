import React from 'react';
 

function Card({putovanje}){
 
    return (
        <div className="card">
        <img src={putovanje.slika} alt={putovanje.naziv} />
        <div className="card-info">
          <h2>{putovanje.naziv}</h2>
          <p>{putovanje.opis}</p>
          <h3>{putovanje.cena}</h3>
        </div>
      </div>
    );
  
}

export default Card;
