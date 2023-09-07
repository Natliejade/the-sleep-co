// A $( document ).ready() block.
$( document ).ready(function() {
    
    $('.hamburger-button').click(function(){
        
        $(this).toggleClass('active');
        $('.mobile-menu').fadeToggle(300);
        
    });

    // Animate on Scroll - activate 
    AOS.init({
        duration: 500, // values from 0 to 3000, with step 50ms
    });
});

// LightGallery popup
lightGallery(document.getElementById('lightgallery'), {
  speed: 500,
  download: false
});

// LightGallery popup
lightGallery(document.getElementById('lightgallery-2'), {
  speed: 500,
  download: false
});

//  MailerLite Universal 
(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
.push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
ml('account', '123827');

