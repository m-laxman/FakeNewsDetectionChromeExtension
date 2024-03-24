document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.send-button').addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            document.querySelector('.response').textContent = "cliicked";
            document.querySelector('.response').style.color = "blue";
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "http://your-api-url.com", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                  document.querySelector('.response').textContent = xhr.responseText;
                }
              }
            xhr.send("url=" + encodeURIComponent(tabs[0].url));
        });
    });
});