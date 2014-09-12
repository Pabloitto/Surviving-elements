$.ProgressBarDrawable = function(p){
    var pb;
    function init(){
        pb = p;
    }
    function draw(ctx, totalEnemies , countEnemies){
        ctx.fillStyle="#F16745";
        ctx.fillRect(pb.x,pb.y,pb.width,pb.height);
        var partial = (countEnemies * pb.height) / totalEnemies;
        ctx.fillStyle="#7BC8A4";
        ctx.fillRect(pb.x ,pb.width / 2,pb.width,-partial);
    }
    init();
    return {
        draw: draw
    }
};