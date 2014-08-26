Bg= (function(shape){
	var image = new Image();
	function Bg(w,h){
		this.x = 0;
		this.y = 0;
		this.width = w;
		this.height = h;
		this.spd = 1;
		image.src = "bg.png";
	}
	Bg.prototype = Object.create(shape.prototype);
	Bg.prototype.move = function(k){
		if (k[38]) {
			if(this.y > 0){
				this.y -= this.spd;
			}
	    }
	    if (k[40]) {
	    	if(this.y < this.height){
				this.y += this.spd; 
			}
	    }
	    if (k[39]) {
	    	if(this.x < this.width){
				this.x += this.spd;
			}
	    }
	    if (k[37]) {
	    	if(this.x > 0){
				this.x -= this.spd;
			}
	    }
	}
	Bg.prototype.getImage = function(){
		return image;
	}
	return Bg;
})(Shape);