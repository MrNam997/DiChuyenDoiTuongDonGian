function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
        ' height="' + this.size + '"' +
        ' src="' + this.image + '"' +
        ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += 50;
    //console.log('ok: ' + this.left);
  }
  this.moveDown = function () {
    this.top += 50;
  }
  this.moveLeft = function () {
    this.left -= 50;
    console.log('ok: ' + this.left);
  }
  this.moveUp = function () {
    this.top -= 50;
  }

}

let hero = new Hero('images.png', 20, 30, 100);

function start() {
  console.log(window.innerHeight, window.innerWidth);
  if ((hero.left < window.innerWidth - hero.size) && (hero.top <= 0+ hero.size)) {
    hero.moveRight();
  } else if ((hero.left >= window.innerWidth - hero.size) && (hero.top <= window.innerHeight - hero.size)) {
    hero.moveDown();
  } else if ((hero.left > 0 + hero.size) && (hero.top >= window.innerHeight - hero.size)) {
    hero.moveLeft()
  } else if (hero.left  <= 0 + hero.size && hero.top >= 0) {
    hero.moveUp();
  }


  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout("start()", 50);
}
start();