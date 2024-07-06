const menu=document.getElementById("menu");
const pageLink=document.getElementById("pageLink");
const links=document.querySelectorAll(".page-link ul li")
menu.addEventListener("click",()=>{
    if( pageLink.style.display == "none" ||pageLink.style.display == ""){
        pageLink.style.display="flex"
    }else{
        pageLink.style.display="none"
    }
})

for(var i=0;i<links.length;i++){
    links[i].addEventListener("click",(e)=>{
        links.forEach((link)=>link.classList.remove("active"))
        e.target.classList="active"
    })
}
