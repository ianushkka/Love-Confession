let no=document.getElementById("no"); 
let yes=document.getElementById("yes"); 
let res=document.getElementById("res");  

let count=0;

let flip=false; 

no.addEventListener("mouseover",()=>{ 
    count+=1;
    flip=!flip;
 
    if(flip){ //flip=true, earlier it was false so now No | Yes we want !
        no.style.order=0;
        yes.style.order=1;
    }else{ 
        no.style.order=1;
        yes.style.order=0; 


    }

    if(count==4){ 
        console.log("This person's FISHY!")

    }
})

yes.addEventListener("click",()=>{
    res.innerText="OBV, i knew it Babee!"; 
    confetti({
        particleCount:300,
        spread:180,
        startVelocity: 60,
        origin: { y: 0.6 }

        });
})