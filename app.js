const elementh=document.getElementById("hydrogen");
const elementli=document.querySelector(".li");
const elementhe=document.querySelector(".he");
const elementbe=document.querySelector(".be");
const elementb=document.querySelector(".bo");
const elementc=document.querySelector(".c");

// const elementn=document.querySelector(".n");
// const elemento=document.querySelector(".o");
// const elementf=document.querySelector(".f");
// const elementne=document.querySelector(".ne");
// const elementna=document.querySelector(".na");
// const elementmg=document.querySelector(".mg");
// const elemental=document.querySelector(".al");
// const elementsi=document.querySelector(".si");
// const elementp=document.querySelector(".p");
// const elements=document.querySelector(".s");
// const elementcl=document.querySelector(".cl");
// const elementar=document.querySelector(".ar");
// const elementk=document.querySelector(".k");
// const elementca=document.querySelector(".ca");
// const elementsc=document.querySelector(".sc");
// const elementti=document.querySelector(".ti");
// const elementv=document.querySelector(".v");
// const elementcr=document.querySelector(".cr");
// const elementmn=document.querySelector(".mn");
// const elementfe=document.querySelector(".fe");
// const elementco=document.querySelector(".co");
// const elementni=document.querySelector(".ni");
// const elementcu=document.querySelector(".cu");
// const elementzn=document.querySelector(".zn");
// const elementga=document.querySelector(".ga");
// const elementge=document.querySelector(".ge");
// const elementas=document.querySelector(".as");
// const elementse=document.querySelector(".se");
// const elementbr=document.querySelector(".br");
// const elementkr=document.querySelector(".kr");
// const elementrb=document.querySelector(".rb");
// const elementsr=document.querySelector(".sr");
// const elementy=document.querySelector(".y");
// const elementzr=document.querySelector(".zr");
// const elementnb=document.querySelector(".nb");
// const elementc=document.querySelector(".carbon");
// const elementh=document.getElementById("hydrogen");
// const elementli=document.querySelector(".li");
// const elementhe=document.querySelector(".he");
// const elementbe=document.querySelector(".be");
// const elementb=document.querySelector(".bo");
// const elementc=document.querySelector(".carbon");
// const elementh=document.getElementById("hydrogen");
// const elementli=document.querySelector(".li");
// const elementhe=document.querySelector(".he");
// const elementbe=document.querySelector(".be");
// const elementb=document.querySelector(".bo");
// const elementc=document.querySelector(".carbon");
// const elementh=document.getElementById("hydrogen");
// const elementli=document.querySelector(".li");
// const elementhe=document.querySelector(".he");
// const elementbe=document.querySelector(".be");
// const elementb=document.querySelector(".bo");
// const elementc=document.querySelector(".carbon");
// const elementh=document.getElementById("hydrogen");
// const elementli=document.querySelector(".li");
// const elementhe=document.querySelector(".he");
// const elementbe=document.querySelector(".be");
// const elementb=document.querySelector(".bo");
// const elementc=document.querySelector(".carbon");
// const elementh=document.getElementById("hydrogen");
// const elementli=document.querySelector(".li");
// const elementhe=document.querySelector(".he");
// const elementbe=document.querySelector(".be");
// const elementb=document.querySelector(".bo");
// const elementc=document.querySelector(".carbon");
// const elementh=document.getElementById("hydrogen");
// const elementli=document.querySelector(".li");
// const elementhe=document.querySelector(".he");
// const elementbe=document.querySelector(".be");
// const elementb=document.querySelector(".bo");
// const elementc=document.querySelector(".carbon");
// const elementh=document.getElementById("hydrogen");
// const elementli=document.querySelector(".li");
// const elementhe=document.querySelector(".he");
// const elementbe=document.querySelector(".be");
// const elementb=document.querySelector(".bo");
// const elementc=document.querySelector(".carbon");
// const elementh=document.getElementById("hydrogen");
// const elementli=document.querySelector(".li");
// const elementhe=document.querySelector(".he");
// const elementbe=document.querySelector(".be");
// const elementb=document.querySelector(".bo");
// const elementc=document.querySelector(".carbon");
// const elementh=document.getElementById("hydrogen");
// const elementli=document.querySelector(".li");
// const elementhe=document.querySelector(".he");
// const elementbe=document.querySelector(".be");
// const elementb=document.querySelector(".bo");
// const elementc=document.querySelector(".carbon");
// const elementh=document.getElementById("hydrogen");
// const elementli=document.querySelector(".li");
// const elementhe=document.querySelector(".he");
// const elementbe=document.querySelector(".be");
// const elementb=document.querySelector(".bo");
// const elementc=document.querySelector(".carbon");
// const elementh=document.getElementById("hydrogen");
// const elementli=document.querySelector(".li");
// const elementhe=document.querySelector(".he");
// const elementbe=document.querySelector(".be");
// const elementb=document.querySelector(".bo");
// const elementc=document.querySelector(".carbon");
// const elementh=document.getElementById("hydrogen");
// const elementli=document.querySelector(".li");
// const elementhe=document.querySelector(".he");
// const elementbe=document.querySelector(".be");
// const elementb=document.querySelector(".bo");
// const elementc=document.querySelector(".carbon");
// const elementh=document.getElementById("hydrogen");
// const elementli=document.querySelector(".li");
// const elementhe=document.querySelector(".he");
// const elementbe=document.querySelector(".be");
// const elementb=document.querySelector(".bo");
// const elementc=document.querySelector(".carbon");
// const elementh=document.getElementById("hydrogen");
// const elementli=document.querySelector(".li");
// const elementhe=document.querySelector(".he");
// const elementbe=document.querySelector(".be");
// const elementb=document.querySelector(".bo");
// const elementc=document.querySelector(".carbon");




