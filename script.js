//your JS code here. If required.
let btn=document.querySelector(".btn");
btn.addEventListener("click",function(){
	let devSearch=document.querySelector(".search");
	devSearch.classList.add("active");

	let input1=document.querySelector(".input");
	input1.focus();
})