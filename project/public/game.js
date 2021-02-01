var canvas = document.getElementsByTagName('canvas')[0];
var context = canvas.getContext('2d');

var playing = true;
var seconds = 0;

var left = false;
var right = false;
var space = false;

const countSeconds = () => {
    seconds++;
}

var intervalId = setInterval(countSeconds, 1000);

const keyDownEvents = (event) => {
    if (event.keyCode == 65) left = true;
    if (event.keyCode == 68) right = true;
}

const keyUpEvents = (event) => {
    if (event.keyCode == 65) left = false;
    if (event.keyCode == 68) right = false;
    if (event.keyCode == 32) space = true;
}

const ENEMY_COUNT = 10;
var enemyRemaining = ENEMY_COUNT * 4;

const ASTEROID_COUNT = 3;
const LOSING_Y = 500;

document.addEventListener('keydown', keyDownEvents, false);
document.addEventListener('keyup', keyUpEvents, false);

class Projectile {
    
    constructor(position)
    {
        this.position = {x: position.x + 35, y: position.y + 10};
        this.speed = 8;
    }

    draw = () => {
        context.fillStyle = "white";
        context.fillRect(this.position.x, this.position.y, 5, 5);
    }

    update = () => {
        this.position.y -= this.speed;
    }
}

projectiles = []

class Asteroid {
    constructor(position, location)
    {
        this.position = position;
        this.image = new Image();
        this.image.src = '1.png';
        this.damage = 1;
        this.location = location;
    }

    draw = () => {
        if (this.damage < 9)
            context.drawImage(this.image, this.position.x, this.position.y, 100, 100);
    }

    update = () => {
        if (this.damage < 9)
        {
            projectiles.forEach((projectile, i) => {
                if (projectile != null && projectile.position.x >= this.position.x && projectile.position.x < this.position.x + 100
                    && projectile.position.y >= this.position.y && projectile.position.y < this.position.y + 100)
                    {
                        this.collision();
                        projectiles[i] = null;
                    }
            });
        }
    }

    collision = () => {
        this.damage++;
        this.image.src = this.damage + '.png';
    }
}

class Ship {

    constructor() {
        this.image.src = 'ship.png';
    }

    image = new Image();

    position = { x: 20, y: 600 };
    speed = 5;

    minX = 20;
    maxX = canvas.width - 20 - 75;

    draw = () => {
        context.drawImage(this.image, this.position.x, this.position.y, 75, 75);
    }

    update = () => {
        if (right && this.position.x < this.maxX)
        {
            this.position.x += this.speed;
        } 
        else if (left && this.position.x > this.minX)
        {
            this.position.x -= this.speed;
        } 

        if (space) {
            projectiles.push(new Projectile(JSON.parse(JSON.stringify(this.position))));
            space = false;
        }
    }
}

class Enemy {

    constructor(position, location) {
        this.image.src = 'enemy.png';
        this.position = position;
        
        this.minX = this.position.x;
        this.maxX = this.position.x + 150;
        this.location = location;
    }

    image = new Image();

    position = { x: 20, y: 600 };
    speed = .5;

    minX = 20;
    maxX = canvas.width - 20 - 75;
    right = true;

    draw = () => {
        context.drawImage(this.image, this.position.x, this.position.y, 40, 40);
    }

    update = () => {
        if (this.right && this.position.x < this.maxX)
        {
            this.position.x += this.speed;
            if (this.position.x >= this.maxX) {
                this.right = !this.right;
                this.position.y += 55;
            }
        }
        else if (!this.right && this.position.x > this.minX)
        {
            this.position.x -= this.speed;
            if (this.position.x <= this.minX) {
                this.right = !this.right;
                this.position.y += 55;
            }
        }

        if (this.position.y >= LOSING_Y)
        {
            playing = false;
            window.location.assign('/loseScreen');
        } 

        projectiles.forEach((projectile, i) => {
            if (projectile != null && projectile.position.x >= this.position.x && projectile.position.x < this.position.x + 40
                && projectile.position.y >= this.position.y && projectile.position.y < this.position.y + 40)
                {
                    this.collision();
                    projectiles[i] = null;
                }
        });
    }

    collision = () => {
        rows[this.location.y][this.location.x] = null;
        enemyRemaining--;
    }

}

var background = new Image();
background.src = 'back.jpg';

var ship = new Ship();

var rows = []

var enemies1 = [];
var enemies2 = [];
var enemies3 = [];
var enemies4 = [];

for (var i = 0; i < ENEMY_COUNT; i++)
{
    enemies1.push(new Enemy({x: 20 + 55 * i, y: 20}, {x:i, y:0}));
    enemies2.push(new Enemy({x: 20 + 55 * i, y: 75}, {x:i, y:1}));
    enemies3.push(new Enemy({x: 20 + 55 * i, y: 130}, {x:i, y:2}));
    enemies4.push(new Enemy({x: 20 + 55 * i, y: 185}, {x:i, y:3}));
}

rows.push(enemies1);
rows.push(enemies2);
rows.push(enemies3);
rows.push(enemies4);

var asteroids = [];

for (var i = 0; i < ASTEROID_COUNT; i++)
{
    asteroids.push(new Asteroid({x: 80 + 235 * i, y: 500}));
}

window.onload = () => {
    window.requestAnimationFrame(gameLoop);
}

const gameLoop = () => {
    
    draw();
    update();

    if (playing)
        window.requestAnimationFrame(gameLoop);
}

const draw = () => {
    /* Draw background */
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    /* Draw ship */
    ship.draw();

    /* Draw enemies */
    enemies1.forEach(enemy => {if (enemy != null) enemy.draw()});
    enemies2.forEach(enemy => {if (enemy != null) enemy.draw()});
    enemies3.forEach(enemy => {if (enemy != null) enemy.draw()});
    enemies4.forEach(enemy => {if (enemy != null) enemy.draw()});

    /* Draw projectiles */
    projectiles.forEach(projectile => {if (projectile != null) projectile.draw()});

    /* Draw asteroids */
    asteroids.forEach(asteroid => asteroid.draw());
}

const update = () => {

    /* Update ship */
    ship.update();

    /* Update enemies */
    enemies1.forEach(enemy => {if (enemy != null) enemy.update()});
    enemies2.forEach(enemy => {if (enemy != null) enemy.update()});
    enemies3.forEach(enemy => {if (enemy != null) enemy.update()});
    enemies4.forEach(enemy => {if (enemy != null) enemy.update()});

    /* Update asteroids */
    asteroids.forEach(asteroid => asteroid.update());

    /* Update projectiles */
    projectiles.forEach(projectile => {if (projectile != null) projectile.update()});
    
    if (enemyRemaining < 1) 
    {
        clearInterval(intervalId);
        enemyRemaining = 1;

        var xhr = new XMLHttpRequest();
        xhr.open("POST", '/finalScreen', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            date: Date.now(),
            score: seconds
        }));

        window.location.assign('/finalScreen');
    }
}

