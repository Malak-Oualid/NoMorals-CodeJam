document.addEventListener('DOMContentLoaded', function() {

    if (document.getElementById('restart')) {
        document.getElementById('restart').addEventListener('click', function() {
            window.location.replace("/level.html");
        })
    }



  
    if (document.getElementById('home')) {
        document.addEventListener('click', function () {
            console.log('event');
            window.location.href = '/recording';
        });
        
    }
})