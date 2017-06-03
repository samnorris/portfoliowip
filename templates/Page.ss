<!DOCTYPE html>
<!--[if !IE]><!-->
<html lang="$ContentLocale">
<!--<![endif]-->
<!--[if IE 6 ]><html lang="$ContentLocale" class="ie ie6"><![endif]-->
<!--[if IE 7 ]><html lang="$ContentLocale" class="ie ie7"><![endif]-->
<!--[if IE 8 ]><html lang="$ContentLocale" class="ie ie8"><![endif]-->
<head>
	<% base_tag %>
	<title>$SiteConfig.Title</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	$MetaTags(false)
    <!--\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        Google Fonts
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400" rel="stylesheet" type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet" type='text/css'>

    <!--\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        CSS Files
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

    <link rel='stylesheet prefetch' href='http://code.jquery.com/ui/1.11.0/themes/smoothness/jquery-ui.css'>
    <link href="$ThemeDir/css/bootstrap.min.css" rel="stylesheet">
    <link href="$ThemeDir/css/font-awesome.min.css" type="text/css" rel="stylesheet"/>
    <link href="$ThemeDir/css/owl.carousel.css" rel="stylesheet"/>
    <link href="$ThemeDir/css/owl.theme.default.css" rel="stylesheet"/>
    <link href="$ThemeDir/css/animate.css" rel="stylesheet"/>
    <link href="$ThemeDir/css/owl.custom.transitions.css" rel="stylesheet"/>
    <link href="$ThemeDir/css/jquery.appear.css" rel="stylesheet"/>
    <link href="$ThemeDir/css/social-share.css" rel="stylesheet"/>
    <link href="$ThemeDir/css/normalize.css" rel="stylesheet">
    <link href="$ThemeDir/css/style.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>

    <![endif]-->

    <script src="$ThemeDir/js/libs/modernizr.custom.02583.js" type="text/javascript"></script>

    <link rel="apple-touch-icon" sizes="144x144" href="$ThemeDir/img/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" href="$ThemeDir/img/favicons/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="$ThemeDir/img/favicons/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="$ThemeDir/img/favicons/manifest.json">
    <link rel="mask-icon" href="$ThemeDir/img/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="$ThemeDir/img/favicons/favicon.ico">
    <meta name="msapplication-config" content="$ThemeDir/img/favicons/browserconfig.xml">

</head>
<body onload="init();" class="onePage nonscroll $ClassName<% if not $Menu(2) %> no-sidebar<% end_if %>" <% if $i18nScriptDirection %>dir="$i18nScriptDirection"<% end_if %>>
$Form

<div id="windowloader">
    <div class="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>

<% include Header %>
<% include Navigation %>
	<div>
        $Form
		$Layout
	</div>
<% include Footer %>

<!--\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Script Includes
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<script src='$ThemeDir/js/libs/jquery-1.11.0.min.js' type="text/javascript"></script>
<script src='$ThemeDir/js/libs/jquery-ui.min.js' type="text/javascript"></script>
<script src="$ThemeDir/js/main.js" type="text/javascript"></script>
<script src='$ThemeDir/js/libs/jquery.fittext.js' type="text/javascript"></script>
<script src='$ThemeDir/js/libs/picturefill.min.js' type="text/javascript"></script>
<script src='$ThemeDir/js/libs/autosize.min.js' type="text/javascript"></script>
<script src="$ThemeDir/js/libs/modernizr.custom.02583.js" type="text/javascript"></script>
<script src="$ThemeDir/js/libs/owl.carousel.js" type="text/javascript"></script>
<script src="$ThemeDir/js/device.min.js" type="text/javascript"></script>
<script src="$ThemeDir/js/libs/jquery.appear.js" type="text/javascript"></script>
<script src="$ThemeDir/js/libs/jquery.parallax-1.1.3.js" type="text/javascript"></script>
<script src="$ThemeDir/js/libs/isotope.pkgd.min.js" type="text/javascript"></script>
<script src="$ThemeDir/js/libs/createjs-2015.11.26.min.js"></script>
<script src="$ThemeDir/js/animated-avatar.js" type="text/javascript"></script>
<script src="$ThemeDir/js/process-anim-one.js" type="text/javascript"></script>
<script src="$ThemeDir/js/process-anim-two.js" type="text/javascript"></script>
<script src="$ThemeDir/js/process-anim-three.js" type="text/javascript"></script>
<script src="$ThemeDir/js/sc-player.js" type="text/javascript"></script>
<script src="$ThemeDir/js/soundcloud.player.api.js" type="text/javascript"></script>


<script type="text/javascript">
    function downloadJSAtOnload() {
        var element = document.createElement("script");
        element.src = "$ThemeDir/js/main.js";
        document.body.appendChild(element);
    }
    if (window.addEventListener)
        window.addEventListener("load", downloadJSAtOnload, false);
    else if (window.attachEvent)
        window.attachEvent("onload", downloadJSAtOnload);
    else window.onload = downloadJSAtOnload;


    // --- Initiate SVG Avatar animation ---

    function init() {

        var canvas, stage, exportRoot;

        canvas = document.getElementById("avatar-anim");
        exportRoot = new lib.AnimatedAvatar();

        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();

        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);

        // --- Initiate Process Animation One ---

        canvas = document.getElementById("process-anim-one");
        exportRoot = new libs_animone.processanimone();

        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();

        createjs.Ticker.setFPS(libs_animone.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);

        // --- Initiate Process Animation Two ---

        canvas = document.getElementById("process-anim-two");
        exportRoot = new libs_animtwo.processanimtwo();

        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();

        createjs.Ticker.setFPS(libs_animtwo.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);

        // --- Initiate Process Animation Three ---

        canvas = document.getElementById("process-anim-three");
        exportRoot = new libs_animthree.processanimthree();

        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();

        createjs.Ticker.setFPS(libs_animthree.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }

    window.addEventListener('load', init, false);


</script>

</body>
</html>
