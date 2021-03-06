
<%@ page language="java" contentType="text/html"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="css/bootstrap.minar.css">
<link rel="stylesheet" href="css/font-awesome.min.css">
<link rel="stylesheet" href="css/animate.min.css">

<link href="css/owl.carousel.css" rel="stylesheet">
<link href="css/owl.theme.css" rel="stylesheet">
<link href="css/owl.transitions.css" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
<meta name="viewport" content="width=device-width, initial-scale=1">

</head>

<div class="navbar-wrapper">
	<div class="container-fluid">
		<nav class="navbar navbar-fixed-top">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed"
						data-toggle="collapse" data-target="#navbar" aria-expanded="false"
						aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span> <span
							class="icon-bar"></span> <span class="icon-bar"></span> <span
							class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#">الشعار </a>
				</div>
				<div id="navbar" class="navbar-collapse collapse">
					<ul class="nav navbar-nav pull-right">
						<li class="active"><a href="index.jsp" class="">الرئيسية</a></li>
						<li><a href="#" class="">سياسة الخصوصية</a></li>
						<li><a href="main.jsp" class="">المهمات </a></li>
						<li><a href="#" class="">شروط الخدمات </a></li>
						<li><a href="setting.html" class="">الإعدادات</a></li>
						<li><a href="contact us.html" class="">تواصل معنا</a></li>
					</ul>
					<ul class="nav navbar-nav pull-left">
						<button type="button" class="btn btn-warning" data-toggle="modal"
							data-target="#login">تسجيل الدخول</button>
						<button type="button" class="btn btn-warning" data-toggle="modal"
							data-target="#registration">التسجيل</button>


						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</div>

<!-- ========================================log in  model================================================-->
<div class="modal fade" id="login" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">تسجيل الدخول</h4>
			</div>
			<div class="modal-body">

				<div class="row">
					<div
						class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
						<form role="form" name="login" action="User/UserServlet"
							method="post">
							<fieldset>
								<h2>سجل دخولك</h2>
								<hr class="colorgraph">
								<div class="form-group">
									<input type="email" name="${Constants.email}" id="email"
										class="form-control input-lg" placeholder="البريد الالكتروني">
								</div>
								<div class="form-group">
									<input type="password" name="${Constants.password}"
										id="password" class="form-control input-lg"
										placeholder="كلمة السرر ">
								</div>
								<span class="button-checkbox">
									<button type="button" class="btn" data-color="info">تذكرني</button>
									<input type="checkbox" name="${Constants.rememberme}"
									id="remember_me" checked="checked" class="hidden"> <a
									href="" class="btn btn-link pull-right">هل نسيت كلمة
										المرور؟</a>
								</span>
								<hr class="colorgraph">
								<div class="row">

									<div class="col-xs-12 col-sm-12 col-md-12">
										<input type="submit" class="btn btn-lg btn-success btn-block"
											value="دخول">
									</div>
								</div>
							</fieldset>
						</form>
					</div>

				</div>

			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">اغلاق</button>
			</div>
		</div>

	</div>
</div>
<!--   ======================================== registration model  ========================================-->
<div class="modal fade" id="registration" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">التسجيل</h4>
			</div>
			<div class="modal-body">

				<div class="row">
					<div
						class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
						<form role="form" action="User/UserServlet"
							method="post">
							<fieldset>
								<h2>التسجل في الموقع</h2>
								<hr class="colorgraph">
								<div class="form-group">
									<input type="text" name="${Constants.name}" id="fname"
										class="form-control input-lg" placeholder="اسمك">
								</div>
								<div class="form-group">
									<input type="text" name="${Constants.name}" id="lname"
										class="form-control input-lg" placeholder="اسم العائلة">
								</div>
								<div class="form-group">
									<input type="email" name="${Constants.email}" id="email"
										class="form-control input-lg" placeholder="الايميل">
								</div>
								<div class="form-group">
									<input type="hidden" value="${Constants.put}"
										name="${Constants.put}" /> <input type="password"
										name="${Constants.password}" id="password"
										class="form-control input-lg" placeholder="كلمة السر">
								</div>

								<hr class="colorgraph">
								<div class="row">

									<div class="col-xs-12 col-sm-12 col-md-12">
										<input type="submit" class="btn btn-lg btn-success btn-block"
											value="تسجيل ">
									</div>
								</div>
							</fieldset>
						</form>
					</div>

				</div>

			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">اغلاق</button>
			</div>
		</div>

	</div>
</div>

<!--   ======================================== registration model  ========================================-->


