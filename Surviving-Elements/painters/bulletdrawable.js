$.BulletDrawable = function(b){
    var bullet;
    function init(){
        bullet = b;
    }
    function draw(ctx){
        bullet.move();
        ctx.fillStyle = bullet.color;
	    ctx.arc(bullet.x,bullet.y,bullet.size,0,$.PI2,true);
		ctx.closePath();
    }
    init();
    return {
        draw: draw
    }
};