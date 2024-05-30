import { useEffect, useState } from 'react';

function useGameOutput({ gameOutput, setCurrentIndex, currentIndex, setHitPlay }) {
    
    useEffect(() => {
        let interval;
        if (currentIndex >= 0 && currentIndex < gameOutput.length) {
            interval = setInterval(() => {
                // change state of index to display output one by one
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, 200);
        }
        setHitPlay(false);
        return () => clearInterval(interval);
    }, [gameOutput, currentIndex]);
}

export default useGameOutput;

function useSelection({ }) {

}