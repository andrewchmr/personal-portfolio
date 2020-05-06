import React, {useCallback, useEffect, useRef} from "react";
import p5 from "p5";
import './AsteroidsBackground.scss';
import {Asteroid} from "./Asteroid/Asteroid";

export const AsteroidsBackground = () => {
    const p5Ref = useRef<HTMLDivElement>(null);

    const sketch = useCallback((p: p5) => {
        let asteroids: Asteroid[] = [];
        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight);
            for (let i = 0; i < 20; i++) {
                asteroids.push(new Asteroid(p));
            }
        };

        p.draw = () => {
            p.background('#121212');
            for (let i = asteroids.length - 1; i >= 0; i--) {
                asteroids[i].render();
                asteroids[i].update();
                asteroids[i].edges();
                handleMouseMove(asteroids[i], i);
            }
        };

        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };

        const handleMouseMove = (a: Asteroid, index: number) => {
            if (a.isOver(p.mouseX, p.mouseY)) {
                if (a.r > 10) {
                    const newAsteroids = a.breakup();
                    asteroids = asteroids.concat(newAsteroids);
                }
                asteroids.splice(index, 1);
            }
        }
    }, []);

    useEffect(() => {
        if (p5Ref && p5Ref.current) {
            const canvas = new p5(sketch, p5Ref.current);
            return () => canvas.remove();
        }
    }, [sketch]);

    return (
        <div ref={p5Ref}/>
    )
};