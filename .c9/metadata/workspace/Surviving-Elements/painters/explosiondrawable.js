{"filter":false,"title":"explosiondrawable.js","tooltip":"/Surviving-Elements/painters/explosiondrawable.js","undoManager":{"mark":32,"position":32,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":34}},"text":"$.EnergyBarDrawable = function(b){"},{"action":"insertText","range":{"start":{"row":0,"column":34},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":21,"column":0}},"lines":["    var bar;","    function init(){","        bar = b;","    }","    function draw(ctx,life){","        ctx.beginPath();","        ctx.strokeStyle = bar.strokeColor;","        ctx.rect(bar.x,bar.y,bar.width,bar.height);","        ctx.stroke();","        ctx.closePath();","        ","        ctx.beginPath();","        ctx.fillStyle = bar.fillColor;","        ctx.fillRect(bar.x,bar.y,(life || 1) * 10 ,bar.height);","        ctx.closePath();","    }","    init();","    return {","        draw: draw","    }"]},{"action":"insertText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":2}},"text":"};"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":2},"end":{"row":0,"column":11}},"text":"EnergyBar"},{"action":"insertText","range":{"start":{"row":0,"column":2},"end":{"row":0,"column":3}},"text":"E"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":3},"end":{"row":0,"column":4}},"text":"x"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":4},"end":{"row":0,"column":5}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":5},"end":{"row":0,"column":6}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":6},"end":{"row":0,"column":7}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":7},"end":{"row":0,"column":8}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":8},"end":{"row":0,"column":9}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":9},"end":{"row":0,"column":10}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":10},"end":{"row":0,"column":11}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":31},"end":{"row":0,"column":32}},"text":"b"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":31},"end":{"row":0,"column":32}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":1,"column":8},"end":{"row":1,"column":11}},"text":"bar"},{"action":"insertText","range":{"start":{"row":1,"column":8},"end":{"row":1,"column":9}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":9},"end":{"row":1,"column":10}},"text":"x"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":1,"column":8},"end":{"row":1,"column":10}},"text":"ex"},{"action":"insertText","range":{"start":{"row":1,"column":8},"end":{"row":1,"column":17}},"text":"explosion"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":8},"end":{"row":3,"column":11}},"text":"bar"},{"action":"insertText","range":{"start":{"row":3,"column":8},"end":{"row":3,"column":17}},"text":"explosion"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":20},"end":{"row":3,"column":21}},"text":"b"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":20},"end":{"row":3,"column":21}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":5,"column":22},"end":{"row":5,"column":26}},"text":"life"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":5,"column":21},"end":{"row":5,"column":22}},"text":","}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":24}},"text":"        ctx.closePath();"},{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":15,"column":0}},"nl":"\n","lines":["        ctx.strokeStyle = bar.strokeColor;","        ctx.rect(bar.x,bar.y,bar.width,bar.height);","        ctx.stroke();","        ctx.closePath();","        ","        ctx.beginPath();","        ctx.fillStyle = bar.fillColor;","        ctx.fillRect(bar.x,bar.y,(life || 1) * 10 ,bar.height);"]},{"action":"removeText","range":{"start":{"row":6,"column":7},"end":{"row":6,"column":24}},"text":" ctx.beginPath();"},{"action":"removeText","range":{"start":{"row":6,"column":7},"end":{"row":7,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":6},"end":{"row":6,"column":7}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":5},"end":{"row":6,"column":6}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":4},"end":{"row":6,"column":5}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":4},"end":{"row":6,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":8},"end":{"row":6,"column":25}},"text":"ctx.beginPath(); "},{"action":"insertText","range":{"start":{"row":6,"column":25},"end":{"row":7,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":7,"column":0},"end":{"row":12,"column":0}},"lines":["\t\t\tctx.fillStyle = explosion.color;","\t\t\tif (current.radius > 0) {","\t\t\t\tctx.arc(current.x, current.y, current.radius, 0, $.PI2, false);","\t\t\t}","\t\t\tctx.fill();"]},{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":18}},"text":"\t\t\tcurrent.move();"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":2},"end":{"row":7,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":2},"end":{"row":8,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":2},"end":{"row":9,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":2},"end":{"row":10,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":2},"end":{"row":11,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":2},"end":{"row":12,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":17}},"text":"\t\tcurrent.move();"},{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":12,"column":0}},"nl":"\n","lines":["\t\tctx.fillStyle = explosion.color;","\t\tif (current.radius > 0) {","\t\t\tctx.arc(current.x, current.y, current.radius, 0, $.PI2, false);","\t\t}","\t\tctx.fill();"]},{"action":"removeText","range":{"start":{"row":6,"column":8},"end":{"row":6,"column":25}},"text":"ctx.beginPath(); "},{"action":"removeText","range":{"start":{"row":6,"column":8},"end":{"row":7,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":6,"column":8},"end":{"row":6,"column":61}},"text":"for(var i = 0; i < explosion.particles.length; i++) {"},{"action":"insertText","range":{"start":{"row":6,"column":61},"end":{"row":7,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":7,"column":0},"end":{"row":15,"column":0}},"lines":["\t\t\tvar current = explosion.particles[i];","\t\t\tctx.beginPath(); ","\t\t\tctx.fillStyle = explosion.color;","\t\t\tif (current.radius > 0) {","\t\t\t\tctx.arc(current.x, current.y, current.radius, 0, $.PI2, false);","\t\t\t}","\t\t\tctx.fill();","\t\t\tcurrent.move();"]},{"action":"insertText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":4}},"text":"\t\t} "}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":16,"column":5},"end":{"row":16,"column":5},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":1,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1409774755790,"hash":"bf3c3081998b4da187a277242dd5f671c748da47"}