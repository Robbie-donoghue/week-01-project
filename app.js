console.log(`test`);

const buttons = document.querySelectorAll('.post-meta_more');


for( let i = 0; i < buttons.length; i ++  )
{
    buttons[i].addEventListener('mouseover' , function() 
{
    //change text colour to black on hover
    buttons[i].style.color = "Black";
    // change background colour to white on hover
    buttons[i].style.background = "white";

}
);

buttons[i].addEventListener("mouseout" , function()
{
    //change text back to white
    buttons[i].style.color = "";
    // change background colour back to image
    buttons[i].style.background = "";
}
);
}



