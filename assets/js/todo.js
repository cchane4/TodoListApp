//Check off todos by clicking 
$("ul").on("click", "li", function(){ 
    // if li is grey turn it black else turn it gray
    $(this).toggleClass("completed"); 
}); 

$("ul").on("click", "span", function(event){ 
    // here this refers to the span element
    $(this).parent().fadeOut(500,function(){
        // here this refers to the li element  
        $(this).remove(); 
    });  
    event.stopPropagation(); 
    
}); 

$("input[type='text'").keypress(function(event){ 
    if(event.which === 13){ 
    let todoText = $(this).val();
 $(this).val(""); 
 $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>"); 
    }
})

$("fa-plus").click(function(){ 
    $("input[type='text'").fadeToggle(); 
});
