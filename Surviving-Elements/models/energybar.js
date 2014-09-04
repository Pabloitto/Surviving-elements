$.EnergyBar = (function (shape) {
	function EnergyBar(model) {
		this.x = model.x;
		this.y = model.y - (this.height * 4);
		this.width = (model.health) * 10;
		this.height = 5;
		this.strokeColor = "black";
		this.fillColor = "red";
	}
	EnergyBar.prototype = Object.create(shape.prototype);
	EnergyBar.prototype.move = function(model){
		this.x = model.x;
		this.y = model.y - (this.height * 4);
	};
	return EnergyBar;
})($.Shape);