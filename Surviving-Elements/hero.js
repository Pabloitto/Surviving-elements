Hero = (function (shape) {
	var i = new Image();
	function Hero(pX , pY) {
		this.x = pX;
		this.y = pY;
		this.health = 5;
		this.bullets = [];
		this.spd = 5;
		this.angle = 0;
		this.frame = 1;
		this.underFire = 0;
		i.src = 'sprites.png';
	}
	Hero.prototype = Object.create(shape.prototype);
	Hero.prototype.shot = function(e){
		this.frame = 0;
		var bullet = new Bullet({
			origin : {x : this.x + (this.width / 2) , y : this.y + (this.height / 2)},
			target : {x : e.x , y : e.y}
		});
		if(this.bullets.length === 0){
			this.underFire = 1;
			this.bullets.push(bullet);
		}
	};
	Hero.prototype.getImage = function(){
		return i;
	};
	Hero.prototype.move = function(k,cb){
		if (k[38]) {
			this.y -= this.spd;
			if(!this.underFire){
				this.frame  = this.frame <= 2 ? this.frame + 1 : 1;
			}
	    }
	    if (k[40]) {
			this.y += this.spd; 
			if(!this.underFire){
				this.frame  = this.frame <= 2 ? this.frame + 1 : 1;
			}
	    }
	    if (k[39]) {
			this.x += this.spd;
			if(!this.underFire){
				this.frame  = this.frame <= 2 ? this.frame + 1 : 1;
			}
	    }
	    if (k[37]) {
			this.x -= this.spd;
			if(!this.underFire){
				this.frame  = this.frame <= 2 ? this.frame + 1 : 1;
			}
	    }
	    if(!k[38] && !k[40] && !k[39] && !k[37]){
	    	if(!this.underFire){
	    		this.frame = 1;
	    	}
	    }else{
	    	cb(k);
	    }
	};
	Hero.prototype.isAlive = function(){
		return this.health > 0;
	};
	return Hero;
})(Shape);