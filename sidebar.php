<?php 
	$sidebar_parts = get_post_meta(get_the_ID(), 'Sidebar', TRUE);
	$sidebar_parts = explode(',', $sidebar_parts);
	foreach ($sidebar_parts as $key => $value) {
		get_template_part( "includes/sidebar", $value);
	}
 ?>
<!-- <div class="cat">
	<div class="caption">
		О сайте
	</div>
</div>
<div class="cat single">
	<div class="caption">
		Об авторах
	</div>
</div>
<div class="cat single">
	<div class="caption">
		Партнеры
	</div>
</div>
<div class="cat single">
	<div class="caption">
		Ссылки
	</div>
</div> -->


