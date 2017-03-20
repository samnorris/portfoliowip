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
	p.nominalBounds = new cjs.Rectangle(0,0,859,933);


	(lib.GearAnim = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#282828").p("AguBnIhChcIAvhmIBwgLIBCBcIgvBmg");
		this.shape.setTransform(60.7,60.7,0.999,0.999,-6);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#0F0F0F").s().p("AhwALIAvhmIBwgLIBCBcIgvBmIhwALg");
		this.shape_1.setTransform(60.7,60.7,0.999,0.999,-6);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f().s("#282828").p("AHwicQgihrhJhRIA5hHIiWh1Ig5BHQhfgyhwgIIgLhZIi7AXIALBZQgYAIgeAMQhKAhg8A1IhHg4Ih1CWIBHA4QgzBhgHBvIhZALIAXC7IBZgLQAgBqBKBSIg3BHICVB1IA4hHQBgAzBwAHIALBaIC7gXIgLhZQAbgIAagMQBKghA8g1IBHA4IB2iWIhHg4QAyhhAHhvIBagLIgXi7gAEMggQALBYgtBPQgsBNhSAjQgkARgpAEQhtAOhZhFQhYhFgOhwQgLhYAuhOQAshNBRgkQAkgQApgFQBugOBZBFQBYBGANBvg");
		this.shape_2.setTransform(60.7,60.8,0.999,0.999,-6);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#0F0F0F").s().p("AgfIGQhwgHhggyIg4BHIiVh1IA3hHQhJhTghhpIhZAKIgXi7IBZgKQAHhwAzhgIhHg4IB1iWIBHA3QA9g1BJggQAegNAYgIIgLhZIC7gWIALBZQBwAHBgAyIA4hHICWB1Ig5BHQBJBRAiBrIBZgKIAXC7IhZALQgIBvgyBhIBHA5Ih1CVIhIg4Qg8A1hKAiQgaALgbAJIALBZIi7AWgAggkLQgpAEgjARQhRAjgtBOQgtBOALBXQANBwBYBFQBZBFBtgOQApgEAkgRQBSgjAthNQAthOgLhYQgNhwhZhFQhKg6hZAAQgRAAgTADg");
		this.shape_3.setTransform(60.7,60.8,0.999,0.999,-6);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f().s("#282828").ss(15).p("AgdkyQB+gMBjBRQBjBRAMCAQANB9hSBjQhRBjiAAMQh9ANhjhSQhjhRgMiAQgNh9BShjQBShjB+gMg");
		this.shape_4.setTransform(60.8,60.7,0.999,0.999,-6);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-22.9,-8.1,145.4,130.6);


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
		this.instance.setTransform(293.8,254.8,0.466,0.466,0,0,0,88.7,2.9);
		this.instance.alpha = 0;
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(97).to({_off:false},0).wait(1).to({regX:88.8,x:299,alpha:0.1},0).wait(1).to({x:304.2,alpha:0.2},0).wait(1).to({x:309.4,alpha:0.3},0).wait(1).to({x:314.6,alpha:0.4},0).wait(1).to({x:319.7,alpha:0.5},0).wait(1).to({x:324.9,alpha:0.6},0).wait(1).to({x:330.1,alpha:0.7},0).wait(1).to({x:335.3,alpha:0.8},0).wait(1).to({x:340.5,alpha:0.9},0).wait(1).to({x:345.6,alpha:1},0).wait(65));

		// Code12
		this.instance_1 = new lib.Codeline11();
		this.instance_1.setTransform(277.1,246.5,0.466,0.466,0,0,0,73,2.9);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},0).wait(1).to({regX:73.1,x:283.8,y:246.4,alpha:0.1},0).wait(1).to({x:290.5,alpha:0.2},0).wait(1).to({x:297.2,alpha:0.3},0).wait(1).to({x:304,alpha:0.4},0).wait(1).to({x:310.7,alpha:0.5},0).wait(1).to({x:317.4,alpha:0.6},0).wait(1).to({x:324.1,alpha:0.7},0).wait(1).to({x:330.8,alpha:0.8},0).wait(1).to({x:337.5,alpha:0.9},0).wait(1).to({x:344.2,alpha:1},0).wait(74));

		// Code11
		this.instance_2 = new lib.Codeline10();
		this.instance_2.setTransform(278.5,238.6,0.466,0.466,0,0,0,77.4,2.9);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).wait(1).to({x:285.7,y:238.5,alpha:0.1},0).wait(1).to({x:292.9,alpha:0.2},0).wait(1).to({x:300,alpha:0.3},0).wait(1).to({x:307.2,alpha:0.4},0).wait(1).to({x:314.4,alpha:0.5},0).wait(1).to({x:321.6,alpha:0.6},0).wait(1).to({x:328.8,alpha:0.7},0).wait(1).to({x:335.9,alpha:0.8},0).wait(1).to({x:343.1,alpha:0.9},0).wait(1).to({x:350.3,alpha:1},0).wait(83));

		// Code10
		this.instance_3 = new lib.Codeline9();
		this.instance_3.setTransform(274.8,230.2,0.466,0.466,0,0,0,68.8,2.7);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({_off:false},0).wait(1).to({regY:2.8,x:280.6,alpha:0.1},0).wait(1).to({x:286.5,alpha:0.2},0).wait(1).to({x:292.3,alpha:0.3},0).wait(1).to({x:298.2,alpha:0.4},0).wait(1).to({x:304,alpha:0.5},0).wait(1).to({x:309.9,alpha:0.6},0).wait(1).to({x:315.7,alpha:0.7},0).wait(1).to({x:321.6,alpha:0.8},0).wait(1).to({x:327.4,alpha:0.9},0).wait(1).to({x:333.3,alpha:1},0).wait(92));

		// Code9
		this.instance_4 = new lib.Codeline8();
		this.instance_4.setTransform(282.6,216.7,0.466,0.466,0,0,0,89.3,2.8);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(61).to({_off:false},0).wait(1).to({regY:2.9,x:288.6,alpha:0.1},0).wait(1).to({x:294.7,alpha:0.2},0).wait(1).to({x:300.7,alpha:0.3},0).wait(1).to({x:306.8,alpha:0.4},0).wait(1).to({x:312.8,alpha:0.5},0).wait(1).to({x:318.8,alpha:0.6},0).wait(1).to({x:324.9,alpha:0.7},0).wait(1).to({x:330.9,alpha:0.8},0).wait(1).to({x:337,alpha:0.9},0).wait(1).to({x:343,alpha:1},0).wait(101));

		// Code8
		this.instance_5 = new lib.Codeline7();
		this.instance_5.setTransform(271.3,207.9,0.466,0.466,0,0,0,84.3,2.7);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(53).to({_off:false},0).wait(1).to({regY:2.9,x:279.2,alpha:0.111},0).wait(1).to({x:287.2,alpha:0.222},0).wait(1).to({x:295.2,alpha:0.333},0).wait(1).to({x:303.2,alpha:0.444},0).wait(1).to({x:311.1,alpha:0.556},0).wait(1).to({x:319.1,alpha:0.667},0).wait(1).to({x:327.1,alpha:0.778},0).wait(1).to({x:335.1,alpha:0.889},0).wait(1).to({x:343,alpha:1},0).wait(110));

		// Code7
		this.instance_6 = new lib.Codeline6();
		this.instance_6.setTransform(274.6,197.7,0.466,0.466,0,0,0,80.6,2.4);
		this.instance_6.alpha = 0;
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45).to({_off:false},0).wait(1).to({regX:80.5,x:282,y:197.6,alpha:0.111},0).wait(1).to({x:289.4,alpha:0.222},0).wait(1).to({x:296.9,alpha:0.333},0).wait(1).to({x:304.3,alpha:0.444},0).wait(1).to({x:311.8,alpha:0.556},0).wait(1).to({x:319.3,alpha:0.667},0).wait(1).to({x:326.7,alpha:0.778},0).wait(1).to({x:334.2,alpha:0.889},0).wait(1).to({x:341.6,alpha:1},0).wait(118));

		// Code6
		this.instance_7 = new lib.Codeline5();
		this.instance_7.setTransform(275.9,188.3,0.466,0.466,0,0,0,88.7,2.7);
		this.instance_7.alpha = 0;
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(37).to({_off:false},0).wait(1).to({regX:88.6,regY:2.9,x:283.5,alpha:0.111},0).wait(1).to({x:291.2,alpha:0.222},0).wait(1).to({x:298.9,alpha:0.333},0).wait(1).to({x:306.5,alpha:0.444},0).wait(1).to({x:314.2,alpha:0.556},0).wait(1).to({x:321.9,alpha:0.667},0).wait(1).to({x:329.6,alpha:0.778},0).wait(1).to({x:337.2,alpha:0.889},0).wait(1).to({x:344.9,alpha:1},0).wait(126));

		// Code5
		this.instance_8 = new lib.Codeline4();
		this.instance_8.setTransform(276.4,173,0.466,0.466,0,0,0,88.9,2.9);
		this.instance_8.alpha = 0;
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(28).to({_off:false},0).wait(1).to({regX:88.8,regY:2.8,x:283.1,y:172.9,alpha:0.1},0).wait(1).to({x:289.9,alpha:0.2},0).wait(1).to({x:296.7,alpha:0.3},0).wait(1).to({x:303.5,alpha:0.4},0).wait(1).to({x:310.3,alpha:0.5},0).wait(1).to({x:317.2,alpha:0.6},0).wait(1).to({x:324,alpha:0.7},0).wait(1).to({x:330.8,alpha:0.8},0).wait(1).to({x:337.6,alpha:0.9},0).wait(1).to({x:344.4,alpha:1},0).wait(134));

		// Code4
		this.instance_9 = new lib.Codeline3();
		this.instance_9.setTransform(268.6,164.6,0.466,0.466,0,0,0,91.5,2.9);
		this.instance_9.alpha = 0;
		this.instance_9._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},0).wait(1).to({regX:91.6,x:276.1,y:164.5,alpha:0.1},0).wait(1).to({x:283.5,alpha:0.2},0).wait(1).to({x:290.9,alpha:0.3},0).wait(1).to({x:298.4,alpha:0.4},0).wait(1).to({x:305.8,alpha:0.5},0).wait(1).to({x:313.2,alpha:0.6},0).wait(1).to({x:320.7,alpha:0.7},0).wait(1).to({x:328.1,alpha:0.8},0).wait(1).to({x:335.5,alpha:0.9},0).wait(1).to({x:342.9,alpha:1},0).wait(143));

		// Code-line2
		this.instance_10 = new lib.Codeline2();
		this.instance_10.setTransform(277.1,156.2,0.466,0.466,0,0,0,77.4,2.9);
		this.instance_10.alpha = 0;
		this.instance_10._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({_off:false},0).wait(1).to({x:283,alpha:0.091},0).wait(1).to({x:288.9,alpha:0.182},0).wait(1).to({x:294.8,alpha:0.273},0).wait(1).to({x:300.7,alpha:0.364},0).wait(1).to({x:306.6,alpha:0.455},0).wait(1).to({x:312.5,alpha:0.545},0).wait(1).to({x:318.4,alpha:0.636},0).wait(1).to({x:324.3,alpha:0.727},0).wait(1).to({x:330.2,alpha:0.818},0).wait(1).to({x:336.1,alpha:0.909},0).wait(1).to({x:342,alpha:1},0).wait(152));

		// Code-line1
		this.instance_11 = new lib.Codeline1();
		this.instance_11.setTransform(291.5,148.2,0.466,0.466,0,0,0,68.8,2.7);
		this.instance_11.alpha = 0;

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regY:2.9,x:296.9,y:148.3,alpha:0.1},0).wait(1).to({x:302.4,alpha:0.2},0).wait(1).to({x:307.8,alpha:0.3},0).wait(1).to({x:313.2,alpha:0.4},0).wait(1).to({x:318.6,alpha:0.5},0).wait(1).to({x:324.1,alpha:0.6},0).wait(1).to({x:329.5,alpha:0.7},0).wait(1).to({x:334.9,alpha:0.8},0).wait(1).to({x:340.4,alpha:0.9},0).wait(1).to({x:345.8,alpha:1},0).wait(162));

		// Cog
		this.instance_12 = new lib.GearAnim();
		this.instance_12.setTransform(67.9,122.6,0.499,0.499,0,0,0,60.6,61.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:60.7,regY:60.8,rotation:1.7,x:68,y:122.5},0).wait(1).to({rotation:3.4,y:122.4},0).wait(1).to({rotation:5.2,y:122.5},0).wait(1).to({rotation:6.9},0).wait(1).to({rotation:8.6},0).wait(1).to({rotation:10.3},0).wait(1).to({rotation:12.1},0).wait(1).to({rotation:13.8},0).wait(1).to({rotation:15.5},0).wait(1).to({rotation:17.2},0).wait(1).to({rotation:19},0).wait(1).to({rotation:20.7},0).wait(1).to({rotation:22.4},0).wait(1).to({rotation:24.1},0).wait(1).to({rotation:25.9,x:68.1},0).wait(1).to({rotation:27.6,x:68},0).wait(1).to({rotation:29.3},0).wait(1).to({rotation:31},0).wait(1).to({rotation:32.8},0).wait(1).to({rotation:34.5},0).wait(1).to({rotation:36.2},0).wait(1).to({rotation:37.9},0).wait(1).to({rotation:39.7},0).wait(1).to({rotation:41.4},0).wait(1).to({rotation:43.1,x:68.1,y:122.6},0).wait(1).to({rotation:44.8,y:122.5},0).wait(1).to({rotation:46.6,x:68},0).wait(1).to({rotation:48.3,y:122.6},0).wait(1).to({rotation:50,x:68.1},0).wait(1).to({rotation:51.7,y:122.5},0).wait(1).to({rotation:53.4,x:68},0).wait(1).to({rotation:55.2,x:68.1},0).wait(1).to({rotation:56.9},0).wait(1).to({rotation:58.6,x:68,y:122.6},0).wait(1).to({rotation:60.3,y:122.5},0).wait(1).to({rotation:62.1,x:68.1,y:122.6},0).wait(1).to({rotation:63.8,x:68},0).wait(1).to({rotation:65.5,x:68.1},0).wait(1).to({rotation:67.2},0).wait(1).to({rotation:69,x:68},0).wait(1).to({rotation:70.7,x:68.1},0).wait(1).to({rotation:72.4},0).wait(1).to({rotation:74.1},0).wait(1).to({rotation:75.9},0).wait(1).to({rotation:77.6},0).wait(1).to({rotation:79.3,x:68},0).wait(1).to({rotation:81},0).wait(1).to({rotation:82.8,x:68.1},0).wait(1).to({rotation:84.5,x:68},0).wait(1).to({rotation:86.2,x:68.1},0).wait(1).to({rotation:87.9},0).wait(1).to({rotation:89.7},0).wait(1).to({rotation:91.4},0).wait(1).to({rotation:93.1},0).wait(1).to({rotation:94.8},0).wait(1).to({rotation:96.6},0).wait(1).to({rotation:98.3},0).wait(1).to({rotation:100},0).wait(1).to({rotation:101.7,x:68,y:122.7},0).wait(1).to({rotation:103.4},0).wait(1).to({rotation:105.2,x:68.1,y:122.6},0).wait(1).to({rotation:106.9,y:122.7},0).wait(1).to({rotation:108.6,x:68},0).wait(1).to({rotation:110.3,x:68.1},0).wait(1).to({rotation:112.1},0).wait(1).to({rotation:113.8,x:68},0).wait(1).to({rotation:115.5},0).wait(1).to({rotation:117.2,y:122.6},0).wait(1).to({rotation:119,x:68.1,y:122.7},0).wait(1).to({rotation:120.7},0).wait(1).to({rotation:122.4},0).wait(1).to({rotation:124.1,x:68},0).wait(1).to({rotation:125.9},0).wait(1).to({rotation:127.6,x:68.1},0).wait(1).to({rotation:129.3},0).wait(1).to({rotation:131},0).wait(1).to({rotation:132.8,x:68},0).wait(1).to({rotation:134.5},0).wait(1).to({rotation:136.2},0).wait(1).to({rotation:137.9},0).wait(1).to({rotation:139.7},0).wait(1).to({rotation:141.4},0).wait(1).to({rotation:143.1},0).wait(1).to({rotation:144.8},0).wait(1).to({rotation:146.6},0).wait(1).to({rotation:148.3},0).wait(1).to({rotation:150},0).wait(1).to({regX:60.9,regY:61,scaleX:0.5,scaleY:0.5,rotation:14.8,y:122.6},0).wait(1).to({regX:60.7,regY:60.8,scaleX:0.5,scaleY:0.5,rotation:16.6,x:67.9,y:122.5},0).wait(1).to({rotation:18.3},0).wait(1).to({rotation:19.9},0).wait(1).to({rotation:21.5},0).wait(1).to({rotation:23.1},0).wait(1).to({rotation:24.8},0).wait(1).to({rotation:26.4,y:122.4},0).wait(1).to({rotation:28},0).wait(1).to({rotation:29.6},0).wait(1).to({rotation:31.3},0).wait(1).to({rotation:32.9,y:122.5},0).wait(1).to({rotation:34.5},0).wait(1).to({rotation:36.1},0).wait(1).to({rotation:37.8,y:122.4},0).wait(1).to({rotation:39.4,y:122.5},0).wait(1).to({rotation:41,x:68,y:122.4},0).wait(1).to({rotation:42.6,x:67.9},0).wait(1).to({rotation:44.3,y:122.5},0).wait(1).to({rotation:45.9,x:68},0).wait(1).to({rotation:47.5},0).wait(1).to({rotation:49.2},0).wait(1).to({rotation:50.8,y:122.4},0).wait(1).to({rotation:52.4,y:122.5},0).wait(1).to({rotation:54,x:67.9},0).wait(1).to({rotation:55.7},0).wait(1).to({rotation:57.3,x:68},0).wait(1).to({rotation:58.9,y:122.4},0).wait(1).to({rotation:60.5},0).wait(1).to({rotation:62.2},0).wait(1).to({rotation:63.8,y:122.5},0).wait(1).to({rotation:65.4,y:122.4},0).wait(1).to({rotation:67},0).wait(1).to({rotation:68.7,y:122.5},0).wait(1).to({rotation:70.3},0).wait(1).to({rotation:71.9,x:68.1,y:122.4},0).wait(1).to({rotation:73.6,x:68,y:122.5},0).wait(1).to({rotation:75.2},0).wait(1).to({rotation:76.8,y:122.4},0).wait(1).to({rotation:78.4,y:122.5},0).wait(1).to({rotation:80.1},0).wait(1).to({rotation:81.7,x:68.1},0).wait(1).to({rotation:83.3,x:68},0).wait(1).to({rotation:84.9},0).wait(1).to({rotation:86.6},0).wait(1).to({rotation:88.2,x:68.1},0).wait(1).to({rotation:89.8},0).wait(1).to({rotation:91.4},0).wait(1).to({rotation:93.1},0).wait(1).to({rotation:94.7},0).wait(1).to({rotation:96.3,x:68},0).wait(1).to({rotation:98,x:68.1},0).wait(1).to({rotation:99.6},0).wait(1).to({rotation:101.2,x:68},0).wait(1).to({rotation:102.8,x:68.1},0).wait(1).to({rotation:104.5},0).wait(1).to({rotation:106.1,x:68},0).wait(1).to({rotation:107.7,x:68.1,y:122.6},0).wait(1).to({rotation:109.3,y:122.5},0).wait(1).to({rotation:111},0).wait(1).to({rotation:112.6},0).wait(1).to({rotation:114.2},0).wait(1).to({rotation:115.8,y:122.6},0).wait(1).to({rotation:117.5,y:122.5},0).wait(1).to({rotation:119.1},0).wait(1).to({rotation:120.7},0).wait(1).to({rotation:122.3,y:122.6},0).wait(1).to({rotation:124},0).wait(1).to({rotation:125.6},0).wait(1).to({rotation:127.2},0).wait(1).to({rotation:128.9},0).wait(1).to({rotation:130.5,y:122.5},0).wait(1).to({rotation:132.1,y:122.6},0).wait(1).to({rotation:133.7},0).wait(1).to({rotation:135.4},0).wait(1).to({rotation:137},0).wait(1).to({rotation:138.6},0).wait(1).to({rotation:140.2},0).wait(1).to({rotation:141.9},0).wait(1).to({rotation:143.5},0).wait(1).to({rotation:145.1},0).wait(1).to({rotation:146.7},0).wait(1).to({rotation:148.4},0).wait(1).to({rotation:150,y:122.7},0).wait(1));

		// Layer 1
		this.instance_13 = new lib.avatarvector();
		this.instance_13.setTransform(0,0,0.466,0.463);

		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(172));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(200,216,400,432);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;