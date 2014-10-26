/*Rajmatie Arjune*/

(function($){
	
	
	/*
	===============================================
	========================= APPLICATION FUNCTIONS	
	*/
	
	
	var checkLoginState = function(){
		$.ajax({
			url: 'xhr/check_login.php',
			type: 'get',
			dataType: 'json',
			success: function(response){
				// if user, loadApp()
				// if error, loadLanding()
			}
		});
	};
	
	

	// 	============================================
	//	SETUP FOR INIT
		
	var init = function(){
	
		checkLoginState();
	};
	
	
	init();
	
	
	/*================== tooltip ============================= */
	
	
	$('.masterTooltip').hover(function(){
		               
		var title = $(this).attr('title');
		$(this).data('tipText', title).removeAttr('title');
		$('<p class="tooltip"></p>')
		.text(title)
		.appendTo('body')
		.fadeIn('slow');
		
	}, function() {
		
		$(this).attr('title', $(this).data('tipText'));
		$('.tooltip').remove();
	}).mousemove(function(e) {
		var mousex = e.pageX + 20;
		var mousey = e.pageY + 10;
		$('.tooltip')
		.css({ top: mousey, left: mousex })
	});

	
		
	/*===================== Add Modal ========================*/
	
	$('.modalClick').on('click', function(event){
		event.preventDefault();
		$('#overlay')
			.fadeIn()
			.find('#modal')
			.fadeIn();
		
		});
		
	$('.close').on('click', function(event){
		event.preventDefault();
		$('#overlay')
		.fadeOut()
		.find('#modal')
		.fadeOut();
		
		});
		
	
	/*================== Tabbed Accordion for Projects ================*/	
	$('#tabs p').hide().eq(0).show();
	$('#tabs p:not(:first)').hide();
	
	$('#tabs-nav li').click(function(e) {
		e.preventDefault();
		$('#tabs p').hide();
		
	$('#tabs-nav .current').removeClass("current");
		$(this).addClass('current');
		var clicked = $(this).find('a:first').attr('href');
		
		$('#tabs ' + clicked).fadeIn('fast');
	}).eq(0).addClass('current');
		
	/*===================== Fade option ========================*/	
	$('.mystatus').mouseover(function(){
	$(this).fadeTo(100, .3);
	
	});
	
	$('.mystatus').mouseout(function(){
	$(this).fadeTo(100, 1);
	});
		
			
	/*===================== Add Projects  =======================*/
			
	$('#addButton').on('click', function() {
		
		var projName = $('#projectName').val(),
		projDesc = $('#projectDescription').val(),
		projDue = $('#projectDueDate').val(),
		status = $('input[name = "status"]:checked').prop("id");
		
		$.ajax({
			url: "xhr/new_project.php",
			type: "post",
			dataType: "json",
			data: {
				projectName: projName,
				projectDescription: projDesc,
				dueDate: projDue,
				status: status
			},
			success: function(response) {
				console.log('Testing for success');
				
				if(response.error) {
					alert(response.error);
				} else {
					window.location.assign("projects.html");
				};
			}
		});
	});  
				
	
		
	
})(jQuery); // end private scope



(function($){
	/*===================== Login ========================*/	
	
	$('#signinButton').click(function(){
		
		var user = $('#user').val();
		var pass = $('#pass').val();
	
		$.ajax({
			url:'xhr/login.php',
			type: 'post',
			dataType: 'json',
			data: {
				username: user,
				password: pass
			},
			success:function(response){
				console.log("test user");
				if (response.error){
					alert(response.error);
				} else {
					window.location.assign("login.html");
				};
		
			}
		});
		
	});
	
	/*===================== Sortable ========================*/
	
	$(function() {
    	$( "#sortable" ).sortable();
    	$( "#sortable" ).disableSelection();
  		});
	
	
	/*===================== Logout ========================*/
	
	$('#logOut').click(function(e){
		e.preventDefault;
		$.get('xhr/logout.php', function(){
			window.location.assign('index.html')
			})
		
		});
		
	
	/*===================== Go to Login page ========================*/
	
	$('#button').click(function(e){
		e.preventDefault;
		$.get('xhr/logout.php', function(){
			window.location.assign('login.html')
			})
		
		});

	/*===================== Go to Register page  ====================*/
	
	$('#button1').click(function(e){
		e.preventDefault;
		$.get('xhr/logout.php', function(){
			window.location.assign('register.html')
			})
		
		});
		
		
	/*======================== Guest Entry ==========================*/
	
	$('#button3').click(function(e){
		e.preventDefault;
		$.get('xhr/login.php', function(){
			window.location.assign('guest.html')
			})
		
		});
	
	/*===================== Go to Dashboard page  ====================*/
	
	$('#button2').click(function(e){
		e.preventDefault;
		$.get('xhr/logout.php', function(){
			window.location.assign('dashboard.html')
			})
		
		});


	/*===================== Register ========================*/
	
	$('#register').on('click', function(){
		var firstname= $('#firstname').val(),
			lastname= $('#lastname').val(),
			email= $('#email').val(),
			telephone= $('#telephone').val(),
			username= $('#username').val(),
			password= $('#password').val();
			
		$.ajax({
			url:'xhr/register.php',
			type: 'post',
			dataType: 'json', 
			data: {
				firstname: firstname,
				lastname: lastname,
				email: email,
				telephone: telephone,
				username: username,
				password: password,
			},
			
			success: function(response){
				if (response.error){
					alert(response.error);
				}else{  
					window.location.assign('index.html');
					}
				}
			});
		});  

	/*================= Go to Projects page ==================*/
	
	$('.projectsbtn').on('click', function(e) {
			e.preventDefault();
			window.location.assign('contact.html');
		});
		
	/*================= Go to task page ==================*/
	
	$('.tasktbtn').on('click', function(e) {
			e.preventDefault();
			window.location.assign('contact.html');
		});
			
	/*================= Go to task page ==================*/
	
	$('.userbtn').on('click', function(e) {
			e.preventDefault();
			window.location.assign('chat.html');
		});
				

	/*================ Register for an account =================*/
	
	$('.signupbtn').on('click', function(e) {
			e.preventDefault();
			window.location.assign('register.html');
		});
		
		
	/*=================== Go to Dashboard  ====================*/
	
	$('.dashboardbtn').on('click', function(e) {
			e.preventDefault();
			window.location.assign('dashboard.html');
		});

	/*================= Sign Out of Projects  ==================*/
	
	$('.signoutdbtn').on('click', function(e) {
			e.preventDefault();
			window.location.assign('index.html');
		});
	
		
		/*================= Date picker ==================*/
		$(function() {
    $( "#datepicker" ).datepicker();
 	 });
	
		/*================= Accordian display ==================*/
	
		$(function() {
		$( "#accordion" ).accordion();
	  });
	  
	  
	  /*======================== Search ============================*/
	  
		$('.search').on('click', function(e) {
			e.preventDefault();
			window.location.assign('results.php');
		});
		
	
	 /*===========================chat =============================*/
	
	  
	  //If user submits the form
	$("#submitmsg").click(function(){	
		var clientmsg = $("#usermsg").val();
		$.post("post.php", {text: clientmsg});				
		$("#usermsg").attr("value", " ");
		return false;
	});
	  
	
	

})(jQuery); // end private scope


	


/* console test */
var a = 10;
var b = 2;
var total = a / b *[5];
console.log("your total is " + total);


