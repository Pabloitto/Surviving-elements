window.$ = {};
$.es = '';
$.elements= ['Water','Ground','Fire','Wind'];
$.PI2 = Math.PI * 2;
window.onload = function(){
    /*var initGame = $.get('initGame'),
        val = $.get('txtName');
    initGame.onclick = function(){
        if(!val.value){
            alert("Set a name");
            return;
        }
        $.openRequest(function(responseData){
			var count = responseData.count;
			if(count === '0'){
			    $.Game();
                $.get('divGame').style.display = "block";
                $.get('controls').style.display="none";
			}else{
			    alert("The name already exist");
			}
		},{
			"call" : {
				"name" : "existname",
				"player" : val.value
			}
		});
    };*/
    $.Game();
};
