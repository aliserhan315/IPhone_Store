var username = prompt("Enter your name: ");
alert('Hello'+' '+username+','+"\r"+'this'+' '+'website'+' '+'is'+' '+'about'+' '+'Apple'+' '+'products'+' '+'(iPhones'+','+' '+'watches'+','+' '+'Macbooks'+').'+' '+'you'+' '+'can'+' '+'explore'+' '+'the'+' '+'specifications'+' '+'of'+' '+'each'+' '+'version'+' '+'of'+' '+'them.');

function hello(){
 var button = document.getElementsByClassName("hello");
 var show = document.getElementById("main");
 if (show.style.display = "none") {
	show.style.display = "block";
	} 
}
function hide(){
 var button = document.getElementsByClassName("helloz");
 var show = document.getElementById("main");
 if (show.style.display = "block") {
	show.style.display = "none";
	} 

}
