import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './Cardvideos.css';

const Card = ({ title, image, videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCardClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="cardvideos" onClick={handleCardClick}>
      {isPlaying ? (
        <ReactPlayer url={videoUrl} controls={true} playing={true} width="100%" height="100%" />
      ) : (
        <>
          <img src={image} alt={title} />
          <h2>{title}</h2>
        </>
      )}
    </div>
  );
};

export default Card;
