(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes
	lib.webFontTxtFilters = {};

// library properties:
	lib.properties = {
		width: 550,
		height: 400,
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



	(lib.Symbol20 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("AOFRNQgogVgWgmQgXgmAAgtIAAsgMgyOAAAQhDAAgugvQgvguAAhCQAAhBAvgvQAugvBDAAMAyOAAAIAAsgQAAgsAXgmQAWgmAogVQAngVAsADQAsACAlAZIWQPAQAhAWATAjQASAjAAAnQAAAngSAkQgTAjghAWI2QPAQgoAbgxAAQgoAAgjgSgARwKTIPRqTIvRqSg");
		this.shape.setTransform(2,4.6,0.018,0.018,0,-90,90);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,4,9.2);


	(lib.Symbol19 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F71735").s().p("AAXATQgIgIAAgLQAAgKAIgIQAIgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgLAAgIgIgAg8ATQgIgIAAgLQAAgKAIgIQAIgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgLAAgIgIg");
		this.shape.setTransform(7.1,2.9);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0.2,0.2,13.9,5.5);


	(lib.Symbol18 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F71735").s().p("Ag1BQIAAifIBrAAIAACfg");
		this.shape.setTransform(5.5,8);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,11,16.1);


	(lib.Symbol17 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#000000").ss(1.7,1,1).p("ABHAAQAAALgJAJQgJAIgLAAQgNAAgIgIQgJgJAAgLQAAgLAJgIQAIgJANAAQALAAAJAJQAJAIAAALgAgLAAQAAALgJAJQgJAIgMAAQgMAAgIgIQgJgJAAgLQAAgLAJgIQAIgJAMAAQAMAAAJAJQAJAIAAALg");
		this.shape.setTransform(7.7,2.9);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.4,-1,16.2,7.8);


	(lib.Symbol16 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F4F4F4").s().p("AgMAOQgFAAgFgEQgEgEAAgGQAAgEAEgFQAFgEAFAAIAYAAQAHAAADAEQAEAFABAEQgBAGgEAEQgDAEgHAAg");
		this.shape.setTransform(2.7,1.5);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,5.4,3);


	(lib.Symbol15 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("ADXDXIAAgjIgaAAIAAh4IhFAAIAAARIjvAAIAAgRIhEAAIAAB4IgbAAIAAAjIgQAAIAAgjIgbAAIAAiBIABAAQgJgMAAgOQAAgSAMgKQANgNASAAQAOAAAMAJIAAgBIBNAAIAAhWQAAgYAJgWQAKgWARgRQAQgQAWgJQAWgKAXAAQAYAAAXAKQAVAJARAQQAQARAKAWQAJAWAAAYIAABWIBNAAIAAABQAMgJAOAAQASAAANANQAMAKAAASQAAAOgJAMIABAAIAACBIgaAAIAAAjgADOCjIAiAAIAAgSIgiAAgAjvCjIAiAAIAAgSIgiAAgADOCBIAiAAIAAhAQgIADgJAAQgJAAgIgDgAjvCBIAiAAIAAhAQgIADgJAAQgJAAgIgDgAgni9QgSAIgOAOQgPAPgIASQgIATAAAVIAACaIDNAAIAAiaQAAgVgIgTQgIgSgPgPQgOgOgSgIQgUgHgUAAQgTAAgUAHgADNAHQgIAHAAALQAAALAIAHQAHAIALAAQALAAAIgIQAHgHAAgLQAAgLgHgHQgIgHgLAAQgLAAgHAHgAjxAHQgHAHAAALQAAALAHAHQAIAIALAAQALAAAHgIQAIgHAAgLQAAgLgIgHQgHgHgLAAQgLAAgIAHgAC4AqQgEgIAAgJQAAgJAEgIIhAAAIAAAiIBAAAIAAAAgAizAZQAAAJgEAIIBAAAIAAgiIhAAAQAEAIAAAJg");
		this.shape.setTransform(26.7,21.5);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,53.4,43.1);


	(lib.Symbol14 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("AhPBPIAAidICeAAIAACdg");
		this.shape.setTransform(8.6,7.7,0.108,0.108);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#000000").s().p("AkXBPIAAidIIvAAIAACdg");
		this.shape_1.setTransform(3,7.7,0.108,0.108);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#000000").s().p("Am3BQIAAifINuAAIAACfg");
		this.shape_2.setTransform(4.7,4.3,0.108,0.108);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#000000").s().p("Am3BPIAAieINuAAIAACeg");
		this.shape_3.setTransform(4.7,0.9,0.108,0.108);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,9.5,8.6);


	(lib.Symbol13 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("AlSFTQiMiMgBjHQABjFCMiNQCNiMDFAAQDGAACNCMQCMCNABDFQgBDGiMCNQiNCNjGgBQjFABiNiNgAj6jDQhEBXAABsQgBCEBeBdQBeBeCDAAQBtAABXhDQBUhDAchpImDAAIAAmDQhoAbhDBVgAE0hPQgVhTg/g9Qg9g+hUgWIAADkIDlAAIAAAAg");
		this.shape.setTransform(5.2,5.2,0.108,0.108);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,10.3,10.3);


	(lib.Symbol12 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("AnfE/QiEABheheQhdheAAiEQAAiCBdheQBeheCEgBIO/AAQCEABBeBeQBdBeAACCQAACEhdBeQheBeiEgBgApPhwQgwAwAABAQAABCAwAuQAuAwBCgBIO/AAQBCABAugwQAwguAAhCQAAhAgwgwQguguhCAAIu/AAQhCAAguAug");
		this.shape.setTransform(8.6,3.4,0.108,0.108);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,17.2,6.9);


	(lib.Symbol10 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#000000").ss(1.5,2,0,3).p("AhwgTIDhAAIAAAnIjhAAg");
		this.shape.setTransform(11.4,2);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-1,-1,24.8,6);


	(lib.Symbol7 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#ECBA16").s().p("AhBA5IB6h6QANAagFAdQgFAcgVAVQgVAWgcAEIgPABQgVAAgTgJg");
		this.shape.setTransform(6.7,6.7);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,13.4,13.4);


	(lib.Symbol6 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F4F4F4").s().p("AgVAZQgJAAgHgIQgHgHAAgKQAAgJAHgHQAHgIAJAAIAsAAQAJAAAGAIQAHAHAAAJQAAAKgHAHQgGAIgJAAg");
		this.shape.setTransform(21.6,10.3,0.589,0.589);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#777777").s().p("AhZAZQgKgBgHgGQgGgIAAgKQAAgJAGgHQAHgHAKgBICzAAQAKABAHAHQAGAHAAAJQAAAKgGAIQgHAGgKABg");
		this.shape_1.setTransform(20.1,57.5,0.589,0.589);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#777777").s().p("AhZAZQgKAAgHgHQgGgIAAgKQAAgJAGgHQAHgIAKAAICzAAQAKAAAHAIQAGAHAAAJQAAAKgGAIQgHAHgKAAg");
		this.shape_2.setTransform(20.1,63.4,0.589,0.589);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#777777").s().p("AhZAYQgKAAgHgGQgGgIAAgKQAAgIAGgIQAHgHAKAAICzAAQAKAAAHAHQAGAIAAAIQAAAKgGAIQgHAGgKAAg");
		this.shape_3.setTransform(20.1,45.7,0.589,0.589);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#777777").s().p("AhZAZQgKgBgHgGQgGgIAAgKQAAgIAGgIQAHgHAKAAICzAAQAKAAAHAHQAGAIAAAIQAAAKgGAIQgHAGgKABg");
		this.shape_4.setTransform(20.1,51.6,0.589,0.589);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#777777").s().p("AgPASQgGgIAAgKQAAgJAGgHQAHgHAIgBQAJABAGAHQAHAHAAAJQAAAKgHAIQgGAGgJABQgIgBgHgGg");
		this.shape_5.setTransform(9.4,57.5,0.589,0.589);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#777777").s().p("AgPASQgGgIAAgKQAAgJAGgHQAHgIAIAAQAJAAAGAIQAHAHAAAJQAAAKgHAIQgGAHgJAAQgIAAgHgHg");
		this.shape_6.setTransform(9.4,63.4,0.589,0.589);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#777777").s().p("AgPASQgGgIAAgKQAAgIAGgIQAHgHAIAAQAJAAAGAHQAHAIAAAIQAAAKgHAIQgGAGgJAAQgIAAgHgGg");
		this.shape_7.setTransform(9.4,45.7,0.589,0.589);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#777777").s().p("AgPASQgGgIAAgKQAAgIAGgIQAHgHAIAAQAJAAAGAHQAHAIAAAIQAAAKgHAIQgGAGgJABQgIgBgHgGg");
		this.shape_8.setTransform(9.4,51.6,0.589,0.589);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#F4F4F4").s().p("AgPASQgGgIAAgKQAAgJAGgHQAHgHAIgBQAJABAHAHQAGAHAAAJQAAAKgGAIQgHAGgJABQgIgBgHgGg");
		this.shape_9.setTransform(4,57.5,0.589,0.589);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#E4EAF6").s().p("AgPASQgGgIAAgKQAAgJAGgHQAHgIAIAAQAJAAAHAIQAGAHAAAJQAAAKgGAIQgHAHgJAAQgIAAgHgHg");
		this.shape_10.setTransform(4,63.4,0.589,0.589);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#F4F4F4").s().p("AgPASQgGgIAAgKQAAgIAGgIQAHgHAIAAQAJAAAHAHQAGAIAAAIQAAAKgGAIQgHAGgJAAQgIAAgHgGg");
		this.shape_11.setTransform(4,45.7,0.589,0.589);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#F4F4F4").s().p("AgPASQgGgIAAgKQAAgIAGgIQAHgHAIAAQAJAAAHAHQAGAIAAAIQAAAKgGAIQgHAGgJABQgIgBgHgGg");
		this.shape_12.setTransform(4,51.6,0.589,0.589);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#F4F4F4").s().p("AgVAZQgKAAgGgIQgHgHAAgKQAAgJAHgHQAGgIAKAAIArAAQAKAAAGAIQAHAHAAAJQAAAKgHAHQgGAIgKAAg");
		this.shape_13.setTransform(5.4,36.8,0.589,0.589);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#777777").s().p("AhwAZQgKAAgGgIQgHgHAAgKQAAgJAHgHQAGgIAKAAIDhAAQAKAAAGAIQAHAHAAAJQAAAKgHAHQgGAIgKAAg");
		this.shape_14.setTransform(18.9,36.8,0.589,0.589);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#F4F4F4").s().p("AgVAZQgKgBgGgGQgHgIAAgKQAAgJAHgHQAGgHAKgBIArAAQAKABAGAHQAHAHAAAJQAAAKgHAIQgGAGgKABg");
		this.shape_15.setTransform(5.5,30.9,0.589,0.589);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#777777").s().p("AhwAZQgKgBgGgGQgHgIAAgKQAAgJAHgHQAGgHAKgBIDhAAQAKABAGAHQAHAHAAAJQAAAKgHAIQgGAGgKABg");
		this.shape_16.setTransform(18.9,30.9,0.589,0.589);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#F4F4F4").s().p("AgVAZQgKgBgGgGQgHgIAAgKQAAgIAHgIQAGgHAKAAIArAAQAKAAAGAHQAHAIAAAIQAAAKgHAIQgGAGgKABg");
		this.shape_17.setTransform(5.4,25.1,0.589,0.589);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#F4F4F4").s().p("AgVAZQgKAAgGgIQgHgHAAgKQAAgJAHgHQAGgIAKAAIArAAQAKAAAGAIQAHAHAAAJQAAAKgHAHQgGAIgKAAg");
		this.shape_18.setTransform(13.4,16.2,0.589,0.589);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#777777").s().p("AggAZQAJgBAGgHQAHgHAAgKQAAgJgHgHQgGgHgJgBIArAAQAJAAAHAIQAGAHAAAJQAAAKgGAHQgHAIgJAAg");
		this.shape_19.setTransform(24.8,10.3,0.589,0.589);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#777777").s().p("Ah7AZQgKAAgGgIQgHgHAAgKQAAgJAHgHQAGgIAKAAIEOAAQgJABgHAHQgGAHgBAJQABAKAGAHQAHAHAJABg");
		this.shape_20.setTransform(11.4,10.3,0.589,0.589);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#777777").s().p("AhwAZQgKgBgGgGQgHgIAAgKQAAgIAHgIQAGgHAKAAIDhAAQAKAAAGAHQAHAIAAAIQAAAKgHAIQgGAGgKABg");
		this.shape_21.setTransform(18.9,25,0.589,0.589);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#777777").s().p("Ag3AZQgKAAgGgIQgHgHAAgKQAAgJAHgHQAGgIAKAAICGAAQgJABgHAHQgGAHAAAJQAAAKAGAHQAHAHAJABg");
		this.shape_22.setTransform(7.4,16.2,0.589,0.589);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#777777").s().p("AhlAZQAKgBAGgHQAGgHABgKQgBgJgGgHQgGgHgKgBIC0AAQAJAAAHAIQAGAHAAAJQAAAKgGAHQgHAIgJAAg");
		this.shape_23.setTransform(20.8,16.2,0.589,0.589);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#777777").s().p("AgKAZQgJgBgHgGQgGgIAAgKQAAgJAGgHQAHgHAJgBIArAAQgJABgGAHQgHAHAAAJQAAAKAHAIQAGAGAJABg");
		this.shape_24.setTransform(4.7,4.4,0.589,0.589);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#777777").s().p("AiSAZQAJgBAHgGQAGgIAAgKQAAgJgGgHQgHgHgJgBIEOAAQAKABAHAHQAGAHAAAJQAAAKgGAIQgHAGgKABg");
		this.shape_25.setTransform(18.1,4.4,0.589,0.589);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#555555").s().p("Aj5CuIAAlcIHzAAIAAFcgAg8BSQgHAHAAALQAAAKAHAHQAHAIAJAAIDhAAQAKAAAHgIQAGgHAAgKQAAgLgGgHQgHgIgKAAIjhAAQgJAAgHAIgAjEBSQgHAHAAALQAAAKAHAHQAGAIAKAAIAtAAQAKAAAGgIQAHgHAAgKQAAgLgHgHQgGgIgKAAIgtAAQgKAAgGAIgAg8gQQgHAHAAAJQAAAKAHAIQAHAGAJABIDhAAQAKgBAHgGQAGgIAAgKQAAgJgGgHQgHgHgKgBIjhAAQgJABgHAHgAjEgQQgHAHAAAJQAAAKAHAIQAGAGAKABIAtAAQAKgBAGgGQAHgIAAgKQAAgJgHgHQgGgHgKgBIgtAAQgKABgGAHgAg8h0QgHAIAAAKQAAAKAHAIQAHAGAJABIDhAAQAKgBAHgGQAGgIAAgKQAAgKgGgIQgHgHgKAAIjhAAQgJAAgHAHgAjEh0QgHAIAAAKQAAAKAHAIQAGAGAKABIAtAAQAKgBAGgGQAHgIAAgKQAAgKgHgIQgGgHgKAAIgtAAQgKAAgGAHg");
		this.shape_26.setTransform(14.7,30.9,0.589,0.589);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#2D2D2D").s().p("AjLD6QgTAAgNgPQgOgOAAgWIAAnAIHzAAIAAHAQAAAWgOAOQgNAPgTAAgAgPBrQgGAHAAAKQAAALAGAIQAHAHAIAAIC1AAQAKAAAHgHQAGgIAAgLQAAgKgGgHQgHgIgKAAIi1AAQgIAAgHAIgAhqBrQgGAHAAAKQAAALAGAIQAHAHAKAAQAJAAAHgHQAGgIAAgLQAAgKgGgHQgHgIgJAAQgKAAgHAIgAjEBrQgHAHAAAKQAAALAHAIQAGAHAKAAQAJAAAHgHQAGgIAAgLQAAgKgGgHQgHgIgJAAQgKAAgGAIgAgPAHQgGAHAAALQAAAKAGAIQAHAGAIABIC1AAQAKgBAHgGQAGgIAAgKQAAgLgGgHQgHgHgKAAIi1AAQgIAAgHAHgAhqAHQgGAHAAALQAAAKAGAIQAHAGAKABQAJgBAHgGQAGgIAAgKQAAgLgGgHQgHgHgJAAQgKAAgHAHgAjEAHQgHAHAAALQAAAKAHAIQAGAGAKABQAJgBAHgGQAGgIAAgKQAAgLgGgHQgHgHgJAAQgKAAgGAHgAgPhbQgGAIAAAKQAAAKAGAIQAHAGAIABIC1AAQAKgBAHgGQAGgIAAgKQAAgKgGgIQgHgHgKAAIi1AAQgIAAgHAHgAhqhbQgGAIAAAKQAAAKAGAIQAHAGAKABQAJgBAHgGQAGgIAAgKQAAgKgGgIQgHgHgJAAQgKAAgHAHgAjEhbQgHAIAAAKQAAAKAHAIQAGAGAKABQAJgBAHgGQAGgIAAgKQAAgKgGgIQgHgHgJAAQgKAAgGAHgAgPi/QgGAIAAAKQAAAKAGAIQAHAGAIAAIC1AAQAKAAAHgGQAGgIAAgKQAAgKgGgIQgHgHgKAAIi1AAQgIAAgHAHgAhqi/QgGAIAAAKQAAAKAGAIQAHAGAKAAQAJAAAHgGQAGgIAAgKQAAgKgGgIQgHgHgJAAQgKAAgHAHgAjEi/QgHAIAAAKQAAAKAHAIQAGAGAKAAQAJAAAHgGQAGgIAAgKQAAgKgGgIQgHgHgJAAQgKAAgGAHg");
		this.shape_27.setTransform(14.7,56,0.589,0.589);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#2D2D2D").s().p("Aj5CuIAAkqQAAgUAOgPQANgOATAAIGXAAQATAAANAOQAOAPAAAUIAAEqgAjEBSQgHAHAAAKQAAALAHAHQAGAIAKAAIFpAAQAKAAAHgIQAGgHAAgLQAAgKgGgHQgHgIgKAAIlpAAQgKAAgGAIgAjEgQQgHAHAAAJQAAAKAHAHQAGAIAKAAIFpAAQAKAAAHgIQAGgHAAgKQAAgJgGgHQgHgIgKAAIlpAAQgKAAgGAIgAjEh0QgHAHAAALQAAAKAHAIQAGAGAKABIFpAAQAKgBAHgGQAGgIAAgKQAAgLgGgHQgHgHgKgBIlpAAQgKABgGAHg");
		this.shape_28.setTransform(14.7,10.3,0.589,0.589);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,29.5,70.7);


	(lib.Symbol5 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#2D2D2D").s().p("AgqFhQgMAAgJgJQgJgIAAgMIAAqGQAAgMAJgKQAJgIAMAAIBVAAQAMAAAJAIQAJAKAAAMIAAKGQAAAMgJAIQgJAJgMAAgAgiC5QgIAJAAAMIAAA7QAAAMAIAJQAJAJAMAAIAbAAQAMAAAJgJQAIgJAAgMIAAg7QAAgMgIgJQgJgJgMAAIgbAAQgMAAgJAJgAgiBDQgIAJAAAMQAAAMAIAJQAJAJAMAAIAbAAQAMAAAJgJQAIgJAAgMQAAgMgIgJQgJgJgMAAIgbAAQgMAAgJAJgAgigTQgIAJAAAKQAAAMAIAIQAJAJAMAAIAbAAQAMAAAJgJQAIgIAAgMQAAgKgIgJQgJgJgMAAIgbAAQgMAAgJAJgAgihrQgIAIAAAMQAAAMAIAJQAJAJAMAAIAbAAQAMAAAJgJQAIgJAAgMQAAgMgIgIQgJgJgMAAIgbAAQgMAAgJAJgAgijEQgIAJAAAMQAAAMAIAJQAJAJAMgBIAbAAQAMABAJgJQAIgJAAgMQAAgMgIgJQgJgIgMAAIgbAAQgMAAgJAIgAgikdQgIAJAAAMQAAAMAIAKQAJAIAMAAIAbAAQAMAAAJgIQAIgKAAgMQAAgMgIgJQgJgIgMAAIgbAAQgMAAgJAIg");
		this.shape.setTransform(7.3,35.4);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,14.7,70.7);


	(lib.Symbol4 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#848484").s().p("AsuG9QgOAAgKgKQgKgLAAgOIAAs0QAAgOAKgKQAKgKAOAAIZcAAQAPAAAKAKQAKAKAAAOIAAM0QAAAOgKALQgKAKgPAAg");
		this.shape.setTransform(85,44.6);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,169.9,89.1);


	(lib.Symbol3 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#666666").s().p("Ah1LdQh+iogfi0QgwkWDKjqQDQj1A0iCQArhvgxhoQgGgNAMgHQAMgGAIALQB8C0ABC3QABECj6DbIAAAAQgQARgUAcQgnA4gcBCQhZDSBBDrQADAMgLAGQgEACgDAAQgHAAgEgHg");
		this.shape.setTransform(2.3,6,0.082,0.081);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,4.7,12);


	(lib.Symbol2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#666666").s().p("Ah1LdQh+iogfi0QgwkWDKjqQDQj1A0iCQArhvgxhoQgGgNAMgHQAMgGAIALQB8C0ABC3QABECj6DbIAAAAQgQARgUAcQgnA4gcBCQhZDSBBDrQADAMgLAGQgEACgDAAQgHAAgEgHg");
		this.shape.setTransform(3.3,8.5,0.115,0.115);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,6.6,17);


	(lib.Symbol1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#666666").s().p("Ah1LdQh+iogfi0QgwkWDKjqQDQj1A0iCQArhvgxhoQgGgNAMgHQAMgGAIALQB8C0ABC3QABECj6DbIAAAAQgQARgUAcQgnA4gcBCQhZDSBBDrQADAMgLAGQgEACgDAAQgHAAgEgHg");
		this.shape.setTransform(4.4,11.4,0.154,0.154);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,8.8,22.9);


	(lib.mousearrow = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#0C0C0C").s().p("AAIAqIgLgdIgOAHQgDABgDgCQgCgCAAgDIAAg1QABgEADgBQADgCADADIAnAlQACACAAADQgBABgCABIgPAHIANAcQABADgBADQgBADgDABIgDAAQgEAAgCgEg");
		this.shape.setTransform(2.7,4.6);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,5.4,9.3);


	(lib.Symbol11 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.instance = new lib.Symbol10("synched",0);
		this.instance.setTransform(10.9,0,0.974,0.212,0,0,0,11.2,0);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-1,-1,24.2,2.9);


	(lib.lampanim = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 2
		this.instance = new lib.Symbol7();
		this.instance.setTransform(78.7,34.6,1,1,0,0,0,6.7,6.7);
		this.instance.alpha = 0.609;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.63},0).wait(1).to({alpha:0.635},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.645},0).wait(1).to({alpha:0.649},0).wait(1).to({alpha:0.654},0).wait(1).to({alpha:0.659},0).wait(1).to({alpha:0.664},0).wait(1).to({alpha:0.669},0).wait(1).to({alpha:0.674},0).wait(1).to({alpha:0.679},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.689},0).wait(1).to({alpha:0.694},0).wait(1).to({alpha:0.699},0).wait(1).to({alpha:0.704},0).wait(1).to({alpha:0.709},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.719},0).wait(1).to({alpha:0.724},0).wait(1).to({alpha:0.728},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.738},0).wait(1).to({alpha:0.743},0).wait(1).to({alpha:0.748},0).wait(1).to({alpha:0.753},0).wait(1).to({alpha:0.758},0).wait(1).to({alpha:0.763},0).wait(1).to({alpha:0.768},0).wait(1).to({alpha:0.773},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.788},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.798},0).wait(1).to({alpha:0.803},0).wait(1).to({alpha:0.807},0).wait(1).to({alpha:0.812},0).wait(1).to({alpha:0.817},0).wait(1).to({alpha:0.822},0).wait(1).to({alpha:0.827},0).wait(1).to({alpha:0.832},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.847},0).wait(1).to({alpha:0.852},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.872},0).wait(1).to({alpha:0.877},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.891},0).wait(1).to({alpha:0.896},0).wait(1).to({alpha:0.901},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.911},0).wait(1).to({alpha:0.916},0).wait(1).to({alpha:0.921},0).wait(1).to({alpha:0.926},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.936},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:0.946},0).wait(1).to({alpha:0.951},0).wait(1).to({alpha:0.956},0).wait(1).to({alpha:0.961},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.97},0).wait(1).to({alpha:0.975},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:1},0).wait(1));

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#0C0C0C").s().p("AiIAwQgngnAAg0QAAg3AngmQAmgnA3AAQA0AAAnAnIB/CBQhEARgxAwQgyAygPBDg");
		this.shape.setTransform(56.5,13.1,0.748,0.748);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#111111").s().p("AjfiVQAbgHAUgUQAUgUAHgcIF1FyQgKACgLAFIgBABQgKAEgHAGIgBABQgIAGgIAIIAAAAQgHAJgFAJQgHAMgEAPg");
		this.shape_1.setTransform(26.7,72,0.748,0.748);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#111111").s().p("AjTDNQgVgUgcgHIHFmuQAKAZAUAUIAmAmIm9GmQgHgcgUgUg");
		this.shape_2.setTransform(29.3,32.2,0.748,0.748);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#111111").s().p("AilDNQhNhNAAhtQAAhrBNhNQBOhNBqAAQBtAABOBNIAlAlIlyFzg");
		this.shape_3.setTransform(73.4,30,0.748,0.748);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#0C0C0C").s().p("AhJBKQgfgfAAgrQAAgqAfgfQAfgfAqAAQArAAAfAfQAfAfAAAqQAAArgfAfQgfAfgrAAQgqAAgfgfg");
		this.shape_4.setTransform(7.9,53.2,0.748,0.748);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#0C0C0C").s().p("AhJBKQgfgfAAgrQAAgqAfgfQAfgfAqAAQArAAAfAfQAfAfAAAqQAAArgfAfQgfAfgrAAQgqAAgfgfg");
		this.shape_5.setTransform(45.3,90.6,0.748,0.748);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#111111").s().p("AlVA0QgVAAgQgPQgQgQAAgVQAAgVAQgPQAQgPAVAAIKqAAQAXAAAPAPQAPAPAAAVQAAAVgPAQQgPAPgXAAg");
		this.shape_6.setTransform(45.3,102.4,0.748,0.748);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(80));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,91.6,106.4);


	(lib.coffeeanim = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// steam-3
		this.instance = new lib.Symbol3();
		this.instance.setTransform(20.7,-9.4,1,1,0,0,0,2.3,6);
		this.instance.alpha = 0;
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(156).to({_off:false},0).wait(1).to({alpha:0.025},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0.075},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.175},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.275},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.325},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.425},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.475},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.525},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.725},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.775},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.825},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.925},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.975},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.971},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.914},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.829},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.771},0).wait(1).to({alpha:0.743},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.686},0).wait(1).to({alpha:0.657},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.543},0).wait(1).to({alpha:0.514},0).wait(1).to({alpha:0.486},0).wait(1).to({alpha:0.457},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.343},0).wait(1).to({alpha:0.314},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.257},0).wait(1).to({alpha:0.229},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.114},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.029},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(120));

		// steam-2
		this.instance_1 = new lib.Symbol2();
		this.instance_1.setTransform(14.9,-11.7,1,1,0,0,0,3.3,8.5);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(118).to({_off:false},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.06},0).wait(1).to({alpha:0.08},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.14},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.22},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.26},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.34},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.38},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.42},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.46},0).wait(1).to({alpha:0.48},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.54},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.58},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.72},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.78},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.86},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.971},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.914},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.829},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.771},0).wait(1).to({alpha:0.743},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.686},0).wait(1).to({alpha:0.657},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.543},0).wait(1).to({alpha:0.514},0).wait(1).to({alpha:0.486},0).wait(1).to({alpha:0.457},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.343},0).wait(1).to({alpha:0.314},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.257},0).wait(1).to({alpha:0.229},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.114},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.029},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(148));

		// steam-1
		this.instance_2 = new lib.Symbol1();
		this.instance_2.setTransform(8.4,-14.8,1,1,0,0,0,4.4,11.5);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({_off:false},0).wait(1).to({regY:11.4,y:-14.9,alpha:0.026},0).wait(1).to({x:8.5,alpha:0.051},0).wait(1).to({alpha:0.077},0).wait(1).to({x:8.6,alpha:0.103},0).wait(1).to({alpha:0.128},0).wait(1).to({alpha:0.154},0).wait(1).to({x:8.7,alpha:0.179},0).wait(1).to({alpha:0.205},0).wait(1).to({x:8.8,alpha:0.231},0).wait(1).to({alpha:0.256},0).wait(1).to({x:8.9,alpha:0.282},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.333},0).wait(1).to({x:9,alpha:0.359},0).wait(1).to({alpha:0.385},0).wait(1).to({x:9.1,alpha:0.41},0).wait(1).to({alpha:0.436},0).wait(1).to({alpha:0.462},0).wait(1).to({x:9.2,alpha:0.487},0).wait(1).to({alpha:0.513},0).wait(1).to({x:9.3,alpha:0.538},0).wait(1).to({alpha:0.564},0).wait(1).to({alpha:0.59},0).wait(1).to({x:9.4,alpha:0.615},0).wait(1).to({alpha:0.641},0).wait(1).to({x:9.5,alpha:0.667},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.718},0).wait(1).to({x:9.6,alpha:0.744},0).wait(1).to({alpha:0.769},0).wait(1).to({x:9.7,alpha:0.795},0).wait(1).to({alpha:0.821},0).wait(1).to({x:9.8,alpha:0.846},0).wait(1).to({alpha:0.872},0).wait(1).to({alpha:0.897},0).wait(1).to({x:9.9,alpha:0.923},0).wait(1).to({alpha:0.949},0).wait(1).to({x:10,alpha:0.974},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.975},0).wait(1).to({x:9.9,alpha:0.95},0).wait(1).to({alpha:0.925},0).wait(1).to({x:9.8,alpha:0.9},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.85},0).wait(1).to({x:9.7,alpha:0.825},0).wait(1).to({alpha:0.8},0).wait(1).to({x:9.6,alpha:0.775},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.725},0).wait(1).to({x:9.5,alpha:0.7},0).wait(1).to({alpha:0.675},0).wait(1).to({x:9.4,alpha:0.65},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.6},0).wait(1).to({x:9.3,alpha:0.575},0).wait(1).to({alpha:0.55},0).wait(1).to({x:9.2,alpha:0.525},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.475},0).wait(1).to({x:9.1,alpha:0.45},0).wait(1).to({alpha:0.425},0).wait(1).to({x:9,alpha:0.4},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.35},0).wait(1).to({x:8.9,alpha:0.325},0).wait(1).to({alpha:0.3},0).wait(1).to({x:8.8,alpha:0.275},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.225},0).wait(1).to({x:8.7,alpha:0.2},0).wait(1).to({alpha:0.175},0).wait(1).to({x:8.6,alpha:0.15},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.1},0).wait(1).to({x:8.5,alpha:0.075},0).wait(1).to({alpha:0.05},0).wait(1).to({x:8.4,alpha:0.025},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(182));

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("AhFCOIAAglIBFAAQANAAAKgLQAKgJAAgPIAAh8QAAgUgOgPQgPgPgTAAIg2AAIAAglIA2AAQAiAAAaAaQAZAZAAAkIAAB8QABAdgWAWQgVAVgcAAg");
		this.shape.setTransform(33.7,15.1,0.589,0.589);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#000000").s().p("Aj5ENIAAnbQAAgaASgSQASgSAaAAIF3AAQAaAAASASQASASAAAaIAAHbg");
		this.shape_1.setTransform(14.8,15.9,0.589,0.589);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},351).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,37.9,31.7);


	(lib.uiscreenanim = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 7
		this.instance = new lib.Symbol20();
		this.instance.setTransform(92.1,65.3,1,0.093,0,0,0,2,0);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(394).to({_off:false},0).wait(1).to({scaleY:0.18},0).wait(1).to({scaleY:0.27},0).wait(1).to({scaleY:0.37},0).wait(1).to({scaleY:0.46},0).wait(1).to({scaleY:0.55},0).wait(1).to({scaleY:0.64},0).wait(1).to({scaleY:0.73},0).wait(1).to({scaleY:0.82},0).wait(1).to({scaleY:0.91},0).wait(1).to({scaleY:1},0).wait(195).to({_off:true},1).wait(100));

		// Layer 6
		this.instance_1 = new lib.Symbol20();
		this.instance_1.setTransform(82,63.9,1.612,0.044,0,0,0,2,0);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(375).to({_off:false},0).wait(1).to({scaleY:0.2},0).wait(1).to({scaleY:0.36},0).wait(1).to({scaleY:0.51},0).wait(1).to({scaleY:0.67},0).wait(1).to({scaleY:0.83},0).wait(1).to({scaleY:0.99},0).wait(1).to({scaleY:1.14},0).wait(1).to({scaleY:1.3},0).wait(1).to({scaleY:1.46},0).wait(1).to({scaleY:1.61},0).wait(214).to({_off:true},1).wait(100));

		// 001-right.svg
		this.instance_2 = new lib.Symbol20();
		this.instance_2.setTransform(72.2,65.3,1,0.137,0,0,0,2,0);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(355).to({_off:false},0).wait(1).to({scaleY:0.22},0).wait(1).to({scaleY:0.31,y:65.2},0).wait(1).to({scaleY:0.4,y:65.3},0).wait(1).to({scaleY:0.48},0).wait(1).to({scaleY:0.57},0).wait(1).to({scaleY:0.66,y:65.2},0).wait(1).to({scaleY:0.74},0).wait(1).to({scaleY:0.83,y:65.3},0).wait(1).to({scaleY:0.91},0).wait(1).to({scaleY:1},0).wait(234).to({_off:true},1).wait(100));

		// cursor
		this.instance_3 = new lib.mousearrow();
		this.instance_3.setTransform(133.6,97.5,1,1,0,0,0,2.6,4.7);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({_off:false},0).wait(1).to({x:131.3,y:95.9},0).wait(1).to({x:129,y:94.2},0).wait(1).to({x:126.7,y:92.5},0).wait(1).to({x:124.3,y:90.8},0).wait(1).to({x:122,y:89.2},0).wait(1).to({x:119.7,y:87.5},0).wait(1).to({x:117.3,y:85.8},0).wait(1).to({x:115,y:84.1},0).wait(1).to({x:112.7,y:82.5},0).wait(1).to({x:110.3,y:80.8},0).wait(1).to({x:108,y:79.1},0).wait(1).to({x:105.7,y:77.4},0).wait(1).to({x:103.3,y:75.7},0).wait(1).to({x:101,y:74.1},0).wait(1).to({x:98.7,y:72.4},0).wait(1).to({x:96.4,y:70.7},0).wait(1).to({x:94,y:69},0).wait(1).to({x:91.7,y:67.4},0).wait(1).to({x:89.4,y:65.7},0).wait(1).to({x:87,y:64},0).wait(1).to({x:84.7,y:62.3},0).wait(1).to({x:82.4,y:60.7},0).wait(1).to({x:80,y:59},0).wait(1).to({x:77.7,y:57.3},0).wait(1).to({x:75.4,y:55.6},0).wait(1).to({x:73,y:53.9},0).wait(1).to({x:74.6},0).wait(1).to({x:76.1},0).wait(1).to({x:77.6},0).wait(1).to({x:79.1},0).wait(1).to({x:80.6},0).wait(1).to({x:82.2},0).wait(1).to({x:83.7},0).wait(1).to({x:85.2},0).wait(1).to({x:86.7},0).wait(1).to({x:88.2},0).wait(1).to({x:89.8},0).wait(1).to({x:91.3},0).wait(1).to({x:92.8},0).wait(1).to({x:94.3},0).wait(1).to({x:95.8},0).wait(1).to({y:54.4},0).wait(1).to({y:54.8},0).wait(1).to({y:55.3},0).wait(1).to({y:55.7},0).wait(1).to({y:56.1},0).wait(1).to({y:56.6},0).wait(1).to({y:57},0).wait(1).to({y:57.5},0).wait(1).to({y:57.9},0).wait(1).to({y:58.3},0).wait(1).to({x:94.3,y:58.6},0).wait(1).to({x:92.8,y:58.8},0).wait(1).to({x:91.3,y:59},0).wait(1).to({x:89.8,y:59.2},0).wait(1).to({x:88.3,y:59.4},0).wait(1).to({x:86.8,y:59.6},0).wait(1).to({x:85.3,y:59.8},0).wait(1).to({x:83.8,y:60.1},0).wait(1).to({x:82.3,y:60.3},0).wait(1).to({x:80.8,y:60.5},0).wait(1).to({x:79.3,y:60.7},0).wait(1).to({x:77.8,y:60.9},0).wait(1).to({x:76.3,y:61.1},0).wait(1).to({x:74.8,y:61.3},0).wait(1).to({x:73.2,y:61.5},0).wait(1).to({x:74.8},0).wait(1).to({x:76.3},0).wait(1).to({x:77.8},0).wait(1).to({x:79.3},0).wait(1).to({x:80.8},0).wait(1).to({x:82.4},0).wait(1).to({x:83.9},0).wait(1).to({x:85.4},0).wait(1).to({x:86.9},0).wait(1).to({x:88.4},0).wait(1).to({x:90},0).wait(1).to({x:91.5},0).wait(1).to({x:93},0).wait(1).to({x:94.5},0).wait(1).to({x:96},0).wait(1).to({y:62},0).wait(1).to({y:62.4},0).wait(1).to({y:62.9},0).wait(1).to({y:63.3},0).wait(1).to({y:63.7},0).wait(1).to({y:64.2},0).wait(1).to({y:64.6},0).wait(1).to({y:65.1},0).wait(1).to({y:65.5},0).wait(1).to({y:65.9},0).wait(1).to({x:95.1,y:64.1},0).wait(1).to({x:94.1,y:62.2},0).wait(1).to({x:93.2,y:60.3},0).wait(1).to({x:92.2,y:58.4},0).wait(1).to({x:91.3,y:56.5},0).wait(1).to({x:90.3,y:54.6},0).wait(1).to({x:89.4,y:52.7},0).wait(1).to({x:88.4,y:50.8},0).wait(1).to({x:87.5,y:48.9},0).wait(1).to({x:86.5,y:47},0).wait(1).to({x:85.6,y:45.1},0).wait(1).to({x:84.6,y:43.2},0).wait(1).to({x:83.7,y:41.3},0).wait(1).to({x:82.7,y:39.4},0).wait(1).to({x:81.8,y:37.5},0).wait(1).to({x:80.8,y:35.6},0).wait(1).to({x:79.9,y:33.7},0).wait(1).to({x:78.9,y:31.8},0).wait(1).to({x:77.9,y:29.9},0).wait(1).to({x:78.6,y:30.3},0).wait(1).to({x:79.3,y:30.6},0).wait(1).to({x:80,y:30.9},0).wait(1).to({x:80.7,y:31.2},0).wait(1).to({x:81.4,y:31.5},0).wait(1).to({x:82.1,y:31.8},0).wait(1).to({x:82.8,y:32.1},0).wait(1).to({x:83.4,y:32.4},0).wait(1).to({x:84.1,y:32.7},0).wait(1).to({x:84.8,y:33},0).wait(1).to({x:85.5,y:33.3},0).wait(1).to({x:86.2,y:33.6},0).wait(1).to({x:86.9,y:34},0).wait(1).to({x:87.6,y:34.3},0).wait(1).to({x:88.3,y:34.6},0).wait(1).to({x:88.9,y:34.9},0).wait(1).to({x:89.6,y:35.2},0).wait(1).to({x:90.3,y:35.5},0).wait(1).to({x:91,y:35.8},0).wait(12).to({x:93.6,y:35.1},0).wait(1).to({x:96.3,y:34.4},0).wait(1).to({x:98.9,y:33.6},0).wait(1).to({x:101.5,y:32.9},0).wait(1).to({x:104.2,y:32.2},0).wait(1).to({x:106.8,y:31.5},0).wait(1).to({x:109.5,y:30.8},0).wait(1).to({x:112.1,y:30},0).wait(1).to({x:114.7,y:29.3},0).wait(1).to({x:117.4,y:28.6},0).wait(1).to({x:120,y:27.9},0).wait(1).to({x:122.6,y:27.2},0).wait(1).to({x:125.3,y:26.5},0).wait(1).to({x:127.9,y:25.7},0).wait(1).to({x:130.5,y:25},0).wait(1).to({x:133.2,y:24.3},0).wait(1).to({x:135.8,y:23.6},0).wait(1).to({x:138.4,y:22.9},0).wait(1).to({x:141,y:22.1},0).wait(1).to({x:143.7,y:21.4},0).wait(1).to({x:146.3,y:20.7},0).wait(1).to({x:147.3},0).wait(1).to({x:148.4},0).wait(1).to({x:149.4},0).wait(1).to({x:150.5},0).wait(1).to({x:151.5},0).wait(1).to({x:152.5},0).wait(1).to({x:153.6},0).wait(1).to({x:154.6},0).wait(1).to({x:155.7},0).wait(1).to({x:156.7},0).wait(1).to({x:157.7},0).wait(1).to({x:158.8},0).wait(1).to({x:159.8},0).wait(1).to({x:160.9},0).wait(1).to({x:161.9},0).wait(16).to({x:154.5,y:23.5},0).wait(1).to({x:147.2,y:26.2},0).wait(1).to({x:139.8,y:29},0).wait(1).to({x:132.5,y:31.7},0).wait(1).to({x:125.1,y:34.5},0).wait(1).to({x:117.7,y:37.2},0).wait(1).to({x:110.3,y:40},0).wait(1).to({x:103,y:42.7},0).wait(1).to({x:95.6,y:45.5},0).wait(1).to({x:88.2,y:48.2},0).wait(1).to({x:80.8,y:51},0).wait(1).to({x:73.5,y:53.8},0).wait(1).to({x:66.1,y:56.5},0).wait(1).to({x:58.7,y:59.3},0).wait(1).to({x:51.3,y:62},0).wait(1).to({x:44,y:64.8},0).wait(1).to({x:36.6,y:67.5},0).wait(1).to({x:29.2,y:70.3},0).wait(1).to({x:21.8,y:73},0).wait(1).to({x:14.4,y:75.8},0).wait(11).to({x:18.9,y:73},0).wait(1).to({x:23.3,y:70.2},0).wait(1).to({x:27.7,y:67.3},0).wait(1).to({x:32.1,y:64.5},0).wait(1).to({x:36.5,y:61.7},0).wait(1).to({x:41,y:58.9},0).wait(1).to({x:45.4,y:56},0).wait(1).to({x:49.8,y:53.2},0).wait(1).to({x:54.2,y:50.4},0).wait(1).to({x:58.6,y:47.6},0).wait(1).to({x:63.1,y:44.7},0).wait(1).to({x:67.5,y:41.9},0).wait(1).to({x:71.9,y:39.1},0).wait(1).to({x:76.3,y:36.3},0).wait(1).to({x:80.7,y:33.4},0).wait(1).to({x:80.4,y:35.3},0).wait(1).to({x:80.1,y:37.2},0).wait(1).to({x:79.8,y:39.1},0).wait(1).to({x:79.5,y:41},0).wait(1).to({x:79.2,y:42.9},0).wait(1).to({x:78.9,y:44.8},0).wait(1).to({x:78.6,y:46.7},0).wait(1).to({x:78.2,y:48.6},0).wait(1).to({x:77.9,y:50.5},0).wait(1).to({x:77.6,y:52.3},0).wait(1).to({x:77.3,y:54.2},0).wait(1).to({x:77,y:56.1},0).wait(1).to({x:76.7,y:58},0).wait(1).to({x:76.4,y:59.9},0).wait(1).to({x:76.1,y:61.8},0).wait(1).to({x:75.7,y:63.7},0).wait(1).to({x:75.4,y:65.6},0).wait(1).to({x:75.1,y:67.5},0).wait(1).to({x:74.8,y:69.4},0).wait(1).to({x:74.5,y:71.2},0).wait(1).to({y:72},0).wait(1).to({y:72.8},0).wait(1).to({x:74.6,y:73.6},0).wait(1).to({y:74.4},0).wait(1).to({y:75.2},0).wait(1).to({y:76},0).wait(1).to({y:76.8},0).wait(1).to({x:74.7,y:77.6},0).wait(1).to({y:78.4},0).wait(1).to({y:79.2},0).wait(1).to({x:75.7,y:78.2},0).wait(1).to({x:76.7,y:77.2},0).wait(1).to({x:77.7,y:76.2},0).wait(1).to({x:78.7,y:75.2},0).wait(1).to({x:79.7,y:74.1},0).wait(1).to({x:80.6,y:73.1},0).wait(1).to({x:81.6,y:72.1},0).wait(1).to({x:82.6,y:71.1},0).wait(1).to({x:83.6,y:70.1},0).wait(1).to({x:84.6,y:69.1},0).wait(1).to({y:70.5},0).wait(1).to({y:71.9},0).wait(1).to({y:73.3},0).wait(1).to({y:74.7},0).wait(1).to({y:76.1},0).wait(1).to({y:77.5},0).wait(1).to({y:78.9},0).wait(1).to({y:80.3},0).wait(1).to({y:81.7},0).wait(1).to({y:83.1},0).wait(1).to({x:85.7,y:81.7},0).wait(1).to({x:86.8,y:80.2},0).wait(1).to({x:87.9,y:78.8},0).wait(1).to({x:89,y:77.4},0).wait(1).to({x:90.2,y:75.9},0).wait(1).to({x:91.3,y:74.5},0).wait(1).to({x:92.4,y:73.1},0).wait(1).to({x:93.5,y:71.6},0).wait(1).to({x:94.6,y:70.2},0).wait(1).to({y:71.1},0).wait(1).to({y:72},0).wait(1).to({y:72.8},0).wait(1).to({y:73.7},0).wait(1).to({y:74.6},0).wait(1).to({y:75.5},0).wait(1).to({y:76.4},0).wait(1).to({y:77.2},0).wait(1).to({y:78.1},0).wait(1).to({y:79},0).wait(1).to({x:95.7,y:79.2},0).wait(1).to({x:96.8,y:79.4},0).wait(1).to({x:97.9,y:79.5},0).wait(1).to({x:99,y:79.7},0).wait(1).to({x:100.1,y:79.9},0).wait(1).to({x:101.1,y:80.1},0).wait(1).to({x:102.2,y:80.3},0).wait(1).to({x:103.3,y:80.5},0).wait(1).to({x:104.4,y:80.6},0).wait(1).to({x:105.5,y:80.8},0).wait(1).to({x:106.6,y:81},0).wait(184).to({_off:true},1).wait(100));

		// ui-2
		this.instance_4 = new lib.Symbol14();
		this.instance_4.setTransform(104.3,40.7,1,1,0,0,0,4.7,4.3);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(249).to({_off:false},0).wait(1).to({y:40,alpha:0.051},0).wait(1).to({y:39.4,alpha:0.102},0).wait(1).to({y:38.7,alpha:0.148},0).wait(1).to({y:38.1,alpha:0.199},0).wait(1).to({y:37.4,alpha:0.25},0).wait(1).to({y:36.7,alpha:0.301},0).wait(1).to({y:36.1,alpha:0.352},0).wait(1).to({y:35.4,alpha:0.398},0).wait(1).to({y:34.8,alpha:0.449},0).wait(1).to({y:34.1,alpha:0.5},0).wait(1).to({y:33.4,alpha:0.551},0).wait(1).to({y:32.8,alpha:0.602},0).wait(1).to({y:32.1,alpha:0.648},0).wait(1).to({y:31.5,alpha:0.699},0).wait(1).to({y:30.8,alpha:0.75},0).wait(1).to({y:30.1,alpha:0.801},0).wait(1).to({y:29.5,alpha:0.852},0).wait(1).to({y:28.8,alpha:0.898},0).wait(1).to({y:28.2,alpha:0.949},0).wait(1).to({y:27.5,alpha:1},0).wait(330).to({_off:true},1).wait(100));

		// ui-1
		this.instance_5 = new lib.Symbol13();
		this.instance_5.setTransform(60.9,37.7,1,1,0,0,0,5.2,5.2);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(228).to({_off:false},0).wait(1).to({y:37.3,alpha:0.039},0).wait(1).to({y:36.8,alpha:0.09},0).wait(1).to({y:36.3,alpha:0.141},0).wait(1).to({y:35.8,alpha:0.191},0).wait(1).to({y:35.4,alpha:0.23},0).wait(1).to({y:34.9,alpha:0.281},0).wait(1).to({y:34.4,alpha:0.328},0).wait(1).to({y:33.9,alpha:0.379},0).wait(1).to({y:33.4,alpha:0.422},0).wait(1).to({y:33,alpha:0.469},0).wait(1).to({y:32.5,alpha:0.52},0).wait(1).to({y:32,alpha:0.57},0).wait(1).to({y:31.5,alpha:0.609},0).wait(1).to({y:31,alpha:0.66},0).wait(1).to({y:30.6,alpha:0.711},0).wait(1).to({y:30.1,alpha:0.762},0).wait(1).to({y:29.6,alpha:0.801},0).wait(1).to({y:29.1,alpha:0.852},0).wait(1).to({y:28.7,alpha:0.898},0).wait(1).to({y:28.2,alpha:0.949},0).wait(1).to({y:27.7,alpha:1},0).wait(350).to({_off:true},1).wait(100));

		// robot-bottom2
		this.instance_6 = new lib.Symbol11("synched",0);
		this.instance_6.setTransform(70.8,56.5,0.068,1.072,0,0,0,0,0.5);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(165).to({_off:false},0).wait(1).to({regX:11.1,regY:0.4,scaleX:0.13,x:72.3,y:56.4},0).wait(1).to({scaleX:0.19,x:73},0).wait(1).to({scaleX:0.26,x:73.7},0).wait(1).to({scaleX:0.32,x:74.4},0).wait(1).to({scaleX:0.38,x:75.1},0).wait(1).to({scaleX:0.45,x:75.8},0).wait(1).to({scaleX:0.51,x:76.5},0).wait(1).to({scaleX:0.57,x:77.2},0).wait(1).to({scaleX:0.64,x:77.9},0).wait(1).to({scaleX:0.7,x:78.6},0).wait(1).to({scaleX:0.76,x:79.3},0).wait(1).to({scaleX:0.83,x:80},0).wait(1).to({scaleX:0.89,x:80.7},0).wait(1).to({scaleX:0.95,x:81.4},0).wait(1).to({scaleX:1.02,x:82.1},0).wait(1).to({regY:0,y:56.5},0).wait(1).to({regY:0.4,scaleY:1.49,y:57.1},0).wait(1).to({scaleY:1.91,y:57.3},0).wait(1).to({scaleY:2.32,y:57.5},0).wait(1).to({scaleY:2.74,y:57.6},0).wait(1).to({scaleY:3.16,y:57.8},0).wait(1).to({scaleY:3.57,y:58},0).wait(1).to({scaleY:3.99,y:58.1},0).wait(1).to({scaleY:4.41,y:58.3},0).wait(1).to({scaleY:4.82,y:58.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regY:0,y:56.5},0).wait(1).to({y:56.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(100));

		// robot-bottom1
		this.instance_7 = new lib.Symbol11("synched",0);
		this.instance_7.setTransform(70.8,50.1,0.068,1.072,0,0,0,0,0.5);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(125).to({_off:false},0).wait(1).to({regX:11.1,regY:0.4,scaleX:0.13,x:72.3,y:50},0).wait(1).to({scaleX:0.19,x:73},0).wait(1).to({scaleX:0.26,x:73.7},0).wait(1).to({scaleX:0.32,x:74.4},0).wait(1).to({scaleX:0.38,x:75.1},0).wait(1).to({scaleX:0.45,x:75.8},0).wait(1).to({scaleX:0.51,x:76.5},0).wait(1).to({scaleX:0.57,x:77.2},0).wait(1).to({scaleX:0.64,x:77.9},0).wait(1).to({scaleX:0.7,x:78.6},0).wait(1).to({scaleX:0.76,x:79.3},0).wait(1).to({scaleX:0.83,x:80},0).wait(1).to({scaleX:0.89,x:80.7},0).wait(1).to({scaleX:0.95,x:81.4},0).wait(1).to({scaleX:1.02,x:82.1},0).wait(1).to({regY:0,y:49.5},0).wait(1).to({scaleY:1.49},0).wait(1).to({scaleY:1.91},0).wait(1).to({scaleY:2.32},0).wait(1).to({scaleY:2.74},0).wait(1).to({scaleY:3.16},0).wait(1).to({scaleY:3.57},0).wait(1).to({scaleY:3.99,y:49.4},0).wait(1).to({scaleY:4.41},0).wait(1).to({scaleY:4.82},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(100));

		// robot-eye2
		this.instance_8 = new lib.Symbol17();
		this.instance_8.setTransform(82.3,28.2,1,1,0,0,0,7.7,2.9);
		this.instance_8.alpha = 0;
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(271).to({_off:false},0).wait(1).to({alpha:0.051},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.148},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.262},0).wait(1).to({alpha:0.309},0).wait(1).to({alpha:0.359},0).wait(1).to({alpha:0.422},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.57},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.781},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.891},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:1},0).wait(309).to({_off:true},1).wait(100));

		// robot-eye1
		this.instance_9 = new lib.Symbol12();
		this.instance_9.setTransform(73.7,24.9,0.012,0.012);
		this.instance_9._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(209).to({_off:false},0).wait(1).to({scaleX:0.06,scaleY:0.06},0).wait(1).to({scaleX:0.12,scaleY:0.12},0).wait(1).to({scaleX:0.17,scaleY:0.17},0).wait(1).to({scaleX:0.22,scaleY:0.22},0).wait(1).to({scaleX:0.27,scaleY:0.27},0).wait(1).to({scaleX:0.32,scaleY:0.32},0).wait(1).to({scaleX:0.38,scaleY:0.38},0).wait(1).to({scaleX:0.43,scaleY:0.43},0).wait(1).to({scaleX:0.48,scaleY:0.48},0).wait(1).to({scaleX:0.53,scaleY:0.53},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:73.6},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:73.7},0).wait(1).to({scaleX:0.69,scaleY:0.69},0).wait(1).to({scaleX:0.74,scaleY:0.74},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.84,scaleY:0.84},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:73.6},0).wait(1).to({scaleX:1,scaleY:1},0).wait(33).to({alpha:0.93},0).wait(1).to({alpha:0.859},0).wait(1).to({alpha:0.801},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.602},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.461},0).wait(1).to({alpha:0.398},0).wait(1).to({alpha:0.328},0).wait(1).to({alpha:0.262},0).wait(1).to({alpha:0.199},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0},0).wait(324).to({_off:true},1).wait(100));

		// robot-eye-color
		this.instance_10 = new lib.Symbol19();
		this.instance_10.setTransform(82,28,1,1,0,0,0,6.8,2.8);
		this.instance_10.alpha = 0;
		this.instance_10._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(335).to({_off:false},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.199},0).wait(1).to({alpha:0.301},0).wait(1).to({alpha:0.398},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.602},0).wait(1).to({alpha:0.699},0).wait(1).to({alpha:0.801},0).wait(1).to({alpha:0.898},0).wait(1).to({alpha:1},0).wait(254).to({_off:true},1).wait(100));

		// robot-1
		this.instance_11 = new lib.Symbol15();
		this.instance_11.setTransform(82.2,39.5,1,1,0,0,0,26.7,21.5);
		this.instance_11.alpha = 0;
		this.instance_11._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(89).to({_off:false},0).wait(1).to({alpha:0.039},0).wait(1).to({alpha:0.078},0).wait(1).to({alpha:0.121},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.199},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.27},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.359},0).wait(1).to({alpha:0.398},0).wait(1).to({alpha:0.43},0).wait(1).to({alpha:0.48},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.551},0).wait(1).to({alpha:0.602},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.719},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.801},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.871},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.961},0).wait(1).to({alpha:1},0).wait(485).to({_off:true},1).wait(100));

		// ui-switch
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F4F4F4").s().p("AgMAOQgFAAgFgEQgDgEAAgGQAAgEADgFQAFgEAFAAIAYAAQAHAAADAEQAEAFABAEQgBAGgEAEQgDAEgHAAg");
		this.shape.setTransform(144.3,15.8);

		this.instance_12 = new lib.Symbol16();
		this.instance_12.setTransform(144.1,15.8,1,1,0,0,0,2.7,1.5);
		this.instance_12._off = true;

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},89).to({state:[{t:this.instance_12}]},160).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[]},1).wait(100));
		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(249).to({_off:false},0).wait(12).to({x:145.2},0).wait(1).to({x:146.2},0).wait(1).to({x:147.3},0).wait(1).to({x:148.3},0).wait(1).to({x:149.4},0).wait(1).to({x:150.4},0).wait(1).to({x:151.5},0).wait(1).to({x:152.5},0).wait(1).to({x:153.6},0).wait(1).to({x:154.6},0).wait(1).to({x:155.6},0).wait(1).to({x:156.7},0).wait(1).to({x:157.8},0).wait(1).to({x:158.8},0).wait(1).to({x:159.9},0).wait(324).to({_off:true},1).wait(100));

		// panel-R
		this.instance_13 = new lib.Symbol6();
		this.instance_13.setTransform(196.1,46.7,1,1,0,0,0,14.7,35.4);
		this.instance_13.alpha = 0;
		this.instance_13._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(64).to({_off:false},0).wait(1).to({x:193.6,alpha:0.051},0).wait(1).to({x:191.1,alpha:0.109},0).wait(1).to({x:188.5,alpha:0.16},0).wait(1).to({x:186,alpha:0.219},0).wait(1).to({x:183.5,alpha:0.27},0).wait(1).to({x:180.9,alpha:0.328},0).wait(1).to({x:178.4,alpha:0.379},0).wait(1).to({x:175.9,alpha:0.441},0).wait(1).to({x:173.3,alpha:0.5},0).wait(1).to({x:170.8,alpha:0.551},0).wait(1).to({x:168.3,alpha:0.609},0).wait(1).to({x:165.7,alpha:0.66},0).wait(1).to({x:163.2,alpha:0.719},0).wait(1).to({x:160.7,alpha:0.77},0).wait(1).to({x:158.1,alpha:0.828},0).wait(1).to({x:155.6,alpha:0.879},0).wait(1).to({x:153.1,alpha:0.941},0).wait(1).to({x:150.5,alpha:1},0).wait(517).to({_off:true},1).wait(100));

		// panel-L
		this.instance_14 = new lib.Symbol5();
		this.instance_14.setTransform(-19.9,46.7,1,1,0,0,0,7.3,35.4);
		this.instance_14.alpha = 0;
		this.instance_14._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(34).to({_off:false},0).wait(1).to({x:-17.9,alpha:0.059},0).wait(1).to({x:-15.9,alpha:0.121},0).wait(1).to({x:-13.9,alpha:0.18},0).wait(1).to({x:-11.9,alpha:0.25},0).wait(1).to({x:-9.9,alpha:0.309},0).wait(1).to({x:-7.9,alpha:0.371},0).wait(1).to({x:-5.9,alpha:0.43},0).wait(1).to({x:-3.9,alpha:0.5},0).wait(1).to({x:-1.9,alpha:0.559},0).wait(1).to({x:0.1,alpha:0.621},0).wait(1).to({x:2.1,alpha:0.68},0).wait(1).to({x:4.1,alpha:0.75},0).wait(1).to({x:6.1,alpha:0.809},0).wait(1).to({x:8.1,alpha:0.871},0).wait(1).to({x:10.1,alpha:0.93},0).wait(1).to({x:12.1,alpha:1},0).wait(549).to({_off:true},1).wait(100));

		// color-select
		this.instance_15 = new lib.Symbol18();
		this.instance_15.setTransform(12.3,71.6,1,1,0,0,0,5.5,8);
		this.instance_15.alpha = 0;
		this.instance_15._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(310).to({_off:false},0).wait(1).to({alpha:0.109},0).wait(1).to({alpha:0.219},0).wait(1).to({alpha:0.328},0).wait(1).to({alpha:0.441},0).wait(1).to({alpha:0.551},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.77},0).wait(1).to({alpha:0.879},0).wait(1).to({alpha:1},0).wait(280).to({_off:true},1).wait(100));

		// screenbg
		this.instance_16 = new lib.Symbol4();
		this.instance_16.setTransform(85.4,49.9,1,0.011,0,0,0,85,44.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regY:44.9,scaleY:0.05,y:49.7},0).wait(1).to({regY:44.4,scaleY:0.09,y:49.5},0).wait(1).to({regY:44.9,scaleY:0.14,y:49.4},0).wait(1).to({regY:44.6,scaleY:0.18,y:49.2},0).wait(1).to({scaleY:0.22,y:49.1},0).wait(1).to({regY:44.7,scaleY:0.26,y:48.8},0).wait(1).to({regY:44.6,scaleY:0.3,y:48.7},0).wait(1).to({scaleY:0.34,y:48.5},0).wait(1).to({scaleY:0.38,y:48.3},0).wait(1).to({scaleY:0.42,y:48.1},0).wait(1).to({scaleY:0.46,y:48},0).wait(1).to({regY:44.7,scaleY:0.51,y:47.8},0).wait(1).to({regY:44.6,scaleY:0.55,y:47.6},0).wait(1).to({scaleY:0.59,y:47.4},0).wait(1).to({scaleY:0.63,y:47.2},0).wait(1).to({scaleY:0.67,y:47.1},0).wait(1).to({regY:44.7,scaleY:0.71,y:46.9},0).wait(1).to({regY:44.6,scaleY:0.75,y:46.7},0).wait(1).to({scaleY:0.79,y:46.6},0).wait(1).to({scaleY:0.84,y:46.3},0).wait(1).to({scaleY:0.88,y:46.2},0).wait(1).to({scaleY:0.92,y:46},0).wait(1).to({scaleY:0.96,y:45.8},0).wait(1).to({scaleY:1,y:45.6},0).wait(575).to({_off:true},1).wait(100));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0.4,49.4,169.9,1);


