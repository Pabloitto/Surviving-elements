$.Explosion = (function(shape){
	function Explosion(){
		this.x = 0;
		this.y = 0;
		this.particles = [];
		this.length = 40;
		this.isExploting = 0;
	}
	Explosion.prototype.explote = function(){
		if(this.isExploting){
			for(var k = 0; k < this.length; k++) {
				this.particles.push(new $.Particle(this.x,this.y));
			}
		}
	};
	Explosion.prototype.create = function(x,y){
		this.x = x;
		this.y = y;
		this.color = '#DF8C0C';
		this.isExploting = 1;
	};
	return Explosion;
})($.Shape);