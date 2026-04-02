function wloNavMenu(p) {
if (typeof p === "undefined") {
	p="";
}
document.getElementById("nav").innerHTML =
"<ul id='menu' style='list-style-type:none'>" +
"<li><a href='"+p+"../index.html'>Home</a></li>"+
"<li><a href='"+p+"../objects/Objects_TOC.html'>Objects</a></li>" +
"<li><a href='"+p+"../maths/Maths_TOC.html'>Maths</a></li>" +
"<li><a href='"+p+"../demography/Demography_TOC.html'>Demography</a></li>"+
"</ul>"; 
}
