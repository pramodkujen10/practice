const data=[
    
    {
    image:"https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg",
    title:"Chicken Biryani",
    data:"PRICE:-$100 ,RATING:-* * * * *,"
    },
    {
    image:"https://www.cookwithnabeela.com/wp-content/uploads/2023/03/MuttonBiryani.webp",
    title:"Mutton Biryani",
    data:"PRICE:-$150 ,RATING:-* * * * * *"
    },
    {
    
    image:"https://slurrp.club/wp-content/uploads/2021/10/DSC_0037-2-750x541.jpg",
    title:"Vegetable Biryani",
    data:"PRICE:-$50 ,RATING:-* * * * "
    },
   ];
   const recipe=document.getElementById("Restauraunt");
   for(let i=0;i<data.length;i++){
    const food=document.createElement("div");
    const imge=document.createElement("img");
    imge.src=data[i].image;
    const tile=document.createElement("h2");
    tile.innerText=data[i].title;
    
    const fdet=document.createElement("p");
    fdet.innerText=data[i].data;
    fdet.style.display="none";
    const btn1= document.createElement("button");
    btn1.innerText="Click for more";
    const btn2=document.createElement("button");
    btn2.innerText="Close it";
    btn1.addEventListener("click",()=>{
    if(fdet.style.display==="none"){
    
    fdet.style.display="block";
    }
    else{
    fdet.style.display="block";
    }
    });
    btn2.addEventListener("click",()=>{
    if(fdet.style.display==="block"){
    fdet.style.display="none";
    }
    else{
    fdet.style.display="block";
    }
    });
    food.append(imge,tile,fdet,btn1,btn2);
    recipe.append(food);
   }
   