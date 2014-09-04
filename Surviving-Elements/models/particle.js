$.Particle= (function(shape){
	var moveBy = 10;
	function Particle(cX,cY){
		this.x = cX;
		this.y = cY;
		this.radius = 1.0;
		this.vx = (-this.radius * (moveBy / 2)) + Math.random() * moveBy;
		this.vy = Math.random() * moveBy;
	}
	Particle.prototype = Object.create(shape.prototype);
	Particle.prototype.move = function(){
		this.x += this.vx; 
		this.y += this.vy; 
		this.radius = Math.max(this.radius - 0.05, 0.0); 
	}
	return Particle;
})($.Shape);