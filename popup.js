document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    // onClick's logic below:
    link.addEventListener('click', function() {
        hellYeah();
    });
});

function hellYeah() {
  urlinput = document.getElementById("urlinput").value;
  chrome.tabs.create({url: "https://www." + urlinput});
}