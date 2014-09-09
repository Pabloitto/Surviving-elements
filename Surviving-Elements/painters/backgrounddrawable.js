$.BgDrawable = function(bg){
    var background;
    function init(){
        background = bg;
    }
    function draw(ctxBg,cW,cH){
       var img = background.getImage(),w=0,h =0;
	    for (; w<cW; w += background.width) {
	        for (;h<cH; h += background.height) {
	            ctxBg.drawImage(img, (w + background.x) - 55, h + background.y);
	        }
	    }
		for (w=0; w<cW;w+=background.width) {
	        for (h=0; h < cH; h += background.height) {
	            ctxBg.drawImage(img, w + background.x, h + background.y);
	        }
	    }
	    for (w=0;w < cW; w += background.width) {
	        for (h=0; h < cH; h += background.height) {
	            ctxBg.drawImage(img, w + background.x, (h + background.y) - 25);
	        }
	    }
    }
    init();
    return {
        draw: draw
    }
};