
<?php
  /**
  * Retrieve Wordpress latest blog posts.
  * @package Wordpress
  */

  require('../blog/wp-load.php');

  //Load the recent top 10 posts
  query_posts('posts_per_page=3');
 ?>

<?php if (have_posts()) : ?>
  <?php while(have_posts()) : the_post(); ?>
    <div class="blog-post">
      <div class="row">
        <div class="col-xs-8">
          <a class="blog-post-title" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </div>
        <div class="col-xs-4">
          <p class="text-right text-italics"><?php the_time('F jS'); ?>, <?php the_time('Y'); ?></p>
        </div>
      </div>
      <?php the_post_thumbnail(); ?>
      <p class="blog-post-content"><?php the_excerpt(); ?></p>
    </div>
  <?php endwhile; ?>
<?php endif ?>
