<article class="article-post">
    <h3><a href="$Link" title="Read more on &quot;{$Title}&quot;">$Title</a></h3>
    <p class="articletext">$Content.Summary(100)</p>
    <div class="article-bottom">
    <div class="latest-from-blog-readmore"><a href="$Link" title="Read more on &quot;{$Title}&quot;">Read more</a></div>
        <div class="latest-from-blog-details">Posted on <span class="date">$Date.Long</span> by $Author</div>

<%--
        <div class="share-links">

            <!-- Facebook -->
            <a href="http://www.facebook.com/sharer.php?u=$AbsoluteLink" title="Facebook Share" rel="nofollow" target="_blank">
                <img alt="Facebook" src="{$BaseHref}{$ThemeDir}/img/facebook.png"/>
            </a>
            <!-- /Facebook -->
            &nbsp;

            <!-- Google+1 -->
            <!-- Place this tag where you want the +1 button to render -->
            <g:plusone annotation="none"></g:plusone>

            <!-- Place this render call where appropriate -->
            <script type="text/javascript">
                (function() {
                    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
                    po.src = 'https://apis.google.com/js/plusone.js';
                    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
                })();
            </script>
            <!-- /Google+1 -->
            &nbsp;

            <!-- Twitter -->
            <a href="https://twitter.com/share" data-count="none"><img alt="Share to Twitter" src="{$BaseHref}{$ThemeDir}/img/twitter.png"/></a>
            <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
            <!-- /Twitter -->
        </div>
--%>

    </div>
</article>