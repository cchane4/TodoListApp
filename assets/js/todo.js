//Check off todos by clicking 
$("ul").on("click", "li", e  => { 
    // if li is grey turn it black else turn it gray
    $(e.currentTarget).toggleClass("completed"); 
}); 


/* NOTE: the 'this' key word would work in substitute for the 'event.currentTarget' when writing in old javascript but 
ES6 notation runs into scoping issues when trying to target the right element so using 'event.currentTarget' is a workaround that 
accomplishes the task at hand*/ 

$("ul").on("click", "span", (event) => { 
    // here this refers to the span element
    $(event.currentTarget).parent().fadeOut(500,() => {
        // here this refers to the li element  
        $(event.currentTarget).remove(); 
    });  
    event.stopPropagation(); 
    
}); 

$("input[type='text'").keypress (event => { 
    if(event.which === 13){ 
    let todoText = $(event.currentTarget).val();
    $(event.currentTarget).val(""); 
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>"); 
    }
})

//clicking the plus button toggles the input field on and off 
$(".fa-plus").click (event => { 
    $("input[type='text'").fadeToggle(); 
});
