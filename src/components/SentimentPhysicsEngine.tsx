"use client"
import React, { useEffect, useRef } from 'react';
import { Engine, Render, World, Bodies, Runner, Composite } from 'matter-js';

const TILE_WIDTH = 800; // Increased resolution for the inner canvas
const TILE_HEIGHT = 450;

const SentimentPhysicsEngine = ({ words }: { words: any[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef(Engine.create());
  const renderRef = useRef<Render | null>(null);

  // Initialize Physics ONCE
  useEffect(() => {
    if (!containerRef.current) return;

    const engine = engineRef.current;
    const render = Render.create({
      element: containerRef.current,
      engine: engine,
      options: {
        width: TILE_WIDTH,
        height: TILE_HEIGHT,
        wireframes: false,
        background: 'transparent',
      }
    });

    const ground = Bodies.rectangle(TILE_WIDTH / 2, TILE_HEIGHT + 20, TILE_WIDTH, 60, { isStatic: true });
    const leftWall = Bodies.rectangle(-20, TILE_HEIGHT / 2, 60, TILE_HEIGHT, { isStatic: true });
    const rightWall = Bodies.rectangle(TILE_WIDTH + 20, TILE_HEIGHT / 2, 60, TILE_HEIGHT, { isStatic: true });

    Composite.add(engine.world, [ground, leftWall, rightWall]);

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);
    renderRef.current = render;

    return () => {
      Render.stop(render);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  // Watch for new words and drop them
  useEffect(() => {
    if (words.length === 0) return;

    const latestWord = words[words.length - 1];
    
    // Mapping Sentiment to Physics
    // Positive = Light/Bouncy, Negative = Heavy/Dense
    const isPositive = latestWord.sentiment === 'positive';
    const isNegative = latestWord.sentiment === 'negative';

    const ball = Bodies.rectangle(
      TILE_WIDTH / 2 + (Math.random() * 40 - 20), // Randomize drop x slightly
      50, 
      80, 40, // We'll make these dynamic rectangles for now
      {
        restitution: isPositive ? 0.9 : 0.2, // Bouncy if happy
        friction: 0.5,
        density: isNegative ? 0.05 : 0.001, // Heavy if sad
        render: {
          fillStyle: isPositive ? '#4ade80' : isNegative ? '#f87171' : '#94a3b8',
        }
      }
    );

    Composite.add(engineRef.current.world, ball);
  }, [words]); // This effect runs every time the words array changes

  return <div ref={containerRef} className="w-full h-full" />;
};

export default SentimentPhysicsEngine;