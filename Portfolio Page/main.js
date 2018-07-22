// Animate Smooth Scroll

$('#view-work').on('click', function() {
    const projects = $('#projects').position().top;

    $('html, body').animate (
        {
            scrollTop: projects
        },
        900 //Time in milliseconds
    )
})