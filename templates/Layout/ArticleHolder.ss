<section id="blog"  class="paddingstandard">
<div class="container">
    <article class="article-post">
        <h2 class="title appear" data-animation="translatefrombottom">$Title</h2>
        $Content
        <div class="content">$Content</div>
    </article>
    <% loop $Children %>
        <% include ArticleTeaser %>
    <% end_loop %>
</div>
</section>