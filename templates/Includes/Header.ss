<!--\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Loader
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

<%--<div id="windowloader">
    <div class='loading'></div>
</div>--%>

<!--\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Header
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

<a href="#" class="open">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="triangle-container">
        <div class="triangle"></div>
    </div>
</a>
<a href="#cl" class="close hidden"><div class="close-icon"></div></a>

<div class="mobile-menu">
    <a href="#about" data-scrollto="#about">The Man</a>
    <a href="#services" data-scrollto="#services">The Plan</a>
    <a href="#work">My Work</a>
    <a href="#process">My Process</a>
    <a href="#blog">Blog</a>
    <a href="#contact">Contact</a>
    <hr class="music-top"/>
    <div class="music textcenter">
        <span><i class="fa fa-headphones"></i><br>Jamming to</span><a href="#">"Positivity"</a>by <span class="artist">Wun Two</span>
        </ul>
    </div>
</div>

<header id="mainheader" class="centerContainer aligncenter fullScreen tintBackground" style="z-index:1">
    <div>
        <!-- Begin Header animation -->
        <div class="stars"></div>
        <div class="twinkling"></div>
        <!--<div class="glitch"></div>-->
        <!-- End Header animation -->
        <div class="container">
            <!-- Logo-->
            <!--             <div class="logo"><img alt="" src="img/logo.png"></div>-->
            <!-- Intro text-->
            <!--            <h1>At night we dream of chaos</h1>-->
            <!-- Intro-->
            <div class="row">

                <div class="hidden-xs col-md-12">
                   <div class="header-caption-1">
                    <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                         width="100%" height="110px" viewBox="0 0 375 110">

                        <defs>

                            <filter id="filter">
                                <feFlood flood-color="black" result="black" />
                                <feFlood flood-color="red" result="flood1" />
                                <feFlood flood-color="limegreen" result="flood2" />
                                <feOffset in="SourceGraphic" dx="3" dy="0" result="off1a"/>
                                <feOffset in="SourceGraphic" dx="2" dy="0" result="off1b"/>
                                <feOffset in="SourceGraphic" dx="-3" dy="0" result="off2a"/>
                                <feOffset in="SourceGraphic" dx="-2" dy="0" result="off2b"/>
                                <feComposite in="flood1" in2="off1a" operator="in"  result="comp1" />
                                <feComposite in="flood2" in2="off2a" operator="in" result="comp2" />

                                <feMerge x="0" width="100%" result="merge1">
                                    <feMergeNode in = "black" />
                                    <feMergeNode in = "comp1" />
                                    <feMergeNode in = "off1b" />

                                    <animate
                                            attributeName="y"
                                            id = "y"
                                            dur ="4s"

                                            values = '104px; 104px; 30px; 105px; 30px; 2px; 2px; 50px; 40px; 105px; 105px; 20px; 6ßpx; 40px; 104px; 40px; 70px; 10px; 30px; 104px; 102px'

                                            keyTimes = '0; 0.362; 0.368; 0.421; 0.440; 0.477; 0.518; 0.564; 0.593; 0.613; 0.644; 0.693; 0.721; 0.736; 0.772; 0.818; 0.844; 0.894; 0.925; 0.939; 1'

                                            repeatCount = "indefinite" />

                                    <animate attributeName="height"
                                             id = "h"
                                             dur ="4s"

                                             values = '10px; 0px; 10px; 30px; 50px; 0px; 10px; 0px; 0px; 0px; 10px; 50px; 40px; 0px; 0px; 0px; 40px; 30px; 10px; 0px; 50px'

                                             keyTimes = '0; 0.362; 0.368; 0.421; 0.440; 0.477; 0.518; 0.564; 0.593; 0.613; 0.644; 0.693; 0.721; 0.736; 0.772; 0.818; 0.844; 0.894; 0.925; 0.939; 1'

                                             repeatCount = "indefinite" />
                                </feMerge>


                                <feMerge x="0" width="100%" y="60px" height="65px" result="merge2">
                                    <feMergeNode in = "black" />
                                    <feMergeNode in = "comp2" />
                                    <feMergeNode in = "off2b" />

                                    <animate attributeName="y"
                                             id = "y"
                                             dur ="4s"
                                             values = '103px; 104px; 69px; 53px; 42px; 104px; 78px; 89px; 96px; 100px; 67px; 50px; 96px; 66px; 88px; 42px; 13px; 100px; 100px; 104px;'

                                             keyTimes = '0; 0.055; 0.100; 0.125; 0.159; 0.182; 0.202; 0.236; 0.268; 0.326; 0.357; 0.400; 0.408; 0.461; 0.493; 0.513; 0.548; 0.577; 0.613; 1'

                                             repeatCount = "indefinite" />

                                    <animate attributeName="height"
                                             id = "h"
                                             dur = "4s"

                                             values = '0px; 0px; 0px; 16px; 16px; 12px; 12px; 0px; 0px; 5px; 10px; 22px; 33px; 11px; 0px; 0px; 10px'

                                             keyTimes = '0; 0.055; 0.100; 0.125; 0.159; 0.182; 0.202; 0.236; 0.268; 0.326; 0.357; 0.400; 0.408; 0.461; 0.493; 0.513;  1'

                                             repeatCount = "indefinite" />
                                </feMerge>

                                <feMerge>
                                    <feMergeNode in="SourceGraphic" />

                                    <feMergeNode in="merge1" />
                                    <feMergeNode in="merge2" />

                                </feMerge>
                            </filter>

                        </defs>

                        <g>
                            <text class="svg" x="0" y="100">AT NIGHT</text>
                        </g>
                    </svg>
                  </div>
                </div>
              </div>

            <div class="row">
                <div class="col-md-12">
                    <div data-text="WE DREAM" class="glitch glitch--v1">OF CHAOS</div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-10 col-md-offset-1 arrow-down">
                    <a class="fa fa-angle-down" href="#" data-scrollto="#about"></a>
                </div>
            </div>


           </div>
        </div>
    </div>
    <!--                  <h2 id="shake">CRAFT experiences that <strong>defy</strong> expectations<br/>
                                     CREATE from the the twin <strong>virtues</strong> of inspiration and innovation<br/>
                                     BEAUTY in simplicity and complexity <strong>combined</strong> to create harmonious synthesis in all things digital
                      </h2>-->

</header>