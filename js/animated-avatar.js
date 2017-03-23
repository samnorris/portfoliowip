(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes
	lib.webFontTxtFilters = {};

// library properties:
	lib.properties = {
		width: 420,
		height: 472,
		fps: 60,
		color: "#FFFFFF",
		webfonts: {},
		manifest: []
	};



	lib.webfontAvailable = function(family) {
		lib.properties.webfonts[family] = true;
		var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
		for(var f = 0; f < txtFilters.length; ++f) {
			txtFilters[f].updateCache();
		}
	};
// symbols:



	(lib.hood = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#252525").s().p("AjxCQIDbiNQDiiPAxgMIhFAmIjUCAQjWCEAAAFIgKACg");
		this.shape.setTransform(25.4,46.8);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#252525").s().p("AAzggQB0gmBjgaQABAMgGABQhKAPjQBKIj0BbQBWg5DmhIg");
		this.shape_1.setTransform(83.1,19.4);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#252525").s().p("ABcgkQAoBBgHgGQgigZhuAQIhqAXQAwgOCpg7g");
		this.shape_2.setTransform(100.8,30.1);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#252525").s().p("ACHgOQBLgQAegMIAEAFQgRAIgdALQg6AUg+ANQg9ANiHAJIh9AGQDlgaCVgfg");
		this.shape_3.setTransform(91.6,46.1);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f().s("#282828").ss(2).p("AIsBPQANgUgfg+Ighg7QgLgRgIg3QgKhBANggQAPgmgegKIgigCQnYBLlHD3QhmBOhLBWIg3BGQCIglIfgeQFggUABAAQCbgKAHgJQAOgRgdgng");
		this.shape_4.setTransform(61.5,33);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#2B2B2B").s().p("AogDQQBLhWBmhNQFHj3HYhLIAiACQAeAKgPAmQgNAfAKBBQAIA4ALAQIAhA7QAfA/gNATIAgAjQAdAmgOARQgHAJibAKIlhAUQofAfiIAkg");
		this.shape_5.setTransform(62.3,32.7);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#282828").ss(4).p("AjmADIAGgKQAIgOAOgNQArgoBMgIQBCgGAuAaQBGAmBDANIlKBeQgHAEgMgJQgYgQgXg7g");
		this.shape_6.setTransform(79.6,8.5);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#070707").s().p("AiWBOQgYgQgXg7IAGgKQAIgOANgNQArgoBNgIQBAgGAwAaQBFAmBDANIlJBeIgFABQgGAAgIgGg");
		this.shape_7.setTransform(76.4,8.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.3,-2,123.7,64.2);


	(lib.GearAnim = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#0C0C0C").s().p("AhwALIAvhmIBwgLIBCBcIgvBmIhwALg");
		this.shape.setTransform(60.7,60.7,0.999,0.999,-6);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#0C0C0C").s().p("AAVIHQhuAEhkgoIgxBMIighlIAvhMQhShLgrhlIhXAUIgri5IBYgUQgEhuAohlIhNgxIBlihIBNAxQA2g7BGgoQAdgQAXgKIgVhYIC6gqIAUBXQBugEBkAoIAxhMIChBlIgxBMQBRBJAtBnIBXgTIArC5IhYAVQAEBtgoBlIBNAxIhlChIhNgxQg3A8hFAoQgZAOgaALIAUBYIi6AqgAg7kGQgoAIgjAVQhMArgkBSQgmBSAVBXQAZBtBfA8QBfA6BrgZQApgIAhgVQBOgrAkhRQAlhTgUhWQgZhthfg9QhCgphKAAQgeAAghAIg");
		this.shape_1.setTransform(60.7,60.8);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f().s("#333333").ss(15).p("Ag8ktQB7gaBrBHQBqBGAaB+QAaB7hHBrQhHBrh9AaQh8AZhqhHQhrhHgZh9QgZh8BGhqQBHhrB9gZg");
		this.shape_2.setTransform(60.8,60.7);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-22.9,-8.1,144.4,129.6);


	(lib.Codeline12 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AFnAcIAAg3IIQAAIAAA3gAgLAcIAAg3IEqAAIAAA3gAotAcIAAg3IHSAAIAAA3gAt2AcIAAg3IEJAAIAAA3g");
		this.shape.setTransform(88.8,2.9);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,177.6,5.7);


	(lib.Codeline11 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F71735").s().p("AiDAcIAAg3IEHAAIAAA3g");
		this.shape.setTransform(39.7,2.9);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("AGuAcIAAg3IEsAAIAAA3gACEAcIAAg3IDWAAIAAA3gArZAcIAAg3IC9AAIAAA3g");
		this.shape_1.setTransform(73.1,2.9);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,146.2,5.7);


	(lib.Codeline10 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AEfAcIAAg3IEsAAIAAA3gApKAcIAAg3IEJAAIAAA3g");
		this.shape.setTransform(58.8,2.9);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#5E5E5E").s().p("AE0AcIAAg3IEsAAIAAA3gApgAcIAAg3IEKAAIAAA3g");
		this.shape_1.setTransform(93.9,2.9);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,154.8,5.8);


	(lib.Codeline9 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("ACfAcIAAg3IIRAAIAAA3gAqvAcIAAg3IHSAAIAAA3g");
		this.shape.setTransform(68.8,2.8);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,137.6,5.7);


	(lib.Codeline8 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AJsAcIAAg3IEQAAIAAA3gACfAcIAAg3IEQAAIAAA3gAgeAcIAAg3ICYAAIAAA3gAk7AcIAAg3IDwAAIAAA3gArTAcIAAg3IDwAAIAAA3gAt8AcIAAg3ICIAAIAAA3g");
		this.shape.setTransform(89.3,2.9);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,178.6,5.7);


	(lib.Codeline7 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#5E5E5E").s().p("AHJAcIAAg3ICaAAIAAA3gAD2AcIAAg3IBpAAIAAA3gAmpAcIAAg3ICIAAIAAA3gApiAcIAAg3IBcAAIAAA3g");
		this.shape.setTransform(61.2,2.9);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("AHbAcIAAg3ICaAAIAAA3gAEcAcIAAg3ICaAAIAAA3gAnMAcIAAg3ICIAAIAAA3gAp1AcIAAg3ICIAAIAAA3g");
		this.shape_1.setTransform(105.5,2.9);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,168.5,5.8);


	(lib.Codeline6 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#5E5E5E").s().p("AhCAXIAAgtICFAAIAAAtg");
		this.shape.setTransform(41.7,2.4);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#F71735").s().p("AhMAXIAAgtICZAAIAAAtg");
		this.shape_1.setTransform(134.1,2.4);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFFFFF").s().p("AKKAXIAAgtICaAAIAAAtgADqAXIAAgtICaAAIAAAtgABAAXIAAgtIBqAAIAAAtgAkdAXIAAgtICIAAIAAAtgAqNAXIAAgtICIAAIAAAtgAsjAXIAAgtIBeAAIAAAtg");
		this.shape_2.setTransform(80.5,2.4);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,161,4.8);


	(lib.Codeline5 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("ALcAcIAAg3ICaAAIAAA3gAGoAcIAAg3IEPAAIAAA3gAglAcIAAg3IEOAAIAAA3gAjMAcIAAg3ICIAAIAAA3gAndAcIAAg3IDwAAIAAA3gAt1AcIAAg3IDxAAIAAA3g");
		this.shape.setTransform(88.6,2.9);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,177.2,5.7);


	(lib.codewindow = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#161D21").s().p("AhwAMIAAgXIDhAAIAAAXg");
		this.shape.setTransform(36.7,14.6);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("AhwAMIAAgXIDhAAIAAAXg");
		this.shape_1.setTransform(64.8,5.4);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFFFFF").s().p("AhwAMIAAgXIDhAAIAAAXg");
		this.shape_2.setTransform(36.7,5.4);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#0F0F0F").s().p("AoMA0IAAhnIQZAAIAABng");
		this.shape_3.setTransform(52.6,5.2);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FFFFFF").s().p("AoMA7IAAh1IQZAAIAAB1g");
		this.shape_4.setTransform(52.6,12.3);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#0F0F0F").s().p("AoMLAIAA1/IQZAAIAAV/g");
		this.shape_5.setTransform(52.6,70.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,105.2,140.9);


	(lib.Codeline4 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F71735").s().p("AjnAcIAAg3IHPAAIAAA3g");
		this.shape.setTransform(56.2,2.9);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("AiDAcIAAg3IEHAAIAAA3g");
		this.shape_1.setTransform(13.3,2.9);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#5E5E5E").s().p("AkGAcIAAg3IIOAAIAAA3g");
		this.shape_2.setTransform(151.2,2.9);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFFFF").s().p("AiVAcIAAg3IEqAAIAAA3g");
		this.shape_3.setTransform(102.5,2.9);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,177.6,5.7);


	(lib.Codeline3 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AhIAcIAAg3ICRAAIAAA3g");
		this.shape.setTransform(51.5,2.9);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#5E5E5E").s().p("Ai7AcIAAg3IF4AAIAAA3g");
		this.shape_1.setTransform(18.9,2.9);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFFFFF").s().p("AhSAcIAAg3ICmAAIAAA3g");
		this.shape_2.setTransform(174.9,2.9);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFFFF").s().p("AhSAcIAAg3ICmAAIAAA3g");
		this.shape_3.setTransform(144.3,2.9);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#F71735").s().p("AjVAcIAAg3IGrAAIAAA3g");
		this.shape_4.setTransform(107.3,2.9);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,183.3,5.8);


	(lib.Codeline2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AHZAcIAAg3IEsAAIAAA3gAEvAcIAAg3IA2AAIAAA3gADIAcIAAg3IA2AAIAAA3gABlAcIAAg3IA2AAIAAA3gAm7AcIAAg3IEJAAIAAA3gApRAcIAAg3IAwAAIAAA3gAqrAcIAAg3IAwAAIAAA3gAsEAcIAAg3IAwAAIAAA3g");
		this.shape.setTransform(77.4,2.9);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,154.8,5.8);


	(lib.Path = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#4F4F4F").s().p("AoMTbQjyhmi7i7Qi7i7hmjyQhqj7gBkSQABkRBqj7QBmjyC7i7QC7i7DyhmQD7hqERAAQESAAD7BqQDyBmC7C7QC7C7BmDyQBqD7ABERQgBEShqD7QhmDyi7C7Qi6C7jzBmQj7BqkSAAQkRAAj7hqg");
		this.shape.setTransform(135,135);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,270,270);


	(lib.ClipGroup_0 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 2 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		mask.graphics.p("AjDDoIAAnPIGHAAIAAHPg");
		mask.setTransform(19.6,23.2);

		// Layer 3
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("AhLDBQAAhPA6hbQAggzAsgsQg4gdgHgxQgFgYAHgUQABgEADAAIACAAQAFADgCAFQgGATAFAWQALAtA3AZQADABABADQAAADgCADQgjAhgjAvQhCBjAABTQAAAGgHAAQgGAAAAgGg");
		this.shape.setTransform(31.6,21.4);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#000000").s().p("AA/DBQAAhThChjQgjgvgjghQgCgDAAgDQABgDADgBQA4gZAKgtQAFgWgGgTQgCgFAFgDIACAAQACAAACAEQAHAUgFAYQgHAxg4AdQAtAuAfAxQA6BbAABPQAAAGgHAAQgGAAAAgGg");
		this.shape_1.setTransform(17.6,21.4);

		this.shape.mask = this.shape_1.mask = mask;

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(10,1.5,29.3,39.9);


	(lib.ClipGroup = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 2 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		mask.graphics.p("AjgCyIAAljIHBAAIAAFjg");
		mask.setTransform(22.5,17.8);

		// Layer 3
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#050505").s().p("AjOCxQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQgCgDABgCIAahyQgSgCgLgPQgNgRAGgWIAZhTQAEgOAMgJQAMgJAOAAICZAAQAJAAAIgGQAJgGADgKIACgHQADgFAFACQAGACgCAFIgDAHQgEANgMAJQgLAIgNAAIiZAAQgLAAgIAHQgJAGgDALIgZBTQgEAPAKANQAIALANACIAVhZQABgEAFAAIDjAAIA6h4QADgFAGgCQAGgCAFACIAUAKQAFADACAFQACAGgDAFIgvBiIAqAAQAGAAAAAEIAxDWQABACgCADQgCACgDAAgADTClIgujKIgsAAIgEAJIAgAAQAFAAABAFIAeCkQABACgCADQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIk4AAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgBgBAAAAQgCgCAAgDIAIgtIg0AAIgQBFIGaAAgACsCIIgciYIghAAIgpBRQgEAJgLAEQgDABgFAAIgGgBIgFAKQgBADgEAAIgDgBQgFgCADgFIAEgKQgFgGgCgFQgDgKAEgKIAeg6IiZAAIgbCYIEqAAgAi1BUIA0AAIALg/IgwAAgACLijIhoDSQgDAGACAFQACAGAFACQAEADAHgCQAGgDACgFIBojSIAAgCIgBgCIgUgJIgCgBQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABAAAAgAikAJIAwAAIAGggQABgFAFAAICjAAIAFgJIjZAAg");
		this.shape.setTransform(22.5,17.8);

		this.shape.mask = mask;

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,45,35.5);


	(lib.Path_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#282828").s().p("AgLAqQgUgqgIgtQBEgXALgHQgNAIgJAWQgSAsAQBDIgLAKQgGgMgKgWg");
		this.shape_1.setTransform(4.1,7.7);

		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0.1,8.2,15.4);


	(lib.Path_2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#282828").s().p("AhnBIQgBhNgygXQAtANA+gIQB6gQBQhqQgEBEgiBHQhHCMidAMQAJgjgBgng");
		this.shape_2.setTransform(15.6,14.7);

		this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,31.1,29.4);


	(lib.Path_3 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#1E1E1E").s().p("AAlB0QBRg9gohtQglhng5AUQggALg4BAQAegzAogaQBMgzAvCAQAtB5hZA8QgtAegzAGQAxgJAngeg");
		this.shape_3.setTransform(10.5,15.5);

		this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,21,31);


	(lib.Path_4 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.lf(["#020202","rgba(7,7,7,0.976)","rgba(22,22,22,0.922)","rgba(46,46,46,0.827)","rgba(79,79,79,0.694)","rgba(123,123,123,0.522)","rgba(175,175,175,0.314)","rgba(237,237,237,0.071)","rgba(255,255,255,0)"],[0.137,0.227,0.333,0.451,0.573,0.698,0.831,0.965,1],15.2,-27.2,-19.2,7.2).s().p("AhDDlIgPgbQgZgpgggdIADACQgSgXgOghQgahCASgtIg0iTIHJg0QhaDYglBHIhPBNQhOBQgFAQQgBAFgBAAQgCAAgDgEg");
		this.shape_4.setTransform(23,23.4);

		this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,45.9,46.7);


	(lib.Path_3_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F7F5F5").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEgBQAEABAEADQADADAAAEQAAAFgDADQgEAEgEAAQgEAAgDgEg");
		this.shape.setTransform(1.2,1.2);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,2.4,2.4);


	(lib.Path_5 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#F7F5F5").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
		this.shape_5.setTransform(0.9,0.9);

		this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,1.8,1.8);


	(lib.Path_7 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#5E5E5E").s().p("AgDBFQgThRAMg9IAQhDIAFBDQAHAegEA2QgGBVAHAtQgLgegHgqg");
		this.shape.setTransform(1.6,14.1);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,3.3,28.3);


	(lib.Path_6 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#5E5E5E").s().p("AgEAvQgKgtAIgnIAKgvIAEAvQAEAUgDAjIgEAeQgCAUACARQgFgPgEgXg");
		this.shape.setTransform(1.1,8.5);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,2.2,17.1);


	(lib.Path_5_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#5E5E5E").s().p("AgEAwIgEgeQgDgjAFgUIADgvIAKAvQAIAngKAtQgFAXgEAPQADgRgDgUg");
		this.shape.setTransform(1.1,8.5);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,2.2,17.1);


	(lib.Path_4_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#5E5E5E").s().p("AgGhGIAIAbQAIASgFAxQgDAZgDAWQADhHgIhGg");
		this.shape.setTransform(0.7,7.1);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,1.5,14.3);


	(lib.Path_3_2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#5E5E5E").s().p("AgHATQgDgqAJgOIAKgWQgMA7AAA8QgDgTgBgWg");
		this.shape_1.setTransform(0.9,6.1);

		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,1.9,12.2);


	(lib.Path_2_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#5E5E5E").s().p("AgFg9IAHAYQAHAPgFAqQgDAXgCATQACg+gGg9g");
		this.shape.setTransform(0.7,6.2);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,1.3,12.5);


	(lib.Path_1_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#5E5E5E").s().p("AAAgaIAHgQQgJAqAAArQgIg1AKgQg");
		this.shape.setTransform(0.6,4.4);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.1,0,1.5,8.7);


	(lib.Path_8 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#5E5E5E").s().p("AgBgxIADAcQAHARgNA1QAEgsgBg2g");
		this.shape_6.setTransform(0.5,5);

		this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,1,10);


	(lib._010medicalai = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 010-medical.ai
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("EgDhAlSQheheAAiEIABgMI4fnQQgsBHhHApQhJArhVABQiFAAheheQheheAAiFQAAhtBFhXQBDhUBpgcMAAAgl0QhqgchChUQhFhXAAhuQAAiEBeheQBeheCFgBQBVABBJArQBHApAsBHIYfnQIgBgLQAAiFBeheQBeheCDAAQCDAABfBeQBeBegBCFIgBALIYgHQQArhHBHgpQBKgrBWgBQCDABBfBeQBeBegBCEQAABuhEBXQhDBUhpAcMAAAAl0QBpAcBDBUQBEBXAABtQABCFheBeQhfBeiDAAQhWgBhKgrQhHgpgrhHI4gHQIABAMQABCEheBeQhfBeiDgBQiDABhehegAhwf+QguAvAABDQAABCAuAuQAvAwBBgBQBBABAvgwQAwgugBhCQABhDgwgvQgvguhBAAQhBAAgvAugAC/RvQgyAlg+ARIAAKWQA+AQAyAlQAxAmAhA1IYfnQIAAgMIAAgLI4fnQQghA1gxAmgA8wXkIABALIgBAMIYgHQQAgg1AygmQAzglA9gQIAAqWQg9gRgzglQgygmggg1gAf+V/QguAvAABBQAABDAuAuQAvAvBDAAQBBAAAvgvQAwgugBhDQABhBgwgvQgvgwhBABQhDgBgvAwgEgjgAV/QguAvAABBQAABDAuAuQAvAvBDAAQBBAAAvgvQAwgugBhDQABhBgwgvQgvgwhBABQhDgBgvAwgAE+t5IABALQAABuhEBXQhDBUhpAbIAAR1QBpAcBDBUQBEBWAABuIgBAMIYgHQQAgg1AygmQAzglA9gQMAAAgl0Qg9gRgzglQgygmggg1gA+vzvQgyAlg+ARMAAAAl0QA+AQAyAlQAxAmAhA1IYfnQIgBgMQAAhuBFhWQBDhUBpgcIAAx1QhqgbhChUQhFhXAAhuIABgLI4fnRQghA1gxAmgABPP6QAlgWAWgkQAWglgBgsQABgqgWgmQgWgkglgVgAiJMfQgVAlAAArQAAAsAVAlQAWAkAlAWIAAkUQglAVgWAkgAhwvgQguAwAABCQAABCAuAuQAvAwBBAAQBBAAAvgwQAwgugBhCQABhCgwgwQgvguhBgBQhBABgvAugACeyDQBHApAsBIIYfnRIAAgLIAAgMI4fnQQgsBHhHApQhJAshVgBQhVABhJgsQhHgpgrhHI4gHQIABAMIgBALIYgHRQArhIBHgpQBKgrBUgBQBVABBJArgAf+5gQguAwAABCQAABCAuAuQAvAwBDgBQBBABAvgwQAwgugBhCQABhCgwgwQgvguhBAAQhDAAgvAugEgjggZgQguAwAABCQAABCAuAuQAvAwBDgBQBBABAvgwQAwgugBhCQABhCgwgwQgvguhBAAQhDAAgvAugEgBwgjgQguAvAABDQAABCAuAuQAvAwBBgBQBBABAvgwQAwgugBhCQABhDgwgvQgvguhBAAQhBAAgvAug");
		this.shape.setTransform(255,248,0.081,0.081);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(235,228,40,40);


// stage content:
	(lib.AnimatedAvatar = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Code13
		this.instance = new lib.Codeline12();
		this.instance.setTransform(268.1,260.9,0.352,0.477,0,0,0,88.5,3);
		this.instance.alpha = 0;
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(97).to({_off:false},0).wait(1).to({regX:88.8,regY:2.9,x:277.3,y:260.8,alpha:0.1},0).wait(1).to({x:286.4,alpha:0.2},0).wait(1).to({x:295.4,alpha:0.3},0).wait(1).to({x:304.5,alpha:0.4},0).wait(1).to({x:313.6,alpha:0.5},0).wait(1).to({x:322.7,alpha:0.6},0).wait(1).to({x:331.8,alpha:0.7},0).wait(1).to({x:340.9,alpha:0.8},0).wait(1).to({x:350,alpha:0.9},0).wait(1).to({x:359,alpha:1},0).wait(65));

		// Code12
		this.instance_1 = new lib.Codeline11();
		this.instance_1.setTransform(283.5,252.4,0.477,0.477,0,0,0,72.5,2.9);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},0).wait(1).to({regX:73.1,x:290.6,y:252.3,alpha:0.1},0).wait(1).to({x:297.5,alpha:0.2},0).wait(1).to({x:304.4,alpha:0.3},0).wait(1).to({x:311.3,alpha:0.4},0).wait(1).to({x:318.2,alpha:0.5},0).wait(1).to({x:325.1,alpha:0.6},0).wait(1).to({x:331.9,alpha:0.7},0).wait(1).to({x:338.8,alpha:0.8},0).wait(1).to({x:345.7,alpha:0.9},0).wait(1).to({x:352.6,alpha:1},0).wait(74));

		// Code11
		this.instance_2 = new lib.Codeline10();
		this.instance_2.setTransform(285.1,244.3,0.477,0.477,0,0,0,77.3,3);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).wait(1).to({regX:77.4,regY:2.9,x:292.5,y:244.2,alpha:0.1},0).wait(1).to({x:299.8,alpha:0.2},0).wait(1).to({x:307.2,alpha:0.3},0).wait(1).to({x:314.5,alpha:0.4},0).wait(1).to({x:321.9,alpha:0.5},0).wait(1).to({x:329.2,alpha:0.6},0).wait(1).to({x:336.6,alpha:0.7},0).wait(1).to({x:343.9,alpha:0.8},0).wait(1).to({x:351.3,alpha:0.9},0).wait(1).to({x:358.6,alpha:1},0).wait(83));

		// Code10
		this.instance_3 = new lib.Codeline9();
		this.instance_3.setTransform(281.3,235.6,0.477,0.477,0,0,0,68.8,2.6);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({_off:false},0).wait(1).to({regY:2.8,x:287.1,alpha:0.1},0).wait(1).to({x:293,alpha:0.2},0).wait(1).to({x:298.8,alpha:0.3},0).wait(1).to({x:304.6,alpha:0.4},0).wait(1).to({x:310.4,alpha:0.5},0).wait(1).to({x:316.3,alpha:0.6},0).wait(1).to({x:322.1,alpha:0.7},0).wait(1).to({x:327.9,alpha:0.8},0).wait(1).to({x:333.8,alpha:0.9},0).wait(1).to({x:339.6,alpha:1},0).wait(92));

		// Code9
		this.instance_4 = new lib.Codeline8();
		this.instance_4.setTransform(289.4,221.8,0.477,0.477,0,0,0,89.5,2.5);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(61).to({_off:false},0).wait(1).to({regX:89.3,regY:2.9,x:295.4,y:221.9,alpha:0.1},0).wait(1).to({x:301.6,alpha:0.2},0).wait(1).to({x:307.8,alpha:0.3},0).wait(1).to({x:313.9,alpha:0.4},0).wait(1).to({x:320.1,alpha:0.5},0).wait(1).to({x:326.3,alpha:0.6},0).wait(1).to({x:332.5,alpha:0.7},0).wait(1).to({x:338.6,alpha:0.8},0).wait(1).to({x:344.8,alpha:0.9},0).wait(1).to({x:351,alpha:1},0).wait(101));

		// Code8
		this.instance_5 = new lib.Codeline7();
		this.instance_5.setTransform(277.8,212.9,0.477,0.477,0,0,0,84.4,2.8);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(53).to({_off:false},0).wait(1).to({regX:84.3,regY:2.9,x:285.9,alpha:0.111},0).wait(1).to({x:294,alpha:0.222},0).wait(1).to({x:302.2,alpha:0.333},0).wait(1).to({x:310.3,alpha:0.444},0).wait(1).to({x:318.5,alpha:0.556},0).wait(1).to({x:326.7,alpha:0.667},0).wait(1).to({x:334.8,alpha:0.778},0).wait(1).to({x:343,alpha:0.889},0).wait(1).to({x:351.1,alpha:1},0).wait(110));

		// Code7
		this.instance_6 = new lib.Codeline6();
		this.instance_6.setTransform(281.2,202.4,0.477,0.477,0,0,0,80.9,2.5);
		this.instance_6.alpha = 0;
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45).to({_off:false},0).wait(1).to({regX:80.5,regY:2.4,x:288.6,y:202.3,alpha:0.111},0).wait(1).to({x:296.2,alpha:0.222},0).wait(1).to({x:303.8,alpha:0.333},0).wait(1).to({x:311.4,alpha:0.444},0).wait(1).to({x:319,alpha:0.556},0).wait(1).to({x:326.6,alpha:0.667},0).wait(1).to({x:334.2,alpha:0.778},0).wait(1).to({x:341.8,alpha:0.889},0).wait(1).to({x:349.4,alpha:1},0).wait(118));

		// Code6
		this.instance_7 = new lib.Codeline5();
		this.instance_7.setTransform(282.5,192.8,0.477,0.477,0,0,0,88.6,2.8);
		this.instance_7.alpha = 0;
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(37).to({_off:false},0).wait(1).to({regY:2.9,x:290.3,alpha:0.111},0).wait(1).to({x:298.1,alpha:0.222},0).wait(1).to({x:306,alpha:0.333},0).wait(1).to({x:313.8,alpha:0.444},0).wait(1).to({x:321.6,alpha:0.556},0).wait(1).to({x:329.5,alpha:0.667},0).wait(1).to({x:337.3,alpha:0.778},0).wait(1).to({x:345.2,alpha:0.889},0).wait(1).to({x:353,alpha:1},0).wait(126));

		// Code5
		this.instance_8 = new lib.Codeline4();
		this.instance_8.setTransform(282.9,177.1,0.477,0.477,0,0,0,88.9,2.8);
		this.instance_8.alpha = 0;
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(28).to({_off:false},0).wait(1).to({regX:88.8,x:289.8,y:177,alpha:0.1},0).wait(1).to({x:296.8,alpha:0.2},0).wait(1).to({x:303.7,alpha:0.3},0).wait(1).to({x:310.7,alpha:0.4},0).wait(1).to({x:317.7,alpha:0.5},0).wait(1).to({x:324.6,alpha:0.6},0).wait(1).to({x:331.6,alpha:0.7},0).wait(1).to({x:338.6,alpha:0.8},0).wait(1).to({x:345.5,alpha:0.9},0).wait(1).to({x:352.5,alpha:1},0).wait(134));

		// Code4
		this.instance_9 = new lib.Codeline3();
		this.instance_9.setTransform(275,168.4,0.477,0.477,0,0,0,91.5,2.5);
		this.instance_9.alpha = 0;
		this.instance_9._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},0).wait(1).to({regX:91.6,regY:2.9,x:282.6,y:168.5,alpha:0.1},0).wait(1).to({x:290.2,alpha:0.2},0).wait(1).to({x:297.8,alpha:0.3},0).wait(1).to({x:305.4,alpha:0.4},0).wait(1).to({x:313,alpha:0.5},0).wait(1).to({x:320.6,alpha:0.6},0).wait(1).to({x:328.2,alpha:0.7},0).wait(1).to({x:335.8,alpha:0.8},0).wait(1).to({x:343.4,alpha:0.9},0).wait(1).to({x:351,alpha:1},0).wait(143));

		// Code-line2
		this.instance_10 = new lib.Codeline2();
		this.instance_10.setTransform(283.5,160,0.477,0.477,0,0,0,77.3,3);
		this.instance_10.alpha = 0;
		this.instance_10._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({_off:false},0).wait(1).to({regX:77.4,regY:2.9,x:289.6,y:159.9,alpha:0.091},0).wait(1).to({x:295.7,alpha:0.182},0).wait(1).to({x:301.7,alpha:0.273},0).wait(1).to({x:307.8,alpha:0.364},0).wait(1).to({x:313.8,alpha:0.455},0).wait(1).to({x:319.9,alpha:0.545},0).wait(1).to({x:326,alpha:0.636},0).wait(1).to({x:332,alpha:0.727},0).wait(1).to({x:338.1,alpha:0.818},0).wait(1).to({x:344.1,alpha:0.909},0).wait(1).to({x:350.2,alpha:1},0).wait(152));

		// Cog
		this.instance_11 = new lib.GearAnim("synched",0);
		this.instance_11.setTransform(392.3,124.4,0.461,0.461,0,0,0,60.7,61.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regY:60.8,rotation:1,x:392.2,y:124.3},0).wait(1).to({rotation:2},0).wait(1).to({rotation:3},0).wait(1).to({rotation:4,x:392.3},0).wait(1).to({rotation:5},0).wait(1).to({rotation:6},0).wait(1).to({rotation:7.1},0).wait(1).to({rotation:8.1,x:392.2},0).wait(1).to({rotation:9.1,x:392.3},0).wait(1).to({rotation:10.1},0).wait(1).to({rotation:11.1,x:392.2},0).wait(1).to({rotation:12.1},0).wait(1).to({rotation:13.1,x:392.3},0).wait(1).to({rotation:14.1},0).wait(1).to({rotation:15.1},0).wait(1).to({rotation:16.1},0).wait(1).to({rotation:17.1},0).wait(1).to({rotation:18.1},0).wait(1).to({rotation:19.2},0).wait(1).to({rotation:20.2},0).wait(1).to({rotation:21.2},0).wait(1).to({rotation:22.2},0).wait(1).to({rotation:23.2},0).wait(1).to({rotation:24.2},0).wait(1).to({rotation:25.2},0).wait(1).to({rotation:26.2},0).wait(1).to({rotation:27.2},0).wait(1).to({rotation:28.2},0).wait(1).to({rotation:29.2},0).wait(1).to({rotation:30.2,x:392.4},0).wait(1).to({rotation:31.3,x:392.3},0).wait(1).to({rotation:32.3},0).wait(1).to({rotation:33.3},0).wait(1).to({rotation:34.3},0).wait(1).to({rotation:35.3},0).wait(1).to({rotation:36.3},0).wait(1).to({rotation:37.3},0).wait(1).to({rotation:38.3},0).wait(1).to({rotation:39.3,x:392.4},0).wait(1).to({rotation:40.3},0).wait(1).to({rotation:41.3},0).wait(1).to({rotation:42.3,x:392.3},0).wait(1).to({rotation:43.4},0).wait(1).to({rotation:44.4},0).wait(1).to({rotation:45.4},0).wait(1).to({rotation:46.4},0).wait(1).to({rotation:47.4,y:124.4},0).wait(1).to({rotation:48.4,x:392.4,y:124.3},0).wait(1).to({rotation:49.4,x:392.3},0).wait(1).to({rotation:50.4,x:392.4},0).wait(1).to({rotation:51.4,y:124.4},0).wait(1).to({rotation:52.4},0).wait(1).to({rotation:53.4},0).wait(1).to({rotation:54.4,y:124.3},0).wait(1).to({rotation:55.5,x:392.3,y:124.4},0).wait(1).to({rotation:56.5,x:392.4},0).wait(1).to({rotation:57.5},0).wait(1).to({rotation:58.5,y:124.3},0).wait(1).to({rotation:59.5,y:124.4},0).wait(1).to({rotation:60.5,y:124.3},0).wait(1).to({rotation:61.5,y:124.4},0).wait(1).to({rotation:62.5},0).wait(1).to({rotation:63.5},0).wait(1).to({rotation:64.5},0).wait(1).to({rotation:65.5},0).wait(1).to({rotation:66.5},0).wait(1).to({rotation:67.6},0).wait(1).to({rotation:68.6},0).wait(1).to({rotation:69.6},0).wait(1).to({rotation:70.6},0).wait(1).to({rotation:71.6},0).wait(1).to({rotation:72.6},0).wait(1).to({rotation:73.6},0).wait(1).to({rotation:74.6},0).wait(1).to({rotation:75.6},0).wait(1).to({rotation:76.6},0).wait(1).to({rotation:77.6},0).wait(1).to({rotation:78.6},0).wait(1).to({rotation:79.7},0).wait(1).to({rotation:80.7},0).wait(1).to({rotation:81.7},0).wait(1).to({rotation:82.7},0).wait(1).to({rotation:83.7},0).wait(1).to({rotation:84.7},0).wait(1).to({rotation:85.7},0).wait(1).to({rotation:86.7},0).wait(1).to({rotation:87.7},0).wait(1).to({rotation:88.7},0).wait(1).to({rotation:89.7,y:124.5},0).wait(1).to({rotation:90.7},0).wait(1).to({rotation:91.8},0).wait(1).to({rotation:92.8,y:124.4},0).wait(1).to({rotation:93.8,y:124.5},0).wait(1).to({rotation:94.8},0).wait(1).to({rotation:95.8,y:124.4},0).wait(1).to({rotation:96.8,y:124.5},0).wait(1).to({rotation:97.8},0).wait(1).to({rotation:98.8},0).wait(1).to({rotation:99.8},0).wait(1).to({rotation:100.8},0).wait(1).to({rotation:101.8},0).wait(1).to({rotation:102.8},0).wait(1).to({rotation:103.9},0).wait(1).to({rotation:104.9},0).wait(1).to({rotation:105.9},0).wait(1).to({rotation:106.9},0).wait(1).to({rotation:107.9},0).wait(1).to({rotation:108.9},0).wait(1).to({rotation:109.9},0).wait(1).to({rotation:110.9},0).wait(1).to({rotation:111.9},0).wait(1).to({rotation:112.9,y:124.6},0).wait(1).to({rotation:113.9,y:124.5},0).wait(1).to({rotation:114.9,y:124.6},0).wait(1).to({rotation:116,y:124.5},0).wait(1).to({rotation:117},0).wait(1).to({rotation:118},0).wait(1).to({rotation:119},0).wait(1).to({rotation:120},0).wait(1).to({rotation:121},0).wait(1).to({rotation:122,x:392.3,y:124.6},0).wait(1).to({rotation:123,x:392.4,y:124.5},0).wait(1).to({rotation:124},0).wait(1).to({rotation:125},0).wait(1).to({rotation:126,y:124.6},0).wait(1).to({rotation:127,y:124.5},0).wait(1).to({rotation:128.1},0).wait(1).to({rotation:129.1,y:124.6},0).wait(1).to({rotation:130.1,y:124.5},0).wait(1).to({rotation:131.1,x:392.3,y:124.6},0).wait(1).to({rotation:132.1,x:392.4,y:124.5},0).wait(1).to({rotation:133.1,y:124.6},0).wait(1).to({rotation:134.1,x:392.3},0).wait(1).to({rotation:135.1},0).wait(1).to({rotation:136.1},0).wait(1).to({rotation:137.1},0).wait(1).to({rotation:138.1,x:392.4},0).wait(1).to({rotation:139.1},0).wait(1).to({rotation:140.2},0).wait(1).to({rotation:141.2,x:392.3},0).wait(1).to({rotation:142.2},0).wait(1).to({rotation:143.2},0).wait(1).to({rotation:144.2},0).wait(1).to({rotation:145.2},0).wait(1).to({rotation:146.2},0).wait(1).to({rotation:147.2},0).wait(1).to({rotation:148.2},0).wait(1).to({rotation:149.2},0).wait(1).to({rotation:150.2},0).wait(1).to({rotation:151.2},0).wait(1).to({rotation:152.3},0).wait(1).to({rotation:153.3},0).wait(1).to({rotation:154.3},0).wait(1).to({rotation:155.3},0).wait(1).to({rotation:156.3},0).wait(1).to({rotation:157.3},0).wait(1).to({rotation:158.3},0).wait(1).to({rotation:159.3},0).wait(1).to({rotation:160.3},0).wait(1).to({rotation:161.3},0).wait(1).to({rotation:162.3},0).wait(1).to({rotation:163.3},0).wait(1).to({rotation:164.4},0).wait(1).to({rotation:165.4},0).wait(1).to({rotation:166.4},0).wait(1).to({rotation:167.4},0).wait(1).to({rotation:168.4},0).wait(1).to({rotation:169.4},0).wait(1).to({rotation:170.4},0).wait(1).to({rotation:171.4,x:392.2,y:124.7},0).wait(1).to({rotation:172.4,x:392.3,y:124.6},0).wait(1));

		// Hood
		this.instance_12 = new lib.hood();
		this.instance_12.setTransform(261.8,273.5,1,1,0,0,0,61.5,30.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(172));

		// Code-Window
		this.instance_13 = new lib.codewindow();
		this.instance_13.setTransform(351.5,201,1,1,0,0,0,52.6,70.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(172));

		// Layer 18
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#1E1E1E").s().p("AjDG5QhigPhZgUIhFgRQgUjRCSivQBJhWBNguQgWgZgJglQgFgkgCgGIhRgrQglgaAPhbIAWhVQAmA+CzBzQBYA5BTAuIFUhmIgkCYIAVB2QAWB/AFA6QATCCgXBmQgMAzgSAgQhQAFhRAAQjbAAjjgkg");
		this.shape.setTransform(191,325.4,1.012,1.012);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#050505").s().p("ArrGtQAPhqgMiGQgGhJgQhcIgCgJQgMhEgFg8QgLiFAahCQAJgVALgMQAHgGAFgCIL9iaIAgA4QAeA9gKAaIAfAhQAcAlgMASIAAACIABABQADAGB5A0QCSA/BjBAQFWDbg5EsQgfALiwAPQlgAerSARIgBAAIkJAEQALgaAIg1g");
		this.shape_1.setTransform(309.6,322,1.006,1.006);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#050505").s().p("AiBEaQjKg2gSgOQAAhiBHh0QCOjrFihhIBiAtIAHApQAKAtARATQhHAthHBXQiNCtABDSQhfgYhmgbg");
		this.shape_2.setTransform(138.2,331,1.013,1.013);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(172));

		// avatar-vector-for-animation.ai
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#050505").s().p("AgaAuIAAhbIA1AAIAABbg");
		this.shape_3.setTransform(93.3,361.9);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#050505").s().p("AkTAJIAAgRIInAAIAAARg");
		this.shape_4.setTransform(93.3,361.9);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#0F0F0F").s().p("AgYAjIAAhFIAxAAIAABFg");
		this.shape_5.setTransform(93.3,310.2);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#0F0F0F").s().p("AgbAcQgMgLAAgRQAAgPAMgMQAMgMAPABQAQgBAMAMQAMAMAAAPQAAARgMALQgMAMgQAAQgPAAgMgMg");
		this.shape_6.setTransform(93.3,323.8);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#F71735").ss(7).p("AAAAqQgQAAgNgMQgMgNAAgRQAAgQAMgNQANgMAQAAQARAAANAMQAMANAAAQQAAARgMANQgNAMgRAAg");
		this.shape_7.setTransform(93.3,323.8);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#050505").s().p("AiGkBIAogRIDlIUIgoARg");
		this.shape_8.setTransform(108.7,358.2);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#050505").s().p("AgZgyIAHgEIAtBpIgIADg");
		this.shape_9.setTransform(120.1,384.8);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#050505").s().p("AgYA0IAohqIAJADIgpBqg");
		this.shape_10.setTransform(68.4,384.7);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#050505").s().p("Ah+EGIDUobIApAQIjUIbg");
		this.shape_11.setTransform(78.6,358.5);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f().s("#282828").p("ADMCLQhVgMhagPQi0gggbgTQgbgUAAg2IAFg1QAEgQAEgQQAIghADgFIAwAvQA9A5BHAwQBGAyBJAmQAlATAXAIg");
		this.shape_12.setTransform(179.2,291);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#2B2B2B").s().p("AAeBvQi0gggbgTQgbgUAAg2IAFg1IAIggQAIghADgFIAwAvQA9A5BHAwQBGAyBJAmQAlATAXAIIACAIQhVgMhagPg");
		this.shape_13.setTransform(179.1,291.1);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#1E1E1E").s().p("AhRCHQgGgMgDgjQgHheAdgdQAegdAsgnQAsgkACABQABACAUAHIATAHIAABTQglATgnAbQhLA6gKA0QgDAWgFAAQgCAAgCgEg");
		this.shape_14.setTransform(178.7,221.5);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#1E1E1E").s().p("ACADsQANh8gLhKQgOheiig7QgzgSg8gNIgygIIAAhTQAVAAAfgQQAPgIALgIIBeAnQBnAwAyArQA6AyAUAxQASAqgIA3IgJA+QgFARgoBYQgUAugEAAIAAAAQgDAAADgig");
		this.shape_15.setTransform(208.9,233.1);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#424242").s().p("AhLDJQgSgGgKgQQgZgoArg6QAtg9AHhXIgBhOIAbg5IADADIgQAnIABBSQgGBZglAxQgkAwATAsQAHASANAHQAOAIAMgIQA0giAcALQA2AWABgmIgKgpQAhAdgSAmQgSAmgogTQgdgNgUAHIgrAVQgJAFgKAAQgHAAgGgCg");
		this.shape_16.setTransform(189.2,184.6);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#353535").s().p("AhAAiQgrgDANgSIAcgUQAhgXAdgEQAcgDAoAPQAUAIAOAJQgBAFgGAHQgNAPgeAEIgQACIANgDQAlgKAOgPQgPgGgUgFQgpgKgYAEQgfAFgYAMQgUAIgGAKQgCADAiAHIAiAGIgXABIgWgBg");
		this.shape_17.setTransform(177,176);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#353535").s().p("AheAlQgygGAJgUIAjgWQArgYAlgDQAjgDBAAUQAhAJAZALQgIAGgQAJQggARgmADQgmADADgBIALgBIAogHQAsgMAUgRQgXgGgegGQg8gLgfAEQgmAEggAOQgaAJgIALQgCAEAqAJIArAJIgHAAQgXAAgWgDg");
		this.shape_18.setTransform(212.8,171.9);

		this.instance_14 = new lib.Path_5();
		this.instance_14.setTransform(177.8,175,1,1,0,0,0,0.8,0.8);
		this.instance_14.alpha = 0.352;

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#000000").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAIADABIAAADQAAAEACACQADACAEAAIAAAAIABAAQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
		this.shape_19.setTransform(176.7,176);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f().s("#474747").p("AAZAAQAAALgHAHQgIAIgKAAQgKAAgHgIQgIgHAAgLQAAgKAIgHQAHgIAKAAQAKAAAIAIQAHAHAAAKg");
		this.shape_20.setTransform(176.7,176);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#4F4F4F").s().p("AgRASQgIgIABgKQgBgJAIgIQAIgHAJAAQAKAAAIAHQAIAIgBAJQABAKgIAIQgIAIgKAAQgJAAgIgIg");
		this.shape_21.setTransform(176.7,176);

		this.instance_15 = new lib.Path_3_1();
		this.instance_15.setTransform(212.6,170.7,1,1,0,0,0,1.2,1.2);
		this.instance_15.alpha = 0.352;

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#000000").s().p("AgLAMQgFgFgBgHQABgGAFgFQAFgGAGABIAFABIAAADQgBAFAEAEQADADAFAAIABAAIAAAAQAAAHgEAFQgGAFgHABQgGgBgFgFg");
		this.shape_22.setTransform(210.9,172);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f().s("#474747").p("AAhAAQAAANgKAKQgKAKgNAAQgNAAgJgKQgKgKAAgNQAAgNAKgJQAJgKANAAQANAAAKAKQAKAJAAANg");
		this.shape_23.setTransform(210.9,172);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#4F4F4F").s().p("AgWAXQgKgKAAgNQAAgNAKgJQAJgKANAAQANAAAKAKQAKAJAAANQAAANgKAKQgKAKgNAAQgNAAgJgKg");
		this.shape_24.setTransform(210.9,172);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#000000").s().p("AgeAJQgNgCAAgFQgBgDANgEQANgEASgBQASAAAMACQAOADAAAEQAAADgNAEQgNAEgSABIgIAAQgMAAgKgCg");
		this.shape_25.setTransform(191.4,202.4);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#0F0F0F").s().p("ABpKeQBAjci3iGIAugBQA7gGAxgVQCehFAHjSQAHjPhchJQgdgXgjgGIgegCIAigIQAmgLAZgTQBNg+hfh0QhChTi/AhQg9ALhCAUIg1ATQgKgLgSgGQgkgNgqATQg7AYgpBWIgdBRQgCgngDgnQgGhLgGAFQgYAXgfBVQgQAqgLAmQAAhLAZhSQAzilCDgpQgUABgYAGQgwAMgYAcIAZggQAfgmAggXQAegXA6gLQA0gMACgBQAXgeAYgcQAtgxAOgCIgKAtQgKAxAIASIAxguQA1gxAPgEIgPAYQgPAeABAaIAigTQApgUAvgGQgZAKgOAKQgaAVAyAGIAnABQAuABAkADQANABAOgSQAHgKAFgJIAUArIAFAGQAIAGAOgBIAvgNQA2gMAlAAQgbAHgWANQgtAZAYAWIAvARQA5AbAqAzQCKCjgwFbQgvgJguAMQheAVAABhQAACrgOCbQgTDXgoA/QgmA7iDBfIh7BTQBGhUAghug");
		this.shape_26.setTransform(215.3,182.7);

		this.instance_16 = new lib.Path_1();
		this.instance_16.setTransform(171.7,210.7,1,1,0,0,0,4.1,7.7);
		this.instance_16.alpha = 0.551;

		this.instance_17 = new lib.Path_2();
		this.instance_17.setTransform(231,199.4,1,1,0,0,0,15.6,14.7);
		this.instance_17.alpha = 0.551;

		this.instance_18 = new lib.Path_8();
		this.instance_18.setTransform(214.9,251,1,1,0,0,0,0.5,5);
		this.instance_18.alpha = 0.352;

		this.instance_19 = new lib.Path_1_1();
		this.instance_19.setTransform(175.1,251.3,1,1,0,0,0,0.6,4.4);
		this.instance_19.alpha = 0.352;

		this.instance_20 = new lib.Path_2_1();
		this.instance_20.setTransform(210.5,254,1,1,0,0,0,0.7,6.2);
		this.instance_20.alpha = 0.352;

		this.instance_21 = new lib.Path_3_2();
		this.instance_21.setTransform(179.7,254,1,1,0,0,0,1,6);
		this.instance_21.alpha = 0.352;

		this.instance_22 = new lib.Path_4_1();
		this.instance_22.setTransform(205.1,255.7,1,1,0,0,0,0.7,7.1);
		this.instance_22.alpha = 0.352;

		this.instance_23 = new lib.Path_5_1();
		this.instance_23.setTransform(198.8,255.9,1,1,0,0,0,1.1,8.5);
		this.instance_23.alpha = 0.352;

		this.instance_24 = new lib.Path_6();
		this.instance_24.setTransform(185.4,255.5,1,1,0,0,0,1.1,8.5);
		this.instance_24.alpha = 0.352;

		this.instance_25 = new lib.Path_7();
		this.instance_25.setTransform(191.7,261.5,1,1,0,0,0,1.6,14.1);
		this.instance_25.alpha = 0.352;

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#282828").s().p("AiCDOQhDg/gEgHIgBAAIgEAnQgKgRgJghIgHgeQgEADABAUIACAUQgJgHgMgmIgKglQgCAEABAPIABANQgSgRgMgiIgKgfQgDhwAPhXIAPhBIALATQAPAWAUATQBBA9BbAAQBaAABhg9QAxgfAegeIBygHQgTC3hDB7QgVAngYAcIgTAVIgTAZQgTAYACgGQAGgOgEgSIgGgQQgEAVgOAWQgPAWADgMQACgGgGgOIgGgNQgCAQgZAgQADgFgCgNIgFgSIgCABIgEAEQg0ArgeAkIgTAcIhDg9g");
		this.shape_27.setTransform(200.4,256);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#2B2B2B").s().p("AAAA5IAAAAQgcgzgJAEQgHADgYACIgWAAQACgIALgGQAHgBgGAAQgHAAgUgFIgSgFQAKgEAVgEQAMgCgHgBIg5gJIAjgMQAvgNA8gBIAAAAQA9ABAvANQAXAGAMAGQgpAIgPABQgIABAMACQAWAEAJAEQggAKgNAAQgFAAAGABQALAGADAIQgrAAgKgFQgKgEgdAzIAAAAg");
		this.shape_28.setTransform(192.7,234.8);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#1E1E1E").s().p("AhmAaQAGg1AYgKQAegNBJgRQBMgQgDAHIgYA6QgvAFgsANQhcAeABAxQgCgaACgbg");
		this.shape_29.setTransform(175.6,170.4);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#1E1E1E").s().p("AB4AHQhNgSgzADQgkAChRAMIhKANIgkgzQC9glBLAFQAkACBAAcQAmAQAmArQATAWAMATQgYgkhcgXg");
		this.shape_30.setTransform(214.3,165.2);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f().s("#282828").ss(2).p("AhhkEQgpASggAkQg/BGAxBUQAuBOCqBjQAqAZBJApQA0AgAHAQQADgRgRgeQghg8hlhCQhLgwgjgXQg8gqgbghQhGhYBwhcg");
		this.shape_31.setTransform(179.7,282.8);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#2B2B2B").s().p("ACTDLIhzhDQiqhjguhOQgxhTA/hHQAggkApgSQhwBcBGBYQAbAhA8ApQAjAYBLAxQBlBBAhA8QARAegDARQgHgQg0gfg");
		this.shape_32.setTransform(179.7,281.7);

		this.instance_26 = new lib.Path_4();
		this.instance_26.setTransform(206.4,281.6,1,1,0,0,0,22.9,23.4);
		this.instance_26.alpha = 0.301;

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.lf(["#020202","rgba(4,4,4,0.988)","rgba(12,12,12,0.957)","rgba(26,26,26,0.902)","rgba(46,46,46,0.824)","rgba(71,71,71,0.725)","rgba(102,102,102,0.604)","rgba(139,139,139,0.455)","rgba(182,182,182,0.286)","rgba(229,229,229,0.098)","rgba(255,255,255,0)"],[0.384,0.537,0.624,0.69,0.749,0.804,0.851,0.898,0.941,0.98,1],-16.1,-11.3,21.6,10.5).s().p("ABKCCQgsgYgwgjQhkhFgdgyQgcgwApg5QAVgdAagTIBhBeQBiBhgIAVQgWA+AnBGQATAkAYAXg");
		this.shape_33.setTransform(178.7,276.9);

		this.instance_27 = new lib.Path_3();
		this.instance_27.setTransform(266.7,189,1,1,0,0,0,10.5,15.5);
		this.instance_27.alpha = 0.512;

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f().ls(["rgba(255,255,255,0)","rgba(227,227,227,0.11)","rgba(180,180,180,0.294)","rgba(137,137,137,0.463)","rgba(100,100,100,0.608)","rgba(69,69,69,0.729)","rgba(43,43,43,0.827)","rgba(24,24,24,0.902)","rgba(10,10,10,0.957)","rgba(2,2,2,0.988)","#000000"],[0,0.012,0.039,0.067,0.094,0.125,0.157,0.196,0.239,0.29,0.388],-7.7,0,7.7,0).p("ABGgvQgDgPgKgLQgTgXggASQgNAJAFAaQAAACAOAzQAWBPgyAaQgQAEgKgGQgWgKAagtQADgGAAgHQgBgPgUgIQgZgJAQgVQAEgGAUgSQACgPAHgRQANgiAYgMQAagNAWARQAYATgHAog");
		this.shape_34.setTransform(263.9,189.5);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.lf(["rgba(255,255,255,0)","rgba(227,227,227,0.11)","rgba(180,180,180,0.294)","rgba(137,137,137,0.463)","rgba(100,100,100,0.608)","rgba(69,69,69,0.729)","rgba(43,43,43,0.827)","rgba(24,24,24,0.902)","rgba(10,10,10,0.957)","rgba(2,2,2,0.988)","#000000"],[0,0.012,0.039,0.067,0.094,0.125,0.157,0.196,0.239,0.29,0.388],-5.5,11,3.8,-11.5).s().p("AgqBxQgWgKAagtQADgGAAgHQgBgPgUgIQgZgJAQgVQAEgGAUgSQACgPAHgRQANgiAYgMQAagNAWARQAYATgHAoQgDgPgKgLQgTgXggASQgNAJAFAaIAOA1QAWBPgyAaQgGABgGAAQgIAAgGgDg");
		this.shape_35.setTransform(263.9,189.5);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#777777").s().p("AwqT9Qh/ghh6gmIhhggQAgkGEVipQCLhWCEggQgkgkAOhYIAWhQQAMAhgZhVQgQg1A4g2QAdgaAfgQQgCg2AKheIAKhQQgchAAMg1IARgoQgwhWgBhoQgBgXALhTQACgQgDgJQgBgDgJgSQgQgeABg0QAAgyALgHQAMgIgFglQgJgbANhSQAOhagBgMQgBgWBtikQBxioADgMQAFgUA3g2QAagaANgKQgMAMgDA6QgDBCAGgYQACgIAhAEQAlAFAPgTQAQgUA5gRQAagHAJgBQgSADgRAUQgRAUAOgBQAMAAA+AIIBRALQAQACASgeIAJgPQADgEAAAKQgBARASARQAJAIAKAFIBdgXQBSgShDAXQhBAZAZAcQANAOAbAKQCwAxAeEPQAQCIgUB9QAkAGAWAhQALAQADAQQAdBZgYBGQgQAsgqArQgZAYg0ANIgwAIQgOATgKAlQgFASgCAOQgzDnAzB1QAZA7AkAMICpgxQCzgzA4gIQA3gHAFAaQADAOgIAPQgHBgASA2IApBPQASAiACAdQABANgCAIQAlAkAHAiQAEARgEAJQHmC0CCEVQAoBXAABWQAAAsgIAZQhmAjqYAZQotAUnAABQkogBmUhmg");
		this.shape_36.setTransform(244.6,234.6);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#1E1E1E").s().p("Ag/BbIA3kEIBIgGQgGAEgJAKQgSAUgRAhQgyBmgNC1g");
		this.shape_37.setTransform(259.6,225.3);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#000000").s().p("AgFBWIAAiqQAAgHAFABQAGgBAAAHIAACqQAAAFgGAAQgFAAAAgFg");
		this.shape_38.setTransform(206.4,44.1);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#000000").s().p("AgUAbQgGAAAAgGIAAgpQAAgGAGAAIApAAQAGAAAAAGIAAApQAAAGgGAAgAgOAPIAdAAIAAgdIgdAAg");
		this.shape_39.setTransform(206.4,33.4);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#000000").s().p("AgUAbQgGAAAAgGIAAgpQAAgGAGAAIApAAQAGAAAAAGIAAApQAAAGgGAAgAgOAPIAdAAIAAgdIgdAAg");
		this.shape_40.setTransform(227.9,54.9);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#000000").s().p("AgrAsQg7g5AAhSQABgGAFAAQAHAAAAAGQAABNA3A1QA1A3BOAAQAFAAAAAGQAAAGgFAAQhUAAg4g6g");
		this.shape_41.setTransform(216.1,45.2);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#000000").s().p("Ah9AFQgGAAAAgFQAAgFAGAAID7AAQAGAAAAAFQAAAFgGAAg");
		this.shape_42.setTransform(227.9,14);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#000000").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIgAgJgKQgFAFAAAFQAAAGAFAFQAEAEAFAAQAGAAAEgEQAFgFAAgGQAAgFgFgFQgEgEgGAAQgFAAgEAEg");
		this.shape_43.setTransform(206.4,54.9);

		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#000000").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIgAgJgJQgFAEAAAFQAAAGAFAEQAEAFAFAAQAGAAAEgFQAFgEAAgGQAAgFgFgEQgEgFgGAAQgFAAgEAFg");
		this.shape_44.setTransform(227.9,28.3);

		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#000000").s().p("AgFBvIAAjdQAAgGAFAAQAGAAAAAGIAADdQAAAGgGAAQgFAAAAgGg");
		this.shape_45.setTransform(227.9,41.6);

		this.instance_28 = new lib.ClipGroup_0();
		this.instance_28.setTransform(223,35.2,1,1,0,0,0,19.6,23.2);

		this.instance_29 = new lib.ClipGroup();
		this.instance_29.setTransform(360.4,406.5,1,1,0,0,0,22.5,17.8);

		this.instance_30 = new lib._010medicalai("synched",0);
		this.instance_30.setTransform(204,435.5,1.075,1.075,0,0,0,248,248);

		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("#000000").s().p("AglBCQgGgDgCgIQgCgHAEgGIA5hlQAEgGAHgCQAHgCAGAEQAGADACAHQACAIgEAGIg5BlQgEAIgLAAQgFAAgEgCgAAYg1Ig5BlQgDAFAFADIADABQAEAAABgDIA5hlQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAIgDgBQgDAAgCADg");
		this.shape_46.setTransform(60.8,126.1);

		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#000000").s().p("AgpBCQgFgFAAgIQABgHAFgFIArgoIgrgpQgGgFAAgHQAAgIAFgFQAFgFAHAAQAIgBAFAFIA5A5QAGAEAAAHQAAAHgGAFIg6A1QgEAFgHAAQgIAAgFgGgAggg5QgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAwAwQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgwAtQgEAEADAEIAFACQAAAAABAAQABAAAAAAQABgBAAAAQAAAAABAAIA5g1QAAgBABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAgBgBAAIg5g4QgBgBAAAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAg");
		this.shape_47.setTransform(72.1,125.8);

		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("#000000").s().p("AARBDIg5g1QgGgFAAgHQAAgHAGgEIA5g5QAFgFAIABQAHAAAFAFQAFAFAAAIQAAAHgGAFIgrApIArAoQAFAFABAHQAAAIgFAFQgFAGgIAAQgGAAgGgFgAAZg5Ig5A4QgBABAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIACAFIA5A1QABAAAAAAQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAEgEgEgEIgwgtQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAAAABAAQAAAAAAgBQABAAAAAAIAwgwQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBABg");
		this.shape_48.setTransform(49.9,125.8);

		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#000000").s().p("AgQARQgHgIAAgJQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAJgHAIQgHAHgKAAQgJAAgHgHgAgIgIQgDAFAAADQAAAFADADQAFAFADAAQAFAAADgFQAEgDAAgFQAAgDgEgFQgDgDgFAAQgDAAgFADg");
		this.shape_49.setTransform(47.9,108.1);

		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("#000000").s().p("AgQARQgHgIAAgJQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAJgHAIQgHAHgKAAQgJAAgHgHgAgIgIQgDAFAAADQAAAFADADQAEAFAEAAQAFAAADgFQAEgDABgFQgBgDgEgFQgDgDgFAAQgEAAgEADg");
		this.shape_50.setTransform(54.8,108.1);

		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#000000").s().p("AgQARQgHgIAAgJQAAgJAHgHQAHgHAJAAQAJAAAIAHQAHAHAAAJQAAAJgHAIQgIAHgJAAQgJAAgHgHgAgIgIQgDAEAAAEQAAAFADADQAEAFAEAAQAFAAAEgFQAEgDAAgFQAAgEgEgEQgEgDgFAAQgEAAgEADg");
		this.shape_51.setTransform(61.6,108.1);

		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("#000000").s().p("AgFAFQgFABgBgGQABgEAFAAIALAAQAFAAABAEQgBAGgFgBg");
		this.shape_52.setTransform(76,106.9);

		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("#000000").s().p("AghAFQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAIBDAAQAGAAAAAEQAAAGgGgBg");
		this.shape_53.setTransform(70,106.9);

		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f("#000000").s().p("AjBDEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAIAAl7QAAAAABgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIGCAAQAGAAABAGIAAF7QgBAGgGAAgAi6C4IF1AAIAAkeIl1AAgAi6hzIF1AAIAAhEIl1AAg");
		this.shape_54.setTransform(61,122.1);

		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.f("#000000").s().p("AgOAFIAdgYIgDAng");
		this.shape_55.setTransform(68.5,217.9);

		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.f("#666666").s().p("AgMAvIgZgjIBLg7IgJBfg");
		this.shape_56.setTransform(66.2,220.7);

		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.f("#161D21").s().p("AivEwIFNppIASAKIlNJpg");
		this.shape_57.setTransform(49,254.7);

		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.f("#474747").s().p("AjIEiIFNpoIBEAlIlNJpg");
		this.shape_58.setTransform(49,254.7);

		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.f("#282828").s().p("AgkgKIAGgMQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIA9AgQAAABABAAQAAABAAAAQABAAAAABQAAAAgBABIgGALg");
		this.shape_59.setTransform(31.9,286.3);

		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.f("#F71735").s().p("AAVAjIg9giQgBgBAAAAQAAAAAAAAQgBAAABAAQAAAAAAgBIASggQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAABAAIA9AiQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIgRAgQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgCAAg");
		this.shape_60.setTransform(30.7,288.5);

		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.f("#1E1E1E").s().p("AgNAAIAFgKIAWALIgFAKg");
		this.shape_61.setTransform(37.7,241.8);

		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.f("#1E1E1E").s().p("AgNAAIAFgKIAWALIgFAKg");
		this.shape_62.setTransform(36,244.9);

		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.f("#1E1E1E").s().p("AgNAAIAFgKIAWALIgFAKg");
		this.shape_63.setTransform(34.3,248.1);

		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.f("#1E1E1E").s().p("AgWgFIAFgKIAoAVIgFAKg");
		this.shape_64.setTransform(33.5,251.7);

		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.f("#1E1E1E").s().p("AgNAAIAFgKIAWALIgFAKg");
		this.shape_65.setTransform(31,254.2);

		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.f("#1E1E1E").s().p("AgNAAIAFgKIAWALIgFAKg");
		this.shape_66.setTransform(29.3,257.3);

		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.f("#1E1E1E").s().p("AgNAAIAFgKIAWALIgFAKg");
		this.shape_67.setTransform(27.6,260.5);

		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.f("#1E1E1E").s().p("AgWgFIAFgKIAoAVIgFAKg");
		this.shape_68.setTransform(26.8,264.1);

		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.f("#1E1E1E").s().p("AgNAAIAFgKIAWALIgFAKg");
		this.shape_69.setTransform(24.3,266.6);

		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.f("#1E1E1E").s().p("AgNAAIAFgKIAWALIgFAKg");
		this.shape_70.setTransform(22.6,269.7);

		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.f("#1E1E1E").s().p("AgNAAIAFgKIAWALIgFAKg");
		this.shape_71.setTransform(20.9,272.9);

		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.f("#1E1E1E").s().p("AgWgFIAFgKIAoAVIgFAKg");
		this.shape_72.setTransform(20.1,276.5);

		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.f("#1E1E1E").s().p("AgNAAIAFgKIAWALIgFAKg");
		this.shape_73.setTransform(58,204.3);

		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.f("#1E1E1E").s().p("AgNAAIAFgKIAWALIgFAKg");
		this.shape_74.setTransform(56.3,207.4);

		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.f("#1E1E1E").s().p("AgNAAIAFgKIAWALIgFAKg");
		this.shape_75.setTransform(54.6,210.6);

		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.f("#1E1E1E").s().p("AgWgFIAFgKIAoAVIgFAKg");
		this.shape_76.setTransform(53.8,214.2);

		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.f("#1E1E1E").s().p("AgNAAIAFgKIAWALIgFAKg");
		this.shape_77.setTransform(51.3,216.7);

		this.shape_78 = new cjs.Shape();
		this.shape_78.graphics.f("#1E1E1E").s().p("AgNAAIAGgKIAVALIgFAKg");
		this.shape_78.setTransform(49.6,219.8);

		this.shape_79 = new cjs.Shape();
		this.shape_79.graphics.f("#1E1E1E").s().p("AgNAAIAFgKIAWALIgFAKg");
		this.shape_79.setTransform(47.9,223);

		this.shape_80 = new cjs.Shape();
		this.shape_80.graphics.f("#1E1E1E").s().p("AgWgFIAFgKIAoAVIgFAKg");
		this.shape_80.setTransform(47.1,226.6);

		this.shape_81 = new cjs.Shape();
		this.shape_81.graphics.f("#1E1E1E").s().p("AgNAAIAFgKIAWALIgGAKg");
		this.shape_81.setTransform(44.6,229.1);

		this.shape_82 = new cjs.Shape();
		this.shape_82.graphics.f("#1E1E1E").s().p("AgNAAIAFgKIAWALIgFAKg");
		this.shape_82.setTransform(42.9,232.2);

		this.shape_83 = new cjs.Shape();
		this.shape_83.graphics.f("#1E1E1E").s().p("AgNAAIAFgKIAWALIgFAKg");
		this.shape_83.setTransform(41.2,235.4);

		this.shape_84 = new cjs.Shape();
		this.shape_84.graphics.f("#1E1E1E").s().p("AgWgFIAFgKIAoAVIgFAKg");
		this.shape_84.setTransform(40.4,239);

		this.shape_85 = new cjs.Shape();
		this.shape_85.graphics.f("#1E1E1E").s().p("AgKAUQgIgFgDgJQgDgHAFgJQAEgIAKgDQAHgDAIAFQAJAEADAKQADAHgFAIQgFAJgJADIgGABQgEAAgGgDg");
		this.shape_85.setTransform(63.7,198.8);

		this.shape_86 = new cjs.Shape();
		this.shape_86.graphics.f("#F71735").s().p("AkdGuIHouHIBTAsInoOHg");
		this.shape_86.setTransform(42.2,238.6);

		this.shape_87 = new cjs.Shape();
		this.shape_87.graphics.f("#050505").s().p("AgigDIADgLIBCASIgFALIhAgSg");
		this.shape_87.setTransform(270.1,88.1);

		this.shape_88 = new cjs.Shape();
		this.shape_88.graphics.f("#050505").s().p("AghgGIAEgLIA/AYIgFALg");
		this.shape_88.setTransform(283.2,92.8);

		this.shape_89 = new cjs.Shape();
		this.shape_89.graphics.f("#050505").s().p("AgggJIAFgKQAaAMAiARIgFAKg");
		this.shape_89.setTransform(295.8,98.6);

		this.shape_90 = new cjs.Shape();
		this.shape_90.graphics.f("#050505").s().p("AgiAAIACgMIBDANIgDALIhCgMg");
		this.shape_90.setTransform(256.7,84.7);

		this.shape_91 = new cjs.Shape();
		this.shape_91.graphics.f("#050505").s().p("AghAEIAAgKIBEADIgBAKIhDgDg");
		this.shape_91.setTransform(229.2,81.3);

		this.shape_92 = new cjs.Shape();
		this.shape_92.graphics.f("#050505").s().p("AghgDIBDgDIAAAJIhCAEg");
		this.shape_92.setTransform(215.3,81.4);

		this.shape_93 = new cjs.Shape();
		this.shape_93.graphics.f("#050505").s().p("AgdgPIAGgJQAXAQAeAYIgGAJQgYgUgdgUg");
		this.shape_93.setTransform(319.3,113.4);

		this.shape_94 = new cjs.Shape();
		this.shape_94.graphics.f("#050505").s().p("AgiABIACgJIBDAIIgCAJIhDgIg");
		this.shape_94.setTransform(243,82.4);

		this.shape_95 = new cjs.Shape();
		this.shape_95.graphics.f("#050505").s().p("AgUgbIALgFIAeA8IgKAFIgfg8g");
		this.shape_95.setTransform(363.4,166.3);

		this.shape_96 = new cjs.Shape();
		this.shape_96.graphics.f("#050505").s().p("AgRgcIALgFIAYA/IgLAEg");
		this.shape_96.setTransform(369.2,178.8);

		this.shape_97 = new cjs.Shape();
		this.shape_97.graphics.f("#050505").s().p("AgcgRIAIgJIAxAtIgIAIg");
		this.shape_97.setTransform(329.9,122.3);

		this.shape_98 = new cjs.Shape();
		this.shape_98.graphics.f("#050505").s().p("AgOgeIALgDQAKAjAIAdIgLADQgGgdgMgjg");
		this.shape_98.setTransform(373.9,191.9);

		this.shape_99 = new cjs.Shape();
		this.shape_99.graphics.f("#050505").s().p("AgagUIAIgIIAtAyIgIAHg");
		this.shape_99.setTransform(339.7,132.2);

		this.shape_100 = new cjs.Shape();
		this.shape_100.graphics.f("#050505").s().p("AgYgWIAJgIIAoA2IgJAHIgog1g");
		this.shape_100.setTransform(348.6,142.8);

		this.shape_101 = new cjs.Shape();
		this.shape_101.graphics.f("#050505").s().p("AgWgYIAKgHIAjA5IgKAGg");
		this.shape_101.setTransform(356.5,154.2);

		this.shape_102 = new cjs.Shape();
		this.shape_102.graphics.f("#050505").s().p("AghACIBBgOIACALQghAFgfAJg");
		this.shape_102.setTransform(187.8,85.4);

		this.shape_103 = new cjs.Shape();
		this.shape_103.graphics.f("#050505").s().p("AgTAcQAMgZARgjIAKAFIgcA8g");
		this.shape_103.setTransform(82.9,169.3);

		this.shape_104 = new cjs.Shape();
		this.shape_104.graphics.f("#050505").s().p("AgWAaQATgeAPgbIAKAGQgRAZgRAgg");
		this.shape_104.setTransform(89.6,157.1);

		this.shape_105 = new cjs.Shape();
		this.shape_105.graphics.f("#050505").s().p("AgYAYIAog2IAJAHIgnA2g");
		this.shape_105.setTransform(97.2,145.5);

		this.shape_106 = new cjs.Shape();
		this.shape_106.graphics.f("#050505").s().p("AgQAeIAXg/IAKAEQgOAjgIAcg");
		this.shape_106.setTransform(77.4,182);

		this.shape_107 = new cjs.Shape();
		this.shape_107.graphics.f("#050505").s().p("AgLAjIALhGIAMACQgGAZgGApIAAAEg");
		this.shape_107.setTransform(69.8,208.9);

		this.shape_108 = new cjs.Shape();
		this.shape_108.graphics.f("#050505").s().p("AgOAgIARhBIAMADIgRBAg");
		this.shape_108.setTransform(73,195.2);

		this.shape_109 = new cjs.Shape();
		this.shape_109.graphics.f("#050505").s().p("AghAFIBAgUIADALIhAAUg");
		this.shape_109.setTransform(174.5,89.2);

		this.shape_110 = new cjs.Shape();
		this.shape_110.graphics.f("#050505").s().p("AgLgfIALgCIANBBIgMADIgMhCg");
		this.shape_110.setTransform(377.4,205.3);

		this.shape_111 = new cjs.Shape();
		this.shape_111.graphics.f("#050505").s().p("AggAIQAkgQAZgJIAFAKIg9Aag");
		this.shape_111.setTransform(161.6,94.1);

		this.shape_112 = new cjs.Shape();
		this.shape_112.graphics.f("#050505").s().p("AgiAAIBDgJIACAJIhDAKg");
		this.shape_112.setTransform(201.4,82.8);

		this.shape_113 = new cjs.Shape();
		this.shape_113.graphics.f("#050505").s().p("AgfgMIAGgKQAiAWAXANIgHAKg");
		this.shape_113.setTransform(307.9,105.5);

		this.shape_114 = new cjs.Shape();
		this.shape_114.graphics.f("#050505").s().p("AgegOIAHgJIA2AlIgGAKQgegVgZgRg");
		this.shape_114.setTransform(134.4,366.9);

		this.shape_115 = new cjs.Shape();
		this.shape_115.graphics.f("#050505").s().p("AgdgRIAIgIIAzAqIgHAJIg0grg");
		this.shape_115.setTransform(123.3,358.5);

		this.shape_116 = new cjs.Shape();
		this.shape_116.graphics.f("#050505").s().p("AgggLIAGgKQAeAUAcANIgFAKQgggTgbgOg");
		this.shape_116.setTransform(146.2,374.3);

		this.shape_117 = new cjs.Shape();
		this.shape_117.graphics.f("#050505").s().p("AgbgTIAIgIIAvAvIgIAIQgfgegQgRg");
		this.shape_117.setTransform(113.1,349.1);

		this.shape_118 = new cjs.Shape();
		this.shape_118.graphics.f("#050505").s().p("AgZgVIAJgIIAqAzIgJAIg");
		this.shape_118.setTransform(103.7,338.9);

		this.shape_119 = new cjs.Shape();
		this.shape_119.graphics.f("#050505").s().p("AgMAgQALgoACgZIAMADIgNBAg");
		this.shape_119.setTransform(376.7,274);

		this.shape_120 = new cjs.Shape();
		this.shape_120.graphics.f("#050505").s().p("AgHAeIAGg9IAJACIgGA9g");
		this.shape_120.setTransform(67.8,222.5);

		this.shape_121 = new cjs.Shape();
		this.shape_121.graphics.f("#050505").s().p("AgOgaIANADIAQAtIgLAEg");
		this.shape_121.setTransform(76.4,291.8);

		this.shape_122 = new cjs.Shape();
		this.shape_122.graphics.f("#050505").s().p("AgVgaIALgGQAOAgASAbIgKAGIghg7g");
		this.shape_122.setTransform(87.9,316.2);

		this.shape_123 = new cjs.Shape();
		this.shape_123.graphics.f("#050505").s().p("AgSgcIAKgFIAbA9IgKAFIgbg9g");
		this.shape_123.setTransform(81.5,303.9);

		this.shape_124 = new cjs.Shape();
		this.shape_124.graphics.f("#050505").s().p("AgXgYIAKgGIAlA2IgJAHg");
		this.shape_124.setTransform(95.3,327.9);

		this.shape_125 = new cjs.Shape();
		this.shape_125.graphics.f("#050505").s().p("AggAKIA8gdIAFAKIg9Adg");
		this.shape_125.setTransform(292.8,379.1);

		this.shape_126 = new cjs.Shape();
		this.shape_126.graphics.f("#050505").s().p("AgbAVIAugxIAJAIIgvAxg");
		this.shape_126.setTransform(337.4,346.5);

		this.shape_127 = new cjs.Shape();
		this.shape_127.graphics.f("#050505").s().p("AgUAOIAcgiIANABIggApg");
		this.shape_127.setTransform(346,336.9);

		this.shape_128 = new cjs.Shape();
		this.shape_128.graphics.f("#050505").s().p("AgcASIAygsIAHAJQgdAagVASg");
		this.shape_128.setTransform(327.3,356);

		this.shape_129 = new cjs.Shape();
		this.shape_129.graphics.f("#050505").s().p("AgeAPIA1gnIAIAJIg2Aog");
		this.shape_129.setTransform(316.5,364.7);

		this.shape_130 = new cjs.Shape();
		this.shape_130.graphics.f("#050505").s().p("AgGAhQADgiABggIAJAAIgDBEg");
		this.shape_130.setTransform(380.6,246.7);

		this.shape_131 = new cjs.Shape();
		this.shape_131.graphics.f("#050505").s().p("AgJAhIAJhDIAKACIgKBDg");
		this.shape_131.setTransform(379.2,260.5);

		this.shape_132 = new cjs.Shape();
		this.shape_132.graphics.f("#050505").s().p("AgDAiIgChDIAJAAIACBDg");
		this.shape_132.setTransform(380.8,232.8);

		this.shape_133 = new cjs.Shape();
		this.shape_133.graphics.f("#050505").s().p("AgigBIBEgHIABAKIhEAHg");
		this.shape_133.setTransform(239.7,394.2);

		this.shape_134 = new cjs.Shape();
		this.shape_134.graphics.f("#050505").s().p("AgiAAIBCgLIADALQghAGgiAGg");
		this.shape_134.setTransform(253.4,392.2);

		this.shape_135 = new cjs.Shape();
		this.shape_135.graphics.f("#050505").s().p("AgfAMQAfgQAagSIAGAKQgbAQgeASg");
		this.shape_135.setTransform(304.9,372.4);

		this.shape_136 = new cjs.Shape();
		this.shape_136.graphics.f("#050505").s().p("AghgEIBDgBIAAAKIhEABg");
		this.shape_136.setTransform(225.9,394.9);

		this.shape_137 = new cjs.Shape();
		this.shape_137.graphics.f("#050505").s().p("AgiADIBBgRIADALQgiAKgeAHg");
		this.shape_137.setTransform(266.9,389);

		this.shape_138 = new cjs.Shape();
		this.shape_138.graphics.f("#050505").s().p("AghAGQAdgIAigOIAEAKQgZAJgmAOg");
		this.shape_138.setTransform(280.1,384.6);

		this.shape_139 = new cjs.Shape();
		this.shape_139.graphics.f("#050505").s().p("AgIggIAJgCIAJBEIgKABg");
		this.shape_139.setTransform(379.7,218.9);

		this.shape_140 = new cjs.Shape();
		this.shape_140.graphics.f("#050505").s().p("ACaSyQChirBjjXQBhjTAbjoQA5nmj9mmQiZkAjtitQjoiokXhEIAEgMIALADQEcBHDoCtQDmCtCWD7QCXD8AqEeQAqEchIEcQguC4hbClQhZCkiBCHg");
		this.shape_140.setTransform(314.6,215.7);

		this.shape_141 = new cjs.Shape();
		this.shape_141.graphics.f("#050505").s().p("AgrAEQArgJAtgKIgFAOQgqAHgjAKg");
		this.shape_141.setTransform(190.6,94.8);

		this.shape_142 = new cjs.Shape();
		this.shape_142.graphics.f("#050505").s().p("AnJAzQhQgUhFgaIAEgKQEkBqE2gVQE/gVEaiaIAGAKQj1CFkSAkQhcAMhdAAQi1AAizgtg");
		this.shape_142.setTransform(234.4,373.2);

		this.shape_143 = new cjs.Shape();
		this.shape_143.graphics.f("#050505").s().p("AiBNUQiXj7gqkeQgqkfBIkaQBEkQCijhQCfjgDriYIAGAKQjxCcihDqQieDkhAEOQhAEOApESQAqEbCUD4QBYCUB1B5IgEANQh5h9haiXg");
		this.shape_143.setTransform(111.8,226.4);

		this.shape_144 = new cjs.Shape();
		this.shape_144.graphics.f("#050505").s().p("Ar1bCQENgmD2h4QE+ibDpkKQDhkBBwlEQBxlEgRlSQgSlhiblAQi8mElZj/QlNj3mahHIgHgPQCTAZCMAxQFOB0EDDnQEEDoCaE+QCaE+AUFcQAVFah0FNQh0FOjoEEQjnEFk8CZQj2B3kNAog");
		this.shape_144.setTransform(325,236.9);

		this.shape_145 = new cjs.Shape();
		this.shape_145.graphics.f("#050505").s().p("AmSDTQDGi7Dzh1QCvhUC4gtIAFAMQi5AsiuBUQjzB1jGC8g");
		this.shape_145.setTransform(143.5,87.3);

		this.shape_146 = new cjs.Shape();
		this.shape_146.graphics.f("#050505").s().p("AIhSBQlOh0kCjnQkFjoiak9Qiak8gUlcQgUlcB0lOQAQguATgvIAIAPQiJFTAJFsQAJF4ClFTQCmFVEfDxQEYDoFfBnIAHAPQgtgMgygSg");
		this.shape_146.setTransform(111.9,287.7);

		this.instance_31 = new lib.Path();
		this.instance_31.setTransform(224.6,236.5,1,1,0,0,0,135,134.9);
		this.instance_31.alpha = 0.148;

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_27},{t:this.shape_33},{t:this.instance_26},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.instance_15},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance_14},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(172));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(223.6,248,412.4,445);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;