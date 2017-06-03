(function (lib, img, cjs, ss) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtFilters = {};

// library properties:
    lib.properties = {
        width: 550,
        height: 350,
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



    (lib.Symbol28 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2B2B2B").s().p("AidGAICeseICdAfIieMeg");
        this.shape.setTransform(22.5,38.2,0.165,0.165);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#2B2B2B").s().p("AjKAAIElknIBwBxIi4C2IC4C3IhwBxg");
        this.shape_1.setTransform(14.7,38.2,0.165,0.165);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#2B2B2B").s().p("AjLC3IC4i3Ii4i2IBxhxIEmEnIkmEog");
        this.shape_2.setTransform(30.2,38.2,0.165,0.165);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("Al0N0QithIiFiFQiFiFhIitQhMiyABjDQgBjBBMizQBIitCFiEQCFiFCthJQCyhMDCABQDDgBCyBMQCsBJCGCFQCECEBJCtQBMCzgBDBQABDDhMCyQhJCtiECFQiGCEisBJQiyBMjDgBQjCABiyhMg");
        this.shape_3.setTransform(22.5,38.4,0.165,0.165);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#000000").s().p("AhPBPIAAieICfAAIAACeg");
        this.shape_4.setTransform(17.2,5.2,0.165,0.165);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#000000").s().p("AjuBPIAAieIHeAAIAACeg");
        this.shape_5.setTransform(25.1,5.2,0.165,0.165);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#000000").s().p("AjuBQIAAieIHdAAIAACeg");
        this.shape_6.setTransform(22.5,71.3,0.165,0.165);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#D3132C").s().p("AhOaPMAAAg0dICeAAMAAAA0dg");
        this.shape_7.setTransform(43.7,38.2,0.165,0.165);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#D3132C").s().p("AhPaPMAAAg0dICeAAMAAAA0dg");
        this.shape_8.setTransform(1.3,38.2,0.165,0.165);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#F71735").s().p("AjgEVIAAoqIHAAAIAAIqg");
        this.shape_9.setTransform(22.6,38.4);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("AyvaPMAAAg0dMAlfAAAMAAAA0dg");
        this.shape_10.setTransform(22.5,38.4,0.165,0.165);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#333333").s().p("AirF/QgVAAgQgPQgQgQAAgWIAAqTQAAgWAQgQQAQgPAVAAIFWAAQAWAAAQAPQAPAQAAAWIAAKTQAAAWgPAQQgQAPgWAAg");
        this.shape_11.setTransform(22.6,38.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,45.1,76.8);


    (lib.Symbol27 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AgbAuIAAhbIA3AAIAABbg");
        this.shape.setTransform(93.4,95.5,0.38,0.38);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgbAuIAAhbIA3AAIAABbg");
        this.shape_1.setTransform(89.5,95.5,0.38,0.38);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgbAuIAAhbIA3AAIAABbg");
        this.shape_2.setTransform(85.6,95.5,0.38,0.38);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgbAuIAAhbIA3AAIAABbg");
        this.shape_3.setTransform(81.8,95.5,0.38,0.38);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#000000").s().p("AgaAuIAAhbIA2AAIAABbg");
        this.shape_4.setTransform(77.8,95.5,0.38,0.38);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#000000").s().p("AgaAuIAAhbIA1AAIAABbg");
        this.shape_5.setTransform(73.9,95.5,0.38,0.38);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#000000").s().p("AgbAuIAAhbIA3AAIAABbg");
        this.shape_6.setTransform(70,95.5,0.38,0.38);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#000000").s().p("AgbAuIAAhbIA3AAIAABbg");
        this.shape_7.setTransform(66.1,95.5,0.38,0.38);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#000000").s().p("AgaAuIAAhbIA1AAIAABbg");
        this.shape_8.setTransform(62.3,95.5,0.38,0.38);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("AgaAuIAAhbIA1AAIAABbg");
        this.shape_9.setTransform(58.4,95.5,0.38,0.38);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#000000").s().p("AgbAuIAAhbIA3AAIAABbg");
        this.shape_10.setTransform(54.5,95.5,0.38,0.38);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#000000").s().p("AgbAuIAAhbIA3AAIAABbg");
        this.shape_11.setTransform(50.6,95.5,0.38,0.38);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#000000").s().p("AgbAuIAAhbIA3AAIAABbg");
        this.shape_12.setTransform(46.7,95.5,0.38,0.38);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#000000").s().p("AgaAuIAAhbIA1AAIAABbg");
        this.shape_13.setTransform(42.8,95.5,0.38,0.38);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#000000").s().p("AgbAuIAAhbIA2AAIAABbg");
        this.shape_14.setTransform(38.9,95.5,0.38,0.38);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#000000").s().p("AgbAuIAAhbIA2AAIAABbg");
        this.shape_15.setTransform(35,95.5,0.38,0.38);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#000000").s().p("AgbAuIAAhbIA3AAIAABbg");
        this.shape_16.setTransform(31.1,95.5,0.38,0.38);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#000000").s().p("AgbAuIAAhbIA3AAIAABbg");
        this.shape_17.setTransform(27.2,95.5,0.38,0.38);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#000000").s().p("AgbAuIAAhbIA2AAIAABbg");
        this.shape_18.setTransform(23.4,95.5,0.38,0.38);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#000000").s().p("AgbAuIAAhbIA2AAIAABbg");
        this.shape_19.setTransform(19.5,95.5,0.38,0.38);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#000000").s().p("AgbAuIAAhbIA3AAIAABbg");
        this.shape_20.setTransform(15.6,95.5,0.38,0.38);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#000000").s().p("AgbAuIAAhbIA3AAIAABbg");
        this.shape_21.setTransform(11.7,95.5,0.38,0.38);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#000000").s().p("AgbAuIAAhbIA3AAIAABbg");
        this.shape_22.setTransform(7.8,95.5,0.38,0.38);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#F71735").s().p("AnlHmIPLvLIAAPLgAhzFMIG/AAIAAm/g");
        this.shape_23.setTransform(48.7,48.7);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,97.3,97.3);


    (lib.Symbol26 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AC5HnQiMhbhFiXQhegKhAhGQhAhGAAhfQAAg9Aeg3QAdg2AygiQg3hfhfg4Qhgg4hvAAQhvAAhgA4QhfA4g3BfQAzAiAdA2QAdA3AAA9QAABmhIBJQhJBIhmAAQhnAAhIhIQhJhJAAhmQAAheBAhGQBAhGBegKQBHiXCMhaQCOhcCoAAQCoAACOBcQCMBaBFCXQBeAKBABGQBABGAABeQAAA+geA3QgdA2gyAiQA3BfBfA4QBgA4BvAAQBvAABgg4QBfg4A3hfQgygigdg2Qgeg3AAg+QAAhlBIhJQBJhIBnAAQBmAABJBIQBIBJAABlQAABfhABGQhABGheAKQhHCXiMBbQiOBbioAAQioAAiOhbgAOkg5QgYAYAAAhQAAAiAYAYQAYAYAjAAQAiAAAYgYQAYgYAAgiQAAghgYgYQgYgYgiAAQgjAAgYAYgAg5g5QgYAYAAAhQAAAiAYAYQAZAYAgAAQAiAAAYgYQAYgYAAgiQAAghgYgYQgYgYgiAAQggAAgZAYgAwYg5QgYAYAAAhQAAAiAYAYQAZAYAiAAQAiAAAYgYQAYgYAAgiQAAghgYgYQgYgYgiAAQgiAAgZAYg");
        this.shape.setTransform(29,9.7,0.167,0.167);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("ATWYgIAAikIqUAAIAACkIyCAAIAAikIqVAAIAACkInwAAIAAnvICmAAIAAvfIimAAIAAnuIHwAAIAAClIKVAAIAAlJIvfAAIAAnwITWAAIAAnvIKTAAIAAHvITXAAIAAHwIvfAAIAAFJIKUAAIAAilIHwAAIAAHuIilAAIAAPfIClAAIAAHvgAV7V8ICmAAIAAimIimAAgABSD3IAASFIFKAAMAAAgkHIs3AAMAAAAkHIFKAAIAAyFgA4fV8IClAAIAAimIilAAgAJCTWIKUAAIAAilIClAAIAAmdIqUAAIAAilIKUAAIAAmdIilAAIAAijIqUAAgA16QxIClAAIAAClIKVAAIAA0nIqVAAIAACjIilAAIAAGdIKUAAIAAClIqUAAgAV7hRICmAAIAAimIimAAgA4fhRIClAAIAAimIilAAgATWrmIClAAIAAilIilAAgAOMrmIClAAIAAilIilAAgAJCrmIClAAIAAilIilAAgArmrmICmAAIAAilIimAAgAwwrmIClAAIAAilIilAAgA16rmIClAAIAAilIilAAgAikwwIFJAAIAAlKIlJAAg");
        this.shape_1.setTransform(29,53.9,0.167,0.167);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,58,80.1);


    (lib.Symbol25 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CCCCCC").s().p("AgSA5IAAgmIgmAAIAAhLIBxAAIAABxg");
        this.shape.setTransform(2.1,96.7,0.372,0.372);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#CCCCCC").s().p("Ag4A6IAAhMIAmAAIAAgmIBLAAIAAByg");
        this.shape_1.setTransform(2.1,2.2,0.372,0.372);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#CCCCCC").s().p("Ag4A5IAAhxIBxAAIAABLIgmAAIAAAmg");
        this.shape_2.setTransform(139.7,96.7,0.372,0.372);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#CCCCCC").s().p("Ag4A6IAAhyIBLAAIAAAmIAmAAIAABMg");
        this.shape_3.setTransform(139.7,2.2,0.372,0.372);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#CCCCCC").s().p("A9KUJMAAAgoRMA6VAAAMAAAAoRgA79S8MA37AAAMAAAgl3Mg37AAAg");
        this.shape_4.setTransform(70.9,49.4,0.372,0.372);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#CCCCCC").s().p("AgFTjMAAAgnEIALAAMAAAAnEg");
        this.shape_5.setTransform(10.1,49.4,0.372,0.372);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#CCCCCC").s().p("AgGTjMAAAgnEIANAAMAAAAnEg");
        this.shape_6.setTransform(17.2,49.4,0.372,0.372);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#CCCCCC").s().p("AgFTjMAAAgnEIALAAMAAAAnEg");
        this.shape_7.setTransform(24.4,49.4,0.372,0.372);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#CCCCCC").s().p("AgFTjMAAAgnEIALAAMAAAAnEg");
        this.shape_8.setTransform(31.5,49.4,0.372,0.372);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#CCCCCC").s().p("AgFTjMAAAgnEIALAAMAAAAnEg");
        this.shape_9.setTransform(38.7,49.4,0.372,0.372);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#CCCCCC").s().p("AgFTjMAAAgnEIALAAMAAAAnEg");
        this.shape_10.setTransform(45.9,49.4,0.372,0.372);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#CCCCCC").s().p("AgFTjMAAAgnEIALAAMAAAAnEg");
        this.shape_11.setTransform(53,49.4,0.372,0.372);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#CCCCCC").s().p("AgFTjMAAAgnEIALAAMAAAAnEg");
        this.shape_12.setTransform(60.2,49.4,0.372,0.372);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#CCCCCC").s().p("AgFTjMAAAgnEIALAAMAAAAnEg");
        this.shape_13.setTransform(67.3,49.4,0.372,0.372);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#CCCCCC").s().p("AgFTjMAAAgnEIALAAMAAAAnEg");
        this.shape_14.setTransform(74.5,49.4,0.372,0.372);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#CCCCCC").s().p("AgFTjMAAAgnEIALAAMAAAAnEg");
        this.shape_15.setTransform(81.7,49.4,0.372,0.372);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#CCCCCC").s().p("AgFTjMAAAgnEIALAAMAAAAnEg");
        this.shape_16.setTransform(88.9,49.4,0.372,0.372);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#CCCCCC").s().p("AgFTjMAAAgnEIALAAMAAAAnEg");
        this.shape_17.setTransform(96,49.4,0.372,0.372);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#CCCCCC").s().p("AgFTjMAAAgnEIALAAMAAAAnEg");
        this.shape_18.setTransform(103.2,49.4,0.372,0.372);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#CCCCCC").s().p("AgFTjMAAAgnEIALAAMAAAAnEg");
        this.shape_19.setTransform(110.3,49.4,0.372,0.372);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#CCCCCC").s().p("AgFTjMAAAgnEIALAAMAAAAnEg");
        this.shape_20.setTransform(117.5,49.4,0.372,0.372);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#CCCCCC").s().p("AgFTjMAAAgnEIALAAMAAAAnEg");
        this.shape_21.setTransform(131.8,49.4,0.372,0.372);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#CCCCCC").s().p("AgFTjMAAAgnEIALAAMAAAAnEg");
        this.shape_22.setTransform(124.7,49.4,0.372,0.372);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#CCCCCC").s().p("A8jAGIAAgLMA5HAAAIAAALg");
        this.shape_23.setTransform(70.9,10,0.372,0.372);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#CCCCCC").s().p("A8jAGIAAgLMA5HAAAIAAALg");
        this.shape_24.setTransform(70.9,17.2,0.372,0.372);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#CCCCCC").s().p("A8jAHIAAgNMA5HAAAIAAANg");
        this.shape_25.setTransform(70.9,24.4,0.372,0.372);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#CCCCCC").s().p("A8jAGIAAgLMA5HAAAIAAALg");
        this.shape_26.setTransform(70.9,31.5,0.372,0.372);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#CCCCCC").s().p("A8jAGIAAgLMA5HAAAIAAALg");
        this.shape_27.setTransform(70.9,38.7,0.372,0.372);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#CCCCCC").s().p("A8jAGIAAgLMA5HAAAIAAALg");
        this.shape_28.setTransform(70.9,45.8,0.372,0.372);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#CCCCCC").s().p("A8jAGIAAgLMA5HAAAIAAALg");
        this.shape_29.setTransform(70.9,53,0.372,0.372);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#CCCCCC").s().p("A8jAGIAAgLMA5HAAAIAAALg");
        this.shape_30.setTransform(70.9,60.2,0.372,0.372);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#CCCCCC").s().p("A8jAGIAAgLMA5HAAAIAAALg");
        this.shape_31.setTransform(70.9,67.4,0.372,0.372);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#CCCCCC").s().p("A8jAGIAAgLMA5HAAAIAAALg");
        this.shape_32.setTransform(70.9,74.5,0.372,0.372);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#CCCCCC").s().p("A8jAGIAAgLMA5HAAAIAAALg");
        this.shape_33.setTransform(70.9,81.7,0.372,0.372);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#CCCCCC").s().p("A8jAGIAAgLMA5HAAAIAAALg");
        this.shape_34.setTransform(70.9,88.9,0.372,0.372);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,141.9,98.9);


    (lib.Symbol24 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CCCBCA").s().p("AAfHiQgqgsg/AAIAAv9QA/ABAqAsQAsAsAAA/IAAP3QgBg8grgqg");
        this.shape.setTransform(7.6,58.4);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,15.2,116.8);


    (lib.Symbol23 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CCCBCA").s().p("AhKmwQAAg/AsgsQAqgsA/AAIAAP8Qg/AAgqAsQgqArgCA8g");
        this.shape.setTransform(7.6,58.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,15.1,117);


    (lib.Symbol22 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F2F2F2").s().p("EghpAYnQioABh3h3Qh3h4AAinMAAAgq4MBP/AAAMAAAAq4QgBCnh2B4Qh3B3ipgBg");
        this.shape.setTransform(95.3,58.6,0.372,0.372);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,190.6,117.3);


// stage content:
    (lib.processanimone = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // robot-plan
        this.instance = new lib.Symbol26();
        this.instance.setTransform(393.7,190.8,1,1,0,0,0,29,40.1);
        this.instance.alpha = 0;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).wait(1).to({alpha:0.029},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.114},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.229},0).wait(1).to({alpha:0.257},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.314},0).wait(1).to({alpha:0.343},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.457},0).wait(1).to({alpha:0.486},0).wait(1).to({alpha:0.514},0).wait(1).to({alpha:0.543},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.657},0).wait(1).to({alpha:0.686},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.743},0).wait(1).to({alpha:0.771},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.829},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.914},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.971},0).wait(1).to({alpha:1},0).wait(172));

        // code-phone
        this.instance_1 = new lib.Symbol28();
        this.instance_1.setTransform(340.4,51.3,1,1,0,0,0,22.5,38.4);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100).to({_off:false},0).wait(1).to({y:57.9,alpha:0.1},0).wait(1).to({y:64.5,alpha:0.2},0).wait(1).to({y:71,alpha:0.3},0).wait(1).to({y:77.7,alpha:0.4},0).wait(1).to({y:84.3,alpha:0.5},0).wait(1).to({y:90.8,alpha:0.6},0).wait(1).to({y:97.4,alpha:0.7},0).wait(1).to({y:104.1,alpha:0.8},0).wait(1).to({y:110.7,alpha:0.9},0).wait(1).to({y:117.3,alpha:1},0).wait(141));

        // ruler
        this.instance_2 = new lib.Symbol27();
        this.instance_2.setTransform(431.6,318.2,1,1,0,0,0,48.6,48.6);
        this.instance_2.alpha = 0;
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).wait(1).to({regX:48.7,x:431.7,y:310.9,alpha:0.091},0).wait(1).to({y:303.7,alpha:0.182},0).wait(1).to({y:296.4,alpha:0.273},0).wait(1).to({y:289.1,alpha:0.364},0).wait(1).to({y:281.8,alpha:0.455},0).wait(1).to({y:274.6,alpha:0.545},0).wait(1).to({y:267.3,alpha:0.636},0).wait(1).to({y:260,alpha:0.727},0).wait(1).to({y:252.7,alpha:0.818},0).wait(1).to({y:245.5,alpha:0.909},0).wait(1).to({y:238.2,alpha:1},0).wait(151));

        // paper-grid
        this.instance_3 = new lib.Symbol25();
        this.instance_3.setTransform(392.9,191.1,1,1,0,0,0,71,49.5);
        this.instance_3.alpha = 0;
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).wait(1).to({regX:70.9,regY:49.4,x:392.8,y:191,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(207));

        // paper-edge-r
        this.instance_4 = new lib.Symbol24();
        this.instance_4.setTransform(402.4,175.8,1,1,0,0,0,7.5,58.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:7.6,x:405.1},0).wait(1).to({x:407.8},0).wait(1).to({x:410.5},0).wait(1).to({x:413.2},0).wait(1).to({x:415.9},0).wait(1).to({x:418.6},0).wait(1).to({x:421.3},0).wait(1).to({x:424},0).wait(1).to({x:426.7},0).wait(1).to({x:429.3},0).wait(1).to({x:432},0).wait(1).to({x:434.7},0).wait(1).to({x:437.4},0).wait(1).to({x:440.1},0).wait(1).to({x:442.8},0).wait(1).to({x:445.5},0).wait(1).to({x:448.2},0).wait(1).to({x:450.9},0).wait(1).to({x:453.6},0).wait(1).to({x:456.2},0).wait(1).to({x:458.9},0).wait(1).to({x:461.6},0).wait(1).to({x:464.3},0).wait(1).to({x:467},0).wait(1).to({x:469.7},0).wait(1).to({x:472.4},0).wait(1).to({x:475.1},0).wait(1).to({x:477.8},0).wait(1).to({x:480.5},0).wait(222));

        // paper-edge-l
        this.instance_5 = new lib.Symbol23();
        this.instance_5.setTransform(471.3,175.7,1,1,0,0,0,95.5,58.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:7.6,x:380.6},0).wait(1).to({x:377.9},0).wait(1).to({x:375.2},0).wait(1).to({x:372.5},0).wait(1).to({x:369.8},0).wait(1).to({x:367.1},0).wait(1).to({x:364.4},0).wait(1).to({x:361.7},0).wait(1).to({x:359},0).wait(1).to({x:356.3},0).wait(1).to({x:353.6},0).wait(1).to({x:350.9},0).wait(1).to({x:348.2},0).wait(1).to({x:345.5},0).wait(1).to({x:342.7},0).wait(1).to({x:340},0).wait(1).to({x:337.3},0).wait(1).to({x:334.6},0).wait(1).to({x:331.9},0).wait(1).to({x:329.2},0).wait(1).to({x:326.5},0).wait(1).to({x:323.8},0).wait(1).to({x:321.1},0).wait(1).to({x:318.4},0).wait(1).to({x:315.7},0).wait(1).to({x:313},0).wait(1).to({x:310.3},0).wait(1).to({x:307.6},0).wait(1).to({x:304.9},0).wait(222));

        // paper
        this.instance_6 = new lib.Symbol22();
        this.instance_6.setTransform(392.8,191,0.021,1,0,0,0,95.4,58.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:95.3,scaleX:0.06},0).wait(1).to({scaleX:0.09},0).wait(1).to({scaleX:0.12},0).wait(1).to({scaleX:0.16},0).wait(1).to({scaleX:0.19},0).wait(1).to({scaleX:0.22},0).wait(1).to({scaleX:0.26},0).wait(1).to({scaleX:0.29},0).wait(1).to({scaleX:0.33},0).wait(1).to({scaleX:0.36,x:392.7},0).wait(1).to({scaleX:0.39,x:392.8},0).wait(1).to({scaleX:0.43},0).wait(1).to({scaleX:0.46,x:392.7},0).wait(1).to({scaleX:0.49,x:392.8},0).wait(1).to({scaleX:0.53,x:392.7},0).wait(1).to({scaleX:0.56,x:392.8},0).wait(1).to({scaleX:0.6,x:392.7},0).wait(1).to({scaleX:0.63},0).wait(1).to({scaleX:0.66,x:392.8},0).wait(1).to({scaleX:0.7,x:392.7},0).wait(1).to({scaleX:0.73},0).wait(1).to({scaleX:0.76},0).wait(1).to({scaleX:0.8},0).wait(1).to({scaleX:0.83},0).wait(1).to({scaleX:0.87},0).wait(1).to({scaleX:0.9},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:1},0).wait(222));

        // bottle-highlight
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("Am2CdQDtAADDiJQDBiIBQjfICsA+QhkEVjyCpQjwCrknAAg");
        this.shape.setTransform(152.5,258.9,0.364,0.364);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(251));

        // square-mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("AsgI/IAAx+IZBAAIAAR+g");
        var mask_graphics_1 = new cjs.Graphics().p("AsgI8IAAx4IZBAAIAAR4g");
        var mask_graphics_2 = new cjs.Graphics().p("AsgI5IAAxxIZBAAIAARxg");
        var mask_graphics_3 = new cjs.Graphics().p("AsgI2IAAxrIZBAAIAARrg");
        var mask_graphics_4 = new cjs.Graphics().p("AsgIzIAAxkIZBAAIAARkg");
        var mask_graphics_5 = new cjs.Graphics().p("AsgIwIAAxfIZBAAIAARfg");
        var mask_graphics_6 = new cjs.Graphics().p("AsgIsIAAxXIZBAAIAARXg");
        var mask_graphics_7 = new cjs.Graphics().p("AsgIpIAAxRIZBAAIAARRg");
        var mask_graphics_8 = new cjs.Graphics().p("AsgIlIAAxJIZBAAIAARJg");
        var mask_graphics_9 = new cjs.Graphics().p("AsgIiIAAxDIZBAAIAARDg");
        var mask_graphics_10 = new cjs.Graphics().p("AsgIfIAAw9IZBAAIAAQ9g");
        var mask_graphics_11 = new cjs.Graphics().p("AsgIcIAAw3IZBAAIAAQ3g");
        var mask_graphics_12 = new cjs.Graphics().p("AsgIZIAAwxIZBAAIAAQxg");
        var mask_graphics_13 = new cjs.Graphics().p("AsgIVIAAwpIZBAAIAAQpg");
        var mask_graphics_14 = new cjs.Graphics().p("AsgITIAAwkIZBAAIAAQkg");
        var mask_graphics_15 = new cjs.Graphics().p("AsgIPIAAwdIZBAAIAAQdg");
        var mask_graphics_16 = new cjs.Graphics().p("AsgIMIAAwXIZBAAIAAQXg");
        var mask_graphics_17 = new cjs.Graphics().p("AsgIJIAAwRIZBAAIAAQRg");
        var mask_graphics_18 = new cjs.Graphics().p("AsgIGIAAwKIZBAAIAAQKg");
        var mask_graphics_19 = new cjs.Graphics().p("AsgICIAAwDIZBAAIAAQDg");
        var mask_graphics_20 = new cjs.Graphics().p("AsgH/IAAv9IZBAAIAAP9g");
        var mask_graphics_21 = new cjs.Graphics().p("AsgH8IAAv3IZBAAIAAP3g");
        var mask_graphics_22 = new cjs.Graphics().p("AsgH4IAAvvIZBAAIAAPvg");
        var mask_graphics_23 = new cjs.Graphics().p("AsgH1IAAvpIZBAAIAAPpg");
        var mask_graphics_24 = new cjs.Graphics().p("AsgHyIAAvjIZBAAIAAPjg");
        var mask_graphics_25 = new cjs.Graphics().p("AsgHvIAAvdIZBAAIAAPdg");
        var mask_graphics_26 = new cjs.Graphics().p("AsgHsIAAvXIZBAAIAAPXg");
        var mask_graphics_27 = new cjs.Graphics().p("AsgHpIAAvRIZBAAIAAPRg");
        var mask_graphics_28 = new cjs.Graphics().p("AsgHlIAAvJIZBAAIAAPJg");
        var mask_graphics_29 = new cjs.Graphics().p("AsgHiIAAvDIZBAAIAAPDg");
        var mask_graphics_30 = new cjs.Graphics().p("AsgHfIAAu9IZBAAIAAO9g");
        var mask_graphics_31 = new cjs.Graphics().p("AsgHcIAAu3IZBAAIAAO3g");
        var mask_graphics_32 = new cjs.Graphics().p("AsgHYIAAuvIZBAAIAAOvg");
        var mask_graphics_33 = new cjs.Graphics().p("AsgHVIAAupIZBAAIAAOpg");
        var mask_graphics_34 = new cjs.Graphics().p("AsgHSIAAujIZBAAIAAOjg");
        var mask_graphics_35 = new cjs.Graphics().p("AsgHOIAAucIZBAAIAAOcg");
        var mask_graphics_36 = new cjs.Graphics().p("AsgHLIAAuVIZBAAIAAOVg");
        var mask_graphics_37 = new cjs.Graphics().p("AsgHIIAAuPIZBAAIAAOPg");
        var mask_graphics_38 = new cjs.Graphics().p("AsgHFIAAuJIZBAAIAAOJg");
        var mask_graphics_39 = new cjs.Graphics().p("AsgHCIAAuCIZBAAIAAOCg");
        var mask_graphics_40 = new cjs.Graphics().p("AsgG/IAAt9IZBAAIAAN9g");
        var mask_graphics_41 = new cjs.Graphics().p("AsgG7IAAt1IZBAAIAAN1g");
        var mask_graphics_42 = new cjs.Graphics().p("AsgG4IAAtvIZBAAIAANvg");
        var mask_graphics_43 = new cjs.Graphics().p("AsgG1IAAtpIZBAAIAANpg");
        var mask_graphics_44 = new cjs.Graphics().p("AsgGxIAAthIZBAAIAANhg");
        var mask_graphics_45 = new cjs.Graphics().p("AsgGuIAAtbIZBAAIAANbg");
        var mask_graphics_46 = new cjs.Graphics().p("AsgGrIAAtVIZBAAIAANVg");
        var mask_graphics_47 = new cjs.Graphics().p("AsgGoIAAtPIZBAAIAANPg");
        var mask_graphics_48 = new cjs.Graphics().p("AsgGkIAAtHIZBAAIAANHg");
        var mask_graphics_49 = new cjs.Graphics().p("AsgGiIAAtCIZBAAIAANCg");
        var mask_graphics_50 = new cjs.Graphics().p("AsgGeIAAs7IZBAAIAAM7g");
        var mask_graphics_51 = new cjs.Graphics().p("AsgGbIAAs1IZBAAIAAM1g");
        var mask_graphics_52 = new cjs.Graphics().p("AsgGYIAAsvIZBAAIAAMvg");
        var mask_graphics_53 = new cjs.Graphics().p("AsgGVIAAsoIZBAAIAAMog");
        var mask_graphics_54 = new cjs.Graphics().p("AsgGRIAAshIZBAAIAAMhg");
        var mask_graphics_55 = new cjs.Graphics().p("AsgGOIAAsbIZBAAIAAMbg");
        var mask_graphics_56 = new cjs.Graphics().p("AsgGLIAAsVIZBAAIAAMVg");
        var mask_graphics_57 = new cjs.Graphics().p("AsgGHIAAsOIZBAAIAAMOg");
        var mask_graphics_58 = new cjs.Graphics().p("AsgGEIAAsHIZBAAIAAMHg");
        var mask_graphics_59 = new cjs.Graphics().p("AsgGBIAAsBIZBAAIAAMBg");
        var mask_graphics_60 = new cjs.Graphics().p("AsgF+IAAr7IZBAAIAAL7g");
        var mask_graphics_61 = new cjs.Graphics().p("AsgF7IAAr1IZBAAIAAL1g");
        var mask_graphics_62 = new cjs.Graphics().p("AsgF4IAArvIZBAAIAALvg");
        var mask_graphics_63 = new cjs.Graphics().p("AsgF0IAArnIZBAAIAALng");
        var mask_graphics_64 = new cjs.Graphics().p("AsgFxIAArhIZBAAIAALhg");
        var mask_graphics_65 = new cjs.Graphics().p("AsgFuIAArbIZBAAIAALbg");
        var mask_graphics_66 = new cjs.Graphics().p("AsgFqIAArUIZBAAIAALUg");
        var mask_graphics_67 = new cjs.Graphics().p("AsgFnIAArNIZBAAIAALNg");
        var mask_graphics_68 = new cjs.Graphics().p("AsgFkIAArHIZBAAIAALHg");
        var mask_graphics_69 = new cjs.Graphics().p("AsgFhIAArBIZBAAIAALBg");
        var mask_graphics_70 = new cjs.Graphics().p("AsgFeIAAq7IZBAAIAAK7g");
        var mask_graphics_71 = new cjs.Graphics().p("AsgFaIAAqzIZBAAIAAKzg");
        var mask_graphics_72 = new cjs.Graphics().p("AsgFXIAAqtIZBAAIAAKtg");
        var mask_graphics_73 = new cjs.Graphics().p("AsgFUIAAqnIZBAAIAAKng");
        var mask_graphics_74 = new cjs.Graphics().p("AsgFRIAAqhIZBAAIAAKhg");
        var mask_graphics_75 = new cjs.Graphics().p("AsgFOIAAqaIZBAAIAAKag");
        var mask_graphics_76 = new cjs.Graphics().p("AsgFKIAAqTIZBAAIAAKTg");
        var mask_graphics_77 = new cjs.Graphics().p("AsgFHIAAqNIZBAAIAAKNg");
        var mask_graphics_78 = new cjs.Graphics().p("AsgFEIAAqHIZBAAIAAKHg");
        var mask_graphics_79 = new cjs.Graphics().p("AsgFBIAAqBIZBAAIAAKBg");
        var mask_graphics_80 = new cjs.Graphics().p("AsgE9IAAp5IZBAAIAAJ5g");
        var mask_graphics_81 = new cjs.Graphics().p("AsgE6IAApzIZBAAIAAJzg");
        var mask_graphics_82 = new cjs.Graphics().p("AsgE3IAAptIZBAAIAAJtg");
        var mask_graphics_83 = new cjs.Graphics().p("AsgE0IAApnIZBAAIAAJng");
        var mask_graphics_84 = new cjs.Graphics().p("AsgEwIAApfIZBAAIAAJfg");
        var mask_graphics_85 = new cjs.Graphics().p("AsgEtIAApZIZBAAIAAJZg");
        var mask_graphics_86 = new cjs.Graphics().p("AsgEqIAApTIZBAAIAAJTg");
        var mask_graphics_87 = new cjs.Graphics().p("AsgEnIAApNIZBAAIAAJNg");
        var mask_graphics_88 = new cjs.Graphics().p("AsgEkIAApGIZBAAIAAJGg");
        var mask_graphics_89 = new cjs.Graphics().p("AsgEgIAAo/IZBAAIAAI/g");
        var mask_graphics_90 = new cjs.Graphics().p("AsgEdIAAo5IZBAAIAAI5g");
        var mask_graphics_91 = new cjs.Graphics().p("AsgEaIAAozIZBAAIAAIzg");
        var mask_graphics_92 = new cjs.Graphics().p("AsgEXIAAotIZBAAIAAItg");
        var mask_graphics_93 = new cjs.Graphics().p("AsgETIAAolIZBAAIAAIlg");
        var mask_graphics_94 = new cjs.Graphics().p("AsgEQIAAofIZBAAIAAIfg");
        var mask_graphics_95 = new cjs.Graphics().p("AsgENIAAoZIZBAAIAAIZg");
        var mask_graphics_96 = new cjs.Graphics().p("AsgEKIAAoTIZBAAIAAITg");
        var mask_graphics_97 = new cjs.Graphics().p("AsgEGIAAoLIZBAAIAAILg");
        var mask_graphics_98 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_99 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_100 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_101 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_102 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_103 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_104 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_105 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_106 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_107 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_108 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_109 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_110 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_111 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_112 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_113 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_114 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_115 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_116 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_117 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_118 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_119 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_120 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_121 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_122 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_123 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_124 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_125 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_126 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_127 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_128 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_129 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_130 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_131 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_132 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_133 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_134 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_135 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_136 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_137 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_138 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_139 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_140 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_141 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_142 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_143 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_144 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_145 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_146 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_147 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_148 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_149 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_150 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_151 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_152 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_153 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_154 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_155 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_156 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_157 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_158 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_159 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_160 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_161 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_162 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_163 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_164 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_165 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_166 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_167 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_168 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_169 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_170 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_171 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_172 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_173 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_174 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_175 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_176 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_177 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_178 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_179 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_180 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_181 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_182 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_183 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_184 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_185 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_186 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_187 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_188 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_189 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_190 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_191 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_192 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_193 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_194 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_195 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_196 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_197 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_198 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_199 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_200 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_201 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_202 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_203 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_204 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_205 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_206 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_207 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_208 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_209 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_210 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_211 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_212 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_213 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_214 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_215 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_216 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_217 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_218 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_219 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_220 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_221 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_222 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_223 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_224 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_225 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_226 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_227 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_228 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_229 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_230 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_231 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_232 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_233 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_234 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_235 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_236 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_237 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_238 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_239 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_240 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_241 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_242 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_243 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_244 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_245 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_246 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_247 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_248 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_249 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");
        var mask_graphics_250 = new cjs.Graphics().p("AsgEDIAAoFIZBAAIAAIFg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:144.9,y:250.5}).wait(1).to({graphics:mask_graphics_1,x:144.9,y:250.9}).wait(1).to({graphics:mask_graphics_2,x:144.9,y:251.3}).wait(1).to({graphics:mask_graphics_3,x:144.9,y:251.7}).wait(1).to({graphics:mask_graphics_4,x:144.9,y:252.1}).wait(1).to({graphics:mask_graphics_5,x:144.9,y:252.5}).wait(1).to({graphics:mask_graphics_6,x:144.9,y:252.9}).wait(1).to({graphics:mask_graphics_7,x:144.9,y:253.3}).wait(1).to({graphics:mask_graphics_8,x:144.9,y:253.7}).wait(1).to({graphics:mask_graphics_9,x:144.9,y:254.1}).wait(1).to({graphics:mask_graphics_10,x:144.9,y:254.5}).wait(1).to({graphics:mask_graphics_11,x:144.9,y:254.9}).wait(1).to({graphics:mask_graphics_12,x:144.9,y:255.3}).wait(1).to({graphics:mask_graphics_13,x:144.9,y:255.7}).wait(1).to({graphics:mask_graphics_14,x:144.9,y:256.1}).wait(1).to({graphics:mask_graphics_15,x:144.9,y:256.5}).wait(1).to({graphics:mask_graphics_16,x:144.9,y:256.9}).wait(1).to({graphics:mask_graphics_17,x:144.9,y:257.3}).wait(1).to({graphics:mask_graphics_18,x:144.9,y:257.7}).wait(1).to({graphics:mask_graphics_19,x:144.9,y:258.1}).wait(1).to({graphics:mask_graphics_20,x:144.9,y:258.5}).wait(1).to({graphics:mask_graphics_21,x:144.9,y:258.9}).wait(1).to({graphics:mask_graphics_22,x:144.9,y:259.3}).wait(1).to({graphics:mask_graphics_23,x:144.9,y:259.7}).wait(1).to({graphics:mask_graphics_24,x:144.9,y:260.1}).wait(1).to({graphics:mask_graphics_25,x:144.9,y:260.5}).wait(1).to({graphics:mask_graphics_26,x:144.9,y:260.9}).wait(1).to({graphics:mask_graphics_27,x:144.9,y:261.3}).wait(1).to({graphics:mask_graphics_28,x:144.9,y:261.7}).wait(1).to({graphics:mask_graphics_29,x:144.9,y:262.1}).wait(1).to({graphics:mask_graphics_30,x:144.9,y:262.5}).wait(1).to({graphics:mask_graphics_31,x:144.9,y:262.9}).wait(1).to({graphics:mask_graphics_32,x:144.9,y:263.3}).wait(1).to({graphics:mask_graphics_33,x:144.9,y:263.7}).wait(1).to({graphics:mask_graphics_34,x:144.9,y:264.1}).wait(1).to({graphics:mask_graphics_35,x:144.9,y:264.5}).wait(1).to({graphics:mask_graphics_36,x:144.9,y:264.9}).wait(1).to({graphics:mask_graphics_37,x:144.9,y:265.3}).wait(1).to({graphics:mask_graphics_38,x:144.9,y:265.7}).wait(1).to({graphics:mask_graphics_39,x:144.9,y:266.1}).wait(1).to({graphics:mask_graphics_40,x:144.9,y:266.5}).wait(1).to({graphics:mask_graphics_41,x:144.9,y:266.9}).wait(1).to({graphics:mask_graphics_42,x:144.9,y:267.3}).wait(1).to({graphics:mask_graphics_43,x:144.9,y:267.7}).wait(1).to({graphics:mask_graphics_44,x:144.9,y:268.1}).wait(1).to({graphics:mask_graphics_45,x:144.9,y:268.5}).wait(1).to({graphics:mask_graphics_46,x:144.9,y:268.9}).wait(1).to({graphics:mask_graphics_47,x:144.9,y:269.3}).wait(1).to({graphics:mask_graphics_48,x:144.9,y:269.7}).wait(1).to({graphics:mask_graphics_49,x:144.9,y:270.1}).wait(1).to({graphics:mask_graphics_50,x:144.9,y:270.5}).wait(1).to({graphics:mask_graphics_51,x:144.9,y:270.9}).wait(1).to({graphics:mask_graphics_52,x:144.9,y:271.3}).wait(1).to({graphics:mask_graphics_53,x:144.9,y:271.7}).wait(1).to({graphics:mask_graphics_54,x:144.9,y:272.1}).wait(1).to({graphics:mask_graphics_55,x:144.9,y:272.5}).wait(1).to({graphics:mask_graphics_56,x:144.9,y:272.9}).wait(1).to({graphics:mask_graphics_57,x:144.9,y:273.3}).wait(1).to({graphics:mask_graphics_58,x:144.9,y:273.7}).wait(1).to({graphics:mask_graphics_59,x:144.9,y:274.1}).wait(1).to({graphics:mask_graphics_60,x:144.9,y:274.5}).wait(1).to({graphics:mask_graphics_61,x:144.9,y:274.9}).wait(1).to({graphics:mask_graphics_62,x:144.9,y:275.3}).wait(1).to({graphics:mask_graphics_63,x:144.9,y:275.7}).wait(1).to({graphics:mask_graphics_64,x:144.9,y:276.1}).wait(1).to({graphics:mask_graphics_65,x:144.9,y:276.5}).wait(1).to({graphics:mask_graphics_66,x:144.9,y:276.9}).wait(1).to({graphics:mask_graphics_67,x:144.9,y:277.3}).wait(1).to({graphics:mask_graphics_68,x:144.9,y:277.7}).wait(1).to({graphics:mask_graphics_69,x:144.9,y:278.1}).wait(1).to({graphics:mask_graphics_70,x:144.9,y:278.5}).wait(1).to({graphics:mask_graphics_71,x:144.9,y:278.9}).wait(1).to({graphics:mask_graphics_72,x:144.9,y:279.3}).wait(1).to({graphics:mask_graphics_73,x:144.9,y:279.7}).wait(1).to({graphics:mask_graphics_74,x:144.9,y:280.1}).wait(1).to({graphics:mask_graphics_75,x:144.9,y:280.5}).wait(1).to({graphics:mask_graphics_76,x:144.9,y:280.9}).wait(1).to({graphics:mask_graphics_77,x:144.9,y:281.3}).wait(1).to({graphics:mask_graphics_78,x:144.9,y:281.7}).wait(1).to({graphics:mask_graphics_79,x:144.9,y:282.1}).wait(1).to({graphics:mask_graphics_80,x:144.9,y:282.5}).wait(1).to({graphics:mask_graphics_81,x:144.9,y:282.9}).wait(1).to({graphics:mask_graphics_82,x:144.9,y:283.3}).wait(1).to({graphics:mask_graphics_83,x:144.9,y:283.7}).wait(1).to({graphics:mask_graphics_84,x:144.9,y:284.1}).wait(1).to({graphics:mask_graphics_85,x:144.9,y:284.5}).wait(1).to({graphics:mask_graphics_86,x:144.9,y:284.9}).wait(1).to({graphics:mask_graphics_87,x:144.9,y:285.3}).wait(1).to({graphics:mask_graphics_88,x:144.9,y:285.7}).wait(1).to({graphics:mask_graphics_89,x:144.9,y:286.1}).wait(1).to({graphics:mask_graphics_90,x:144.9,y:286.5}).wait(1).to({graphics:mask_graphics_91,x:144.9,y:286.9}).wait(1).to({graphics:mask_graphics_92,x:144.9,y:287.3}).wait(1).to({graphics:mask_graphics_93,x:144.9,y:287.7}).wait(1).to({graphics:mask_graphics_94,x:144.9,y:288.1}).wait(1).to({graphics:mask_graphics_95,x:144.9,y:288.5}).wait(1).to({graphics:mask_graphics_96,x:144.9,y:288.9}).wait(1).to({graphics:mask_graphics_97,x:144.9,y:289.3}).wait(1).to({graphics:mask_graphics_98,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_99,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_100,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_101,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_102,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_103,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_104,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_105,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_106,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_107,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_108,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_109,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_110,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_111,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_112,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_113,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_114,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_115,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_116,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_117,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_118,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_119,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_120,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_121,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_122,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_123,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_124,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_125,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_126,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_127,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_128,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_129,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_130,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_131,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_132,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_133,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_134,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_135,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_136,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_137,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_138,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_139,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_140,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_141,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_142,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_143,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_144,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_145,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_146,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_147,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_148,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_149,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_150,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_151,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_152,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_153,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_154,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_155,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_156,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_157,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_158,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_159,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_160,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_161,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_162,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_163,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_164,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_165,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_166,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_167,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_168,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_169,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_170,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_171,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_172,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_173,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_174,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_175,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_176,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_177,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_178,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_179,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_180,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_181,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_182,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_183,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_184,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_185,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_186,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_187,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_188,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_189,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_190,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_191,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_192,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_193,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_194,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_195,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_196,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_197,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_198,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_199,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_200,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_201,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_202,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_203,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_204,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_205,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_206,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_207,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_208,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_209,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_210,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_211,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_212,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_213,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_214,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_215,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_216,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_217,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_218,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_219,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_220,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_221,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_222,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_223,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_224,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_225,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_226,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_227,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_228,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_229,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_230,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_231,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_232,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_233,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_234,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_235,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_236,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_237,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_238,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_239,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_240,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_241,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_242,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_243,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_244,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_245,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_246,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_247,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_248,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_249,x:144.9,y:289.7}).wait(1).to({graphics:mask_graphics_250,x:144.9,y:289.7}).wait(1));

        // flask-liquid
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#666666").s().p("AkvExQh/h/AAiyQAAixB/h/QB+h+CxAAQCyAAB+B+QB/B/AACxQAACyh/B/Qh+B+iyAAQixAAh+h+g");
        this.shape_1.setTransform(136.9,237.6);

        this.shape_1.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(251));

        // flask
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("ASRWfMAAAgnlQAAhDgwgvQgugvhDAAQhCAAgwAvQguAvAABDIAACaQAABEgbA/QgaA/gwAxQgxAwg/AaQg/AahEAAQhFAAg/gaQg+gagxgwQgxgxgZg/Qgag/AAhEIAAiaQAAhCgwgwQgvgvhCAAQhAAAgwAvQgvAvAABDIAACaQAABEgaA/QgaA/gwAxQgxAwg/AaQg/AahEAAQhFAAg/gaQg/gagwgwQgxgxgag/Qgag/AAhEIAAiaQAAhDgvgvQgwgvhBAAQhCAAgxAvQguAwAABCMAAAAnlIi3AAMAAAgnlQAAhFAZg/QAag+AygxQAwgxA/gaQA+gaBGAAQBEAAA/AaQA/AbAwAwQAxAxAaA+QAaA/AABFIAACaQAABCAvAvQAuAvBEAAQBDAAAugvQAvgvAAhCIAAiaQAAhFAag/QAag+AxgxQAxgxA+gaQA/gaBDAAQBEAAA/AaQA/AaAxAxQAwAxAaA+QAaA+AABGIAACaQAABBAvAwQAvAvBDAAQBDAAAugvQAwgvAAhCIAAiaQAAhFAag/QAZg+AygxQAwgwA+gbQBAgaBEAAQBFAAA+AaQA/AaAxAxQAxAwAZA/QAbA/AABFMAAAAnlg");
        this.shape_2.setTransform(182.3,157.9,0.364,0.364);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AhaM2IAA5rIC1AAIAAZrg");
        this.shape_3.setTransform(205.9,261.9,0.364,0.364);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#000000").s().p("AhaM2IAA5rIC1AAIAAZrg");
        this.shape_4.setTransform(250.6,261.9,0.364,0.364);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#000000").s().p("AstBbIAAi1IZbAAIAAC1g");
        this.shape_5.setTransform(228.2,239.2,0.364,0.364);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#000000").s().p("AnbBbIAAi1IO3AAIAAC1g");
        this.shape_6.setTransform(228.2,197.4,0.364,0.364);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#000000").s().p("AiVREQhHgfg4g3Qg3g3gehIQgehIAAhPIAA84IC3AAIAAc4QAAAqAQAnQAQAnAdAdQAeAeAmAQQAmAPApAAQApAAAngPQAmgQAegeQAdgeAQgmQAQgnAAgqIAA84IC3AAIAAc4QAABPgeBIQgdBIg4A3Qg4A3hHAfQhIAdhOAAQhNAAhIgdg");
        this.shape_7.setTransform(228.2,238.2,0.364,0.364);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#000000").s().p("AmYD/QhqAAhLhKQhLhMAAhpQAAhpBLhKQBLhMBqAAIMxAAQBqAABLBMQBLBKAABpQAABphLBMQhLBKhqAAgAnMgzQgVAWAAAdQAAAeAVAWQAWAVAeAAIMxAAQAfAAAVgVQAVgWAAgeQAAgdgVgWQgVgVgfAAIsxAAQgeAAgWAVg");
        this.shape_8.setTransform(136.5,147.7,0.364,0.364);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("AlKFIQBAjmCYi3QCWi5DWhpIBRCjQiyBZiACYQh+Cbg1DAg");
        this.shape_9.setTransform(109.1,214.4,0.364,0.364);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#000000").s().p("ApFciQkMhyjQjPQjOjQhykMQh2kVAAkwQAAn1ErmNQEqmOHeiLIAAu7INIAAIAAO7QHfCMEqGNQErGNAAH1QAAEwh2EVQhyEMjPDQQjPDPkNByQkWB2kvAAQkvAAkWh2gAjttMIhFARQm8BqkZFkQkaFlABHIQgBEKBoD0QBkDsC2C2QC2C2DrBjQD0BoEKAAQEKAAD0hoQDrhjC3i2QC1i2BkjsQBoj0AAkKQAAnIkZlkQkZllm8hqIhGgRIAAuUInaAAg");
        this.shape_10.setTransform(136.5,221.1,0.364,0.364);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},250).wait(1));

        // flask-liquid-red
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#F71735").s().p("AgoELQgUgHgQgQQgQgQgIgUQgIgVAAgVIAAm4IDZAAIAAG4QAAAVgIAVQgIAUgQAQQgQAQgUAHQgUAJgVgBQgUABgUgJg");
        this.shape_11.setTransform(228.2,275.7,1,0.163,0,0,0,0,27.6);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#F71735").s().p("AgoAwIgkgFQgQgDgIgDQgIgEAAgEIAAhNIDZAAIAABNQAAAEgIAEQgIADgQADIgkAFIgpABIgogBg");
        this.shape_12.setTransform(228.2,270.8);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#F71735").s().p("AgoA0QgUgBgQgDQgQgEgIgDQgIgFAAgEIAAhVIDZAAIAABVQAAAEgIAFQgIADgQAEQgQADgUABQgUABgVAAQgUAAgUgBg");
        this.shape_13.setTransform(228.2,270.3);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#F71735").s().p("AgoA5QgUgDgQgDQgQgDgIgFQgIgEAAgFIAAhbIDZAAIAABbQAAAFgIAEQgIAFgQADQgQADgUADQgUABgVAAQgUAAgUgBg");
        this.shape_14.setTransform(228.2,269.9);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#F71735").s().p("AgoA9QgUgCgQgDQgQgEgIgFQgIgEAAgFIAAhkIDZAAIAABkQAAAFgIAEQgIAFgQAEQgQADgUACQgUABgVAAQgUAAgUgBg");
        this.shape_15.setTransform(228.2,269.4);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#F71735").s().p("AgoBCQgUgDgQgEQgQgEgIgFQgIgEAAgGIAAhqIDZAAIAABqQAAAGgIAEQgIAFgQAEQgQAEgUADQgUABgVAAQgUAAgUgBg");
        this.shape_16.setTransform(228.2,269);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#F71735").s().p("AgoBFQgUgBgQgFQgQgEgIgFQgIgGAAgFIAAhyIDZAAIAAByQAAAFgIAGQgIAFgQAEQgQAFgUABQgUACgVAAQgUAAgUgCg");
        this.shape_17.setTransform(228.2,268.5);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#F71735").s().p("AgoBKQgUgDgQgDQgQgFgIgGQgIgFAAgHIAAh4IDZAAIAAB4QAAAHgIAFQgIAGgQAFQgQADgUADQgUACgVAAQgUAAgUgCg");
        this.shape_18.setTransform(228.2,268.1);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#F71735").s().p("AgoBOQgUgCgQgFQgQgEgIgHQgIgFAAgHIAAiAIDZAAIAACAQAAAHgIAFQgIAHgQAEQgQAFgUACQgUACgVAAQgUAAgUgCg");
        this.shape_19.setTransform(228.2,267.6);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#F71735").s().p("AgoBTQgUgDgQgEQgQgGgIgGQgIgHAAgGIAAiHIDZAAIAACHQAAAGgIAHQgIAGgQAGQgQAEgUADQgUACgVAAQgUAAgUgCg");
        this.shape_20.setTransform(228.2,267.2);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#F71735").s().p("AgoBXQgUgDgQgFQgQgFgIgGQgIgIAAgHIAAiOIDZAAIAACOQAAAHgIAIQgIAGgQAFQgQAFgUADQgUACgVAAQgUAAgUgCg");
        this.shape_21.setTransform(228.2,266.7);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#F71735").s().p("AgoBcQgUgEgQgEQgQgGgIgHQgIgHAAgHIAAiWIDZAAIAACWQAAAHgIAHQgIAHgQAGQgQAEgUAEQgUACgVAAQgUAAgUgCg");
        this.shape_22.setTransform(228.2,266.3);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#F71735").s().p("AgoBgQgUgDgQgGQgQgFgIgIQgIgHAAgIIAAidIDZAAIAACdQAAAIgIAHQgIAIgQAFQgQAGgUADQgUACgVAAQgUAAgUgCg");
        this.shape_23.setTransform(228.2,265.8);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#F71735").s().p("AgoBlQgUgEgQgGQgQgFgIgIQgIgIAAgIIAAikIDZAAIAACkQAAAIgIAIQgIAIgQAFQgQAGgUAEQgUACgVAAQgUAAgUgCg");
        this.shape_24.setTransform(228.2,265.3);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#F71735").s().p("AgoBpQgUgDgQgHQgQgGgIgIQgIgIAAgIIAAisIDZAAIAACsQAAAIgIAIQgIAIgQAGQgQAHgUADQgUADgVAAQgUAAgUgDg");
        this.shape_25.setTransform(228.2,264.9);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#F71735").s().p("AgoBtQgUgDgQgHQgQgGgIgIQgIgJAAgJIAAiyIDZAAIAACyQAAAJgIAJQgIAIgQAGQgQAHgUADQgUADgVAAQgUAAgUgDg");
        this.shape_26.setTransform(228.2,264.4);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#F71735").s().p("AgoByQgUgEgQgHQgQgGgIgJQgIgJAAgJIAAi6IDZAAIAAC6QAAAJgIAJQgIAJgQAGQgQAHgUAEQgUADgVAAQgUAAgUgDg");
        this.shape_27.setTransform(228.2,264);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#F71735").s().p("AgoB2QgUgEgQgHQgQgGgIgKQgIgIAAgKIAAjBIDZAAIAADBQAAAKgIAIQgIAKgQAGQgQAHgUAEQgUADgVAAQgUAAgUgDg");
        this.shape_28.setTransform(228.2,263.5);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#F71735").s().p("AgoB6QgUgDgQgIQgQgHgIgJQgIgJAAgKIAAjJIDZAAIAADJQAAAKgIAJQgIAJgQAHQgQAIgUADQgUAEgVAAQgUAAgUgEg");
        this.shape_29.setTransform(228.2,263.1);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#F71735").s().p("AgoB/QgUgEgQgIQgQgHgIgKQgIgJAAgLIAAjPIDZAAIAADPQAAALgIAJQgIAKgQAHQgQAIgUAEQgUADgVAAQgUAAgUgDg");
        this.shape_30.setTransform(228.2,262.6);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#F71735").s().p("AgoCDQgUgEgQgIQgQgHgIgKQgIgKAAgLIAAjXIDZAAIAADXQAAALgIAKQgIAKgQAHQgQAIgUAEQgUAEgVAAQgUAAgUgEg");
        this.shape_31.setTransform(228.2,262.2);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#F71735").s().p("AgoCIQgUgFgQgIQgQgHgIgLQgIgKAAgLIAAjeIDZAAIAADeQAAALgIAKQgIALgQAHQgQAIgUAFQgUADgVAAQgUAAgUgDg");
        this.shape_32.setTransform(228.2,261.7);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#F71735").s().p("AgoCMQgUgEgQgJQgQgIgIgLQgIgKAAgLIAAjmIDZAAIAADmQAAALgIAKQgIALgQAIQgQAJgUAEQgUAEgVAAQgUAAgUgEg");
        this.shape_33.setTransform(228.2,261.3);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#F71735").s().p("AgoCQQgUgEgQgJQgQgIgIgLQgIgLAAgMIAAjsIDZAAIAADsQAAAMgIALQgIALgQAIQgQAJgUAEQgUAEgVAAQgUAAgUgEg");
        this.shape_34.setTransform(228.2,260.8);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#F71735").s().p("AgoCVQgUgFgQgJQgQgIgIgMQgIgLAAgMIAAj0IDZAAIAAD0QAAAMgIALQgIAMgQAIQgQAJgUAFQgUAEgVAAQgUAAgUgEg");
        this.shape_35.setTransform(228.2,260.4);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#F71735").s().p("AgoCZQgUgFgQgJQgQgJgIgLQgIgMAAgMIAAj7IDZAAIAAD7QAAAMgIAMQgIALgQAJQgQAJgUAFQgUAEgVAAQgUAAgUgEg");
        this.shape_36.setTransform(228.2,259.9);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#F71735").s().p("AgoCdQgUgEgQgKQgQgJgIgMQgIgMAAgNIAAkCIDZAAIAAECQAAANgIAMQgIAMgQAJQgQAKgUAEQgUAFgVAAQgUAAgUgFg");
        this.shape_37.setTransform(228.2,259.5);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#F71735").s().p("AgoCiQgUgFgQgKQgQgJgIgNQgIgMAAgNIAAkJIDZAAIAAEJQAAANgIAMQgIANgQAJQgQAKgUAFQgUAEgVAAQgUAAgUgEg");
        this.shape_38.setTransform(228.2,259);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#F71735").s().p("AgoCmQgUgFgQgKQgQgJgIgNQgIgNAAgNIAAkRIDZAAIAAERQAAANgIANQgIANgQAJQgQAKgUAFQgUAFgVAAQgUAAgUgFg");
        this.shape_39.setTransform(228.2,258.6);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#F71735").s().p("AgoCrQgUgGgQgKQgQgKgIgNQgIgNAAgNIAAkYIDZAAIAAEYQAAANgIANQgIANgQAKQgQAKgUAGQgUAEgVAAQgUAAgUgEg");
        this.shape_40.setTransform(228.2,258.1);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#F71735").s().p("AgoCvQgUgFgQgLQgQgKgIgNQgIgOAAgOIAAkfIDZAAIAAEfQAAAOgIAOQgIANgQAKQgQALgUAFQgUAFgVAAQgUAAgUgFg");
        this.shape_41.setTransform(228.2,257.7);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#F71735").s().p("AgoCzQgUgFgQgLQgQgKgIgOQgIgNAAgPIAAkmIDZAAIAAEmQAAAPgIANQgIAOgQAKQgQALgUAFQgUAFgVAAQgUAAgUgFg");
        this.shape_42.setTransform(228.2,257.2);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#F71735").s().p("AgoC4QgUgGgQgLQgQgKgIgPQgIgNAAgPIAAkuIDZAAIAAEuQAAAPgIANQgIAPgQAKQgQALgUAGQgUAFgVAAQgUAAgUgFg");
        this.shape_43.setTransform(228.2,256.8);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#F71735").s().p("AgoC8QgUgGgQgLQgQgLgIgOQgIgOAAgQIAAk0IDZAAIAAE0QAAAQgIAOQgIAOgQALQgQALgUAGQgUAFgVAAQgUAAgUgFg");
        this.shape_44.setTransform(228.2,256.3);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#F71735").s().p("AgoDAQgUgFgQgMQgQgLgIgPQgIgOAAgQIAAk8IDZAAIAAE8QAAAQgIAOQgIAPgQALQgQAMgUAFQgUAGgVAAQgUAAgUgGg");
        this.shape_45.setTransform(228.2,255.9);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#F71735").s().p("AgoDFQgUgGgQgMQgQgLgIgQQgIgOAAgQIAAlDIDZAAIAAFDQAAAQgIAOQgIAQgQALQgQAMgUAGQgUAFgVAAQgUAAgUgFg");
        this.shape_46.setTransform(228.2,255.4);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#F71735").s().p("AgoDJQgUgGgQgMQgQgLgIgQQgIgPAAgQIAAlLIDZAAIAAFLQAAAQgIAPQgIAQgQALQgQAMgUAGQgUAGgVAAQgUAAgUgGg");
        this.shape_47.setTransform(228.2,255);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#F71735").s().p("AgoDNQgUgGgQgMQgQgMgIgQQgIgPAAgRIAAlRIDZAAIAAFRQAAARgIAPQgIAQgQAMQgQAMgUAGQgUAHgVAAQgUAAgUgHg");
        this.shape_48.setTransform(228.2,254.6);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#F71735").s().p("AgoDSQgUgHgQgMQgQgMgIgQQgIgQAAgRIAAlZIDZAAIAAFZQAAARgIAQQgIAQgQAMQgQAMgUAHQgUAGgVAAQgUAAgUgGg");
        this.shape_49.setTransform(228.2,254.1);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#F71735").s().p("AgoDWQgUgGgQgNQgQgMgIgRQgIgQAAgRIAAlhIDZAAIAAFhQAAARgIAQQgIARgQAMQgQANgUAGQgUAHgVAAQgUAAgUgHg");
        this.shape_50.setTransform(228.2,253.6);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#F71735").s().p("AgoDbQgUgHgQgNQgQgNgIgRQgIgQAAgSIAAlnIDZAAIAAFnQAAASgIAQQgIARgQANQgQANgUAHQgUAGgVAAQgUAAgUgGg");
        this.shape_51.setTransform(228.2,253.2);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#F71735").s().p("AgoDfQgUgHgQgNQgQgNgIgRQgIgRAAgSIAAlvIDZAAIAAFvQAAASgIARQgIARgQANQgQANgUAHQgUAHgVAAQgUAAgUgHg");
        this.shape_52.setTransform(228.2,252.7);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#F71735").s().p("AgoDjQgUgHgQgNQgQgNgIgSQgIgRAAgSIAAl2IDZAAIAAF2QAAASgIARQgIASgQANQgQANgUAHQgUAHgVAAQgUAAgUgHg");
        this.shape_53.setTransform(228.2,252.3);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#F71735").s().p("AgoDoQgUgHgQgOQgQgNgIgSQgIgSAAgSIAAl+IDZAAIAAF+QAAASgIASQgIASgQANQgQAOgUAHQgUAHgVAAQgUAAgUgHg");
        this.shape_54.setTransform(228.2,251.8);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#F71735").s().p("AgoDsQgUgHgQgOQgQgOgIgSQgIgRAAgUIAAmEIDZAAIAAGEQAAAUgIARQgIASgQAOQgQAOgUAHQgUAHgVAAQgUAAgUgHg");
        this.shape_55.setTransform(228.2,251.4);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#F71735").s().p("AgoDwQgUgHgQgOQgQgOgIgTQgIgRAAgUIAAmMIDZAAIAAGMQAAAUgIARQgIATgQAOQgQAOgUAHQgUAIgVAAQgUAAgUgIg");
        this.shape_56.setTransform(228.2,250.9);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#F71735").s().p("AgoD1QgUgIgQgOQgQgOgIgTQgIgSAAgUIAAmTIDZAAIAAGTQAAAUgIASQgIATgQAOQgQAOgUAIQgUAHgVAAQgUAAgUgHg");
        this.shape_57.setTransform(228.2,250.5);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#F71735").s().p("AgoD5QgUgHgQgPQgQgOgIgUQgIgSAAgVIAAmaIDZAAIAAGaQAAAVgIASQgIAUgQAOQgQAPgUAHQgUAIgVAAQgUAAgUgIg");
        this.shape_58.setTransform(228.2,250);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#F71735").s().p("AgoD+QgUgIgQgPQgQgPgIgTQgIgTAAgVIAAmhIDZAAIAAGhQAAAVgIATQgIATgQAPQgQAPgUAIQgUAHgVAAQgUAAgUgHg");
        this.shape_59.setTransform(228.2,249.6);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#F71735").s().p("AgoECQgUgIgQgPQgQgPgIgUQgIgTAAgVIAAmpIDZAAIAAGpQAAAVgIATQgIAUgQAPQgQAPgUAIQgUAIgVAAQgUAAgUgIg");
        this.shape_60.setTransform(228.2,249.1);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#F71735").s().p("AgoEGQgUgIgQgPQgQgPgIgVQgIgTAAgVIAAmwIDZAAIAAGwQAAAVgIATQgIAVgQAPQgQAPgUAIQgUAIgVAAQgUAAgUgIg");
        this.shape_61.setTransform(228.2,248.7);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#F71735").s().p("AgoELQgUgIgQgQQgQgQgIgUQgIgUAAgWIAAm3IDZAAIAAG3QAAAWgIAUQgIAUgQAQQgQAQgUAIQgUAIgVAAQgUAAgUgIg");
        this.shape_62.setTransform(228.2,248.2);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#F71735").s().p("AgoEPQgUgIgQgQQgQgQgIgVQgIgUAAgWIAAm+IDZAAIAAG+QAAAWgIAUQgIAVgQAQQgQAQgUAIQgUAIgVAAQgUAAgUgIg");
        this.shape_63.setTransform(228.2,247.8);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#F71735").s().p("AgoETQgUgIgQgQQgQgQgIgVQgIgVAAgWIAAnGIDZAAIAAHGQAAAWgIAVQgIAVgQAQQgQAQgUAIQgUAJgVAAQgUAAgUgJg");
        this.shape_64.setTransform(228.2,247.3);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#F71735").s().p("AgoEYQgUgJgQgQQgQgQgIgWQgIgVAAgXIAAnMIDZAAIAAHMQAAAXgIAVQgIAWgQAQQgQAQgUAJQgUAIgVAAQgUAAgUgIg");
        this.shape_65.setTransform(228.2,246.9);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#F71735").s().p("AgoEcQgUgIgQgRQgQgRgIgWQgIgVAAgXIAAnUIDZAAIAAHUQAAAXgIAVQgIAWgQARQgQARgUAIQgUAJgVAAQgUAAgUgJg");
        this.shape_66.setTransform(228.2,246.4);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#F71735").s().p("AgoEhQgUgJgQgRQgQgRgIgWQgIgWAAgXIAAnbIDZAAIAAHbQAAAXgIAWQgIAWgQARQgQARgUAJQgUAIgVAAQgUAAgUgIg");
        this.shape_67.setTransform(228.2,246);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#F71735").s().p("AgoElQgUgJgQgRQgQgRgIgXQgIgWAAgXIAAnjIDZAAIAAHjQAAAXgIAWQgIAXgQARQgQARgUAJQgUAJgVAAQgUAAgUgJg");
        this.shape_68.setTransform(228.2,245.5);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#F71735").s().p("AgoEpQgUgJgQgRQgQgRgIgYQgIgVAAgZIAAnpIDZAAIAAHpQAAAZgIAVQgIAYgQARQgQARgUAJQgUAJgVAAQgUAAgUgJg");
        this.shape_69.setTransform(228.2,245.1);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#F71735").s().p("AgoEuQgUgJgQgSQgQgSgIgXQgIgWAAgZIAAnxIDZAAIAAHxQAAAZgIAWQgIAXgQASQgQASgUAJQgUAJgVAAQgUAAgUgJg");
        this.shape_70.setTransform(228.2,244.6);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#F71735").s().p("AgoEyQgUgJgQgSQgQgSgIgYQgIgWAAgZIAAn4IDZAAIAAH4QAAAZgIAWQgIAYgQASQgQASgUAJQgUAJgVAAQgUAAgUgJg");
        this.shape_71.setTransform(228.2,244.2);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#F71735").s().p("AgoE2QgUgJgQgSQgQgSgIgYQgIgXAAgaIAAn/IDZAAIAAH/QAAAagIAXQgIAYgQASQgQASgUAJQgUAKgVAAQgUAAgUgKg");
        this.shape_72.setTransform(228.2,243.7);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#F71735").s().p("AgoE7QgUgJgQgTQgQgTgIgXQgIgYAAgZIAAoHIDZAAIAAIHQAAAZgIAYQgIAXgQATQgQATgUAJQgUAKgVAAQgUAAgUgKg");
        this.shape_73.setTransform(228.2,243.3);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#F71735").s().p("AgoE/QgUgJgQgUQgQgRgIgaQgIgXAAgaIAAoOIDZAAIAAIOQAAAagIAXQgIAagQARQgQAUgUAJQgUAKgVAAQgUAAgUgKg");
        this.shape_74.setTransform(228.2,242.8);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#F71735").s().p("AgoFEQgUgKgQgTQgQgTgIgZQgIgYAAgaIAAoVIDZAAIAAIVQAAAagIAYQgIAZgQATQgQATgUAKQgUAKgVAAQgUAAgUgKg");
        this.shape_75.setTransform(228.2,242.4);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#F71735").s().p("AgoFIQgUgKgQgUQgQgSgIgaQgIgYAAgbIAAocIDZAAIAAIcQAAAbgIAYQgIAagQASQgQAUgUAKQgUAKgVAAQgUAAgUgKg");
        this.shape_76.setTransform(228.2,241.9);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#F71735").s().p("AgoFNQgUgKgQgVQgQgSgIgaQgIgZAAgaIAAokIDZAAIAAIkQAAAagIAZQgIAagQASQgQAVgUAKQgUAJgVABQgUgBgUgJg");
        this.shape_77.setTransform(228.2,241.5);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#F71735").s().p("AgoFRQgUgKgQgUQgQgUgIgZQgIgZAAgcIAAorIDZAAIAAIrQAAAcgIAZQgIAZgQAUQgQAUgUAKQgUAKgVAAQgUAAgUgKg");
        this.shape_78.setTransform(228.2,241);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#F71735").s().p("AgoFWQgUgLgQgVQgQgTgIgbQgIgZAAgcIAAoxIDZAAIAAIxQAAAcgIAZQgIAbgQATQgQAVgUALQgUAJgVABQgUgBgUgJg");
        this.shape_79.setTransform(228.2,240.6);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#F71735").s().p("AgoFZQgUgKgQgUQgQgUgIgbQgIgaAAgbIAAo6IDZAAIAAI6QAAAbgIAaQgIAbgQAUQgQAUgUAKQgUALgVAAQgUAAgUgLg");
        this.shape_80.setTransform(228.2,240.1);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#F71735").s().p("AgoFeQgUgLgQgVQgQgTgIgbQgIgaAAgdIAApAIDZAAIAAJAQAAAdgIAaQgIAbgQATQgQAVgUALQgUALgVAAQgUAAgUgLg");
        this.shape_81.setTransform(228.2,239.7);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f("#F71735").s().p("AgoFiQgUgKgQgVQgQgVgIgbQgIgaAAgdIAApIIDZAAIAAJIQAAAdgIAaQgIAbgQAVQgQAVgUAKQgUALgVAAQgUAAgUgLg");
        this.shape_82.setTransform(228.2,239.2);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#F71735").s().p("AgoFnQgUgLgQgWQgQgUgIgcQgIgaAAgdIAApPIDZAAIAAJPQAAAdgIAaQgIAcgQAUQgQAWgUALQgUALgVAAQgUAAgUgLg");
        this.shape_83.setTransform(228.2,238.8);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#F71735").s().p("AgoFrQgUgLgQgVQgQgVgIgdQgIgaAAgdIAApXIDZAAIAAJXQAAAdgIAaQgIAdgQAVQgQAVgUALQgUALgVAAQgUAAgUgLg");
        this.shape_84.setTransform(228.2,238.3);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#F71735").s().p("AgoFwQgUgLgQgWQgQgWgIgcQgIgbAAgeIAApdIDZAAIAAJdQAAAegIAbQgIAcgQAWQgQAWgUALQgUAKgVABQgUgBgUgKg");
        this.shape_85.setTransform(228.2,237.9);
        this.shape_85._off = true;

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11,p:{scaleY:0.163,y:275.7}}]},24).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_11,p:{scaleY:1.373,y:275.8}}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_11,p:{scaleY:1.373,y:275.8}}]},1).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.shape_85).wait(99).to({_off:false},0).wait(150).to({_off:true},1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(357.1,280.5,328,186.3);

})(libs_animone = libs_animone||{}, images_animone = images_animone||{}, createjs = createjs||{}, ss = ss||{});
var libs_animone, images_animone, createjs, ss;