$.intersect = function(a,b){
    return (Math.abs(a.x - b.x) < (a.width + b.width) / 2) &&
        	(Math.abs(a.y - b.y) < (a.height + b.height) / 2);
};
$.intersectWithArray = function(o,elements){
    var r = 0;
	for (var i = 0; i < elements.length; i++) {
		if($.intersect(o,elements[i])){
			r = {e : elements[i] , i : i};
			break;
		}
	}
	return r;
};