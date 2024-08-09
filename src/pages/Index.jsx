import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import { Button } from "@/components/ui/button";
import { Heart, X } from "lucide-react";

const babyNames = [
  "Olivia", "Liam", "Emma", "Noah", "Ava", "Elijah", "Charlotte", "William", "Sophia", "James",
  "Amelia", "Benjamin", "Isabella", "Lucas", "Mia", "Henry", "Evelyn", "Alexander", "Harper", "Michael"
];

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(babyNames.length - 1);
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete, index) => {
    console.log('removing: ' + nameToDelete + ' to the ' + direction);
    setLastDirection(direction);
    setCurrentIndex(index - 1);
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100">
      <h1 className="text-4xl font-bold mb-8 text-pink-500">Kinder</h1>
      <div className="relative w-80 h-80 mb-8">
        {babyNames.map((name, index) => (
          <TinderCard
            key={name}
            onSwipe={(dir) => swiped(dir, name, index)}
            onCardLeftScreen={() => outOfFrame(name)}
            preventSwipe={['up', 'down']}
          >
            <div className="absolute bg-white rounded-lg shadow-md w-80 h-80 flex items-center justify-center border-4 border-blue-200">
              <h2 className="text-3xl font-semibold text-blue-500">{name}</h2>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="flex space-x-4">
        <Button
          onClick={() => swiped('left', babyNames[currentIndex], currentIndex)}
          variant="outline"
          size="icon"
          className="bg-red-100 hover:bg-red-200"
        >
          <X className="h-6 w-6 text-red-500" />
        </Button>
        <Button
          onClick={() => swiped('right', babyNames[currentIndex], currentIndex)}
          variant="outline"
          size="icon"
          className="bg-green-100 hover:bg-green-200"
        >
          <Heart className="h-6 w-6 text-green-500" />
        </Button>
      </div>
      {lastDirection && (
        <h2 className="mt-4 text-xl">You swiped {lastDirection}</h2>
      )}
    </div>
  );
};

export default Index;
