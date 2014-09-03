$.KEY_CODES = {
        UP : 38,
        DOWN : 40,
        LEFT: 37,
        RIGHT:39,
        R : 114,
        r : 82
};
$.KeyEventListener=function(o){
    var keys = [];
    
    function init(){
        bindEvents();
    }
    
    function bindEvents(){
        o.element.addEventListener('keyup',onKeyUp,false);
        o.element.addEventListener('keydown',onKeyDown,false);
    }
    
    function onKeyDown(e){
		keys[e.keyCode] = 1;
		if(e.keyCode === $.KEY_CODES.r || e.keyCode === $.KEY_CODES.R){
		    o.keyPress();
		}
	}
	function onKeyUp(e){
		keys[e.keyCode] = 0;
	}
    function getKeys(){
        return keys;
    }
    
    init();
    
    return {
        getKeys : getKeys
    };
};