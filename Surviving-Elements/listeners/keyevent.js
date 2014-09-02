KeyEventListener=function(e){
    var KEY_CODES = {
        UP : 38,
        DOWN : 40,
        LEFT: 37,
        RIGHT:39
    },
    keys = [];
    
    function init(){
        bindEvents();
    }
    
    function bindEvents(){
        e.addEventListener('keyup',onKeyUp,false);
        e.addEventListener('keydown',onKeyDown,false);
    }
    
    function onKeyDown(e){
		keys[e.keyCode] = 1;
	}
	function onKeyUp(e){
		keys[e.keyCode] = 0;
	}
    function getKeys(){
        return keys;
    }
    
    init();
    
    return {
        KEY_CODES : KEY_CODES,
        getKeys : getKeys
    };
};