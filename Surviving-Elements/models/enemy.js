$.Enemy = (function(shape){
	function Enemy(v){
		this.vectors = v;
		this.x = this.vectors.origin.x;
		this.y = this.vectors.origin.y;
		this.element = new $.Element().getRandomElement();
		this.image = this.element.image; 
		this.color = this.element.color;
		this.health = 0;
		this.speed = 1;
		this.maxHealth = 5;
		this.calculateDirection(this.vectors);
		this.id = this.generateId();
		this.isInCollision = 0;
		this.energybar = new $.EnergyBar(this);
	}
	Enemy.prototype = Object.create(shape.prototype);
	Enemy.prototype.move = function(oposite){
		if(this.isInCollision && oposite){
			this.vx = -this.vx;
			this.vy = -this.vy;
		}
		this.x += this.vx;
		this.y += this.vy;
		this.energybar.move(this);
	}
	Enemy.prototype.hurt = function(){
		this.health-=1;
	}
	Enemy.prototype.powerup = function(e){
		this.speed += 0.1;
		if(this.health < this.maxHealth){
			this.health += 1;
		}
	}
	Enemy.prototype.isAlive = function(){
		return this.health > 0;
	}
	return Enemy;
})($.Shape);