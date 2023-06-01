const button1 = document.getElementById("clickable1");
const button2 = document.getElementById("clickable2");
 button1.addEventListener("click",()=>{
 const div=document.getElementById("mydiv1");
 const H1=document.createElement("h1");
H1.innerText="pramod";
const H2=document.createElement("h2");
 H2.innerText="pramod";
 const H3=document.createElement("h3");
H3.innerText="pramod";
const H4=document.createElement("h4");
 H4.innerText="pramod";
 const H5=document.createElement("h5");
 H5.innerText="pramod";
 const H6=document.createElement("h6");
 H6.innerText="pramod";
 div.append(H1,H2,H3,H4,H5,H6);
 const div1=document.getElementById("mydiv2");
const h1=document.createElement("h1");
h1.innerText="pramod";
 const h2=document.createElement("h2");
 h2.innerText="pramod";
 const h3=document.createElement("h3");

 h3.innerText="pramod";
const h4=document.createElement("h4");
h4.innerText="pramod";
 const h5=document.createElement("h5");
 h5.innerText="pramod";
 const h6=document.createElement("h6");
 h6.innerText="pramod";
 div1.append(h1,h2,h3,h4,h5,h6);
})



button2.addEventListener("click",()=>{
window.location.reload();
})