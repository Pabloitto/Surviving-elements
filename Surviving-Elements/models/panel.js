es='';
elements= ['Water','Ground','Fire','Wind'];
Panel = function(){
	var canvas = get('canvas'),
		bg = get('bg'),
		current = get('current'),
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
		gameOver = 0,
		keys=[],
		levelSpeed=0.1,
		gun=0,
		eh;

	function init(){
		canvas.width = 1200;
        	canvas.height = 400;
        	initCharacters();
        	bg.width = canvas.width;
        	bg.height = canvas.height;
		ctx = canvas.getContext('2d');
		ctxBg = bg.getContext('2d');
		bindEvents();
		current.className = elements[gun];
		current.innerHTML = elements[gun];
		es = eTypes[elements[gun]];
		repaint();
	}
	function initCharacters(){
		cursor = new Cursor();
		hero = new Hero(canvas.width, canvas.height);
		explosion = new Explosion();
		eh = new Element();
		background = new Bg(55,25);
		eTypes = eh.types;
		generateEnemy();
	}
	function repaint(){
		if(!gameOver){
			paintBg();
			paintHero();
			paintEnemy();
			ctx.drawImage(cursor.getImage(), cursor.x, cursor.y);
			paintBullets();
			clearBullets();
			if((++counter % 30) == 0){
				generateEnemy();
				levelSpeed+=0.1;
			}
			explosion.explote();
			emitExplosion();
			explosion.isExploting = 0;
		}
		setTimeout(repaint, fps);
	}
	function paintHero(){
		hero.move(keys,function(keys){
			background.move(keys);
			persuit();
		});
		new HeroDrawable(hero).draw(ctx);
	}
	function paintBg(){
	    new BgDrawable(background).draw(ctxBg,canvas.width,canvas.height);
	}
	function gameOverAction(){
		gameOver = 1;
		enemies = [];
		hero.bullets = [];
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.font = "30px Arial";
		ctx.strokeText("Game Over Press to Continue",10,50);
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
		}
	}
	function generateEnemy(){
		var enemy = new Enemy({
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
			var r = intersectBulletWithEnemy(hero.bullets[i]),
				enemy = r.e;
			if(!enemy){
			    hero.bullets[i].x += hero.bullets[i].vx;
			    hero.bullets[i].y += hero.bullets[i].vy;
			    ctx.fillStyle = hero.bullets[i].color;
			    ctx.arc(hero.bullets[i].x,hero.bullets[i].y,hero.bullets[i].size,0,Math.PI*2,true);
			    ctx.closePath();
		   	}else{
		   		var winner = eh.getWinner(hero.bullets[i],enemy);
				if(winner){
					if(enemy.isAlive()){
						enemy.health-=1;
						enemy.width-=1;
		    				enemy.height-=1;
		    				SoundsFactory.play('hurt');
					}else{
						enemies.splice(r.i , 1);
						explosion.x = enemy.x;
						explosion.y = enemy.y;
						explosion.color = enemy.color;
						explosion.isExploting = 1;
						SoundsFactory.play('explote');
			    	}
			    }else if(hero.bullets[i].element.name === enemy.element.name){
			    		enemy.speed += 0.1;
			    		enemy.health += 1;
			    		if(enemy.width < (hero.width * 2)){
			    			enemy.width+=1;
			    			enemy.height+=1;
			    		}
			    		SoundsFactory.play('powerup');
			    	}
			    	hero.bullets.splice(i,1);
		    	}
	    };
	    ctx.fill();
	}
	function intersect(a,b){
		 return (Math.abs(a.x - b.x) < (a.width + b.width) / 2) &&
     			(Math.abs(a.y - b.y) < (a.height + b.height) / 2);
	}
	function intersectBulletWithEnemy(bullet){
		var r = 0;
		for (var i = 0; i < enemies.length; i++) {
			if(intersect(bullet,enemies[i])){
				r = {e : enemies[i] , i : i};
				break;
			}
		};
		return r;
	}
	function intersectEnemyWithEnemy(currentEnemy){
		var r = 0;
		for (var i = 0; i < enemies.length; i++) {
			if(currentEnemy.id != enemies[i].id && 
				(intersect(currentEnemy,enemies[i]))){
				if(currentEnemy.element.name === enemies[i].element.name){
					currentEnemy.speed += 0.1;
			    		currentEnemy.health += 1;
			    		if(currentEnemy.width < (hero.width * 2)){
				    		if(currentEnemy.width < enemies[i].width){
				    			currentEnemy.width = enemies[i].width;
				    			currentEnemy.height = enemies[i].height;
				    		}
			    		currentEnemy.width+=1;
			   		currentEnemy.height+=1;
			   		}
			   		SoundsFactory.play('powerup');
			   		enemies.splice(i,1);
				}else{
					currentEnemy.isInCollision = 1;
					return enemies[i];
				}
				break;
			}
		};
		return r;
	}
	function emitExplosion() { 
		for(var i = 0; i < explosion.particles.length; i++) {
			var current = explosion.particles[i];
			ctx.beginPath(); 
			ctx.fillStyle = explosion.color;
			if (current.radius > 0) {
				ctx.arc(current.x, current.y, current.radius, 0, Math.PI*2, false);
			}
			current.move();
			ctx.fill();
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
		addEvent(document,'keyup',onKeyUp);
		addEvent(document,'keydown',onKeyDown);
		addEvent(canvas,'mousemove', onMouseMove);
		addEvent(canvas,'mousedown', onMouseClick);
		addEvent(document,'contextmenu',function(e){e.preventDefault();});
	}
	function onMouseMove(e){
		var x = getFixedX(e), 
			y = getFixedY(e);
		cursor.move({ x : x , y : y});
		hero.angle = hero.calculateAngle(x,y);
		persuit();
	}
	function persuit(){
		for (var i = 0; i < enemies.length; i++) {
			enemyPersuitHero(enemies[i]);
		};
	}
	function enemyPersuitHero(e){
		if(!e.isInCollision){
			e.calculateDirection({
				target : { x : hero.x , y : hero.y}
			});
		}
	}
	function onMouseClick(e){
		var x = getFixedX(e), 
			y = getFixedY(e),
			gunName;
		if(e.button){
			if(++gun == elements.length){
				gun=0;
			}
			gunName = elements[gun];
			es = eTypes[gunName];
			current.innerHTML = gunName;
			current.className = gunName;
			return false;
		}
		if(!gameOver){
			hero.shot({ x : x , y : y});
		}else{
			gameOver = 0;
			initCharacters();
		}
	}
	function onKeyDown(e){
		keys[e.keyCode] = 1;
	}
	function onKeyUp(e){
		keys[e.keyCode] = 0;
	}
	function getFixedX(e){
		return e.clientX - canvas.offsetLeft;
	}
	function getFixedY(e){
		return e.clientY - canvas.offsetTop;
	}
	function get(id){
		return document.getElementById(id);
	}
	function addEvent(e,name,fn){
		e.addEventListener(name,fn,false);
	}
	init();
};