

function imageEnlarge(e){
    let width = e.clientWidth; 
    let  height = e.clientHeight;
   

    if(width == 450 ){
        preWidth = width;
        preHeight = height;
        e.style.width = "100%";
        e.style.height = "100%";
        e.style.transition = "transform 0.25s ease";  
    }
    else {
        preWidth = width;
        preHeight = height;
        e.style.width =  "450px";
        e.style.height = "240px";
        e.style.transition = "transform 0.25s ease";  
    }
    
}; 
