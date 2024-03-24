chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "sendURL") {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://your-api-url.com", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
            }
        }
        xhr.send("url=" + encodeURIComponent(request.url));
    }
});