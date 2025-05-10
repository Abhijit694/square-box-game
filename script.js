let s1 = document.getElementById("sq1");
let s2 = document.getElementById("sq2");
let s3 = document.getElementById("sq3");
let s4 = document.getElementById("sq4");

s1.addEventListener("mouseenter",()=>{
    let r = Math.floor(Math.random()*100);
    s1.innerHTML = `<h1>${r}</h1>`;
});

s1.addEventListener("mouseleave",()=>{
    s1.innerHTML="<h1>1</h1>";
});


let colo = "red";
s2.addEventListener("click",()=>{
    s2.style.backgroundColor=colo;
    if(colo == "red"){
        colo="green";
    }
    else if(colo == "green"){
        colo="blue";
    }
    else{
        colo="red";
    }
})

s2.addEventListener("mouseleave",()=>{
    s2.style.backgroundColor="white";
})


s3.addEventListener("mouseenter",()=>{
    let colo1=Math.floor(Math.random()*256);
    let colo2=Math.floor(Math.random()*256);
    let colo3=Math.floor(Math.random()*256);
    s3.style.backgroundColor=`rgb(${colo1},${colo2},${colo3})`;
})

s3.addEventListener("mouseleave",()=>{
    s3.style.backgroundColor="white";
})


s4.addEventListener("click",()=>{
    let colo1=Math.floor(Math.random()*256);
    let colo2=Math.floor(Math.random()*256);
    let colo3=Math.floor(Math.random()*256);
    s1.style.backgroundColor=`rgb(255,${colo2},${colo3})`;
    s2.style.backgroundColor=`rgb(${colo1},255,${colo3})`;
    s3.style.backgroundColor=`rgb(${colo1},${colo2},255)`;
    s4.style.backgroundColor=`rgb(${colo1},${colo2},${colo3})`;
})

s4.addEventListener("mouseleave",()=>{
    s1.style.backgroundColor="white";
    s2.style.backgroundColor="white";
    s3.style.backgroundColor="white";
    s4.style.backgroundColor="white";

})