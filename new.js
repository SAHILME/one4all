var userName1 = document.getElementById("name1");
var pass1 = document.getElementById("id1");
var mainText1 = document.getElementById("order1");
var submitBtn1 = document.getElementById("submit");

function submitClick1(){
	
    var firebaseRef = firebase.database().ref();
	
	var name = userName1.value;
	firebaseRef.push().set("NAME : "+name);
	
	var passw = pass1.value;
	firebaseRef.push().set("ID : "+passw);
	
	var msgText = mainText1.value;
	firebaseRef.push().set("TEXT : "+msgText);
	

 }
 
var userName2 = document.getElementById("name2");
var pass2 = document.getElementById("id2");
var mainText2 = document.getElementById("order2");
var submitBtn2 = document.getElementById("submit2");

function submitClick2(){
	
    var firebaseRef = firebase.database().ref();
	
	var name2 = userName2.value;
	firebaseRef.push().set("NAME : "+name2);
	
	var passw2 = pass2.value;
	firebaseRef.push().set("ID : "+passw2);
	
	var msgText2 = mainText2.value;
	firebaseRef.push().set("TEXT : "+msgText2);
	

 }
 
 var userName3 = document.getElementById("name3");
var pass3 = document.getElementById("id3");
var mainText3 = document.getElementById("order3");
var submitBtn3 = document.getElementById("submit3");
var place = document.getElementById("place");
var mob = document.getElementById("mobile");

function submitClick3(){
	
    var firebaseRef = firebase.database().ref();
	
	var name3 = userName3.value;
	firebaseRef.push().set("NAME : "+name3);
	
	var passw3 = pass3.value;
	firebaseRef.push().set("ID : "+passw3);
	
	var msgText3 = mainText3.value;
	firebaseRef.push().set("TEXT : "+ msgText3);
	
	var pl = place.value;
	firebaseRef.push().set("Place : "+pl);
	
	var mobile = mob.value; 
	firebaseRef.push().set("Mobile : "+mobile);
	

 }
 
 
