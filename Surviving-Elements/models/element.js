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
				image : $.ImageFactory.getImg('water')
			},
			Fire : {
				name : 'Fire',
				color : '#CA0F01',
				image : $.ImageFactory.getImg('fire')
			},
			Ground : {
				name : 'Ground',
				color : '#655619',
				image : $.ImageFactory.getImg('rock')
			},
			Wind :{
				name : 'Wind',
				color : 'blue',
				image : $.ImageFactory.getImg('wind')
			}
		},
		getWinner:function(e1,e2){
			return {
				'Water' : e2.element.name === 'Fire' ? e1 : null,
				'Fire' : e2.element.name === 'Ground' ? e1 : null,
				'Ground' : e2.element.name === 'Wind' ? e1 : null,
				'Wind' : e2.element.name === 'Water' ? e1 : null
			}[e1.element.name];
		}
	}
};