$.Collitions={
    intersect : function(a,b){
        return (Math.abs(a.x - b.x) < (a.width + b.width) / 2) &&
     	    	(Math.abs(a.y - b.y) < (a.height + b.height) / 2);
    }
}