// hydrogen
let tlh = new TimelineMax({paused:true});
tlh
.fromTo('.container',0.5,{opacity:1},{opacity:0.2})
.fromTo('.header',0.5,{opacity:1},{opacity:0.2})
.fromTo('.h-info',0.5,{opacity:0},{opacity:1})
elementh.addEventListener("click",()=>{
    tlh.play();
})
//lithium
let tlli = new TimelineMax({paused:true});
tlli
.fromTo('.container',0.5,{opacity:1},{opacity:0.2})
.fromTo('.header',0.5,{opacity:1},{opacity:0.2})
.fromTo('.li-info',0.5,{opacity:0},{opacity:1})
.fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
elementli.addEventListener("click",()=>{
    tlli.play();
})
//helium
let tlhe = new TimelineMax({paused:true});
tlhe
.fromTo('.container',0.5,{opacity:1},{opacity:0.2})
.fromTo('.header',0.5,{opacity:1},{opacity:0.2})
.fromTo('.he-info',0.5,{opacity:0},{opacity:1})
.fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
elementhe.addEventListener("click",()=>{
    tlhe.play();
})
//beryllium
let tlbe = new TimelineMax({paused:true});
tlbe
.fromTo('.container',0.5,{opacity:1},{opacity:0.2})
.fromTo('.header',0.5,{opacity:1},{opacity:0.2})
.fromTo('.be-info',0.5,{opacity:0},{opacity:1})
.fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
elementbe.addEventListener("click",()=>{
    tlbe.play();
})
//boron
let tlb = new TimelineMax({paused:true});
tlb
.fromTo('.container',0.5,{opacity:1},{opacity:0.2})
.fromTo('.header',0.5,{opacity:1},{opacity:0.2})
.fromTo('.b-info',0.5,{opacity:0},{opacity:1})
.fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
elementb.addEventListener("click",()=>{
    tlb.play();
})

//carbon
let tlc = new TimelineMax({paused:true});
tlc
.fromTo('.container',0.5,{opacity:1},{opacity:0.2})
.fromTo('.header',0.5,{opacity:1},{opacity:0.2})
.fromTo('.c-info',0.5,{opacity:0},{opacity:1})
.fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
elementc.addEventListener("click",()=>{
    tlc.play();
})
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })
// // hydrogen
// let tlh = new TimelineMax({paused:true});
// tlh
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.h-info',0.5,{opacity:0},{opacity:1})
// elementh.addEventListener("click",()=>{
//     tlh.play();
// })
// //lithium
// let tlli = new TimelineMax({paused:true});
// tlli
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.li-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aMetals',0.5,{x:0,y:0},{x:650,y:-450})
// elementli.addEventListener("click",()=>{
//     tlli.play();
// })
// //helium
// let tlhe = new TimelineMax({paused:true});
// tlhe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.he-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.noble',0.5,{x:0,y:0},{x:250,y:-500})
// elementhe.addEventListener("click",()=>{
//     tlhe.play();
// })
// //beryllium
// let tlbe = new TimelineMax({paused:true});
// tlbe
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.be-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.aeMetals',0.5,{x:0,y:0},{x:250,y:-500})
// elementbe.addEventListener("click",()=>{
//     tlbe.play();
// })
// //boron
// let tlb = new TimelineMax({paused:true});
// tlb
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.b-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.metalloids',0.5,{x:0,y:0},{x:600,y:-500})
// elementb.addEventListener("click",()=>{
//     tlb.play();
// })

// //carbon
// let tlc = new TimelineMax({paused:true});
// tlc
// .fromTo('.container',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.header',0.5,{opacity:1},{opacity:0.2})
// .fromTo('.c-info',0.5,{opacity:0},{opacity:1})
// .fromTo('.nonM',0.5,{x:0,y:0},{x:500,y:-500})
// // .fromTo('.nonM',0.5,{x:0,y:0},{x:600,y:-500})
// elementc.addEventListener("click",()=>{
//     tlc.play();
// })













