import React, { useState } from 'react';
import Card from './Card';

function Putovanja (){
 

  const [putovanja, setPutovanja] = useState([
    {
      id: 1,
      naziv: 'Putovanje u Pariz',
      slika: 'https://fantast.rs/media/k2/items/cache/9267284e7733f4bec00d2e114d3f3ba1_L.jpg',
      opis: 'Posjetite prekrasan Pariz i istražite sve čari ovog grada svjetlosti!',
      cena: 1500
    },
    {
      id: 2,
      naziv: 'Putovanje u Rim',
      slika: 'https://stavideti.com/img/italija/rim/koloseum-1.jpg',
      opis: 'Otkrijte najbolju hranu i vino u Rimu i posjetite povijesne znamenitosti ovog fascinantnog grada.',
      cena: 1200
    },
    {
      id: 3,
      naziv: 'Putovanje u Tokio',
      slika: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOS7p50JhzL45RoXgqth8fwNWJ9_FRHau-F2hXbk8B-JJSzEVPGPAAMlTMp97w6E7sNFE&usqp=CAU',
      opis: 'Istražite futuristički Tokio i uživajte u japanskoj kulturi i kuhinji.',
      cena: 2000
    },
    {
      id: 4,
      naziv: 'Putovanje na Havaje',
      slika: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1WH-vqo38LopdUV7HvknJuSsQiWb6T5okMMQNTv27bpSKvu7KLBzj3Kmjs8Hf6DzF54&usqp=CAU',
      opis: 'Odmorite se na prekrasnim plažama Havaja i uživajte u sunčanju, surfanju i snorklanju.',
      cena: 2500
    },
    {
      id: 5,
      naziv: 'Putovanje u Cape Town',
      slika: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYLc8HWILUkTgMNIEbOCDs5I4WDbyzrWWwhgQcVXhd4M4LdamBTCb7bYmDv_zjAQEJW6E&usqp=CAU',
      opis: 'Upoznajte afričku kulturu i divite se prekrasnim pejzažima Cape Town-a.',
      cena: 1800
    }
  ]);
  const [minCena, setMinCena] = useState(0);
  const [maxCena, setMaxCena] = useState(3000);
  const promeniMinCenu = (e) => {
    setMinCena(e.target.value);
  };
  
  const promeniMaxCenu = (e) => {
    setMaxCena(e.target.value);
  };
  const filtriranaPutovanja = putovanja.filter(
    (putovanje) =>
      putovanje.cena >= minCena && putovanje.cena <= maxCena
  );

  const [sort, setSort] = useState('cena'); // početno sortiranje po ceni
  const sortiranaPutovanja = filtriranaPutovanja.sort((a, b) => {
    if (sort === 'cena') {
      return a.cena - b.cena;
    } else if (sort === 'naziv') {
      return a.naziv.localeCompare(b.naziv);
    } else {
      return 0;
    }
  });

  return (
    <>
      <div className='filteri'>
        <label htmlFor="min-cena">Minimalna cena:</label>
        <input
          type="number"
          id="min-cena"
          value={minCena}
          onChange={promeniMinCenu}
        />
       
        <label htmlFor="max-cena">Maksimalna cena:</label>
        <input
          type="number"
          id="max-cena"
          value={maxCena}
          onChange={promeniMaxCenu}
        />
       
        <label htmlFor="sortiraj-po">Sortiraj po:</label>
        <select
          id="sortiraj-po"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="cena">Ceni</option>
          <option value="naziv">Nazivu</option>
        </select>
      </div>
      <div className="putovanja">
      {sortiranaPutovanja.map((p) => (
        <Card key={p.id} putovanje={p} />
      ))}
    </div></>
    );
   
}

export default Putovanja;
