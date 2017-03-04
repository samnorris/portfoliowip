<!--\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    Map section
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

<!--<section id="map">
    <div id="gmap"></div>
</section>-->

<!--\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    Footer
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

<section id="contact">
    <footer id="footer-section" class="footer paddingstandard">
        <h2 class="title appear" data-animation="translatefrombottom">Send me a direct transmission</h2>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <form method="post" action="$ThemeDir/sendEmail.php" onsubmit="return validate_signup(this)">
                        <ul class="contact-form">
                            <li>
                                <div class="col-md-6">
                                    <input name="name" placeholder="Your Name" required="required" size="8" type="text">
                                </div>

                                <div class="col-md-6">
                                    <input name="email" placeholder="Email" required="required" size="8" type="email">
                                </div>
                            </li>

                            <li>
                                <div class="col-md-6">
                                    <input name="telefoon" placeholder="Phone Number" required="required" size="8" type="text">
                                </div>

                                <div class="col-md-6">
                                    <input name="bedrijf" placeholder="Company / Agency" required="required" size="8" type="text">
                                </div>
                            </li>

                            <li>
                                <div class="col-md-5">
                                    <label>Budget Estimate </label>
                                    <div id="slider-range-min"></div>
                                </div>
                                <div class="col-md-3">
                                    <input type="text" id="amount" readonly>
                                </div>
                                <div class="col-md-4">
                                    <input type="text" id="amount" readonly>
                                </div>
                            </li>

                            <li>

                                <div class="col-md-12">
                                    <textarea class="span12" name="details" placeholder="Message / Project Details" required="required"></textarea>
                                </div>
                            </li>

                            <li>
                                <div class="col-md-12">
                                    <button type="submit" class="submit">Launch It</button>
                                </div>
                            </li>


                        </ul>
                    </form>
                </div>
            </div>

            <div class="row powered-by">
                <div class="col-md-12">
                    <span>Proudly supporting NZ business,<br>
                    this website is built on and powered by</span>
                </div>
                <div class="col-md-12">
                    <a href="http://www.silverstripe.org"><img src="$ThemeDir/img/silverstripe-logo.png" alt="Silverstripe Open Source CMS" /></a>
                    </div>
                </div>
            <div class="row crafted-with">
                <div class="col-md-12">
                    <span>...and hand-crafted with a whole lotta</span>
                </div>
                <div class="col-md-12">
                    <div class="heart"></div>
                </div>
            </div>
            <div class="row copyright">
                <div class="col-md-12">
                    <span>Copyright &copy; 2017 At Night</span>
                </div>
            </div>
        </div>
    </footer>
</section>