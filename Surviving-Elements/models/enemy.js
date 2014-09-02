$.Enemy = (function(shape){
	function Enemy(v){
		this.vectors = v;
		this.x = this.vectors.origin.x;
		this.y = this.vectors.origin.y;
		this.element = new $.Element().getRandomElement();
		this.color = this.element.color;
		this.width = 20;
		this.height = 20;
		this.health = 0;
		this.speed = 1.5;
		this.calculateDirection(this.vectors);
		this.id = this.generateId();
		this.isInCollision = 0;
	}
	Enemy.prototype = Object.create(shape.prototype);
	Enemy.prototype.move = function(oposite){
		if(this.isInCollision && oposite){
			this.vx = -this.vx;
			this.vy = -this.vy;
		}
		this.x += this.vx;
		this.y += this.vy;
	}
	Enemy.prototype.isAlive = function(){
		return this.health > 0;
	}
	return Enemy;
})($.Shape);