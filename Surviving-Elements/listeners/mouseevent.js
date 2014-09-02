$.MouseEventListener=function(o){
    function init(){
        bindEvents();
    }
    
    function bindEvents(){
        o.element.addEventListener('mousemove',onMouseMove,false);
        o.element.addEventListener('mousedown',onMouseClick,false);
        document.addEventListener('contextmenu',onOpenContext,false);
    }
    function onMouseMove(e){
		var x = getFixedX(e), 
			y = getFixedY(e);
		o.onMouseMove(x,y);
	}
    function onMouseClick(e){
		var x = getFixedX(e), 
			y = getFixedY(e);
		o.onClick(x,y,e.button);
	}
	function onOpenContext(event){
        event.preventDefault();
    }
	function getFixedX(e){
		return e.clientX - o.element.offsetLeft;
	}
	function getFixedY(e){
		return e.clientY - o.element.offsetTop;
	}
    init();
};