$.Game = function(){
	var canvas = $.get('canvas'),
		progresscanvas =  $.get('progresscanvas'),
		current = $.get('current'),
		nameElement = $.get('nameElement'),
		score = $.get('score'),
		time = $.get('time'),
		txtlevel = $.get('txtlevel'),
		txtenemies = $.get('txtenemies'),
		countScore = 0,
		explosion,
		eTypes,
		ctx,
		pbCtx,
	    fps =  60,
		cursor,
		hero,
		background,
		progressbar,
		level = 1,
		enemies = [],
		keyEventListener,
		mouseEventListener,
		gameOver = 0,
		started = 0,
		levelSpeed=0.05,
		gun=0,
		elementHelper,
		seconds=1,
		generateEnemiesEach = 5,
		enemiesKilled = 0,
		timer;

	function init(){
		canvas.width = 1200;
	    canvas.height = 400;
	    initCharacters();
		ctx = canvas.getContext('2d');
		pbCtx = progresscanvas.getContext('2d');
		bindEvents();
		current.className = $.elements[gun];
		nameElement.innerHTML = $.elements[gun];
		$.es = eTypes[$.elements[gun]];
		repaint();
	}
	function initCharacters(){
		cursor = new $.Cursor();
		hero = new $.Hero(canvas.width, canvas.height);
		explosion = new $.Explosion();
		elementHelper = new $.Element();
		background = new $.Bg(55,25);
		progressbar = new $.ProgressBar(progresscanvas.width,progresscanvas.height);
		eTypes = elementHelper.types;
		score.innerHTML = 'Score = 0';
		time.innerHTML = "Seconds : " + seconds;
		txtlevel.innerHTML = 'Level : ' + level;
		txtenemies.innerHTML = 'Enemies : ' + getEnemiesInLevel();
		generateEnemy();
	}
	function repaint(){
		paintBg();
		paintPb();
		if(started){
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
		}else{
			ctx.font = "30px Arial";
			ctx.strokeText("Press Enter to start",(canvas.width + 250) / 3,canvas.height / 2);
		}
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
	    $.BgDrawable(background).draw(ctx,canvas.width,canvas.height);
	}
	function paintPb(){
	    $.ProgressBarDrawable(progressbar).draw(pbCtx , getEnemiesInLevel() , enemiesKilled);
	}
	function gameOverAction(){
		enemies = [];
		hero.bullets = [];
		levelSpeed = 0.05;
		level = 1;
		enemiesKilled = 0;
		clearInterval(timer);
		seconds = 1;
		countScore = 0;
		ctx.font = "30px Arial";
		ctx.strokeText("Press R to try again",(canvas.width + 250) / 3,canvas.height / 2);
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
				enemies[i].move();
			}
			if(enemies[i]){
				energyDrawable.draw(ctx , enemies[i].health >= enemies[i].maxHealth ? enemies[i].maxHealth : enemies[i].health,true);
			}
		}
	}
	function generateEnemy(){
		var n = getEnemiesInLevel(), count = 0;
		while(count < n){
			var enemy = createEnemyInFreePosition();
			if(enemy.speed <= hero.speed){
				enemy.speed+=levelSpeed;
			}
			enemies.push(enemy);
			count++;
		}
	}
	function createEnemyInFreePosition(){
		var tempEnemy = getTemporalEnemy();
		while($.intersect(tempEnemy,hero) || $.intersectWithArray(tempEnemy,enemies)){
			tempEnemy = getTemporalEnemy();
		}
		return tempEnemy;
	}
	function getTemporalEnemy(){
		var rdmPositions = {
			x : Math.floor(Math.random() * (canvas.width)), 
			y : Math.floor(Math.random() * (canvas.height - canvas.height / 4))
		},
		tempEnemy = new $.Enemy({
			origin : rdmPositions,
			target : {x : hero.x + (hero.width / 2) , y : hero.y + (hero.height / 2)}
		});
		return tempEnemy;
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
						explosion.create(enemy.x,enemy.y);
						score.innerHTML = "Score = " + (++countScore * 100);
						$.SoundsFactory.play('explote');
						enemiesKilled++;
						nextLevel();
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
					if(currentEnemy.powerup() | enemies[i].powerup()){
						$.SoundsFactory.play('powerup');
					}
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
		 	restart : restartGame,
		 	start : startGame
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
		}
	}
	function startGame(){
		if(!started && !gameOver){
			started = 1;
			setTime();
		}
	}
	function onMouseMove(x,y){
		if(started){
			cursor.move({ x : x , y : y});
			hero.angle = hero.calculateAngle(x,y);
			persuit();
		}
	}
	function onMouseClick(x,y,button){
		var gunName;
		if(started){
			if(button){
				if(++gun == $.elements.length){
					gun=0;
				}
				gunName = $.elements[gun];
				$.es = eTypes[gunName];
				current.className = gunName;
				nameElement.innerHTML = gunName;
				return false;
			}
			if(!gameOver){
				hero.shot({ x : x , y : y});
			}
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
		if(started){
			timer = setInterval(function(){
				++seconds;
				time.innerHTML = "Seconds : " + seconds;
				if((seconds % generateEnemiesEach) === 0){
					levelSpeed+=0.05;
				}
			},1000);
		}
	}
	function getEnemiesInLevel(){
		return level * 3 - 1;
	}
	function nextLevel(){
		var nEnemies = getEnemiesInLevel();
		if(enemiesKilled === nEnemies){
			level++;
			enemies = [];
			enemiesKilled = 0;
			generateEnemy();
			txtlevel.innerHTML = 'Level : ' + level;
			txtenemies.innerHTML = 'Enemies : ' + getEnemiesInLevel();
		}
	}
	init();
};