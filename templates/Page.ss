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

    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic' rel='stylesheet' type='text/css'>
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
    <link href="$ThemeDir/css/normalize.css" rel="stylesheet">
    <link href="$ThemeDir/css/style.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>

    <![endif]-->

    <script src="$ThemeDir/js/libs/modernizr.custom.02583.js" type="text/javascript"></script>
	<link rel="shortcut icon" href="$ThemeDir/img/favicon.ico" />
</head>
<body class="onePage $ClassName<% if not $Menu(2) %> no-sidebar<% end_if %>" <% if $i18nScriptDirection %>dir="$i18nScriptDirection"<% end_if %>>
<% include Header %>
<% include Navigation %>
	<div>
		$Layout
	</div>
<% include Footer %>

<!--\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Script Includes
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<script src='$ThemeDir/js/libs/jquery-2.1.3.min.js' type="text/javascript"></script>
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
</script>

</body>
</html>