// stage content:



	(lib.processanimtwo = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// coffee-cup
		this.instance = new lib.coffeeanim("synched",0);
		this.instance.setTransform(447.1,167.1,1,1,0,0,0,18.9,15.9);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(600).to({startPosition:0},0).wait(1));

		// chair
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#1E1E1E").s().p("AgyGaQgXAAgQgQQgRgQAAgXIAArEQAAgXARgQQAQgRAXAAIBlAAQAXAAAQARQARAQAAAXIAALEQAAAXgRAQQgQAQgXAAg");
		this.shape.setTransform(283.2,223,0.589,0.589);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#111111").s().p("AhqCdIAAjNQAAgtAggfQAfggArAAQAsAAAfAgQAgAfAAAtIAADNg");
		this.shape_1.setTransform(283.3,265.5,0.589,0.589);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#111111").s().p("AhKJYQggggAAgtIAAwVQAAgtAgggQAfgfArAAQAsAAAfAfQAgAgAAAtIAAQVQAAAtggAgQgfAfgsAAQgrAAgfgfg");
		this.shape_2.setTransform(283.3,293.4,0.589,0.589);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#111111").s().p("AgTEEQgkAAgZgaQgagZAAgkIAAlxQAAgbASgRQASgTAaABIBZAAQAagBASATQASARAAAbIAAFxQAAAkgaAZQgZAagkAAg");
		this.shape_3.setTransform(283.3,349.2,0.589,0.589);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#000000").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegeg");
		this.shape_4.setTransform(283.3,363.9,0.589,0.589);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#111111").s().p("AKjDyQhPg6h7g+Qj3h6jbgSIgNAAQjbASj3B6QhNAnhGAsQgjAXgUAOIhVAAQg4ABgngoQgogoAAg4QDbi8FghjQCvgyCEgMIAhAAIBYAMQBuATBuAfQFfBjDbC8QAAA4goAoQgoAog4gBg");
		this.shape_5.setTransform(283.3,338.6,0.589,0.589);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#000000").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegeg");
		this.shape_6.setTransform(240.7,354.5,0.589,0.589);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#000000").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegeg");
		this.shape_7.setTransform(326,354.5,0.589,0.589);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#191919").s().p("AhuBNQgmAAgcgbQgbgbAAglIAAgdQAAgOAKgKQAJgJAOAAIFVAAQANAAAKAJQAKAKgBAOIAAAdQAAAlgbAbQgbAbgnAAg");
		this.shape_8.setTransform(334.4,189.9,0.589,0.589);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#000000").s().p("AhzA9IAAh5IDnAAIAAB5g");
		this.shape_9.setTransform(334.5,198.1,0.589,0.589);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#000000").s().p("AhzA9IAAh5IDnAAIAAB5g");
		this.shape_10.setTransform(232.2,198.1,0.589,0.589);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#111111").s().p("AhzGaIAAszIDnAAIAAMzg");
		this.shape_11.setTransform(334.5,218.6,0.589,0.589);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#191919").s().p("AhuBNQgmAAgbgbQgbgbAAglIAAgdQAAgOAJgKQAKgJANAAIFVAAQAOAAAJAJQAJAKAAAOIAAAdQAAAlgbAbQgbAbgmAAg");
		this.shape_12.setTransform(232.2,189.9,0.589,0.589);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#111111").s().p("AhzGaIAAszIDnAAIAAMzg");
		this.shape_13.setTransform(232.2,218.6,0.589,0.589);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#1E1E1E").s().p("Aw+BIIAAhHQAAgcAWgWQAWgWAeAAIfpAAQAfAAAVAWQAWAWAAAcIAABHg");
		this.shape_14.setTransform(283.3,247.1,0.589,0.589);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#000000").s().p("AudCxQhDAAgvgvQgvgvAAhDIAAh2QAAgeAWgWQAWgWAeAAIfpAAQAfAAAVAWQAWAWAAAeIAAB2QAABDgvAvQgvAvhDAAg");
		this.shape_15.setTransform(283.3,253.2,0.589,0.589);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#000000").s().p("Ag6NuQjegEhghyQhOhfgDi3QgBhlAailIAFgfQALhDgThWQgLgxglhrQg2ibgJhQQgPiEA7hrQBdimDShJQBpgkBZgEIALAAQBeAFBtAnQDMBKBaChQA7BrgPCEQgJBQg2CbQglBrgLAxQgTBWALBDIAFAfQAbClgCBlQgDC3hOBfQhfBxjgAFg");
		this.shape_16.setTransform(283.3,177.8,0.589,0.589);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#1E1E1E").s().p("Ag6PeQmbgIhRlNQgchzAMibQAFg8AYiYQAJg+gfhoQgth+gVhGQglh9AAhgQABh+A9huQBxjLD7hXQB9gsBngDIARAAIBDAHQBTANBOAbQD7BXBxDLQA+BuAAB+QAABgglB9QgVBGgtB+QgfBpAJA9QAYCYAFA8QAMCbgcBzQhRFNmbAIg");
		this.shape_17.setTransform(283.3,177.8,0.589,0.589);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},600).wait(1));

		// screen
		this.instance_1 = new lib.uiscreenanim("synched",0);
		this.instance_1.setTransform(284.8,84.7,1,1,0,0,0,85,44.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(600).to({startPosition:0},0).wait(1));

		// lamp
		this.instance_2 = new lib.lampanim("synched",0);
		this.instance_2.setTransform(130.8,130.8,1,1,0,0,0,45.8,53.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(600).to({startPosition:0},0).wait(1));

		// OBJECTS
		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#DADADA").s().p("AgzA0QgWgVAAgfQAAgeAWgVQAVgWAeAAQAeAAAWAWQAWAVAAAeQAAAfgWAVQgWAWgeAAQgdAAgWgWg");
		this.shape_18.setTransform(284.7,145.7,0.558,0.558);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#444444").s().p("A3PCtQg5gBgpgpQgogoAAg6IAAjMMAyzAAAIAADMQAAA6goAoQgpApg5ABg");
		this.shape_19.setTransform(284.7,145.7,0.558,0.558);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#000000").s().p("As9JaQghAAgXgXQgWgXAAggIAAwXQAAggAWgXQAXgXAhAAIZ7AAQAhAAAWAXQAXAXAAAgIAAQXQAAAggXAXQgWAXghAAg");
		this.shape_20.setTransform(284.8,95.2);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#9D9D9C").s().p("AnYAOQABgMAJgHQAJgIANAAINxAAQANAAAJAIQAJAHABAMg");
		this.shape_21.setTransform(283.8,182.9,0.558,0.558);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#878787").s().p("AlWA7IAAh1IKtAAIAAB1g");
		this.shape_22.setTransform(283.7,158.7,0.558,0.558);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#B2B2B2").s().p("AlWDuIAAnbIKtAAIAAHbg");
		this.shape_23.setTransform(283.7,168.7,0.558,0.558);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#878787").s().p("Ag2AOIAAgOQAAgEAEgEQAEgFAHAAIBQAAQAGAAAEAFQAEAEAAAEIAAAOg");
		this.shape_24.setTransform(302.7,180.4,0.589,0.589);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#878787").s().p("Ag2AOIAAgOQAAgEAEgEQAEgFAHAAIBPAAQAHAAAEAFQAEAEAAAEIAAAOg");
		this.shape_25.setTransform(311.3,180.4,0.589,0.589);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#878787").s().p("Ag2AOIAAgOQAAgEAEgEQAFgFAGAAIBQAAQAGAAAEAFQAEAEAAAEIAAAOg");
		this.shape_26.setTransform(294.5,180.4,0.589,0.589);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#878787").s().p("Ag2AOIAAgOQAAgEAEgEQAFgFAGAAIBQAAQAGAAAEAFQAEAEAAAEIAAAOg");
		this.shape_27.setTransform(286.5,180.4,0.589,0.589);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#878787").s().p("Ag2AOIAAgOQAAgEAFgEQADgFAHAAIBQAAQAFAAAFAFQAEAEAAAEIAAAOg");
		this.shape_28.setTransform(278.2,180.4,0.589,0.589);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#878787").s().p("AlzAOIAAgOQAAgEAEgEQAFgFAFAAILLAAQAFAAAFAFQAEAEAAAEIAAAOg");
		this.shape_29.setTransform(251.2,180.4,0.589,0.589);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#878787").s().p("Ag2AOIAAgOQAAgEAEgEQAEgFAGAAIBQAAQAGAAAFAFQAEAEAAAEIAAAOg");
		this.shape_30.setTransform(224.3,180.4,0.589,0.589);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#878787").s().p("Ag2AOIAAgOQAAgEAEgEQAEgFAHAAIBPAAQAHAAAEAFQAEAEAAAEIAAAOg");
		this.shape_31.setTransform(216,180.4,0.589,0.589);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#878787").s().p("Ag2AOIAAgOQAAgEAEgEQAEgFAHAAIBQAAQAGAAAEAFQAEAEAAAEIAAAOg");
		this.shape_32.setTransform(207.7,180.4,0.589,0.589);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#878787").s().p("Ag2AOIAAgOQAAgEAEgEQAEgFAGAAIBQAAQAHAAAEAFQAEAEAAAEIAAAOg");
		this.shape_33.setTransform(199.5,180.4,0.589,0.589);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#000000").s().p("AxWAWQAAgTANgLQANgNATAAMAhUAAAQASAAANANQANALAAATg");
		this.shape_34.setTransform(256.2,182.6,0.589,0.589);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#222222").s().p("AhIS4QgHAAgGgGQgGgGAAgIMAAAglbIC3AAMAAAAlbQAAAIgGAGQgFAGgJAAg");
		this.shape_35.setTransform(432.3,269.9,0.589,0.589);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#222222").s().p("AhHS4QgIAAgGgGQgGgFAAgJMAAAglbIC3AAMAAAAlbQAAAJgGAFQgFAGgJAAg");
		this.shape_36.setTransform(147.9,269.9,0.589,0.589);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#111111").s().p("AhqBZIAAixIDVAAIAACxg");
		this.shape_37.setTransform(455.6,204.1,0.589,0.589);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#111111").s().p("AhqBZIAAixIDVAAIAACxg");
		this.shape_38.setTransform(124.5,204.1,0.589,0.589);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#222222").s().p("AhXV+QgIAAgFgGQgGgFAAgJMAAAgrnIDVAAMAAAArnQAAAJgGAFQgFAGgIAAg");
		this.shape_39.setTransform(455.6,281.7,0.589,0.589);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#222222").s().p("AhWV+QgIAAgGgGQgGgFAAgJMAAAgrnIDVAAMAAAArnQAAAJgGAFQgGAGgIAAg");
		this.shape_40.setTransform(124.5,281.7,0.589,0.589);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#333333").s().p("Egx1AB+IAAj7MBjsAAAIAAD7g");
		this.shape_41.setTransform(290.1,191.3,0.589,0.589);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},600).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(360,235,393.2,335);

})(libs_animtwo = libs_animtwo||{}, images_animtwo = images_animtwo||{}, createjs = createjs||{}, ss = ss||{});
var libs_animtwo, images_animtwo, createjs, ss;