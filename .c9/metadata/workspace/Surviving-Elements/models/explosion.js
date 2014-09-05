{"filter":false,"title":"explosion.js","tooltip":"/Surviving-Elements/models/explosion.js","undoManager":{"mark":84,"position":84,"stack":[[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":33,"column":0},"end":{"row":33,"column":12}},"text":"})($.Shape);"},{"action":"removeLines","range":{"start":{"row":17,"column":0},"end":{"row":33,"column":0}},"nl":"\r\n","lines":["$.Particle= (function(shape){","\tvar moveBy = 10;","\tfunction Particle(cX,cY){","\t\tthis.x = cX;","\t\tthis.y = cY;","\t\tthis.radius = 1.0;","\t\tthis.vx = (-this.radius * (moveBy / 2)) + Math.random() * moveBy;","\t\tthis.vy = Math.random() * moveBy;","\t}","\tParticle.prototype = Object.create(shape.prototype);","\tParticle.prototype.move = function(){","\t\tthis.x += this.vx; ","\t\tthis.y += this.vy; ","\t\tthis.radius = Math.max(this.radius - 0.05, 0.0); ","\t}","\treturn Particle;"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":12},"end":{"row":17,"column":0}},"text":"\r\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":3},"end":{"row":15,"column":0}},"text":"\r\n"},{"action":"insertText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":1},"end":{"row":15,"column":2}},"text":"E"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":2},"end":{"row":15,"column":3}},"text":"x"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":3},"end":{"row":15,"column":4}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":1},"end":{"row":15,"column":4}},"text":"Exp"},{"action":"insertText","range":{"start":{"row":15,"column":1},"end":{"row":15,"column":12}},"text":"Explosion()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":11},"end":{"row":15,"column":12}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":10},"end":{"row":15,"column":11}},"text":"("}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":10},"end":{"row":15,"column":11}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":11},"end":{"row":15,"column":12}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":12},"end":{"row":15,"column":13}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":13},"end":{"row":15,"column":14}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":11},"end":{"row":15,"column":14}},"text":"pro"},{"action":"insertText","range":{"start":{"row":15,"column":11},"end":{"row":15,"column":20}},"text":"prototype"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":20},"end":{"row":15,"column":21}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":21},"end":{"row":15,"column":22}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":22},"end":{"row":15,"column":23}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":23},"end":{"row":15,"column":24}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":24},"end":{"row":15,"column":25}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":25},"end":{"row":15,"column":26}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":26},"end":{"row":15,"column":27}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":27},"end":{"row":15,"column":28}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":28},"end":{"row":15,"column":29}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":29},"end":{"row":15,"column":30}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":30},"end":{"row":15,"column":31}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":31},"end":{"row":15,"column":32}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":32},"end":{"row":15,"column":33}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":33},"end":{"row":15,"column":34}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":34},"end":{"row":15,"column":35}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":35},"end":{"row":15,"column":36}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":36},"end":{"row":15,"column":37}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":37},"end":{"row":15,"column":38}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":38},"end":{"row":15,"column":40}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":39},"end":{"row":15,"column":40}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":40},"end":{"row":15,"column":41}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":39},"end":{"row":15,"column":40}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":39},"end":{"row":15,"column":40}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":40},"end":{"row":15,"column":41}},"text":"{"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":41},"end":{"row":16,"column":0}},"text":"\r\n"},{"action":"insertLines","range":{"start":{"row":16,"column":0},"end":{"row":17,"column":0}},"lines":["\t\t"]},{"action":"insertText","range":{"start":{"row":17,"column":0},"end":{"row":17,"column":2}},"text":"\t}"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":2},"end":{"row":17,"column":3}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":2},"end":{"row":16,"column":25}},"text":"\texplosion.x = enemy.x;"},{"action":"insertText","range":{"start":{"row":16,"column":25},"end":{"row":17,"column":0}},"text":"\r\n"},{"action":"insertLines","range":{"start":{"row":17,"column":0},"end":{"row":19,"column":0}},"lines":["\t\t\t\t\t\texplosion.y = enemy.y;","\t\t\t\t\t\texplosion.color = enemy.color;"]},{"action":"insertText","range":{"start":{"row":19,"column":0},"end":{"row":19,"column":32}},"text":"\t\t\t\t\t\texplosion.isExploting = 1;"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":3},"end":{"row":17,"column":5}},"text":"\t\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":3},"end":{"row":17,"column":4}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":2},"end":{"row":16,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":1},"end":{"row":16,"column":2}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":1},"end":{"row":16,"column":2}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":2},"end":{"row":17,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":2},"end":{"row":18,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":2},"end":{"row":18,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":2},"end":{"row":18,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":2},"end":{"row":18,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":19,"column":2},"end":{"row":19,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":19,"column":2},"end":{"row":19,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":19,"column":2},"end":{"row":19,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":19,"column":2},"end":{"row":19,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":39},"end":{"row":15,"column":40}},"text":"x"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":40},"end":{"row":15,"column":41}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":41},"end":{"row":15,"column":42}},"text":"y"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":2},"end":{"row":16,"column":11}},"text":"explosion"},{"action":"insertText","range":{"start":{"row":16,"column":2},"end":{"row":16,"column":3}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":3},"end":{"row":16,"column":4}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":4},"end":{"row":16,"column":5}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":5},"end":{"row":16,"column":6}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":2},"end":{"row":17,"column":11}},"text":"explosion"},{"action":"insertText","range":{"start":{"row":17,"column":2},"end":{"row":17,"column":6}},"text":"this"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":2},"end":{"row":18,"column":11}},"text":"explosion"},{"action":"insertText","range":{"start":{"row":18,"column":2},"end":{"row":18,"column":6}},"text":"this"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":19,"column":2},"end":{"row":19,"column":11}},"text":"explosion"},{"action":"insertText","range":{"start":{"row":19,"column":2},"end":{"row":19,"column":6}},"text":"this"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":42},"end":{"row":15,"column":43}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":43},"end":{"row":15,"column":44}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":44},"end":{"row":15,"column":45}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":45},"end":{"row":15,"column":46}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":46},"end":{"row":15,"column":47}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":47},"end":{"row":15,"column":48}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":11},"end":{"row":16,"column":16}},"text":"enemy"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":11},"end":{"row":16,"column":12}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":11},"end":{"row":17,"column":12}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":11},"end":{"row":17,"column":12}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":11},"end":{"row":17,"column":12}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":11},"end":{"row":17,"column":12}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":11},"end":{"row":17,"column":12}},"text":"y"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":11},"end":{"row":17,"column":12}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":15},"end":{"row":18,"column":16}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":15},"end":{"row":18,"column":16}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":15},"end":{"row":18,"column":16}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":15},"end":{"row":18,"column":16}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":15},"end":{"row":18,"column":16}},"text":"y"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":15},"end":{"row":18,"column":16}},"text":"."}]}]]},"ace":{"folds":[],"scrolltop":120,"scrollleft":0,"selection":{"start":{"row":18,"column":15},"end":{"row":18,"column":15},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":1,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1409774133259,"hash":"68b46100e3e6f3b317d1b70e47ff1a7fbd5d644c"}