$.EnergyBarDrawable = function(b){
    var bar;
    function init(){
        bar = b;
    }
    function draw(ctx,life){
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.rect(bar.x,bar.y,bar.width,bar.height);
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.fillRect(bar.x,bar.y,(life || 1) * 10 ,bar.height);
        ctx.closePath();
    }
    init();
    return {
        draw: draw
    }
};