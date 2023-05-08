import React, { useState } from 'react';
import Card from './Card';

function Putovanja (){
 

  const [putovanja, setPutovanja] = useState([
    {
      id: 1,
      naziv: 'Putovanje u Pariz',
      slika: 'https://fantast.rs/media/k2/items/cache/9267284e7733f4bec00d2e114d3f3ba1_L.jpg',
      opis: 'Posjetite prekrasan Pariz i istražite sve čari ovog grada svjetlosti!',
      cena: '1,500 EUR'
    },
    {
      id: 2,
      naziv: 'Putovanje u Rim',
      slika: 'https://stavideti.com/img/italija/rim/koloseum-1.jpg',
      opis: 'Otkrijte najbolju hranu i vino u Rimu i posjetite povijesne znamenitosti ovog fascinantnog grada.',
      cena: '1,200 EUR'
    },
    {
      id: 3,
      naziv: 'Putovanje u Tokio',
      slika: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOS7p50JhzL45RoXgqth8fwNWJ9_FRHau-F2hXbk8B-JJSzEVPGPAAMlTMp97w6E7sNFE&usqp=CAU',
      opis: 'Istražite futuristički Tokio i uživajte u japanskoj kulturi i kuhinji.',
      cena: '2,000 EUR'
    },
    {
      id: 4,
      naziv: 'Putovanje na Havaje',
      slika: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1WH-vqo38LopdUV7HvknJuSsQiWb6T5okMMQNTv27bpSKvu7KLBzj3Kmjs8Hf6DzF54&usqp=CAU',
      opis: 'Odmorite se na prekrasnim plažama Havaja i uživajte u sunčanju, surfanju i snorklanju.',
      cena: '2,500 EUR'
    },
    {
      id: 5,
      naziv: 'Putovanje u Cape Town',
      slika: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYLc8HWILUkTgMNIEbOCDs5I4WDbyzrWWwhgQcVXhd4M4LdamBTCb7bYmDv_zjAQEJW6E&usqp=CAU',
      opis: 'Upoznajte afričku kulturu i divite se prekrasnim pejzažima Cape Town-a.',
      cena: '1,800 EUR'
    }
  ]);

    return (
      <div className="putovanja">
          {
              putovanja.map((p)=><Card key={p.id} putovanje={p}></Card>)


          }
      </div>
    );
   
}

export default Putovanja;
