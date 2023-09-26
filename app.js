const wrapper = document.querySelector(".slider-wrapper") ;  
const menuitem = document.querySelectorAll(".menu-item") ;  

const product = [
    {
        id:1 , 
        title:"Air Max" , 
        price:225 , 
        colors : [
        {
        code:"white" , 
        img: "img/airmax.png"
        } ,
        {
        code:"black" , 
        img:"img/airmax 2.webp"
        } 
        ] ,  
    },
    {
        id:1 , 
        title:"Jordan" , 
        price:325 , 
        colors : [
        {
        code:"orange" , 
        img: "img/basket.png"
        } ,
        {
        code:"black" , 
        img:"img/basket2.png"
        } 
        ] ,  
    },
    {
        id:1 , 
        title:"Football" , 
        price:320 , 
        colors : [
        {
        code:"pink" , 
        img: "img/mercurial.png"
        } ,
        {
        code:"blue" , 
        img:"img/mercurial 2.webp"
        } 
        ] ,  
    },
    {
        id:1 , 
        title:"Blazzer" , 
        price:205 , 
        colors : [
        {
        code:"Blue" , 
        img: "img/blazer.png"
        } ,
        {
        code:"green" , 
        img:"img/blazzer2.png"
        } 
        ] ,  
    },
    {
        id:1 , 
        title:"Zoomx" , 
        price:215 , 
        colors : [
        {
        code:"skyblue" , 
        img: "img/zoomx.png"
        } ,
        {
        code:"deeppink" , 
        img:"img/zoomx2.png"
        } 
        ] ,  
    },
]

let choosenproduct=product[0]  
const currentpimg = document.querySelector(".p-img") ; 
const currentptitle=document.querySelector(".p-title") ; 
const currentpprice=document.querySelector(".p-price") ; 
const currentpcolors=document.querySelectorAll(".color") ; 
const currentpsizes=document.querySelectorAll(".size") ;


menuitem.forEach((item,index)=>{ 
    item.addEventListener("click" , () => { 
    // console.log("you clicked here !" + index) ; 
    //change the current slide
    wrapper.style.transform=`translateX(${-100*index}vw)` ;  
    // `` => when we use with strings  
    choosenproduct=product[index] ; 
    //change current product title and price and img    
    currentptitle.textContent=choosenproduct.title ; 
    currentpprice.textContent="$" + choosenproduct.price ;
    currentpimg.src=choosenproduct.colors[0].img ; 
    //assining new colors  
    currentpcolors.forEach((color,index) => { 
    color.style.backgroundColor=choosenproduct.colors[index].code ; 
    }); 
    //can be with diffrent names 
    // currentproductcolors.forEach((rang,i) =>{  
    // rang.style.backgroundColor=choosenproduct.colors[i].code ; 
    // }) ;
    })
    }); 
    currentpcolors.forEach((color,index) => { 
    color.addEventListener("click" , () =>{
    currentpimg.src=choosenproduct.colors[index].img ;   
    })
    }) ;
    currentpsizes.forEach((size,index) =>{ 
    size.addEventListener("click" , () =>{  
    currentpsizes.forEach((size) => { 
        size.style.backgroundColor="white" ; 
        size.style.color="black" ; 
    })  ;   
    size.style.backgroundColor="black" ; 
    size.style.color="white" ; 
     });
    }) ;