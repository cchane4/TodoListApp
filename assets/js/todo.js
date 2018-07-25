//Check off todos by clicking 
$("li").click(function(){ 
    // if li is grey turn it black else turn it gray
    $(this).toggleClass("completed"); 
}); 

$('span').click(function(event){ 
    alert("clicked on a span!")
    event.stopPropagation(); 
    // stopPropagation and passing in event as a parameter of the function
    // stops the event from "bubbling up" to the other parent elements of the 
    // span tag (ex:ul, li, body etc.) which is called event leveling
}); 