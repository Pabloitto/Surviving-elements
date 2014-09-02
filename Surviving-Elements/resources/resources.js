ImageFactory=(function(){
    var path = 'resources/img/',
        ext = '.png',
        loaded={};
    
    function getImg(name){
        var image = null;
        if(!loaded[name + ext]){
            image = new Image();
            image.src = path + name + ext;
            loaded[name + ext] = image;
        }else{
            image = loaded[name + ext];
        }
        return image;
    }
    
    return {
        getImg : getImg
    }
}())
SoundsFactory=(function(){
    var path = 'resources/sounds/',
        ext = '.wav',
        loaded = {};
    
    function play(name){
        var audio = null;
        if(!loaded[name + ext]){
            audio = new Audio(path + name + ext);
            loaded[name + ext] = audio;
        }else{
            audio = loaded[name + ext];
        }
        audio.play();
    }
    return {
        play : play
    }
}())