$.ImageFactory=(function(){
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
$.Sprite = (function(){
    function getSprite(name,pos){
        var image = $.ImageFactory.getImg(name);
        return {
            image : image,
            pos : pos
        }
    }
    
    return {
        getSprite : getSprite
    }
}())