(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes
	lib.webFontTxtFilters = {};

// library properties:
	lib.properties = {
		width: 450,
		height: 486,
		fps: 45,
		color: "#FFFFFF",
		webfonts: {},
		manifest: [
			{src:"themes/portfolio/img/avatarvector.png", id:"avatarvector"}
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
	(lib.AnimatedAvatar5 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Code13
		this.instance = new lib.Codeline12();
		this.instance.setTransform(263.1,286.7,0.524,0.524,0,0,0,88.8,2.9);
		this.instance.alpha = 0;
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(155).to({_off:false},0).wait(1).to({x:271,y:286.6,alpha:0.063},0).wait(1).to({x:278.8,alpha:0.125},0).wait(1).to({x:286.7,alpha:0.188},0).wait(1).to({x:294.5,alpha:0.25},0).wait(1).to({x:302.4,alpha:0.313},0).wait(1).to({x:310.3,alpha:0.375},0).wait(1).to({x:318.1,alpha:0.438},0).wait(1).to({x:326,alpha:0.5},0).wait(1).to({x:333.8,alpha:0.563},0).wait(1).to({x:341.7,alpha:0.625},0).wait(1).to({x:349.6,alpha:0.688},0).wait(1).to({x:357.4,alpha:0.75},0).wait(1).to({x:365.3,alpha:0.813},0).wait(1).to({x:373.1,alpha:0.875},0).wait(1).to({x:381,alpha:0.938},0).wait(1).to({x:388.8,alpha:1},0).wait(1));

		// Code12
		this.instance_1 = new lib.Codeline11();
		this.instance_1.setTransform(266.7,277.3,0.524,0.524,0,0,0,73,2.9);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(141).to({_off:false},0).wait(1).to({regX:73.1,x:274.3,y:277.2,alpha:0.063},0).wait(1).to({x:281.8,alpha:0.125},0).wait(1).to({x:289.4,alpha:0.188},0).wait(1).to({x:296.9,alpha:0.25},0).wait(1).to({x:304.4,alpha:0.313},0).wait(1).to({x:312,alpha:0.375},0).wait(1).to({x:319.5,alpha:0.438},0).wait(1).to({x:327,alpha:0.5},0).wait(1).to({x:334.6,alpha:0.563},0).wait(1).to({x:342.1,alpha:0.625},0).wait(1).to({x:349.6,alpha:0.688},0).wait(1).to({x:357.2,alpha:0.75},0).wait(1).to({x:364.7,alpha:0.813},0).wait(1).to({x:372.2,alpha:0.875},0).wait(1).to({x:379.8,alpha:0.938},0).wait(1).to({x:387.3,alpha:1},0).wait(15));

		// Code11
		this.instance_2 = new lib.Codeline10();
		this.instance_2.setTransform(268.3,268.4,0.524,0.524,0,0,0,77.4,2.9);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(128).to({_off:false},0).wait(1).to({x:277.3,y:268.3,alpha:0.071},0).wait(1).to({x:286.3,alpha:0.143},0).wait(1).to({x:295.3,alpha:0.214},0).wait(1).to({x:304.2,alpha:0.286},0).wait(1).to({x:313.2,alpha:0.357},0).wait(1).to({x:322.2,alpha:0.429},0).wait(1).to({x:331.2,alpha:0.5},0).wait(1).to({x:340.2,alpha:0.571},0).wait(1).to({x:349.2,alpha:0.643},0).wait(1).to({x:358.2,alpha:0.714},0).wait(1).to({x:367.1,alpha:0.786},0).wait(1).to({x:376.1,alpha:0.857},0).wait(1).to({x:385.1,alpha:0.929},0).wait(1).to({x:394.1,alpha:1},0).wait(30));

		// Code10
		this.instance_3 = new lib.Codeline9();
		this.instance_3.setTransform(275.4,259,0.524,0.524,0,0,0,68.8,2.8);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(113).to({_off:false},0).wait(1).to({x:281.6,alpha:0.063},0).wait(1).to({x:287.8,alpha:0.125},0).wait(1).to({x:294,alpha:0.188},0).wait(1).to({x:300.2,alpha:0.25},0).wait(1).to({x:306.5,alpha:0.313},0).wait(1).to({x:312.7,alpha:0.375},0).wait(1).to({x:318.9,alpha:0.438},0).wait(1).to({x:325.1,alpha:0.5},0).wait(1).to({x:331.4,alpha:0.563},0).wait(1).to({x:337.6,alpha:0.625},0).wait(1).to({x:343.8,alpha:0.688},0).wait(1).to({x:350,alpha:0.75},0).wait(1).to({x:356.3,alpha:0.813},0).wait(1).to({x:362.5,alpha:0.875},0).wait(1).to({x:368.7,alpha:0.938},0).wait(1).to({x:374.9,alpha:1},0).wait(43));

		// Code9
		this.instance_4 = new lib.Codeline8();
		this.instance_4.setTransform(261.7,243.8,0.524,0.524,0,0,0,89.3,2.9);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(98).to({_off:false},0).wait(1).to({x:269.5,alpha:0.063},0).wait(1).to({x:277.2,alpha:0.125},0).wait(1).to({x:285,alpha:0.188},0).wait(1).to({x:292.7,alpha:0.25},0).wait(1).to({x:300.5,alpha:0.313},0).wait(1).to({x:308.3,alpha:0.375},0).wait(1).to({x:316,alpha:0.438},0).wait(1).to({x:323.8,alpha:0.5},0).wait(1).to({x:331.6,alpha:0.563},0).wait(1).to({x:339.3,alpha:0.625},0).wait(1).to({x:347.1,alpha:0.688},0).wait(1).to({x:354.8,alpha:0.75},0).wait(1).to({x:362.6,alpha:0.813},0).wait(1).to({x:370.4,alpha:0.875},0).wait(1).to({x:378.1,alpha:0.938},0).wait(1).to({x:385.9,alpha:1},0).wait(58));

		// Code8
		this.instance_5 = new lib.Codeline7();
		this.instance_5.setTransform(260.2,233.9,0.524,0.524,0,0,0,84.3,2.8);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(84).to({_off:false},0).wait(1).to({regY:2.9,x:268.1,alpha:0.063},0).wait(1).to({x:275.9,alpha:0.125},0).wait(1).to({x:283.8,alpha:0.188},0).wait(1).to({x:291.6,alpha:0.25},0).wait(1).to({x:299.5,alpha:0.313},0).wait(1).to({x:307.4,alpha:0.375},0).wait(1).to({x:315.2,alpha:0.438},0).wait(1).to({x:323.1,alpha:0.5},0).wait(1).to({x:330.9,alpha:0.563},0).wait(1).to({x:338.8,alpha:0.625},0).wait(1).to({x:346.7,alpha:0.688},0).wait(1).to({x:354.5,alpha:0.75},0).wait(1).to({x:362.4,alpha:0.813},0).wait(1).to({x:370.2,alpha:0.875},0).wait(1).to({x:378.1,alpha:0.938},0).wait(1).to({x:385.9,alpha:1},0).wait(72));

		// Code7
		this.instance_6 = new lib.Codeline6();
		this.instance_6.setTransform(263.9,222.4,0.524,0.524,0,0,0,80.6,2.4);
		this.instance_6.alpha = 0;
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(69).to({_off:false},0).wait(1).to({regX:80.5,x:271.3,y:222.3,alpha:0.063},0).wait(1).to({x:278.9,alpha:0.125},0).wait(1).to({x:286.4,alpha:0.188},0).wait(1).to({x:293.9,alpha:0.25},0).wait(1).to({x:301.5,alpha:0.313},0).wait(1).to({x:309,alpha:0.375},0).wait(1).to({x:316.5,alpha:0.438},0).wait(1).to({x:324.1,alpha:0.5},0).wait(1).to({x:331.6,alpha:0.563},0).wait(1).to({x:339.1,alpha:0.625},0).wait(1).to({x:346.7,alpha:0.688},0).wait(1).to({x:354.2,alpha:0.75},0).wait(1).to({x:361.7,alpha:0.813},0).wait(1).to({x:369.3,alpha:0.875},0).wait(1).to({x:376.8,alpha:0.938},0).wait(1).to({x:384.3,alpha:1},0).wait(87));

		// Code6
		this.instance_7 = new lib.Codeline5();
		this.instance_7.setTransform(265.5,211.8,0.524,0.524,0,0,0,88.7,2.8);
		this.instance_7.alpha = 0;
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(54).to({_off:false},0).wait(1).to({regX:88.6,regY:2.9,x:273.1,alpha:0.063},0).wait(1).to({x:280.7,alpha:0.125},0).wait(1).to({x:288.4,alpha:0.188},0).wait(1).to({x:296.1,alpha:0.25},0).wait(1).to({x:303.7,alpha:0.313},0).wait(1).to({x:311.4,alpha:0.375},0).wait(1).to({x:319.1,alpha:0.438},0).wait(1).to({x:326.7,alpha:0.5},0).wait(1).to({x:334.4,alpha:0.563},0).wait(1).to({x:342.1,alpha:0.625},0).wait(1).to({x:349.8,alpha:0.688},0).wait(1).to({x:357.4,alpha:0.75},0).wait(1).to({x:365.1,alpha:0.813},0).wait(1).to({x:372.8,alpha:0.875},0).wait(1).to({x:380.4,alpha:0.938},0).wait(1).to({x:388.1,alpha:1},0).wait(102));

		// Code5
		this.instance_8 = new lib.Codeline4();
		this.instance_8.setTransform(267.1,194.6,0.524,0.524,0,0,0,88.9,2.9);
		this.instance_8.alpha = 0;
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40).to({_off:false},0).wait(1).to({regX:88.8,regY:2.8,x:275,y:194.5,alpha:0.067},0).wait(1).to({x:283.1,alpha:0.133},0).wait(1).to({x:291.1,alpha:0.2},0).wait(1).to({x:299.1,alpha:0.267},0).wait(1).to({x:307.2,alpha:0.333},0).wait(1).to({x:315.2,alpha:0.4},0).wait(1).to({x:323.2,alpha:0.467},0).wait(1).to({x:331.3,alpha:0.533},0).wait(1).to({x:339.3,alpha:0.6},0).wait(1).to({x:347.3,alpha:0.667},0).wait(1).to({x:355.4,alpha:0.733},0).wait(1).to({x:363.4,alpha:0.8},0).wait(1).to({x:371.4,alpha:0.867},0).wait(1).to({x:379.5,alpha:0.933},0).wait(1).to({x:387.5,alpha:1},0).wait(117));

		// Code4
		this.instance_9 = new lib.Codeline3();
		this.instance_9.setTransform(268.5,185.1,0.524,0.524,0,0,0,91.6,2.9);
		this.instance_9.alpha = 0;
		this.instance_9._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27).to({_off:false},0).wait(1).to({x:276.9,alpha:0.071},0).wait(1).to({x:285.3,alpha:0.143},0).wait(1).to({x:293.6,alpha:0.214},0).wait(1).to({x:302,alpha:0.286},0).wait(1).to({x:310.4,alpha:0.357},0).wait(1).to({x:318.8,alpha:0.429},0).wait(1).to({x:327.2,alpha:0.5},0).wait(1).to({x:335.6,alpha:0.571},0).wait(1).to({x:343.9,alpha:0.643},0).wait(1).to({x:352.3,alpha:0.714},0).wait(1).to({x:360.7,alpha:0.786},0).wait(1).to({x:369.1,alpha:0.857},0).wait(1).to({x:377.5,alpha:0.929},0).wait(1).to({x:385.8,alpha:1},0).wait(131));

		// Code-line2
		this.instance_10 = new lib.Codeline2();
		this.instance_10.setTransform(278,175.7,0.524,0.524,0,0,0,77.4,2.9);
		this.instance_10.alpha = 0;
		this.instance_10._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(13).to({_off:false},0).wait(1).to({x:285.1,alpha:0.067},0).wait(1).to({x:292.2,alpha:0.133},0).wait(1).to({x:299.3,alpha:0.2},0).wait(1).to({x:306.4,alpha:0.267},0).wait(1).to({x:313.6,alpha:0.333},0).wait(1).to({x:320.7,alpha:0.4},0).wait(1).to({x:327.8,alpha:0.467},0).wait(1).to({x:335,alpha:0.533},0).wait(1).to({x:342.1,alpha:0.6},0).wait(1).to({x:349.2,alpha:0.667},0).wait(1).to({x:356.3,alpha:0.733},0).wait(1).to({x:363.5,alpha:0.8},0).wait(1).to({x:370.6,alpha:0.867},0).wait(1).to({x:377.7,alpha:0.933},0).wait(1).to({x:384.8,alpha:1},0).wait(144));

		// Code-line1
		this.instance_11 = new lib.Codeline1();
		this.instance_11.setTransform(294.2,166.8,0.524,0.524,0,0,0,68.8,2.8);
		this.instance_11.alpha = 0;

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regY:2.9,x:301,alpha:0.071},0).wait(1).to({x:307.7,alpha:0.143},0).wait(1).to({x:314.5,alpha:0.214},0).wait(1).to({x:321.3,alpha:0.286},0).wait(1).to({x:328.1,alpha:0.357},0).wait(1).to({x:334.8,alpha:0.429},0).wait(1).to({x:341.6,alpha:0.5},0).wait(1).to({x:348.4,alpha:0.571},0).wait(1).to({x:355.2,alpha:0.643},0).wait(1).to({x:361.9,alpha:0.714},0).wait(1).to({x:368.7,alpha:0.786},0).wait(1).to({x:375.5,alpha:0.857},0).wait(1).to({x:382.3,alpha:0.929},0).wait(1).to({x:389,alpha:1},0).wait(158));

		// Cog
		this.instance_12 = new lib.GearAnim();
		this.instance_12.setTransform(61.8,159.4,0.523,0.523,160.2,0,0,60.9,60.9);

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:60.7,regY:60.8,scaleX:0.52,scaleY:0.52,rotation:158.5,x:61.9},0).wait(1).to({rotation:157},0).wait(1).to({rotation:155.6,y:159.3},0).wait(1).to({rotation:154.1},0).wait(1).to({rotation:152.6,y:159.4},0).wait(1).to({rotation:151.1,y:159.3},0).wait(1).to({rotation:149.6,y:159.4},0).wait(1).to({rotation:148.1,y:159.3},0).wait(1).to({rotation:146.6},0).wait(1).to({rotation:145.1},0).wait(1).to({rotation:143.6},0).wait(1).to({rotation:142.2},0).wait(1).to({rotation:140.7},0).wait(1).to({rotation:139.2},0).wait(1).to({rotation:137.7},0).wait(1).to({rotation:136.2},0).wait(1).to({rotation:134.7},0).wait(1).to({rotation:133.2},0).wait(1).to({rotation:131.7},0).wait(1).to({rotation:130.2},0).wait(1).to({rotation:128.8},0).wait(1).to({rotation:127.3},0).wait(1).to({rotation:125.8},0).wait(1).to({rotation:124.3},0).wait(1).to({rotation:122.8},0).wait(1).to({rotation:121.3},0).wait(1).to({rotation:119.8,y:159.2},0).wait(1).to({rotation:118.3,y:159.3},0).wait(1).to({rotation:116.8,y:159.2},0).wait(1).to({rotation:115.4},0).wait(1).to({rotation:113.9},0).wait(1).to({rotation:112.4,y:159.3},0).wait(1).to({rotation:110.9,x:61.8},0).wait(1).to({rotation:109.4,x:61.9},0).wait(1).to({rotation:107.9},0).wait(1).to({rotation:106.4,x:61.8},0).wait(1).to({rotation:104.9,x:61.9},0).wait(1).to({rotation:103.4,y:159.2},0).wait(1).to({rotation:102,x:61.8,y:159.3},0).wait(1).to({rotation:100.5,x:61.9,y:159.2},0).wait(1).to({rotation:99,y:159.3},0).wait(1).to({rotation:97.5,y:159.2},0).wait(1).to({rotation:96},0).wait(1).to({rotation:94.5,x:61.8,y:159.3},0).wait(1).to({rotation:93,y:159.2},0).wait(1).to({rotation:91.5,x:61.9},0).wait(1).to({rotation:90,x:61.8},0).wait(1).to({rotation:88.6,x:61.9},0).wait(1).to({rotation:87.1,x:61.8,y:159.3},0).wait(1).to({rotation:85.6,y:159.2},0).wait(1).to({rotation:84.1},0).wait(1).to({rotation:82.6},0).wait(1).to({rotation:81.1},0).wait(1).to({rotation:79.6},0).wait(1).to({rotation:78.1},0).wait(1).to({rotation:76.6},0).wait(1).to({rotation:75.2},0).wait(1).to({rotation:73.7},0).wait(1).to({rotation:72.2},0).wait(1).to({rotation:70.7},0).wait(1).to({rotation:69.2},0).wait(1).to({rotation:67.7},0).wait(1).to({rotation:66.2,y:159.3},0).wait(1).to({rotation:64.7},0).wait(1).to({rotation:63.2},0).wait(1).to({rotation:61.8,y:159.2},0).wait(1).to({rotation:60.3},0).wait(1).to({rotation:58.8,y:159.3},0).wait(1).to({rotation:57.3,x:61.7,y:159.2},0).wait(1).to({rotation:55.8,y:159.3},0).wait(1).to({rotation:54.3,x:61.8,y:159.2},0).wait(1).to({rotation:52.8},0).wait(1).to({rotation:51.3},0).wait(1).to({rotation:49.8,x:61.7},0).wait(1).to({rotation:48.4},0).wait(1).to({rotation:46.9,x:61.8},0).wait(1).to({rotation:45.4,x:61.7},0).wait(1).to({rotation:43.9,x:61.8,y:159.3},0).wait(1).to({rotation:42.4,x:61.7},0).wait(1).to({rotation:40.9,y:159.2},0).wait(1).to({rotation:39.4,x:61.8,y:159.3},0).wait(1).to({rotation:37.9,x:61.7,y:159.2},0).wait(1).to({rotation:36.4,y:159.3},0).wait(1).to({rotation:35,y:159.2},0).wait(1).to({rotation:33.5,y:159.3},0).wait(1).to({rotation:32},0).wait(1).to({rotation:30.5,y:159.2},0).wait(1).to({rotation:29},0).wait(1).to({rotation:27.5,y:159.3},0).wait(1).to({rotation:26},0).wait(1).to({rotation:24.5,y:159.2},0).wait(1).to({rotation:23,y:159.3},0).wait(1).to({rotation:21.6},0).wait(1).to({rotation:20.1},0).wait(1).to({rotation:18.6},0).wait(1).to({rotation:17.1,y:159.2},0).wait(1).to({rotation:15.6,y:159.3},0).wait(1).to({rotation:14.1,y:159.2},0).wait(1).to({rotation:12.6,y:159.3},0).wait(1).to({rotation:11.1},0).wait(1).to({rotation:9.6},0).wait(1).to({rotation:8.2},0).wait(1).to({rotation:6.7},0).wait(1).to({rotation:5.2},0).wait(1).to({rotation:3.7},0).wait(1).to({rotation:2.2},0).wait(1).to({rotation:0.7},0).wait(1).to({rotation:-0.8},0).wait(1).to({rotation:-2.3},0).wait(1).to({rotation:-3.8},0).wait(1).to({rotation:-5.2},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:-8.2},0).wait(1).to({rotation:-9.7,x:61.6},0).wait(1).to({rotation:-11.2,x:61.7},0).wait(1).to({rotation:-12.7},0).wait(1).to({rotation:-14.2},0).wait(1).to({rotation:-15.7},0).wait(1).to({rotation:-17.2},0).wait(1).to({rotation:-18.6,x:61.6},0).wait(1).to({rotation:-20.1,x:61.7},0).wait(1).to({rotation:-21.6},0).wait(1).to({rotation:-23.1,y:159.4},0).wait(1).to({rotation:-24.6,y:159.3},0).wait(1).to({rotation:-26.1,y:159.4},0).wait(1).to({rotation:-27.6,y:159.3},0).wait(1).to({rotation:-29.1},0).wait(1).to({rotation:-30.6},0).wait(1).to({rotation:-32,y:159.4},0).wait(1).to({rotation:-33.5},0).wait(1).to({rotation:-35,x:61.6,y:159.3},0).wait(1).to({rotation:-36.5,x:61.7,y:159.4},0).wait(1).to({rotation:-38},0).wait(1).to({rotation:-39.5},0).wait(1).to({rotation:-41},0).wait(1).to({rotation:-42.5},0).wait(1).to({rotation:-44},0).wait(1).to({rotation:-45.4},0).wait(1).to({rotation:-46.9},0).wait(1).to({rotation:-48.4},0).wait(1).to({rotation:-49.9},0).wait(1).to({rotation:-51.4},0).wait(1).to({rotation:-52.9},0).wait(1).to({rotation:-54.4,x:61.6},0).wait(1).to({rotation:-55.9,x:61.7},0).wait(1).to({rotation:-57.4},0).wait(1).to({rotation:-58.8},0).wait(1).to({rotation:-60.3},0).wait(1).to({rotation:-61.8},0).wait(1).to({rotation:-63.3},0).wait(1).to({rotation:-64.8},0).wait(1).to({rotation:-66.3},0).wait(1).to({rotation:-67.8},0).wait(1).to({rotation:-69.3},0).wait(1).to({rotation:-70.8},0).wait(1).to({rotation:-72.2},0).wait(1).to({rotation:-73.7},0).wait(1).to({rotation:-75.2},0).wait(1).to({rotation:-76.7},0).wait(1).to({rotation:-78.2},0).wait(1).to({rotation:-79.7,y:159.5},0).wait(1).to({rotation:-81.2},0).wait(1).to({rotation:-82.7,y:159.4},0).wait(1).to({rotation:-84.2,y:159.5},0).wait(1).to({rotation:-85.6,y:159.4},0).wait(1).to({rotation:-87.1},0).wait(1).to({rotation:-88.6},0).wait(1).to({rotation:-90.1,x:61.8},0).wait(1).to({rotation:-91.6,x:61.7,y:159.5},0).wait(1).to({rotation:-93.1,x:61.8,y:159.4},0).wait(1).to({rotation:-94.6,x:61.7},0).wait(1));

		// Layer 6
		this.instance_13 = new lib.avatarvector();
		this.instance_13.setTransform(0.3,0.8,0.524,0.521);

		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(172));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(225.3,243.8,450,486);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;