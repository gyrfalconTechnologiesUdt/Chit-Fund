$(document) .ready(function(){

//Redrict page Start
$("#addId").click(function(){
    window.location.href = "5_CF_Addmember .html";
}); 
$("#editId1").click(function(){
    window.location.href = "6_CF_Edit.html";
}); 
$("#editId2").click(function(){
    window.location.href = "6_CF_Edit.html";
}); 
$("#createId").click(function(){
    window.location.href = "2_CF_createchit.html";
}); 
$("#listId").click(function(){
    window.location.href = "3_CF_listofChits.html";
}); 
$("#creatClDashBd").click(function(){
    window.location.href = "3_CF_listofchit.html";
}); 
$("#dashboardId").click(function(){
    window.location.href = "1_CF_dashboard.html";
});
$("#chitId").click(function(){
    window.location.href = "2_CF_createchit.html";
});
$("#chitlistId").click(function(){
    window.location.href = "3_CF_listofChits.html";
});
$("#creatClDashBd").click(function(){
    window.location.href = "3_CF_listofChits.html";
});
$("#confirmId").click(function(){
    window.location.href = "4_CF_chitdetails.html";
});
$("#rowId").click(function(){
    window.location.href = "4_CF_chitdetails.html";
});
//Redrict page End

$("#nameId input").focus(function(e){
	
$("#nameLbl").addClass("nameLbl");
});

$("#nameId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#nameLbl").removeClass("nameLbl");
	}
});

$("#mobileId input").focus(function(e){
	
$("#mobileLbl").addClass("mobileLbl");
});

$("#mobileId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#mobileLbl").removeClass("mobileLbl");
	}
});

$("#emailId input").focus(function(e){
	
$("#emailLbl").addClass("emailLbl");
});

$("#emailId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#emailLbl").removeClass("emailLbl");
	}
});


$("#addressId input").focus(function(e){
	
$("#addressLbl").addClass("addressLbl");
});

$("#addressId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#addressLbl").removeClass("addressLbl");
	}
});

$("#totamtId input").focus(function(e){
	
$("#totamtLbl").addClass("totamtLbl");
});

$("#totamtId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#totamtLbl").removeClass("totamtLbl");
	}
});

$("#interestId input").focus(function(e){
	
$("#interestLbl").addClass("interestLbl");
});

$("#interestId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#interestLbl").removeClass("interestLbl");
	}
});

$("#montsId input").focus(function(e){
	
$("#monthsLbl").addClass("monthsLbl");
});

$("#montsId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#monthsLbl").removeClass("monthsLbl");
	}
});

$("#membersId input").focus(function(e){
	
$("#membersLbl").addClass("membersLbl");
});

$("#membersId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#membersLbl").removeClass("membersLbl");
	}
});

$("#aadhornoId input").focus(function(e){
	
$("#aadhornoLbl").addClass("aadhornoLbl");
});

$("#aadhornoId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#aadhornoLbl").removeClass("aadhornoLbl");
	}
});

$("#pannoId input").focus(function(e){
	
$("#pannoLbl").addClass("pannoLbl");
});

$("#pannoId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#pannoLbl").removeClass("pannoLbl");
	}
});

$("#fdateId input").focus(function(e){
	
$("#fdateLbl").addClass("fdateLbl");
});

$("#fdateId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#fdateLbl").removeClass("fdateLbl");
	}
});

$("#tdateId input").focus(function(e){
	
$("#tdateLbl").addClass("tdateLbl");
});

$("#tdateId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#tdateLbl").removeClass("tdateLbl");
	}
});

$("#totvalueId input").focus(function(e){
	
$("#totvalueLbl").addClass("totvalueLbl");
});

$("#totvalueId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#totvalueLbl").removeClass("totvalueLbl");
	}
});

$("#msgBox").hide();
$("#updatedId").click(function(){
	$("#msgBox").show();
});
$("#CloseBut").click(function(){
	$("#msgBox").hide();
});
$( "#delId" ).click(function() {
$( "#conId" ).css("opacity", "0.5");
});  	  

$('.image-carousel').slick({
       slidesToShow: 3,
  slidesToScroll: 1,
   dots: true,
   centerMode: true,
      });
});

