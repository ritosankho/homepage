search = document.getElementById("searchForm")
search.addEventListener("submit", function(e) {
    e.preventDefault();
    const query = document.getElementById("searchBox").value;
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
});
document.getElementById("Reddit").addEventListener("click", function(e){
    window.location.href = "https://www.reddit.com"
})
document.getElementById("Instagram").addEventListener("click", function(e){
    window.location.href = "https://www.instagram.com"
})
document.getElementById("ChatGPT").addEventListener("click", function(e){
    window.location.href = "https://www.chatgpt.com"
})
document.getElementById("Mail").addEventListener("click", function(e){
    window.location.href = "https://mail.proton.me"
})
document.getElementById("Whatsapp").addEventListener("click", function(e){
    window.location.href = "https://web.whatsapp.com"
})
document.getElementById("Robu").addEventListener("click", function(e){
    window.location.href = "https://www.robu.in"
})
document.getElementById("Xprime").addEventListener("click", function(e){
    window.location.href = "https://xprime.today"
})
document.getElementById("School").addEventListener("click", function(e){
    window.location.href = "https://www.dpsjoka.com"
})