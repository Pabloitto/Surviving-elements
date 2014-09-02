$.get = function(id){
      return document.getElementById(id);
};
$.attr = function(e,options){
    for (var prop in options) {
        e[prop] = options[prop];
    }
};