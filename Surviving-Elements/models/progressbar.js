$.ProgressBar= (function(shape){
	function ProgressBar(w,h){
		this.width = w;
		this.height = h;
		this.x = 0;
		this.y = 0;
	}
	ProgressBar.prototype = Object.create(shape.prototype);
	return ProgressBar;
})($.Shape);