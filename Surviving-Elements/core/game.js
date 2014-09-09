$.Game = function(){
	var canvas = $.get('canvas'),
		bg = $.get('bg'),
		current = $.get('current'),
		score = $.get('score'),
		time = $.get('time'),
		countScore = 0,
		explosion,
		eTypes,
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
		elementHelper,
		seconds=1,
		generateEnemiesEach = 5;

	function init(){
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
		setTime();
		repaint();
	}
	function initCharacters(){
		cursor = new $.Cursor();
		hero = new $.Hero(canvas.width, canvas.height);
		explosion = new $.Explosion();
		elementHelper = new $.Element();
		background = new $.Bg(1200,400);
		eTypes = elementHelper.types;
		score.innerHTML = 'Score = 0';
		generateEnemy();
	}
	function repaint(){
		if(!gameOver){
			paintHero();
			paintEnemy();
			paintBullets();
			clearBullets();
			ctx.drawImage(cursor.getImage(), cursor.x, cursor.y);
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
		var crash, energyDrawable;
		for (var i = 0; i < enemies.length; i++) {
			energyDrawable = $.EnergyBarDrawable(enemies[i].energybar);
			$.EnemyDrawable(enemies[i]).draw(ctx);
			if(isNotInCanvas(enemies[i])){
				enemies[i].isInCollision = 0;
				enemyPersuitHero(enemies[i]);
			}
			crash = intersectEnemyWithEnemy(enemies[i]);
			if(enemies[i]){
				enemies[i].move(crash);
			}
			if(enemies[i]){
				energyDrawable.draw(ctx , enemies[i].health >= enemies[i].maxHealth ? enemies[i].maxHealth : enemies[i].health);
			}
		}
	}
	function generateEnemy(numberOfEnemies){
		numberOfEnemies = numberOfEnemies || 1;
		while(numberOfEnemies > 0){
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
			numberOfEnemies--;
		}
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
			    $.BulletDrawable(hero.bullets[i]).draw(ctx);
		   	}else{
		   		var isBulletWinner = elementHelper.getWinner(hero.bullets[i],enemy);
				if(isBulletWinner){
					if(enemy.isAlive()){
						enemy.hurt();
		    				$.SoundsFactory.play('hurt');
					}else{
						enemies.splice(r.i , 1);
						explosion.create(enemy.x,enemy.y,enemy.color);
						score.innerHTML = "Score = " + (++countScore * 100);
						$.SoundsFactory.play('explote');
			    		}
			    	}else if(hero.bullets[i].element.name === enemy.element.name){
			    		enemy.powerup();
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
					currentEnemy.powerup(enemies[i]);
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
		$.ExplosionDrawable(explosion).draw(ctx);
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
	function setTime(){
		setInterval(function(){
			++seconds;
			time.innerHTML = "Seconds : " + seconds;
			if((seconds % generateEnemiesEach) === 0){
				generateEnemy(1);
				levelSpeed+=0.1;
			}
			if((seconds % 20) === 0 && generateEnemiesEach > 1){
				generateEnemiesEach-=1;
			}
		},1000);
	}
	init();
};