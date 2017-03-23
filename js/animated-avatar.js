(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 400,
	height: 432,
	fps: 60,
	webfonts: {},
	manifest: [
		{src:"themes/portfolio/img/avatar-vector.png", id:"avatarvector"}
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



	(lib.avatarvector = function() {
		this.initialize(img.avatarvector);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,390,443);


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


	(lib.Codeline1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("ACfAcIAAg3IIRAAIAAA3gAqvAcIAAg3IHSAAIAAA3g");
		this.shape.setTransform(68.8,2.9);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,137.6,5.7);


// stage content:
	(lib.AnimatedAvatar = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Code13
		this.instance = new lib.Codeline12();
		this.instance.setTransform(255.4,248.5,0.336,0.454,0,0,0,88.7,3);
		this.instance.alpha = 0;
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(97).to({_off:false},0).wait(1).to({regX:88.8,regY:2.9,x:264,y:248.4,alpha:0.1},0).wait(1).to({x:272.7,alpha:0.2},0).wait(1).to({x:281.3,alpha:0.3},0).wait(1).to({x:290,alpha:0.4},0).wait(1).to({x:298.6,alpha:0.5},0).wait(1).to({x:307.3,alpha:0.6},0).wait(1).to({x:315.9,alpha:0.7},0).wait(1).to({x:324.6,alpha:0.8},0).wait(1).to({x:333.2,alpha:0.9},0).wait(1).to({x:341.9,alpha:1},0).wait(65));

		// Code12
		this.instance_1 = new lib.Codeline11();
		this.instance_1.setTransform(270,240.3,0.454,0.454,0,0,0,72.5,2.9);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},0).wait(1).to({regX:73.1,x:276.8,alpha:0.1},0).wait(1).to({x:283.4,alpha:0.2},0).wait(1).to({x:289.9,alpha:0.3},0).wait(1).to({x:296.5,alpha:0.4},0).wait(1).to({x:303,alpha:0.5},0).wait(1).to({x:309.6,alpha:0.6},0).wait(1).to({x:316.1,alpha:0.7},0).wait(1).to({x:322.7,alpha:0.8},0).wait(1).to({x:329.2,alpha:0.9},0).wait(1).to({x:335.8,alpha:1},0).wait(74));

		// Code11
		this.instance_2 = new lib.Codeline10();
		this.instance_2.setTransform(271.5,232.6,0.454,0.454,0,0,0,77.3,2.9);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).wait(1).to({regX:77.4,x:278.6,alpha:0.1},0).wait(1).to({x:285.6,alpha:0.2},0).wait(1).to({x:292.6,alpha:0.3},0).wait(1).to({x:299.6,alpha:0.4},0).wait(1).to({x:306.6,alpha:0.5},0).wait(1).to({x:313.6,alpha:0.6},0).wait(1).to({x:320.6,alpha:0.7},0).wait(1).to({x:327.6,alpha:0.8},0).wait(1).to({x:334.6,alpha:0.9},0).wait(1).to({x:341.6,alpha:1},0).wait(83));

		// Code10
		this.instance_3 = new lib.Codeline9();
		this.instance_3.setTransform(267.9,224.4,0.454,0.454,0,0,0,68.8,2.6);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({_off:false},0).wait(1).to({regY:2.8,x:273.4,alpha:0.1},0).wait(1).to({x:279,alpha:0.2},0).wait(1).to({x:284.5,alpha:0.3},0).wait(1).to({x:290.1,alpha:0.4},0).wait(1).to({x:295.6,alpha:0.5},0).wait(1).to({x:301.2,alpha:0.6},0).wait(1).to({x:306.7,alpha:0.7},0).wait(1).to({x:312.3,alpha:0.8},0).wait(1).to({x:317.8,alpha:0.9},0).wait(1).to({x:323.4,alpha:1},0).wait(92));

		// Code9
		this.instance_4 = new lib.Codeline8();
		this.instance_4.setTransform(275.6,211.3,0.454,0.454,0,0,0,89.5,2.6);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(61).to({_off:false},0).wait(1).to({regX:89.3,regY:2.9,x:281.3,alpha:0.1},0).wait(1).to({x:287.2,alpha:0.2},0).wait(1).to({x:293.1,alpha:0.3},0).wait(1).to({x:299,alpha:0.4},0).wait(1).to({x:304.8,alpha:0.5},0).wait(1).to({x:310.7,alpha:0.6},0).wait(1).to({x:316.6,alpha:0.7},0).wait(1).to({x:322.5,alpha:0.8},0).wait(1).to({x:328.4,alpha:0.9},0).wait(1).to({x:334.2,alpha:1},0).wait(101));

		// Code8
		this.instance_5 = new lib.Codeline7();
		this.instance_5.setTransform(264.6,202.7,0.454,0.454,0,0,0,84.5,2.6);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(53).to({_off:false},0).wait(1).to({regX:84.3,regY:2.9,x:272.3,alpha:0.111},0).wait(1).to({x:280,alpha:0.222},0).wait(1).to({x:287.8,alpha:0.333},0).wait(1).to({x:295.6,alpha:0.444},0).wait(1).to({x:303.4,alpha:0.556},0).wait(1).to({x:311.1,alpha:0.667},0).wait(1).to({x:318.9,alpha:0.778},0).wait(1).to({x:326.7,alpha:0.889},0).wait(1).to({x:334.4,alpha:1},0).wait(110));

		// Code7
		this.instance_6 = new lib.Codeline6();
		this.instance_6.setTransform(267.7,192.8,0.454,0.454,0,0,0,80.8,2.6);
		this.instance_6.alpha = 0;
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45).to({_off:false},0).wait(1).to({regX:80.5,regY:2.4,x:274.8,y:192.6,alpha:0.111},0).wait(1).to({x:282,alpha:0.222},0).wait(1).to({x:289.3,alpha:0.333},0).wait(1).to({x:296.5,alpha:0.444},0).wait(1).to({x:303.8,alpha:0.556},0).wait(1).to({x:311,alpha:0.667},0).wait(1).to({x:318.3,alpha:0.778},0).wait(1).to({x:325.5,alpha:0.889},0).wait(1).to({x:332.8,alpha:1},0).wait(118));

		// Code6
		this.instance_7 = new lib.Codeline5();
		this.instance_7.setTransform(269,183.6,0.454,0.454,0,0,0,88.6,2.6);
		this.instance_7.alpha = 0;
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(37).to({_off:false},0).wait(1).to({regY:2.9,x:276.5,alpha:0.111},0).wait(1).to({x:283.9,alpha:0.222},0).wait(1).to({x:291.4,alpha:0.333},0).wait(1).to({x:298.8,alpha:0.444},0).wait(1).to({x:306.3,alpha:0.556},0).wait(1).to({x:313.8,alpha:0.667},0).wait(1).to({x:321.2,alpha:0.778},0).wait(1).to({x:328.7,alpha:0.889},0).wait(1).to({x:336.1,alpha:1},0).wait(126));

		// Code5
		this.instance_8 = new lib.Codeline4();
		this.instance_8.setTransform(269.5,168.6,0.454,0.454,0,0,0,89,2.6);
		this.instance_8.alpha = 0;
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(28).to({_off:false},0).wait(1).to({regX:88.8,regY:2.8,x:276,alpha:0.1},0).wait(1).to({x:282.7,alpha:0.2},0).wait(1).to({x:289.3,alpha:0.3},0).wait(1).to({x:296,alpha:0.4},0).wait(1).to({x:302.6,alpha:0.5},0).wait(1).to({x:309.2,alpha:0.6},0).wait(1).to({x:315.9,alpha:0.7},0).wait(1).to({x:322.5,alpha:0.8},0).wait(1).to({x:329.2,alpha:0.9},0).wait(1).to({x:335.8,alpha:1},0).wait(134));

		// Code4
		this.instance_9 = new lib.Codeline3();
		this.instance_9.setTransform(261.9,160.4,0.454,0.454,0,0,0,91.5,2.6);
		this.instance_9.alpha = 0;
		this.instance_9._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},0).wait(1).to({regX:91.6,regY:2.9,x:269.1,y:160.5,alpha:0.1},0).wait(1).to({x:276.4,alpha:0.2},0).wait(1).to({x:283.6,alpha:0.3},0).wait(1).to({x:290.9,alpha:0.4},0).wait(1).to({x:298.1,alpha:0.5},0).wait(1).to({x:305.3,alpha:0.6},0).wait(1).to({x:312.6,alpha:0.7},0).wait(1).to({x:319.8,alpha:0.8},0).wait(1).to({x:327.1,alpha:0.9},0).wait(1).to({x:334.3,alpha:1},0).wait(143));

		// Code-line2
		this.instance_10 = new lib.Codeline2();
		this.instance_10.setTransform(270,152.3,0.454,0.454,0,0,0,77.3,3);
		this.instance_10.alpha = 0;
		this.instance_10._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({_off:false},0).wait(1).to({regX:77.4,regY:2.9,x:275.8,y:152.2,alpha:0.091},0).wait(1).to({x:281.6,alpha:0.182},0).wait(1).to({x:287.3,alpha:0.273},0).wait(1).to({x:293.1,alpha:0.364},0).wait(1).to({x:298.9,alpha:0.455},0).wait(1).to({x:304.7,alpha:0.545},0).wait(1).to({x:310.4,alpha:0.636},0).wait(1).to({x:316.2,alpha:0.727},0).wait(1).to({x:322,alpha:0.818},0).wait(1).to({x:327.7,alpha:0.909},0).wait(1).to({x:333.5,alpha:1},0).wait(152));

		// Code-line1
		this.instance_11 = new lib.Codeline1();
		this.instance_11.setTransform(284.2,144.5,0.454,0.454,0,0,0,68.7,2.8);
		this.instance_11.alpha = 0;

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:68.8,regY:2.9,x:289.4,alpha:0.1},0).wait(1).to({x:294.5,alpha:0.2},0).wait(1).to({x:299.7,alpha:0.3},0).wait(1).to({x:304.8,alpha:0.4},0).wait(1).to({x:309.9,alpha:0.5},0).wait(1).to({x:315.1,alpha:0.6},0).wait(1).to({x:320.2,alpha:0.7},0).wait(1).to({x:325.4,alpha:0.8},0).wait(1).to({x:330.5,alpha:0.9},0).wait(1).to({x:335.6,alpha:1},0).wait(162));

		// Cog
		this.instance_12 = new lib.GearAnim("synched",0);
		this.instance_12.setTransform(336.1,78.4,0.486,0.486,0,0,0,60.7,61.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regY:60.8,rotation:1,y:78.2},0).wait(1).to({rotation:2,y:78.3},0).wait(1).to({rotation:3,y:78.2},0).wait(1).to({rotation:4},0).wait(1).to({rotation:5,y:78.3},0).wait(1).to({rotation:6},0).wait(1).to({rotation:7.1},0).wait(1).to({rotation:8.1},0).wait(1).to({rotation:9.1},0).wait(1).to({rotation:10.1,y:78.2},0).wait(1).to({rotation:11.1},0).wait(1).to({rotation:12.1,y:78.3},0).wait(1).to({rotation:13.1},0).wait(1).to({rotation:14.1},0).wait(1).to({rotation:15.1},0).wait(1).to({rotation:16.1},0).wait(1).to({rotation:17.1},0).wait(1).to({rotation:18.1},0).wait(1).to({rotation:19.2},0).wait(1).to({rotation:20.2,y:78.2},0).wait(1).to({rotation:21.2},0).wait(1).to({rotation:22.2,y:78.3},0).wait(1).to({rotation:23.2,y:78.2},0).wait(1).to({rotation:24.2,y:78.3},0).wait(1).to({rotation:25.2},0).wait(1).to({rotation:26.2},0).wait(1).to({rotation:27.2,x:336.2},0).wait(1).to({rotation:28.2,x:336.1},0).wait(1).to({rotation:29.2},0).wait(1).to({rotation:30.2},0).wait(1).to({rotation:31.3},0).wait(1).to({rotation:32.3},0).wait(1).to({rotation:33.3},0).wait(1).to({rotation:34.3,x:336.2,y:78.2},0).wait(1).to({rotation:35.3,y:78.3},0).wait(1).to({rotation:36.3,y:78.2},0).wait(1).to({rotation:37.3,x:336.1,y:78.3},0).wait(1).to({rotation:38.3,x:336.2},0).wait(1).to({rotation:39.3,x:336.1},0).wait(1).to({rotation:40.3},0).wait(1).to({rotation:41.3,x:336.2},0).wait(1).to({rotation:42.3},0).wait(1).to({rotation:43.4,x:336.1},0).wait(1).to({rotation:44.4,x:336.2},0).wait(1).to({rotation:45.4,x:336.1},0).wait(1).to({rotation:46.4},0).wait(1).to({rotation:47.4},0).wait(1).to({rotation:48.4,x:336.2},0).wait(1).to({rotation:49.4},0).wait(1).to({rotation:50.4},0).wait(1).to({rotation:51.4},0).wait(1).to({rotation:52.4},0).wait(1).to({rotation:53.4,x:336.1},0).wait(1).to({rotation:54.4,x:336.2},0).wait(1).to({rotation:55.5},0).wait(1).to({rotation:56.5},0).wait(1).to({rotation:57.5,y:78.4},0).wait(1).to({rotation:58.5,x:336.1,y:78.3},0).wait(1).to({rotation:59.5,x:336.2},0).wait(1).to({rotation:60.5},0).wait(1).to({rotation:61.5},0).wait(1).to({rotation:62.5},0).wait(1).to({rotation:63.5},0).wait(1).to({rotation:64.5},0).wait(1).to({rotation:65.5},0).wait(1).to({rotation:66.5},0).wait(1).to({rotation:67.6},0).wait(1).to({rotation:68.6},0).wait(1).to({rotation:69.6},0).wait(1).to({rotation:70.6},0).wait(1).to({rotation:71.6,y:78.4},0).wait(1).to({rotation:72.6},0).wait(1).to({rotation:73.6},0).wait(1).to({rotation:74.6},0).wait(1).to({rotation:75.6},0).wait(1).to({rotation:76.6},0).wait(1).to({rotation:77.6},0).wait(1).to({rotation:78.6},0).wait(1).to({rotation:79.7,y:78.3},0).wait(1).to({rotation:80.7,y:78.4},0).wait(1).to({rotation:81.7},0).wait(1).to({rotation:82.7},0).wait(1).to({rotation:83.7},0).wait(1).to({rotation:84.7},0).wait(1).to({rotation:85.7},0).wait(1).to({rotation:86.7},0).wait(1).to({rotation:87.7},0).wait(1).to({rotation:88.7},0).wait(1).to({rotation:89.7},0).wait(1).to({rotation:90.7},0).wait(1).to({rotation:91.8},0).wait(1).to({rotation:92.8},0).wait(1).to({rotation:93.8},0).wait(1).to({rotation:94.8},0).wait(1).to({rotation:95.8},0).wait(1).to({rotation:96.8},0).wait(1).to({rotation:97.8,y:78.5},0).wait(1).to({rotation:98.8,y:78.4},0).wait(1).to({rotation:99.8},0).wait(1).to({rotation:100.8},0).wait(1).to({rotation:101.8,y:78.5},0).wait(1).to({rotation:102.8,y:78.4},0).wait(1).to({rotation:103.9},0).wait(1).to({rotation:104.9},0).wait(1).to({rotation:105.9},0).wait(1).to({rotation:106.9},0).wait(1).to({rotation:107.9},0).wait(1).to({rotation:108.9,y:78.5},0).wait(1).to({rotation:109.9},0).wait(1).to({rotation:110.9,y:78.4},0).wait(1).to({rotation:111.9},0).wait(1).to({rotation:112.9},0).wait(1).to({rotation:113.9},0).wait(1).to({rotation:114.9,y:78.5},0).wait(1).to({rotation:116},0).wait(1).to({rotation:117,x:336.1},0).wait(1).to({rotation:118,x:336.2},0).wait(1).to({rotation:119},0).wait(1).to({rotation:120},0).wait(1).to({rotation:121},0).wait(1).to({rotation:122},0).wait(1).to({rotation:123},0).wait(1).to({rotation:124},0).wait(1).to({rotation:125},0).wait(1).to({rotation:126},0).wait(1).to({rotation:127},0).wait(1).to({rotation:128.1},0).wait(1).to({rotation:129.1},0).wait(1).to({rotation:130.1},0).wait(1).to({rotation:131.1,x:336.1},0).wait(1).to({rotation:132.1,x:336.2},0).wait(1).to({rotation:133.1,x:336.1},0).wait(1).to({rotation:134.1,x:336.2},0).wait(1).to({rotation:135.1},0).wait(1).to({rotation:136.1},0).wait(1).to({rotation:137.1},0).wait(1).to({rotation:138.1},0).wait(1).to({rotation:139.1,x:336.1},0).wait(1).to({rotation:140.2},0).wait(1).to({rotation:141.2},0).wait(1).to({rotation:142.2,x:336.2},0).wait(1).to({rotation:143.2},0).wait(1).to({rotation:144.2},0).wait(1).to({rotation:145.2},0).wait(1).to({rotation:146.2,x:336.1},0).wait(1).to({rotation:147.2},0).wait(1).to({rotation:148.2,y:78.6},0).wait(1).to({rotation:149.2,y:78.5},0).wait(1).to({rotation:150.2,x:336.2},0).wait(1).to({rotation:151.2},0).wait(1).to({rotation:152.3,x:336.1},0).wait(1).to({rotation:153.3},0).wait(1).to({rotation:154.3},0).wait(1).to({rotation:155.3},0).wait(1).to({rotation:156.3},0).wait(1).to({rotation:157.3,y:78.6},0).wait(1).to({rotation:158.3,y:78.5},0).wait(1).to({rotation:159.3},0).wait(1).to({rotation:160.3},0).wait(1).to({rotation:161.3},0).wait(1).to({rotation:162.3},0).wait(1).to({rotation:163.3},0).wait(1).to({rotation:164.4},0).wait(1).to({rotation:165.4},0).wait(1).to({rotation:166.4,y:78.6},0).wait(1).to({rotation:167.4,y:78.5},0).wait(1).to({rotation:168.4},0).wait(1).to({rotation:169.4,y:78.6},0).wait(1).to({rotation:170.4,x:336,y:78.5},0).wait(1).to({rotation:171.4,x:336.1,y:78.6},0).wait(1).to({rotation:172.4,y:78.5},0).wait(1));

		// Layer 9
		this.instance_13 = new lib.avatarvector();
		this.instance_13.setTransform(-1.5,0.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(172));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(193.5,225,390,443);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;