(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 450,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/sitebg.png", id:"sitebg"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.sitebg = function() {
	this.initialize(img.sitebg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,550,450);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F71735").s().p("AgXAYQgLgKAAgOQAAgNALgKQAKgLANAAQAOAAAKALQALAKAAANQAAAOgLAKQgKALgOgBQgNABgKgLg");
	this.shape.setTransform(26.8,3.2,0.907,0.907);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F71735").s().p("AgYAYQgJgKgBgOQABgNAJgKQALgLANABQAOgBAKALQALAKgBANQABAOgLAKQgKAKgOAAQgNAAgLgKg");
	this.shape_1.setTransform(3.2,3.3,0.907,0.907);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.1,6.5);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgnCeIiMk7IBLAAIByEEIgOAAIhtjzIgqAAIB9EZIA8AAIB+kZIjCAAIBDCZIAshjIgvAAIgIgQIBPAAIhECZIhbjQIDyAAIiME7g");
	this.shape.setTransform(44.2,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgnCeIiMk7IBLAAIByEEIgOAAIhtjzIgqAAIB9EZIA8AAIB+kZIjCAAIBDCZIAshjIgvAAIgIgQIBPAAIhECZIhbjQIDyAAIiME7g");
	this.shape_1.setTransform(44.2,15.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4D").s().p("Ag+CeIBbjQIBECZIhPAAIAIgQIAvAAIgshjIhDCZIDCAAIh+kZIg7AAIh+EZIAqAAIBtjzIAOAAIhyEEIhLAAICMk7IBPAAICME7g");
	this.shape_2.setTransform(18.1,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4D").s().p("Ag+CeIBbjQIBECZIhPAAIAIgQIAvAAIgshjIhDCZIDCAAIh+kZIg7AAIh+EZIAqAAIBtjzIAOAAIhyEEIhLAAICMk7IBPAAICME7g");
	this.shape_3.setTransform(18.1,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.3,31.7);


(lib.flame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF5E17").s().p("AhbgJQgQgfAFgiQAFgiAYgYQAfgfAqAAQArAAAfAfQAYAYAFAiQAFAigQAfIhcCtg");
	this.shape.setTransform(26.4,32.2,1,1.248);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AF0026").s().p("AjFgVQgjhCALhJQALhJA1g0QAgghApgQQApgSArAAQAtAAApASQApARAgAgQA0A0ALBJQALBJgiBCIjHF2g");
	this.shape_1.setTransform(25.4,38.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,3,45.1,70.7);


(lib.eyesglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(15,3.2,1,1,0,0,0,15,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.1,6.5);


// stage content:
(lib.processdeployanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flame copy
	this.instance = new lib.flame("synched",0);
	this.instance.setTransform(275,328.3,1,1,0,0,0,25.4,39.9);
	this.instance.alpha = 0.41;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// flame
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aj2gbQgrhSANhaQAOhbBChCQAngnAzgWQAzgVA3AAQA4AAAzAVQAzAWAoAnQBBBCAOBbQANBagrBSIj3HSgAhcmBQgtATgjAjQg5A5gMBPQgMBQAmBIIDXGWIDYmWQAmhIgMhQQgMhPg5g5QgjgjgtgTQgsgSgxAAQgvAAgtASg");
	this.shape.setTransform(280.3,331.4,0.907,0.907);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF5E17").s().p("AhbgJQgQgfAFgiQAFgiAYgYQAfgfAqAAQArAAAfAfQAYAYAFAiQAFAigQAfIhcCtg");
	this.shape_1.setTransform(281.3,323.8,1,1.248);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AF0026").s().p("AjFgVQgjhCALhJQALhJA1g0QAgghApgQQApgSArAAQAtAAApASQApARAgAgQA0A0ALBJQALBJgiBCIjHF2g");
	this.shape_2.setTransform(280.3,329.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(90));

	// robot-outline
	this.instance_1 = new lib.logo("synched",0);
	this.instance_1.setTransform(275,157.7,0.907,0.907,0,0,0,31.1,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(7).p("AF8AAQAACdhvBwQhwBvidAAQicAAhvhvQhwhwAAidQAAicBwhvQBvhwCcAAQCdAABwBwQBvBvAACcg");
	this.shape_3.setTransform(275,157.5,0.907,0.907);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C0C0C").s().p("Aj7EBQhohrAAiWQAAiVBohqQBphrCSAAQCTAABpBrQBoBqAACVQAACWhoBrQhoBqiUAAQiSAAhphqg");
	this.shape_4.setTransform(275,157.9,0.907,0.907);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AmjAoIAAhPINHAAIAABPg");
	this.shape_5.setTransform(275,239.3,0.907,0.907);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AmjAoIAAhPINHAAIAABPg");
	this.shape_6.setTransform(275,228.2,0.907,0.907);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AN0SDQAvgBAighQAigiAAgwQAAgvgigiQgighgvgBQgwABgiAhQghAigBAvIhRAAQAAhFAsg3QAsg1BDgOIAAtRIitAAIheLbIx7AAIhfrbIivAAIAANRQBEAOAsA1QAsA2AABGIhRAAQAAgvghgiQgighgwgBQgwABgiAhQghAiAAAvQAAAwAhAiQAiAhAwABIAABRQhRAAg6g6Qg6g5ABhSQAAhFAsg3QAsg1BDgOIAAu+IifAAIAAkVICfAAIAAhuIDBAAIgPh5IFaAAIAAjDIjQAAIAAhRIDVAAQAViRBxhiQBwhiCUAAQCWAABxBiQBwBiAVCRIDWAAIAABRIjSAAIAADDIFcAAIgQB5IDAAAIAABuICfAAIAAEVIifAAIAAO+QBEAOAsA1QAsA2AABGQAABSg6A5Qg5A6hRAAgAn1KIIPsAAICYyhI0cAAgAKnhSICkAAIAAlNIh5AAgAqlhSIgqlNIh7AAIAAFNIClAAgAOcjAIBNAAIAAhxIhNAAgAvojAIBNAAIAAhxIhNAAgAjfwlQheBeAACEIAADZIJ8AAIAAjZQAAiEhdheQhehdiEAAQiCAAhdBdg");
	this.shape_7.setTransform(275,155,0.907,0.907);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ao3C+ICWl7INDAAICVF7gAHABtIhVjZIrUAAIhXDZIOAAAg");
	this.shape_8.setTransform(275,264.4,0.907,0.907);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhQBRQghgiAAgvQAAguAhgiQAighAuAAQAvAAAiAhQAhAiAAAuQAAAvghAiQgiAhgvAAQguAAgighgAgWgWQgKAJAAANQAAANAKAKQAKAKAMAAQAOAAAJgKQAKgKAAgNQAAgNgKgJQgJgKgOAAQgMAAgKAKg");
	this.shape_9.setTransform(286.8,74.2,0.907,0.907);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhQBRQghgiAAgvQAAguAhgiQAighAuAAQAvAAAiAhQAhAiAAAuQAAAvghAiQgiAhgvAAQguAAgighgAgWgWQgKAJAAANQAAANAKAKQAKAKAMAAQAOAAAJgKQAKgKAAgNQAAgNgKgJQgJgKgOAAQgMAAgKAKg");
	this.shape_10.setTransform(263.3,74.2,0.907,0.907);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_1}]}).wait(90));

	// eyes
	this.instance_2 = new lib.eyesglow();
	this.instance_2.setTransform(275,74.1,1,1,0,0,0,15,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// bg
	this.instance_3 = new lib.sitebg();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,225,550,450);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;