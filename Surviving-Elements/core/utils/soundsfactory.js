$.SoundsFactory=(function(){
    var path = 'resources/sounds/',
        ext = '.wav',
        loaded = {};
    
    function play(name,loop){
        var audio = null;
        if(!loaded[name + ext]){
            audio = new Audio(path + name + ext);
            loaded[name + ext] = audio;
        }else{
            audio = loaded[name + ext];
        }
        if(loop){
            audio.loop = true;
        }
        audio.play();
    }
    function stop(name){
        var audio = loaded[name + ext];
        if(audio){
            audio.pause();
            audio.currentTime = 0;
        }
    }
    return {
        play : play,
        stop : stop
    }
}())