$.Bg= (function(shape){
	function Bg(w,h){
		this.x = 0;
		this.y = 0;
		this.width = w;
		this.height = h;
		this.spd = 1;
	}
	Bg.prototype = Object.create(shape.prototype);
	Bg.prototype.move = function(k){
		if (k[$.KEY_CODES.UP]) {
			if(this.y > 0){
				this.y -= this.spd;
			}
	    }
	    if (k[$.KEY_CODES.DOWN]) {
	    	if(this.y < this.height){
				this.y += this.spd; 
			}
	    }
	    if (k[$.KEY_CODES.LEFT]) {
	    	if(this.x < this.width){
				this.x += this.spd;
			}
	    }
	    if (k[$.KEY_CODES.RIGHT]) {
	    	if(this.x > 0){
				this.x -= this.spd;
			}
	    }
	}
	Bg.prototype.getImage = function(){
		return $.ImageFactory.getImg('bg');
	}
	return Bg;
})($.Shape);