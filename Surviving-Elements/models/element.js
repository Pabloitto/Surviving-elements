$.Element = function(){
	return {
		getRandomElement : function(){
			var	r = Math.floor(Math.random()*($.elements.length)),
				e = $.elements[r];
			return this.types[e];
		},
		types : {
			Water : {
				name : 'Water',
				color : '#0180CA',
				sprite : $.Sprite.getSprite('sprite_elements',{x : 40 , y : 0})
			},
			Fire : {
				name : 'Fire',
				color : '#CA0F01',
				sprite : $.Sprite.getSprite('sprite_elements',{x : 0 , y : 0})
			},
			Ground : {
				name : 'Ground',
				color : '#655619',
				sprite : $.Sprite.getSprite('sprite_elements',{x : 20 , y : 0})
			},
			Wind :{
				name : 'Wind',
				color : '#00FF00',
				sprite : $.Sprite.getSprite('sprite_elements',{x : 60 , y : 0})
			}
		},
		getWinner:function(e1,e2){
			return {
				'Water' : e2.element.name === 'Fire' ? e1 : null,
				'Fire' : e2.element.name === 'Ground' ? e1 : null,
				'Ground' : e2.element.name === 'Wind' ? e1 : null,
				'Wind' : e2.element.name === 'Water' ? e1 : null
			}[e1.element.name];
		},
		compare:function(e1 , e2){
			if(e1.element.name === e2.element.name){
				return 0;	
			}
			switch (e1.element.name) {
				case 'Fire':
					return e2.element.name === 'Ground' ? 1 : -1;
				case 'Water':
					return e2.element.name === 'Fire' ? 1 : -1;
				case 'Ground':
					return e2.element.name === 'Wind' ? 1 : -1;
				case 'Wind':
					return e2.element.name === 'Water' ? 1 : -1;
			}
		}
	}
};