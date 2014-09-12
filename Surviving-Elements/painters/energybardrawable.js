$.EnergyBarDrawable = function(b){
    var bar;
    function init(){
        bar = b;
    }
    function draw(ctx,life,canIncrement){
        ctx.beginPath();
        ctx.strokeStyle = bar.strokeColor;
        ctx.rect(bar.x,bar.y, canIncrement ? (life || 1) * 10 : bar.width,bar.height);
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.fillStyle = bar.fillColor;
        ctx.fillRect(bar.x,bar.y,(life || 1) * 10 ,bar.height);
        ctx.closePath();
    }
    init();
    return {
        draw: draw
    }
};