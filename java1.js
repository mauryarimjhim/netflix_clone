//used to hide some content and using this method we ca  click on it and it will display the content
 /*function togglehide(button)
{
    let btn=document.getElementsByClassName('faq-btn');
    if(btn.style.display =='block'){
        btn.style.display='none';
    }
    else{
        btn.style.display='block';
    }
}*/
function togglehide(button) {
    let content = button.nextElementSibling; // The answer part next to the button
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}

// Add event listeners to all FAQ buttons
var buttons = document.getElementsByClassName('faq-btn');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        togglehide(this);  // Pass the clicked button to the toggle function
    });
}
