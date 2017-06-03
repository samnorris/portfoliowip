<section id="blog"  class="paddingStandard">
<div class="container">
    <h2 class="title appear" data-animation="translatefrombottom">Captain's Log</h2>
<%--    <article class="article-post">
        $Content
        <div class="content">$Content</div>
    </article>--%>
    <% loop $Children %>
        <% include ArticleTeaser %>
    <% end_loop %>
    <div class="col-12 blog-link">
        <a href="{$AbsoluteBaseURL}"><button class="large shake">Back</button></a>
    </div>
</div>
</section>