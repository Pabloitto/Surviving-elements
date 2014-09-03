$.Game = function(){
	var canvas = $.get('canvas'),
		bg = $.get('bg'),
		current = $.get('current'),
		explosion,
		eTypes,
		counter = 0,
		ctx,
		ctxBg,
	    fps =  60,
		cursor,
		hero,
		background,
		enemies = [],
		keyEventListener,
		mouseEventListener,
		gameOver = 0,
		levelSpeed=0.1,
		gun=0,
		elementHelper;

	function init(){
		$.SoundsFactory.play('music',true);
		canvas.width = 1200;
        	canvas.height = 400;
        	initCharacters();
        	bg.width = canvas.width;
        	bg.height = canvas.height;
		ctx = canvas.getContext('2d');
		ctxBg = bg.getContext('2d');
		bindEvents();
		$.attr(current,{'innerHTML':$.elements[gun],'className':$.elements[gun] });
		$.es = eTypes[$.elements[gun]];
		repaint();
	}
	function initCharacters(){
		cursor = new $.Cursor();
		hero = new $.Hero(canvas.width, canvas.height);
		explosion = new $.Explosion();
		elementHelper = new $.Element();
		background = new $.Bg(55,25);
		eTypes = elementHelper.types;
		generateEnemy();
	}
	function repaint(){
		if(!gameOver){
			paintHero();
			paintEnemy();
			paintBullets();
			clearBullets();
			ctx.drawImage(cursor.getImage(), cursor.x, cursor.y);
			if((++counter % 30) === 0){
				generateEnemy();
				levelSpeed+=0.1;
			}
			explosion.explote();
			paintExplosion();
			explosion.isExploting = 0;
		}else{
			gameOverAction();
		}
		paintBg();
		setTimeout(repaint, fps);
	}
	function paintHero(){
		var keys = keyEventListener.getKeys();
		hero.move(keys,function(keys){
			background.move(keys);
			persuit();
		});
		if($.intersectWithArray(hero,enemies)){
			if(hero.isAlive()){
				hero.health-=0.1;
			}else{
				gameOver = 1;
			}
		}
		$.HeroDrawable(hero).draw(ctx);
		$.EnergyBarDrawable(hero.energybar).draw(ctx , hero.health);
	}
	function paintBg(){
	    $.BgDrawable(background).draw(ctxBg,canvas.width,canvas.height);
	}
	function gameOverAction(){
		$.SoundsFactory.stop('music');
		enemies = [];
		hero.bullets = [];
		levelSpeed = 0.1;
		ctx.font = "30px Arial";
		ctx.strokeText("Press R to try again",canvas.width / 2,canvas.height / 2);
	}
	function paintEnemy(){
		var crash;
		for (var i = 0; i < enemies.length; i++) {
			ctx.beginPath();
			ctx.fillStyle = enemies[i].color;
			ctx.rect(enemies[i].x,enemies[i].y,enemies[i].width,enemies[i].height);
			if(isNotInCanvas(enemies[i])){
				enemies[i].isInCollision = 0;
				enemyPersuitHero(enemies[i]);
			}
			crash = intersectEnemyWithEnemy(enemies[i]);
			if(enemies[i]){
				enemies[i].move(crash);
			}
			ctx.closePath();
			ctx.fill();
			if(enemies[i].health >= enemies[i].maxHealth){
				$.EnergyBarDrawable(enemies[i].energybar).draw(ctx , enemies[i].maxHealth);
			}else{
				$.EnergyBarDrawable(enemies[i].energybar).draw(ctx , enemies[i].health);
			}
		}
	}
	function generateEnemy(){
		var enemy = new $.Enemy({
			origin : {x : Math.floor(Math.random() * (canvas.width)), 
					  y : Math.floor(Math.random() * (canvas.height - canvas.height / 4))
			},
			target : {x : hero.x + (hero.width / 2) , y : hero.y + (hero.height / 2)}
		});
		if(enemy.speed <= hero.speed){
			enemy.speed+=levelSpeed;
		}
		enemies.push(enemy);
	}
	function paintBullets(){
		ctx.beginPath();
		if(hero.bullets.length === 0){
			hero.underFire = 0;
		}
		for (var i = 0; i < hero.bullets.length; i++) {
			var r = $.intersectWithArray(hero.bullets[i],enemies),
				enemy = r.e;
			if(!enemy){
			    hero.bullets[i].move();
			    ctx.fillStyle = hero.bullets[i].color;
			    ctx.arc(hero.bullets[i].x,hero.bullets[i].y,hero.bullets[i].size,0,$.PI2,true);
			    ctx.closePath();
		   	}else{
		   		var winner = elementHelper.getWinner(hero.bullets[i],enemy);
				if(winner){
					if(enemy.isAlive()){
						enemy.health-=1;
						enemy.width-=1;
		    			enemy.height-=1;
		    			$.SoundsFactory.play('hurt');
					}else{
						enemies.splice(r.i , 1);
						explosion.x = enemy.x;
						explosion.y = enemy.y;
						explosion.color = enemy.color;
						explosion.isExploting = 1;
						$.SoundsFactory.play('explote');
			    	}
			    }else if(hero.bullets[i].element.name === enemy.element.name){
			    		enemy.speed += 0.1;
			    		if(enemy.health < enemy.maxHealth){
			    			enemy.health += 1;
			    			enemy.width+=1;
			    			enemy.height+=1;
			    		}
			    		$.SoundsFactory.play('powerup');
			    	}
			    	hero.bullets.splice(i,1);
		    	}
	    }
	    ctx.fill();
	}
	function intersectEnemyWithEnemy(currentEnemy){
		var r = 0;
		for (var i = 0; i < enemies.length; i++) {
			if(currentEnemy.id != enemies[i].id && 
				($.intersect(currentEnemy,enemies[i]))){
				if(currentEnemy.element.name === enemies[i].element.name){
					currentEnemy.speed += 0.1;
			    	
			    	if(currentEnemy.health < currentEnemy.maxHealth){
			    		currentEnemy.health += 1;
				    	if(currentEnemy.width < enemies[i].width){
				    		currentEnemy.width = enemies[i].width;
				    		currentEnemy.height = enemies[i].height;
				    	}
			    		currentEnemy.width+=1;
			   			currentEnemy.height+=1;
			   		}
			   		$.SoundsFactory.play('powerup');
			   		enemies.splice(i,1);
				}else{
					currentEnemy.isInCollision = 1;
					return enemies[i];
				}
				break;
			}
		}
		return r;
	}
	function paintExplosion() { 
		for(var i = 0; i < explosion.particles.length; i++) {
			var current = explosion.particles[i];
			ctx.beginPath(); 
			ctx.fillStyle = explosion.color;
			if (current.radius > 0) {
				ctx.arc(current.x, current.y, current.radius, 0, $.PI2, false);
			}
			ctx.fill();
			current.move();
		} 
	}
	function clearBullets(){
		for (var i = 0; i < hero.bullets.length; i++) {
	        if (isNotInCanvas(hero.bullets[i])) {
	        	hero.bullets.splice(i,1);
		    }
		}
	}
	function isNotInCanvas(s){
		return ((s.x > (canvas.width - s.width/2) || (s.x - s.width / 2) < 0) || (s.y > (canvas.height - s.height / 2) || (s.y - s.height / 2) < 0));
	}
	function bindEvents(){
		keyEventListener = new $.KeyEventListener({
			element : document,
		 	keyPress : restartGame
		});
		mouseEventListener = new $.MouseEventListener({
			element : canvas,
			onMouseMove : onMouseMove,
			onClick : onMouseClick
		});
	}
	function restartGame(){
		if(gameOver){
			gameOver = 0;
			initCharacters();
			$.SoundsFactory.play('music',true);
		}
	}
	function onMouseMove(x,y){
		cursor.move({ x : x , y : y});
		hero.angle = hero.calculateAngle(x,y);
		persuit();
	}
	function onMouseClick(x,y,button){
		var gunName;
		if(button){
			if(++gun == $.elements.length){
				gun=0;
			}
			gunName = $.elements[gun];
			$.es = eTypes[gunName];
			$.attr(current,{'innerHTML':gunName,'className':gunName });
			return false;
		}
		if(!gameOver){
			hero.shot({ x : x , y : y});
		}
	}
	function persuit(){
		for (var i = 0; i < enemies.length; i++) {
			enemyPersuitHero(enemies[i]);
		}
	}
	function enemyPersuitHero(e){
		if(!e.isInCollision){
			e.calculateDirection({
				target : { x : hero.x , y : hero.y}
			});
		}
	}
	init();
};