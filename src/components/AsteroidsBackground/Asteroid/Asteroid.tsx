import p5, {Vector} from "p5";

export class Asteroid {
    p: p5;
    vel: Vector;
    total: number;
    offset: number[];
    pos: Vector;
    r: number;

    constructor(p: p5, pos?: Vector, r?: number) {
        this.p = p;
        if (pos) {
            this.pos = pos.copy();
        } else {
            this.pos = p.createVector(p.random(p.width), p.random(p.height))
        }
        if (r) {
            this.r = r * 0.25;
        } else {
            this.r = p.random(15, 50);
        }
        this.vel = p5.Vector.random2D();
        this.total = p.floor(p.random(5, 15));
        this.offset = [];
        for (let i = 0; i < this.total; i++) {
            this.offset[i] = p.random(-this.r * 0.5, this.r * 0.5);
        }
    }

    public update() {
        this.pos.add(this.vel);
    };

    public render() {
        const p = this.p;
        p.push();
        p.stroke(150);
        p.noFill();
        p.translate(this.pos.x, this.pos.y);
        p.beginShape();
        for (let i = 0; i < this.total; i++) {
            const angle = p.map(i, 0, this.total, 0, p.TWO_PI);
            const r = this.r + this.offset[i];
            const x = r * p.cos(angle);
            const y = r * p.sin(angle);
            p.vertex(x, y);
        }
        p.endShape(this.p.CLOSE);
        p.pop();
    };

    public breakup() {
        const p = this.p;
        return [new Asteroid(p, this.pos, this.r),
            new Asteroid(p, this.pos, this.r),
            new Asteroid(p, this.pos, this.r),
            new Asteroid(p, this.pos, this.r)];
    };

    public isOver(x: number, y: number) {
        const p = this.p;
        const d = p.dist(this.pos.x, this.pos.y, x, y);
        return d < this.r;
    };

    public edges() {
        const p = this.p;
        if (this.pos.x > p.width + this.r) {
            this.pos.x = -this.r;
        } else if (this.pos.x < -this.r) {
            this.pos.x = p.width + this.r;
        }
        if (this.pos.y > p.height + this.r) {
            this.pos.y = -this.r;
        } else if (this.pos.y < -this.r) {
            this.pos.y = p.height + this.r;
        }
    }

}