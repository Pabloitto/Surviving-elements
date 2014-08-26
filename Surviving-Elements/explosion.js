Explosion = (function(shape){
	function Explosion(){
		this.x = 0;
		this.y = 0;
		this.particles = [];
		this.length = 30;
		this.isExploting = 0;
	}
	Explosion.prototype.explote = function(){
		if(this.isExploting){
			for(var k = 0; k < this.length; k++) {
				this.particles.push(new Particle(this.x,this.y));
			}
		}
	};
	return Explosion;
})(Shape);
Particle= (function(shape){
	var moveBy = 8;
	function Particle(cX,cY){
		this.x = cX;
		this.y = cY;
		this.radius = 2.0;
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
})(Shape);