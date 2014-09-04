$.ExplosionDrawable = function(e){
    var explosion;
    function init(){
        explosion = e;
    }
    function draw(ctx){
        for(var i = 0; i < explosion.particles.length; i++) {
			var current = explosion.particles[i];
			ctx.beginPath(); 
			ctx.fillStyle = explosion.color;
			if (current.radius > 0) {
				ctx.arc(current.x, current.y, current.radius, 0, $.PI2, false);
			}
			ctx.fill();
			current.move();
		} 
    }
    init();
    return {
        draw: draw
    }
};