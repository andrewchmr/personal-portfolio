import React, {useCallback, useEffect, useRef} from "react";
import {Asteroid} from "./Asteroid";
import p5 from "p5";

const ASTEROIDS_NUMBER = 20;
const BG_COLOR = '#121212';

export const AsteroidsBackground = () => {
    const p5Ref = useRef<HTMLDivElement>(null);

    const sketch = useCallback((p: p5) => {
        let asteroids: Asteroid[] = [];
        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight);
            for (let i = 0; i < ASTEROIDS_NUMBER; i++) {
                asteroids.push(new Asteroid(p));
            }
        };

        p.draw = () => {
            p.background(BG_COLOR);
            for (let i = asteroids.length - 1; i >= 0; i--) {
                asteroids[i].render();
                asteroids[i].update();
                asteroids[i].edges();
                handleMouseMove(asteroids[i], i);
            }
        };

        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
            for (let i = asteroids.length - 1; i >= 0; i--) {
                if (p.windowWidth < 800 && asteroids[i].r > 10) {
                    const newAsteroids = asteroids[i].breakup(true);
                    asteroids = asteroids.concat(newAsteroids);
                    asteroids.splice(i, 1);
                }
            }
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
            const p5 = require("p5");
            const canvas = new p5(sketch, p5Ref.current);
            return () => canvas.remove();
        }
    }, [sketch]);

    return (
        <div ref={p5Ref}/>
    )
};