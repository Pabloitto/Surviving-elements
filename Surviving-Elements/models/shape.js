$.Shape = (function () {
	function Shape() {}
	Shape.prototype.speed = 1;
	Shape.prototype.x = 10;
	Shape.prototype.y = 10;
	Shape.prototype.width = 32;
	Shape.prototype.height = 32;
	Shape.prototype.vy = 0;
	Shape.prototype.vx = 0;
	Shape.prototype.id = '';
	Shape.prototype.calculateAngle = function(xTarget , yTarget){
		return Math.atan2(yTarget - this.y, xTarget - this.x) * 180 / Math.PI;
	}
	Shape.prototype.calculateDirection = function(vectors){
		var angle = this.calculateAngle(vectors.target.x,vectors.target.y),
			radians = angle * Math.PI/ 180;
		this.vx = Math.cos(radians) * this.speed;
	    this.vy = Math.sin(radians) * this.speed;
	}
	Shape.prototype.generateId=function(){
		var result='', i, j;
		for(j=0; j<32; j++) {
			if( j == 8 || j == 12|| j == 16|| j == 20){
		    	result = result + '-';
		    }
			i = Math.floor(Math.random()*16).toString(16).toUpperCase();
		    result = result + i;
		}
		return result;
	}
	return Shape;
})();