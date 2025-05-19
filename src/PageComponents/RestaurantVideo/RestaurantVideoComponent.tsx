import React, { useRef, useState, useCallback } from 'react';
import { PauseIcon, PlayIcon } from '@public/dummyData/Icons';
import { Styles } from './Styles';
import { Wrapper } from '@src/Components/Wrapper';
import { Button } from '@src/Components/Button';

const RestaurantVideoComponent: React.FC = () => {
  const videoSrc = '/assets/restaurant-video.mp4';
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const togglePlayPause = useCallback(() => {
    if (!videoRef.current) return;

    try {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => {
          console.error('Video playback error:', error);
          setHasError(true);
        });
      }
      setIsPlaying((prev) => !prev);
    } catch (error) {
      console.error('Error toggling video playback:', error);
      setHasError(true);
    }
  }, [isPlaying]);

  const handleVideoError = useCallback(() => {
    setHasError(true);
  }, []);

  return (
    <div className={`${Styles.restaurant_video}`}>
      {hasError ? (
        <div className="error-message" role="alert">
          Unable to load video. Please try again later.
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            className="absolute z-20 w-full h-full object-cover"
            autoPlay={isPlaying}
            loop
            muted
            playsInline
            onError={handleVideoError}
            aria-label="Restaurant promotional video">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Button
            onClick={togglePlayPause}
            styles={Styles.restaurant_video_button}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            type="button">
            {isPlaying ? <PauseIcon aria-hidden="true" /> : <PlayIcon aria-hidden="true" />}
          </Button>
        </>
      )}
    </div>
  );
};

export default RestaurantVideoComponent;
