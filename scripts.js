document.addEventListener('DOMContentLoaded', function() {
    var pageLinks = document.querySelectorAll('.load-page');
    pageLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var page = this.getAttribute('data-page');
            loadPage(page);
        });
    });
});

function loadPage(pageName) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main-content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", pageName, true);
    xhttp.send();
}
