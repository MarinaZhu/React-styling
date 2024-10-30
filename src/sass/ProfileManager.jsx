import { useState } from 'react';
import Card from './Card';
import { profiles } from '../data';

const useProfileManager = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const handleSwipe = (direction) => {
    setSwipeDirection(direction);
    setTimeout(() => {
      setCurrentProfileIndex((prevIndex) => prevIndex + 1);
      setSwipeDirection(null);
    }, 500); // Wait for the animation to complete before moving to the next profile
  };

  const currentProfile = profiles[currentProfileIndex];

  return { currentProfile, swipeDirection, handleSwipe };
};

const ProfileManager = () => {
  const { currentProfile, swipeDirection, handleSwipe } = useProfileManager();

  return (
    <>
      {currentProfile ? (
        <Card
          profile={currentProfile}
          onSwipe={handleSwipe}
          swipeDirection={swipeDirection}
        />
      ) : (
        <p>No more profiles</p>
      )}
    </>
  );
};

export default ProfileManager;
