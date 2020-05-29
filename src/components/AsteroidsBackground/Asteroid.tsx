import p5, {Vector} from "p5";

export class Asteroid {
    p: p5;
    vel: Vector;
    total: number;
    offset: number[];
    pos: Vector;
    r: number;

    constructor(p: p5, pos?: Vector, r?: number, vel?: Vector) {
        this.p = p;
        this.pos = pos ? pos.copy() : this.getRandomPosition();
        this.r = r ? r * 0.25 : this.getRandomRadius();
        this.vel = this.getRandomVelocity(vel);
        this.total = p.floor(p.random(5, 15));
        this.offset = this.getRandomOffset();
    }

    public update() {
        this.pos.add(this.vel);
    };

    public render() {
        const p = this.p;
        p.push();
        p.stroke(100);
        p.noFill();
        p.translate(this.pos.x, this.pos.y);
        p.beginShape();
        this.setVertices();
        p.endShape(this.p.CLOSE);
        p.pop();
    };

    public breakup(scaleRadius?: boolean) {
        return [...Array(4)].map(
            () => new Asteroid(this.p, this.pos,
                scaleRadius ? this.p.random(5, 10) * 1.25 : this.r, this.vel));
    };

    public isOver(x: number, y: number) {
        const d = this.p.dist(this.pos.x, this.pos.y, x, y);
        return d < this.r + 20;
    };

    public edges() {
        const width = this.p.width;
        const height = this.p.height;
        if (this.pos.x > width + this.r) {
            this.pos.x = -this.r;
        } else if (this.pos.x < -this.r) {
            this.pos.x = width + this.r;
        }
        if (this.pos.y > height + this.r) {
            this.pos.y = -this.r;
        } else if (this.pos.y < -this.r) {
            this.pos.y = height + this.r;
        }
    }

    private getRandomRadius() {
        const p = this.p;
        if (p.windowWidth < 768) {
            return p.random(1, 10);
        } else {
            return p.random(20, 70);
        }
    }

    private getRandomVelocity(vel: Vector | undefined) {
        const Vector = require("p5").Vector;
        const v = Vector.random2D();
        return vel ? Vector.mult(v, 0.5) : Vector.mult(v, 0.25);
    }

    private getRandomPosition() {
        const p = this.p;
        const randomX = p.random(p.width);
        const randomY = p.random(p.height);
        return p.createVector(randomX, randomY);
    }

    private getRandomOffset() {
        const offset = [];
        for (let i = 0; i < this.total; i++) {
            offset[i] = this.p.random(-this.r * 0.5, this.r * 0.5);
        }
        return offset;
    }

    private setVertices() {
        const p = this.p;
        for (let i = 0; i < this.total; i++) {
            const angle = p.map(i, 0, this.total, 0, p.TWO_PI);
            const r = this.r + this.offset[i];
            const x = r * p.cos(angle);
            const y = r * p.sin(angle);
            p.vertex(x, y);
        }
    }
}