<!-- Carousel -->
<div id="carousel-example-generic" class="carousel slide"
	data-ride="carousel">
	<!-- Indicators -->
	<ol class="carousel-indicators">
		<li data-target="#carousel-example-generic" data-slide-to="0"
			class="active"></li>
		<li data-target="#carousel-example-generic" data-slide-to="1"></li>
		<li data-target="#carousel-example-generic" data-slide-to="2"></li>
	</ol>
	<!-- Wrapper for slides -->
	<div class="carousel-inner">
		<div class="item active">
			<img src="img/slider/1.png" alt="First slide">
			<!-- Static Header -->
			<div class="header-text">
				<div class="col-md-12 text-center">
					<h2>
						<span class="wow fadeIn animated" data-wow-delay="0.6s"
							style="visibility: visible; animation-delay: 0.6s; animation-name: fadeIn;">
							الان اربح <strong>الاموال</strong>
						</span>
					</h2>
					<br>
					<div class="">
						<button type="button"
							class="btn btn-theme btn-sm btn-min-block wow shake animated"
							data-wow-delay="0.6s"
							style="visibility: visible; animation-delay: 0.6s; animation-name: pulse;"
							data-toggle="modal" data-target="#login" href="#">سجل
							دخول</button>
						<button ype="button"
							class="btn btn-theme btn-sm btn-min-block wow shake animated"
							data-wow-delay="0.6s"
							style="visibility: visible; animation-delay: 0.6s; animation-name: pulse;"
							data-toggle="modal" data-target="#registration" href="#">التسجيل
						</button>
					</div>
				</div>
			</div>
			<!-- /header-text -->
		</div>
		<div class="item">
			<img src="img/slider/2.png" alt="Second slide">
			<!-- Static Header -->
			<div class="header-text">
				<div class="col-md-12 text-center">
					<h2>
						<span class=" wow fadeIn animated" data-wow-delay="0.6s"
							style="visibility: visible; animation-delay: 0.6s; animation-name: fadeIn;">
							انطلق لاتضيع الوقت </span>
					</h2>
					<br>

					<button type="button"
						class="btn btn-theme btn-sm btn-min-block wow shake animated"
						data-wow-delay="0.6s"
						style="visibility: visible; animation-delay: 0.6s; animation-name: pulse;"
						data-toggle="modal" data-target="#login" href="#">سجل
						دخول</button>
					<button ype="button"
						class="btn btn-theme btn-sm btn-min-block wow shake animated"
						data-wow-delay="0.6s"
						style="visibility: visible; animation-delay: 0.6s; animation-name: pulse;"
						data-toggle="modal" data-target="#registration" href="#">التسجيل
					</button>
				</div>
			</div>
			<!-- /header-text -->
		</div>
		<div class="item">
			<img src="img/slider/3.png" alt="Third slide">
			<!-- Static Header -->
			<div class="header-text">
				<div class="col-md-12 text-center">
					<h2>
						<span class=" wow fadeIn animated" data-wow-delay="0.6s"
							style="visibility: visible; animation-delay: 0.6s; animation-name: fadeIn;">انضم
							الينا كناشر</span>
					</h2>
					<br> <br>
					<button type="button"
						class="btn btn-theme btn-sm btn-min-block wow shake animated"
						data-wow-delay="0.6s"
						style="visibility: visible; animation-delay: 0.6s; animation-name: pulse;"
						data-toggle="modal" data-target="#login" href="#">سجل
						دخول</button>
					<button ype="button"
						class="btn btn-theme btn-sm btn-min-block wow shake animated"
						data-wow-delay="0.6s"
						style="visibility: visible; animation-delay: 0.6s; animation-name: pulse;"
						data-toggle="modal" data-target="#registration" href="#">التسجيل
					</button>
				</div>
			</div>
			<!-- /header-text -->
		</div>
	</div>
	<!-- Controls -->
	<a class="left carousel-control" href="#carousel-example-generic"
		data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span>
	</a> <a class="right carousel-control" href="#carousel-example-generic"
		data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span>
	</a>
</div>
<!-- /carousel -->


<!--Card image-->
<!--/.Card image-->

<!--Card content-->


<section class="About">
	<div class="container">
		<div class="row">
			<div class="col-md-12 col-lg-12 fadeInLeft my-animation animated">
				<div class="text-carousel">
					<div class="tc-content">
						<!-- Review -->
						<div class="section-title2">ما هو برنامج اسم المشروع ؟</div>
						<div class="row">
							<div class="col-md-10 col-md-offset-1  ">
								<div class="affiliatex">
									<p>أختبار , أختبار , أختبار , أختبار , أختبار , أختبار ,
										أختبار , أختبار , أختبار , أختبار , أختبار , أختبار ,</p>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="arrows-moves"></div>
