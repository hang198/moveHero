function Hero(image, top, left, size,speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getImageElement = function () {
        return "<img src='" + this.image + "' width='" + this.size + "' height='" + this.size + "'" +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px; position:absolute;" />';
    };

    this.moveRight = function () {
        this.left += this.speed;
        console.log('ok: ' + this.left);
    };
    this.moveDown = function () {
        this.top += this.speed;
        console.log('ok: ' + this.top);
    };
    this.moveLeft = function () {
        this.left -= this.speed;
    };
    this.moveUp = function () {
        this.top -= this.speed;
    }
}
let image = new Hero("meo.png", 0, 0, 200, 50);
image.moveRight();
document.getElementById('game').innerHTML = image.getImageElement();

function start() {
    if ((image.left < window.innerWidth - image.size) && (image.top === 0)) {
        image.moveRight();
    }
    if ((image.left >= window.innerWidth - image.size) && (image.top < window.innerHeight - image.size)) {
        image.moveDown();
    }
    if (image.top + image.size > window.innerHeight && image.left > 0) {
        image.moveLeft();
    }

    if (image.left === 0 && image.top + image.size > 0) {
        image.moveUp();
    }


    document.getElementById('game').innerHTML = image.getImageElement();
    setTimeout(start, 500);
}

start();

