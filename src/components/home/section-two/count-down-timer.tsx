"use client";
import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  d: number;
  h: number;
  m: number;
  s: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
}) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { d: 0, h: 0, m: 0, s: 0 };
    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        d: -Math.floor(Math.abs(difference) / (1000 * 60 * 60 * 24)),
        h: -Math.floor((Math.abs(difference) / (1000 * 60 * 60)) % 24),
        m: -Math.floor((Math.abs(difference) / 1000 / 60) % 60),
        s: -Math.floor((Math.abs(difference) / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div className="flex gap-1 items-center">
      <p className="text-lg font-bold max-w-28">
        HURRY UP! PROMOTION WILL EXPIRE IN
      </p>
      <div className="flex space-x-2 mt-2">
        <div className="bg-gray-200 text-black text-2xl font-bold py-2 px-4 rounded">
          {timeLeft.d}d
        </div>
        <div className="bg-gray-200 text-black text-2xl font-bold py-2 px-4 rounded">
          {timeLeft.h}h
        </div>
        <div className="bg-gray-200 text-black text-2xl font-bold py-2 px-4 rounded">
          {timeLeft.m}m
        </div>
        <div className="bg-gray-200 text-black text-2xl font-bold py-2 px-4 rounded">
          {timeLeft.s}s
        </div>
      </div>
    </div>
  );
};
