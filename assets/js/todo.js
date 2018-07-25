//Check off todos by clicking 
$("li").click(function(){ 
    // if li is grey turn it black else turn it gray
    $(this).toggleClass("completed"); 
}); 

$('span').click(function(event){ 
    // here this refers to the span element
    $(this).parent().fadeOut(500,function(){
        // here this refers to the li element  
        $(this).remove(); 
    }) 
    event.stopPropagation(); 
    // stopPropagation and passing in event as a parameter of the function
    // stops the event from "bubbling up" to the other parent elements of the 
    // span tag (ex:ul, li, body etc.) which is called event leveling
}); 

