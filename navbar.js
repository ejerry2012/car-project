function toggleMenu() {
    let linkDiv = document.getElementById("mobile-link");
     if (linkDiv.style.display !== "block") {
        linkDiv.style.display = "block";
        document.getElementById("menu").innerHTML = '<i class="fa fa-times"></i>';
     }
     else {
        linkDiv.style.display = "none";
        document.getElementById("menu");
        document.getElementById("menu").innerHTML = '<i class="fa fa-bars"></i>';
     }
} 

const accordionContent = document.querySelectorAll(".accordion-content")

accordionContent.forEach((item, index) => {
   let header = item.querySelector("header");
   header.addEventListener("click", () =>{
item.classList.toggle("open");
  
let description = item.querySelector(".description");

if(item.classList.contains ("open")){
   description.style.height =   `${description.scrollHeight}px`;
   item.querySelector("i").classList.replace("fa-plus", "fa-minus");
}else{
   description.style.height = "0px";
   item.querySelector("i").classList.replace("fa-minus", "fa-plus");
}
removeOpen(index);

}) 
   
})

function removeOpen(index1){
 accordionContent.forEach((item2, index2) =>  {
if(index1 != index2){
  item2.classList.remove("open"); 
let des = item2.querySelector(".description"); 
des.style.height = "0px";
item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
}
 })
}