$.Bg= (function(shape){
	function Bg(w,h){
		this.x = 0;
		this.y = 0;
		this.width = w;
		this.height = h;
		this.offset_y = 25;
		this.offset_x = 55;
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
	    	if(this.y < this.offset_y){
				this.y += this.spd; 
			}
	    }
	}
	Bg.prototype.getImage = function(){
		return $.ImageFactory.getImg('bg');
	}
	return Bg;
})($.Shape);