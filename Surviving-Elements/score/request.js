$.openRequest = function(onSuccess,obj){
    var url = '';
    
    url = 'http://scoregame.html-5.me/index.php?callback=handleStuff';
    
    if(obj){
        var method = obj.call.name;
            
        if(method){
            url+="&call="+method;
            if(obj.call.player){
                url+="&player="+obj.call.player; 
            }
            if(obj.call.score){
                url+="&score="+obj.call.score; 
            }
        }
    }
    
    $.jsonp.send(url , {
        callbackName: 'handleStuff',
        onSuccess: onSuccess,
        onTimeout: function(){
          console.log('timeout!');
        },
        timeout: 5
  });
}
/* jsonp.js, (c) Przemek Sobstel 2012, License: MIT */

$.jsonp = (function(){
  var that = {};

  that.send = function(src, options) {
    var callback_name = options.callbackName || 'callback',
      on_success = options.onSuccess || function(){},
      on_timeout = options.onTimeout || function(){},
      timeout = options.timeout || 10;

    var timeout_trigger = window.setTimeout(function(){
      window[callback_name] = function(){};
      on_timeout();
    }, timeout * 1000);

    window[callback_name] = function(data){
      window.clearTimeout(timeout_trigger);
      on_success(data);
    };

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = src;

    document.getElementsByTagName('head')[0].appendChild(script);
  };

  return that;
})();