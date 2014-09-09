$.EnemyDrawable = function(e){
    var enemy;
    function init(){
        enemy = e;
    }
    function draw(ctx){
        ctx.drawImage(enemy.sprite.image, 
				enemy.sprite.pos.x, 
				enemy.sprite.pos.y, 
				enemy.width,
           		enemy.height,
				enemy.x, 
				enemy.y,
				enemy.width,
           		enemy.height);
    }
    init();
    return {
        draw: draw
    }
};