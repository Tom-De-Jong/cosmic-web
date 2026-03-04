const node = document.querySelector(".browserSearchInput");
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        document.querySelector(".browserIframe").src = node.value;
    }
});