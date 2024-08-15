// utils/soundManager.js

const sounds = {
    start: '/sounds/start.mp3',
    complete: '/sounds/complete.mp3',
    whistle: '/sounds/whistle.mp3',
    // Add other sounds here
  };
  
  export const playSound = (soundName) => {
    const soundUrl = sounds[soundName];
    if (soundUrl) {
      const audio = new Audio(soundUrl);
      audio.play().catch(error => console.error(`Error playing sound ${soundName}:`, error));
    } else {
      console.error(`Sound "${soundName}" not found.`);
    }
  };
  