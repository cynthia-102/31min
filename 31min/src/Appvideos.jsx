import React from 'react';
import './Appvideos.css';
import Card from './components/Cardvideos';
import fondo from './assets/fondo.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';
import icon5 from './assets/icon5.png';

const App = () => {
  const cards = [
    { title: 'Nota Verde: La Desertificación', image: icon1, videoUrl: 'https://youtu.be/ouY_LOvaBo0?si=p2oPABJDiWlvDkGu' },
    { title: 'Nota Verde: Camping Resposable', image: icon2, videoUrl: 'https://youtu.be/yW_18ObXg1k?si=cWO_yaGs3JLhtpgI' },
    { title: 'Nota Verde: El Calentamiento Global', image: icon3, videoUrl: 'https://youtu.be/x1IpjJPKoLo?si=JB7ekOa_SrkQfnCI' },
    { title: 'Nota Verde: Incendios Forestales', image: icon4, videoUrl: 'https://youtu.be/6ePjv-DPWVM?si=qPYk_n376O3-6YAB' },
    { title: 'Nota Verde: Humedales', image: icon5, videoUrl: 'https://youtu.be/C2bs_Lo6_mQ?si=150gKm2Cz8aeWaJ_' },
  ];

  const handleButtonClick = () => {
    console.log('Botón clickeado');
  };

  return (
    <div className="appvideos" style={{ backgroundImage: `url(${fondo})` }}>
      <h1>VIDEOS</h1>
      <button className="top-button" onClick={handleButtonClick}>INICIO</button>
      <div className="card-container">
        <div className="card-row">
          {cards.slice(0, 3).map((card, index) => (
            <Card
              key={index}
              title={card.title}
              image={card.image}
              videoUrl={card.videoUrl}
            />
          ))}
        </div>
        <div className="card-row">
          {cards.slice(3).map((card, index) => (
            <Card
              key={index}
              title={card.title}
              image={card.image}
              videoUrl={card.videoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
