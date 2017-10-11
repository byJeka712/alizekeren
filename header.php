<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<header>
		<div class="top">
			<div class="container">
				<div class="lang">
					<ul>
						<li><a href="">Ru</a></li>
						<li><a href="">En</a></li>
					</ul>
				</div>
				<div class="search">
					<input type="text">
				</div>
				<div class="contacts">
					<a href=""><span class="hidden-xs">Контакты</span><span class="visible-xs"><img src="<?php echo get_template_directory_uri() ?>/img/contacts.png" class="img-responsive" alt=""></span></a>
				</div>
				<br class="hidden-lg hidden-md">
				<div class="cart hvr-buzz-out hidden-xs">
				</div>
				<div class="login hidden-xs"> 
					<?php if(!is_user_logged_in()): ?>
						<a href="#pt-login" class="login_link">Войти</a>|<a href="#pt-register">Регистрация</a>
					<?php else: ?>
						<?php $current_user = wp_get_current_user();
						    echo $current_user->user_login.'<a class="logout_link" href="#logout">выйти</a>'
						 ?>
					<?php endif ?>
				</div>
				<div class="arch hidden-xs">
					<div class="hvr-pop"></div>
					<div class="hvr-pop"></div>
					<div class="hvr-pop"></div>
					<div class="hvr-pop"></div>
				</div>
			</div>
		</div>
		<div class="main">
			<div class="container">
				<div class="logo">
					<img src="<?php echo get_template_directory_uri() ?>/img/logo.png" class="img-responsive" alt="">
				</div>
				<div class="name">
					<h1>СКРИПКА&nbsp <span class="hidden-xs">•</span><br class="visible-xs"> ДЖАЗ&nbsp<span class="hidden-xs">•</span><br class="visible-xs"> ТВОРЧЕСТВО
					<h2>Слушать и играть музыку души</h2></h1>
				</div>
				<div class="deviz">
					
				</div>
			</div>
		</div>
		<!-- <nav class="navbar navbar-default">
		  <div class="container">
		    <div class="navbar-header">
		      <button type="button" class="navbar-toggle collapsed p0" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		        <span class="sr-only">Toggle navigation</span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		      </button>
		    </div>
		    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul class="nav navbar-nav col-xs-12">
		        <li class="active"><a href="#">Главная</a></li>
		        <li><a href="#">Ализа&nbspКерен<br class="hidden-xs"> о&nbspсебе</a><span class="icon  hidden-xs"></span></li>
		        <li><a href="#">Музыка<br class="hidden-xs"> онлайн</a><span class="icon hidden-xs"></span></li>
		        <li><a href="#">Музыкальный<br class="hidden-xs"> магазин</a><span class="icon  hidden-xs"></span></li>
		        <li><a href="#">Музыкальная<br class="hidden-xs"> школа</a><span class="icon  hidden-xs"></span></li>
		        <li><a href="#">Студии<br class="hidden-xs"> звукозаписи</a><span class="icon  hidden-xs"></span></li>
		        <li><a href="#">Музыкальные<br class="hidden-xs"> статьи</a><span class="icon  hidden-xs"></span></li>
		        <li><a href="#">Творческие<br class=" hidden-xs"> проекты</a><span class="icon hidden-xs"></span></li>
		        <li class="visible-xs"><div class="login"><a href="">Войти</a><span class="separate">|</span><a href="">Регистрация</a></div></li>
				</div></li>
		      </ul>
		    </div>
		  </div>
		</nav> -->
		<nav class="navbar navbar-default">
		  <div class="container">
			<?php ubermenu( 'main' , array( 'menu' => 2 ) ); ?>
		  </div>
		</nav>  		
	</header>