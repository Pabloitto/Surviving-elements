Bullet = (function (shape) {
	var that = null,
		vectors = null;

	function Bullet(v) {
		that = this;
		vectors = v;
		that.speed = 50;
		that.x = vectors.origin.x;
		that.y = vectors.origin.y;
		that.size = 3;
		this.element = es;
		this.color = this.element.color;
		this.calculateDirection(vectors);
	}
	Bullet.prototype = Object.create(shape.prototype);
	return Bullet;

})(Shape);