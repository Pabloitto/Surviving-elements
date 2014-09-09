$.Hero = (function (shape) {
	function Hero(pX , pY) {
		this.x = pX / 2;
		this.y = pY / 2;
		this.health = 5;
		this.bullets = [];
		this.spd = 5;
		this.angle = 0;
		this.frame = 1;
		this.underFire = 0;
		this.cH=pY;
		this.cW=pX;
		this.energybar = new $.EnergyBar(this);
	}
	Hero.prototype = Object.create(shape.prototype);
	Hero.prototype.shot = function(e){
		this.frame = 0;
		var bullet = new $.Bullet({
			origin : {x : this.x + (this.width / 2) , y : this.y + (this.height / 2)},
			target : {x : e.x , y : e.y}
		});
		if(this.bullets.length === 0){
			this.underFire = 1;
			this.bullets.push(bullet);
		}
	};
	Hero.prototype.getSprite = function(){
		return $.Sprite.getSprite('sprites',{x : !this.frame ? 0 : (this.width * this.frame) , y : 0});
	};
	Hero.prototype.move = function(k,cb){
		if (k[$.KEY_CODES.UP]) {
			if((this.y - this.height / 2) > 0){
				this.y -= this.spd;
				if(!this.underFire){
					this.updateFrame();
				}
			}
	    }
	    if (k[$.KEY_CODES.DOWN]) {
	    	if(this.y < (this.cH - this.height / 2)){
				this.y += this.spd; 
				if(!this.underFire){
					this.updateFrame();
				}
	    	}
	    }
	    if (k[$.KEY_CODES.RIGHT]) {
	    	if(this.x < (this.cW - this.width / 2)){
				this.x += this.spd;
				if(!this.underFire){
					this.updateFrame();
				}
	    	}
	    }
	    if (k[$.KEY_CODES.LEFT]) {
	    	if((this.x - this.width / 2) > 0){
				this.x -= this.spd;
				if(!this.underFire){
					this.updateFrame();
				}
	    	}
	    }
	    if(!k[$.KEY_CODES.UP] && !k[$.KEY_CODES.DOWN]&& !k[$.KEY_CODES.LEFT] && !k[$.KEY_CODES.RIGHT]){
	    	if(!this.underFire){
	    		this.frame = 1;
	    	}
	    }else{
	    	cb(k);
	    }
	    this.energybar.move(this);
	};
	Hero.prototype.isAlive = function(){
		return this.health > 0;
	};
	Hero.prototype.updateFrame = function(){
		this.frame = this.frame <= 2 ? this.frame + 1 : 1;
	}
	return Hero;
})($.Shape);