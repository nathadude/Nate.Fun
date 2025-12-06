"use client"
import React, { useEffect, useRef } from 'react';
import { Engine, Render, World, Bodies, Runner } from 'matter-js';

// Define the component's default dimensions
const TILE_WIDTH = 400; 
const TILE_HEIGHT = 300;

const PhysicsTest = () => {
  const containerRef = useRef<HTMLDivElement>(null); // Reference to the HTML element

  useEffect(() => {
    // This check is crucial for running the code only in the browser
    if (!containerRef.current) return;

    // 1. Create the Engine
    const engine = Engine.create();
    const world = engine.world;
    
    // 2. Create the Renderer
    const render = Render.create({
      element: containerRef.current, // The key: tell Matter.js to draw here
      engine: engine,
      options: {
        width: TILE_WIDTH,
        height: TILE_HEIGHT,
        wireframes: false, 
        background: 'transparent', // Make the physics background transparent
        // Use colors that contrast with your dark background
        // We'll set the fill color on the bodies themselves
      }
    });

    // 3. Create Bodies (The Box and the Ground)
    // The ground is static (immovable)
    const ground = Bodies.rectangle(TILE_WIDTH / 2, TILE_HEIGHT - 20, TILE_WIDTH, 40, { 
      isStatic: true,
      render: { fillStyle: '#6A6A6A' } // Dark gray ground
    });

    // The falling box
    const box = Bodies.rectangle(TILE_WIDTH / 2, 50, 50, 50, {
      restitution: 0.8, // Make it a bit bouncy
      render: { fillStyle: '#4BC0D9' } // Bright blue box
    });

    // 4. Add the bodies to the world
    World.add(world, [ground, box]);
    
    // 5. Run the Engine and Renderer
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // 6. Cleanup Function (Crucial for React!)
    // When the component unmounts, stop the engine and clean up the DOM
    return () => {
      Render.stop(render);
      World.clear(engine.world, false);
      Engine.clear(engine);
      if (containerRef.current && render.canvas) {
        render.canvas.remove();
      }
    };
  }, []); // Empty dependency array ensures it runs once on mount

  // The component returns a div that Matter.js will attach its canvas to
  return (
    <div 
      ref={containerRef} 
      className="w-full h-full" 
      style={{ 
        width: TILE_WIDTH, 
        height: TILE_HEIGHT 
      }} 
    />
  );
};

export default PhysicsTest;