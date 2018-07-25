//Check off todos by clicking 
$("li").click(function(){ 
    // if li is grey turn it black else turn it gray
    $(this).toggleClass("completed"); 
}); 