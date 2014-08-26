Cursor = (function (shape) {
	function Cursor() {
		this.color = '#614126';
	}
	Cursor.prototype = Object.create(shape.prototype);
	Cursor.prototype.move = function(e){
		this.x = e.x;
		this.y = e.y;
	};
	Cursor.prototype.getImage = function(){
		var i = new Image();
		i.src = 'pointer.png';
		return i;
	};
	return Cursor;
})(Shape);