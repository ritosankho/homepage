search = document.getElementById("searchForm")
search.addEventListener("submit", function(e) {
    e.preventDefault();
    const query = document.getElementById("searchBox").value;
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
});