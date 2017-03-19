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
	(lib.AnimatedAvatar = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Code13
		this.instance = new lib.Codeline12();
		this.instance.setTransform(233.8,254.8,0.466,0.466,0,0,0,88.7,2.9);
		this.instance.alpha = 0;
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(155).to({_off:false},0).wait(1).to({regX:88.8,x:240.8,alpha:0.063},0).wait(1).to({x:247.8,alpha:0.125},0).wait(1).to({x:254.8,alpha:0.188},0).wait(1).to({x:261.8,alpha:0.25},0).wait(1).to({x:268.8,alpha:0.313},0).wait(1).to({x:275.8,alpha:0.375},0).wait(1).to({x:282.8,alpha:0.438},0).wait(1).to({x:289.7,alpha:0.5},0).wait(1).to({x:296.7,alpha:0.563},0).wait(1).to({x:303.7,alpha:0.625},0).wait(1).to({x:310.7,alpha:0.688},0).wait(1).to({x:317.7,alpha:0.75},0).wait(1).to({x:324.7,alpha:0.813},0).wait(1).to({x:331.7,alpha:0.875},0).wait(1).to({x:338.7,alpha:0.938},0).wait(1).to({x:345.6,alpha:1},0).wait(1));

		// Code12
		this.instance_1 = new lib.Codeline11();
		this.instance_1.setTransform(237.1,246.5,0.466,0.466,0,0,0,73,2.9);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(141).to({_off:false},0).wait(1).to({regX:73.1,x:243.8,y:246.4,alpha:0.063},0).wait(1).to({x:250.5,alpha:0.125},0).wait(1).to({x:257.2,alpha:0.188},0).wait(1).to({x:263.9,alpha:0.25},0).wait(1).to({x:270.6,alpha:0.313},0).wait(1).to({x:277.3,alpha:0.375},0).wait(1).to({x:284,alpha:0.438},0).wait(1).to({x:290.7,alpha:0.5},0).wait(1).to({x:297.4,alpha:0.563},0).wait(1).to({x:304.1,alpha:0.625},0).wait(1).to({x:310.8,alpha:0.688},0).wait(1).to({x:317.5,alpha:0.75},0).wait(1).to({x:324.2,alpha:0.813},0).wait(1).to({x:330.9,alpha:0.875},0).wait(1).to({x:337.6,alpha:0.938},0).wait(1).to({x:344.2,alpha:1},0).wait(15));

		// Code11
		this.instance_2 = new lib.Codeline10();
		this.instance_2.setTransform(238.5,238.6,0.466,0.466,0,0,0,77.4,2.9);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(128).to({_off:false},0).wait(1).to({x:246.5,y:238.5,alpha:0.071},0).wait(1).to({x:254.5,alpha:0.143},0).wait(1).to({x:262.4,alpha:0.214},0).wait(1).to({x:270.4,alpha:0.286},0).wait(1).to({x:278.4,alpha:0.357},0).wait(1).to({x:286.4,alpha:0.429},0).wait(1).to({x:294.4,alpha:0.5},0).wait(1).to({x:302.4,alpha:0.571},0).wait(1).to({x:310.4,alpha:0.643},0).wait(1).to({x:318.4,alpha:0.714},0).wait(1).to({x:326.3,alpha:0.786},0).wait(1).to({x:334.3,alpha:0.857},0).wait(1).to({x:342.3,alpha:0.929},0).wait(1).to({x:350.3,alpha:1},0).wait(30));

		// Code10
		this.instance_3 = new lib.Codeline9();
		this.instance_3.setTransform(244.8,230.2,0.466,0.466,0,0,0,68.8,2.7);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(113).to({_off:false},0).wait(1).to({regY:2.8,x:250.3,alpha:0.063},0).wait(1).to({x:255.8,alpha:0.125},0).wait(1).to({x:261.4,alpha:0.188},0).wait(1).to({x:266.9,alpha:0.25},0).wait(1).to({x:272.4,alpha:0.313},0).wait(1).to({x:278,alpha:0.375},0).wait(1).to({x:283.5,alpha:0.438},0).wait(1).to({x:289,alpha:0.5},0).wait(1).to({x:294.6,alpha:0.563},0).wait(1).to({x:300.1,alpha:0.625},0).wait(1).to({x:305.6,alpha:0.688},0).wait(1).to({x:311.2,alpha:0.75},0).wait(1).to({x:316.7,alpha:0.813},0).wait(1).to({x:322.2,alpha:0.875},0).wait(1).to({x:327.8,alpha:0.938},0).wait(1).to({x:333.3,alpha:1},0).wait(43));

		// Code9
		this.instance_4 = new lib.Codeline8();
		this.instance_4.setTransform(232.6,216.7,0.466,0.466,0,0,0,89.3,2.8);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(98).to({_off:false},0).wait(1).to({regY:2.9,x:239.5,alpha:0.063},0).wait(1).to({x:246.4,alpha:0.125},0).wait(1).to({x:253.3,alpha:0.188},0).wait(1).to({x:260.2,alpha:0.25},0).wait(1).to({x:267.1,alpha:0.313},0).wait(1).to({x:274,alpha:0.375},0).wait(1).to({x:280.9,alpha:0.438},0).wait(1).to({x:287.8,alpha:0.5},0).wait(1).to({x:294.7,alpha:0.563},0).wait(1).to({x:301.6,alpha:0.625},0).wait(1).to({x:308.5,alpha:0.688},0).wait(1).to({x:315.4,alpha:0.75},0).wait(1).to({x:322.3,alpha:0.813},0).wait(1).to({x:329.2,alpha:0.875},0).wait(1).to({x:336.1,alpha:0.938},0).wait(1).to({x:343,alpha:1},0).wait(58));

		// Code8
		this.instance_5 = new lib.Codeline7();
		this.instance_5.setTransform(231.3,207.9,0.466,0.466,0,0,0,84.3,2.7);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(84).to({_off:false},0).wait(1).to({regY:2.9,x:238.2,alpha:0.063},0).wait(1).to({x:245.2,alpha:0.125},0).wait(1).to({x:252.2,alpha:0.188},0).wait(1).to({x:259.2,alpha:0.25},0).wait(1).to({x:266.2,alpha:0.313},0).wait(1).to({x:273.2,alpha:0.375},0).wait(1).to({x:280.2,alpha:0.438},0).wait(1).to({x:287.1,alpha:0.5},0).wait(1).to({x:294.1,alpha:0.563},0).wait(1).to({x:301.1,alpha:0.625},0).wait(1).to({x:308.1,alpha:0.688},0).wait(1).to({x:315.1,alpha:0.75},0).wait(1).to({x:322.1,alpha:0.813},0).wait(1).to({x:329.1,alpha:0.875},0).wait(1).to({x:336.1,alpha:0.938},0).wait(1).to({x:343,alpha:1},0).wait(72));

		// Code7
		this.instance_6 = new lib.Codeline6();
		this.instance_6.setTransform(234.6,197.7,0.466,0.466,0,0,0,80.6,2.4);
		this.instance_6.alpha = 0;
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(69).to({_off:false},0).wait(1).to({regX:80.5,x:241.2,y:197.6,alpha:0.063},0).wait(1).to({x:247.9,alpha:0.125},0).wait(1).to({x:254.6,alpha:0.188},0).wait(1).to({x:261.3,alpha:0.25},0).wait(1).to({x:268,alpha:0.313},0).wait(1).to({x:274.7,alpha:0.375},0).wait(1).to({x:281.4,alpha:0.438},0).wait(1).to({x:288.1,alpha:0.5},0).wait(1).to({x:294.8,alpha:0.563},0).wait(1).to({x:301.5,alpha:0.625},0).wait(1).to({x:308.2,alpha:0.688},0).wait(1).to({x:314.9,alpha:0.75},0).wait(1).to({x:321.6,alpha:0.813},0).wait(1).to({x:328.3,alpha:0.875},0).wait(1).to({x:335,alpha:0.938},0).wait(1).to({x:341.6,alpha:1},0).wait(87));

		// Code6
		this.instance_7 = new lib.Codeline5();
		this.instance_7.setTransform(235.9,188.3,0.466,0.466,0,0,0,88.7,2.7);
		this.instance_7.alpha = 0;
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(54).to({_off:false},0).wait(1).to({regX:88.6,regY:2.9,x:242.7,alpha:0.063},0).wait(1).to({x:249.5,alpha:0.125},0).wait(1).to({x:256.3,alpha:0.188},0).wait(1).to({x:263.1,alpha:0.25},0).wait(1).to({x:269.9,alpha:0.313},0).wait(1).to({x:276.7,alpha:0.375},0).wait(1).to({x:283.6,alpha:0.438},0).wait(1).to({x:290.4,alpha:0.5},0).wait(1).to({x:297.2,alpha:0.563},0).wait(1).to({x:304,alpha:0.625},0).wait(1).to({x:310.8,alpha:0.688},0).wait(1).to({x:317.6,alpha:0.75},0).wait(1).to({x:324.5,alpha:0.813},0).wait(1).to({x:331.3,alpha:0.875},0).wait(1).to({x:338.1,alpha:0.938},0).wait(1).to({x:344.9,alpha:1},0).wait(102));

		// Code5
		this.instance_8 = new lib.Codeline4();
		this.instance_8.setTransform(237.4,173,0.466,0.466,0,0,0,88.9,2.9);
		this.instance_8.alpha = 0;
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40).to({_off:false},0).wait(1).to({regX:88.8,regY:2.8,x:244.4,y:172.9,alpha:0.067},0).wait(1).to({x:251.6,alpha:0.133},0).wait(1).to({x:258.7,alpha:0.2},0).wait(1).to({x:265.9,alpha:0.267},0).wait(1).to({x:273,alpha:0.333},0).wait(1).to({x:280.1,alpha:0.4},0).wait(1).to({x:287.3,alpha:0.467},0).wait(1).to({x:294.4,alpha:0.533},0).wait(1).to({x:301.6,alpha:0.6},0).wait(1).to({x:308.7,alpha:0.667},0).wait(1).to({x:315.8,alpha:0.733},0).wait(1).to({x:323,alpha:0.8},0).wait(1).to({x:330.1,alpha:0.867},0).wait(1).to({x:337.3,alpha:0.933},0).wait(1).to({x:344.4,alpha:1},0).wait(117));

		// Code4
		this.instance_9 = new lib.Codeline3();
		this.instance_9.setTransform(238.6,164.6,0.466,0.466,0,0,0,91.5,2.9);
		this.instance_9.alpha = 0;
		this.instance_9._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27).to({_off:false},0).wait(1).to({regX:91.6,x:246.1,y:164.5,alpha:0.071},0).wait(1).to({x:253.5,alpha:0.143},0).wait(1).to({x:261,alpha:0.214},0).wait(1).to({x:268.4,alpha:0.286},0).wait(1).to({x:275.9,alpha:0.357},0).wait(1).to({x:283.3,alpha:0.429},0).wait(1).to({x:290.8,alpha:0.5},0).wait(1).to({x:298.2,alpha:0.571},0).wait(1).to({x:305.7,alpha:0.643},0).wait(1).to({x:313.1,alpha:0.714},0).wait(1).to({x:320.6,alpha:0.786},0).wait(1).to({x:328,alpha:0.857},0).wait(1).to({x:335.5,alpha:0.929},0).wait(1).to({x:342.9,alpha:1},0).wait(131));

		// Code-line2
		this.instance_10 = new lib.Codeline2();
		this.instance_10.setTransform(247.1,156.2,0.466,0.466,0,0,0,77.4,2.9);
		this.instance_10.alpha = 0;
		this.instance_10._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(13).to({_off:false},0).wait(1).to({x:253.4,alpha:0.067},0).wait(1).to({x:259.7,alpha:0.133},0).wait(1).to({x:266,alpha:0.2},0).wait(1).to({x:272.4,alpha:0.267},0).wait(1).to({x:278.7,alpha:0.333},0).wait(1).to({x:285,alpha:0.4},0).wait(1).to({x:291.4,alpha:0.467},0).wait(1).to({x:297.7,alpha:0.533},0).wait(1).to({x:304,alpha:0.6},0).wait(1).to({x:310.4,alpha:0.667},0).wait(1).to({x:316.7,alpha:0.733},0).wait(1).to({x:323,alpha:0.8},0).wait(1).to({x:329.4,alpha:0.867},0).wait(1).to({x:335.7,alpha:0.933},0).wait(1).to({x:342,alpha:1},0).wait(144));

		// Code-line1
		this.instance_11 = new lib.Codeline1();
		this.instance_11.setTransform(261.5,148.2,0.466,0.466,0,0,0,68.8,2.7);
		this.instance_11.alpha = 0;

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regY:2.9,x:267.5,y:148.3,alpha:0.071},0).wait(1).to({x:273.5,alpha:0.143},0).wait(1).to({x:279.6,alpha:0.214},0).wait(1).to({x:285.6,alpha:0.286},0).wait(1).to({x:291.6,alpha:0.357},0).wait(1).to({x:297.6,alpha:0.429},0).wait(1).to({x:303.6,alpha:0.5},0).wait(1).to({x:309.7,alpha:0.571},0).wait(1).to({x:315.7,alpha:0.643},0).wait(1).to({x:321.7,alpha:0.714},0).wait(1).to({x:327.7,alpha:0.786},0).wait(1).to({x:333.8,alpha:0.857},0).wait(1).to({x:339.8,alpha:0.929},0).wait(1).to({x:345.8,alpha:1},0).wait(158));

		// Cog
		this.instance_12 = new lib.GearAnim();
		this.instance_12.setTransform(67.9,122.6,0.498,0.498,160.2,0,0,60.9,61.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:60.7,regY:60.8,scaleX:0.5,scaleY:0.5,rotation:158.5,x:68.1,y:122.7},0).wait(1).to({rotation:156.9,x:68},0).wait(1).to({rotation:155.2},0).wait(1).to({rotation:153.5,x:68.1},0).wait(1).to({rotation:151.9,x:68,y:122.6},0).wait(1).to({rotation:150.2,x:68.1,y:122.7},0).wait(1).to({rotation:148.5},0).wait(1).to({rotation:146.9},0).wait(1).to({rotation:145.2,y:122.6},0).wait(1).to({rotation:143.5},0).wait(1).to({rotation:141.9,y:122.7},0).wait(1).to({rotation:140.2,y:122.6},0).wait(1).to({rotation:138.5,y:122.7},0).wait(1).to({rotation:136.9,y:122.6},0).wait(1).to({rotation:135.2},0).wait(1).to({rotation:133.5},0).wait(1).to({rotation:131.9},0).wait(1).to({rotation:130.2},0).wait(1).to({rotation:128.5},0).wait(1).to({rotation:126.9},0).wait(1).to({rotation:125.2},0).wait(1).to({rotation:123.5},0).wait(1).to({rotation:121.9},0).wait(1).to({rotation:120.2},0).wait(1).to({rotation:118.5},0).wait(1).to({rotation:116.9},0).wait(1).to({rotation:115.2},0).wait(1).to({rotation:113.5},0).wait(1).to({rotation:111.9,x:68},0).wait(1).to({rotation:110.2,x:68.1},0).wait(1).to({rotation:108.5,x:68},0).wait(1).to({rotation:106.9,x:68.1,y:122.5},0).wait(1).to({rotation:105.2,y:122.6},0).wait(1).to({rotation:103.5,y:122.5},0).wait(1).to({rotation:101.9},0).wait(1).to({rotation:100.2,y:122.6},0).wait(1).to({rotation:98.5,x:68},0).wait(1).to({rotation:96.9,x:68.1,y:122.5},0).wait(1).to({rotation:95.2},0).wait(1).to({rotation:93.5},0).wait(1).to({rotation:91.9},0).wait(1).to({rotation:90.2},0).wait(1).to({rotation:88.5,x:68},0).wait(1).to({rotation:86.9,x:68.1},0).wait(1).to({rotation:85.2},0).wait(1).to({rotation:83.5},0).wait(1).to({rotation:81.9},0).wait(1).to({rotation:80.2},0).wait(1).to({rotation:78.5,x:68},0).wait(1).to({rotation:76.9},0).wait(1).to({rotation:75.2,x:68.1},0).wait(1).to({rotation:73.5,x:68},0).wait(1).to({rotation:71.9},0).wait(1).to({rotation:70.2},0).wait(1).to({rotation:68.5},0).wait(1).to({rotation:66.9},0).wait(1).to({rotation:65.2,x:68.1},0).wait(1).to({rotation:63.5,x:68},0).wait(1).to({rotation:61.9},0).wait(1).to({rotation:60.2,y:122.4},0).wait(1).to({rotation:58.5},0).wait(1).to({rotation:56.9},0).wait(1).to({rotation:55.2,y:122.5},0).wait(1).to({rotation:53.5},0).wait(1).to({rotation:51.9,y:122.4},0).wait(1).to({rotation:50.2},0).wait(1).to({rotation:48.5,y:122.5},0).wait(1).to({rotation:46.9,y:122.4},0).wait(1).to({rotation:45.2,y:122.5},0).wait(1).to({rotation:43.5,y:122.4},0).wait(1).to({rotation:41.9},0).wait(1).to({rotation:40.2,y:122.5},0).wait(1).to({rotation:38.5,x:67.9,y:122.4},0).wait(1).to({rotation:36.9},0).wait(1).to({rotation:35.2},0).wait(1).to({rotation:33.5,x:68},0).wait(1).to({rotation:31.9,x:67.9,y:122.5},0).wait(1).to({rotation:30.2},0).wait(1).to({rotation:28.5},0).wait(1).to({rotation:26.9},0).wait(1).to({rotation:25.2,x:68},0).wait(1).to({rotation:23.5,x:67.9},0).wait(1).to({rotation:21.9},0).wait(1).to({rotation:20.2,y:122.4},0).wait(1).to({rotation:18.5,y:122.5},0).wait(1).to({rotation:16.9},0).wait(1).to({rotation:15.2},0).wait(1).to({rotation:13.5,y:122.4},0).wait(1).to({rotation:11.9,y:122.5},0).wait(1).to({rotation:10.2},0).wait(1).to({rotation:8.5},0).wait(1).to({rotation:6.9,y:122.4},0).wait(1).to({rotation:5.2,y:122.5},0).wait(1).to({rotation:3.5,y:122.4},0).wait(1).to({rotation:1.9,y:122.5},0).wait(1).to({rotation:0.2,y:122.4},0).wait(1).to({rotation:-1.5,x:67.8,y:122.5},0).wait(1).to({rotation:-3.1},0).wait(1).to({rotation:-4.8,x:67.9,y:122.4},0).wait(1).to({rotation:-6.5,x:67.8,y:122.5},0).wait(1).to({rotation:-8.1,y:122.4},0).wait(1).to({rotation:-9.8,x:67.9,y:122.5},0).wait(1).to({rotation:-11.5,x:67.8},0).wait(1).to({rotation:-13.1,x:67.9},0).wait(1).to({rotation:-14.8,x:67.8},0).wait(1).to({rotation:-16.5,x:67.9},0).wait(1).to({rotation:-18.1,x:67.8},0).wait(1).to({rotation:-19.8},0).wait(1).to({rotation:-21.5},0).wait(1).to({rotation:-23.1},0).wait(1).to({rotation:-24.8},0).wait(1).to({rotation:-26.5},0).wait(1).to({rotation:-28.1},0).wait(1).to({rotation:-29.8},0).wait(1).to({rotation:-31.5},0).wait(1).to({rotation:-33.1},0).wait(1).to({rotation:-34.8,y:122.6},0).wait(1).to({rotation:-36.5,y:122.5},0).wait(1).to({rotation:-38.1},0).wait(1).to({rotation:-39.8,y:122.6},0).wait(1).to({rotation:-41.5,y:122.5},0).wait(1).to({rotation:-43.1,y:122.6},0).wait(1).to({rotation:-44.8},0).wait(1).to({rotation:-46.5},0).wait(1).to({rotation:-48.1},0).wait(1).to({rotation:-49.8},0).wait(1).to({rotation:-51.5},0).wait(1).to({rotation:-53.1},0).wait(1).to({rotation:-54.8},0).wait(1).to({rotation:-56.5},0).wait(1).to({rotation:-58.1},0).wait(1).to({rotation:-59.8},0).wait(1).to({rotation:-61.5},0).wait(1).to({rotation:-63.1},0).wait(1).to({rotation:-64.8},0).wait(1).to({rotation:-66.5},0).wait(1).to({rotation:-68.1},0).wait(1).to({rotation:-69.8},0).wait(1).to({rotation:-71.5},0).wait(1).to({rotation:-73.1},0).wait(1).to({rotation:-74.8},0).wait(1).to({rotation:-76.5,y:122.7},0).wait(1).to({rotation:-78.1},0).wait(1).to({rotation:-79.8},0).wait(1).to({rotation:-81.5,y:122.6},0).wait(1).to({rotation:-83.1,y:122.7},0).wait(1).to({rotation:-84.8,y:122.6},0).wait(1).to({rotation:-86.5,y:122.7},0).wait(1).to({rotation:-88.1},0).wait(1).to({rotation:-89.8},0).wait(1).to({rotation:-91.5},0).wait(1).to({rotation:-93.1},0).wait(1).to({rotation:-94.8},0).wait(1).to({rotation:-96.5},0).wait(1).to({rotation:-98.1},0).wait(1).to({rotation:-99.8},0).wait(1).to({rotation:-101.5},0).wait(1).to({rotation:-103.1,x:67.9},0).wait(1).to({rotation:-104.8,x:67.8},0).wait(1).to({rotation:-106.5,x:67.9},0).wait(1).to({rotation:-108.1,x:67.8},0).wait(1).to({rotation:-109.8,x:67.9},0).wait(1).to({rotation:-111.5},0).wait(1).to({rotation:-113.1},0).wait(1).to({rotation:-114.8,x:67.8},0).wait(1).to({rotation:-116.5},0).wait(1).to({rotation:-118.1,x:67.9},0).wait(1).to({rotation:-119.8,x:67.8},0).wait(1).to({rotation:-121.5,y:122.8},0).wait(1).to({rotation:-123.1,x:67.9,y:122.7},0).wait(1).to({rotation:-124.8},0).wait(1));

		// BG
		this.instance_13 = new lib.avatarvector();
		this.instance_13.setTransform(0,0,0.466,0.463);

		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(172));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(200,216,400,432);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;