$.Bullet = (function (shape) {
	var vectors = null;
	function Bullet(v) {
		vectors = v;
		this.speed = 50;
		this.x = vectors.origin.x;
		this.y = vectors.origin.y;
		this.size = 3;
		this.element = $.es;
		this.color = this.element.color;
		this.calculateDirection(vectors);
	}
	Bullet.prototype = Object.create(shape.prototype);
	Bullet.prototype.move = function(){
		this.x += this.vx;
		this.y += this.vy;
	};
	return Bullet;

})($.Shape);