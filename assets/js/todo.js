//Check off todos by clicking 
$("li").click(function(){ 
    // if li is grey turn it black else turn it gray
    if ($(this).css("color") === "rgb(128, 128, 128)"){ 
       $(this).css({ 
           color: "black", 
           textDecoration: "none"
         }); 
     
    } else { 
    $(this).css({ 
        color: "gray", 
        textDecoration: "line-through"
    }) 
  } 
}); 