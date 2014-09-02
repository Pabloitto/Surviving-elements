Hero = (function (shape) {
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
		return ImageFactory.getImg('sprites');
	};
	Hero.prototype.move = function(k,cb){
		if (k[38]) {
			if((this.y - this.height / 2) > 0){
				this.y -= this.spd;
				if(!this.underFire){
					this.frame  = this.frame <= 2 ? this.frame + 1 : 1;
				}
			}
	    }
	    if (k[40]) {
	    	if(this.y < (this.cH - this.height / 2)){
				this.y += this.spd; 
				if(!this.underFire){
					this.frame  = this.frame <= 2 ? this.frame + 1 : 1;
				}
	    	}
	    }
	    if (k[39]) {
	    	if(this.x < (this.cW - this.width / 2)){
				this.x += this.spd;
				if(!this.underFire){
					this.frame  = this.frame <= 2 ? this.frame + 1 : 1;
				}
	    	}
	    }
	    if (k[37]) {
	    	if((this.x - this.width / 2) > 0){
				this.x -= this.spd;
				if(!this.underFire){
					this.frame  = this.frame <= 2 ? this.frame + 1 : 1;
				}
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