</section>

<!--/.Card content-->
<section class="cards">
	<div class="container">
		<div class="row">
			<div class="col-md-12 col-lg-12 fadeInLeft my-animation animated">

				<!-- Review -->
				<div class="section-title2">لماذا نحن؟</div>
				<div class="row">
					<div class="col-md-4 col-sm-6 box ">
						<div class="artwork">
							<img src="img/cash.png" alt="blue">
						</div>
						<div class="titles">عمولة مجزية</div>
						<p>احصل على عمولة تصل إلى 5 جنيهات لكل مستخدم جديد</p>
					</div>

					<!-----2nd------>

					<div class="col-md-4 col-sm-6 box ">
						<div class="artwork">
							<img src="img/compass.png" alt="blue">
						</div>
						<div class="titles">احتساب لجميع الحركات</div>
						<p>احصل على عمولة على كل خطوة يقوم بها المستخدم وليس على
							التسجيل المبدئي</p>
					</div>

					<!------3rd------>

					<div class="col-md-4 col-sm-6 box ">
						<div class="artwork">
							<img src="img/earth-globe.png" alt="blue">
						</div>
						<div class="titles">أسواق مختلفة</div>
						<p>نتواجد في 5 دول عربية ونسعى داوماً لدخول أسواق جديدة
							وبميزات اروع</p>
					</div>

					<!------4rd------>

					<div class="col-md-4 col-sm-6 box ">
						<div class="artwork">
							<img src="img/package.png" alt="blue">
						</div>
						<div class="titles">شاهد مكسبك</div>
						<p>راقب التسجيلات والعمولة والمكسب لحظة بلحظه دون اي متاعب</p>
					</div>

					<!------5rd------>

					<div class="col-md-4 col-sm-6 box ">
						<div class="artwork">
							<img src="img/help.png" alt="blue">
						</div>
						<div class="titles">دعم متخصص</div>
						<p>سيساعدك مدير حسابك بكل ما يلزمك لتحقيق أرباحك وتتبع عمولاتك
						</p>
					</div>

					<!------6rd------>

					<div class="col-md-4 col-sm-6 box ">
						<div class="artwork">
							<img src="img/settings.png" alt="blue">
						</div>
						<div class="titles">مواد تسويقية متنوعة</div>
						<p>مواد دعائية اختيرت بعناية لتساعدك في جلب المزيد من
							التسجيلات</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="adv">
	<div class="container">
		<div class="row">
			<div id="owl-demo" class="owl-carousel">
				<div class="item owl">
					<div>
						<img class="arts" src="img/shield.png" alt="blue">
					</div>
					<p>تعاملات آمنه</p>
				</div>
				<div class="item owl">
					<div>
						<img class="arts" src="img/target.png" alt="blue">
					</div>
					<p>معنا ستحقق اهدافك</p>
				</div>
				<div class="item owl">
					<div>
						<img class="arts" src="img/deal.png" alt="blue">
					</div>
					<p>مواد تسويقية متنوعة</p>
				</div>
				<div class="item owl">
					<div>
						<img class="arts" src="img/rocket.png" alt="blue">
					</div>
					<p>مواد تسويقية متنوعة</p>
				</div>
				<div class="item owl">
					<div class="col-md-4 col-sm-6 box ">
						<div class="arts">
							<img src="" alt="blue">
						</div>
						<p>مواد تسويقية متنوعة</p>
					</div>
				</div>

				<div class="item owl">
					<img class="lazyOwl" data-src="assets/owl5.jpg"
						alt="Lazy Owl Image">
				</div>
				<div class="item owl">
					<img class="lazyOwl" data-src="assets/owl6.jpg"
						alt="Lazy Owl Image">
				</div>
				<div class="item owl">
					<img class="lazyOwl" data-src="assets/owl7.jpg"
						alt="Lazy Owl Image">
				</div>
			</div>
		</div>
	</div>

</section>

<!-- ================ INICIA FORMULARIO DE LOGIN ============================================================== -->

<script src="js/jquery-1.11.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.flexslider.js"></script>
<script src="js/wow.min.js"></script>
<script src="js/anim.js"></script>
<script src="js/owl.carousel.js"></script>

<script>
	$(document).ready(function() {

		$("#owl-demo").owlCarousel({
			items : 3,
			lazyLoad : true,
			navigation : false
		});

	});
</script>

</body>
</html>
