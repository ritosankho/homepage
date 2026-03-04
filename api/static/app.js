search = document.getElementById("searchForm")
search.addEventListener("submit", function (e) {
    e.preventDefault();
    const query = document.getElementById("searchBox").value;
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
});
document.getElementById("Reddit").addEventListener("click", function (e) {
    window.location.href = "https://www.reddit.com"
})
document.getElementById("Instagram").addEventListener("click", function (e) {
    window.location.href = "https://www.instagram.com"
})
document.getElementById("ChatGPT").addEventListener("click", function (e) {
    window.location.href = "https://www.chatgpt.com"
})
document.getElementById("Mail").addEventListener("click", function (e) {
    window.location.href = "https://mail.proton.me"
})
document.getElementById("Whatsapp").addEventListener("click", function (e) {
    window.location.href = "https://web.whatsapp.com"
})
document.getElementById("Robu").addEventListener("click", function (e) {
    window.location.href = "https://www.robu.in"
})
document.getElementById("Xprime").addEventListener("click", function (e) {
    window.location.href = "https://xprime.today"
})
document.getElementById("School").addEventListener("click", function (e) {
    window.location.href = "https://www.dpsjoka.com"
})

function getBrowserSystemInfo() {
    const systemInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.userAgentData?.platform || navigator.platform,
        language: navigator.language,
        screenResolution: `${screen.width}x${screen.height}`,
        cpuCores: navigator.hardwareConcurrency,

    };

    console.log("Browser/Client System Information:", systemInfo);
    stats = document.getElementById("stats");
    let statsHTML = `
  <p>User agent: ${systemInfo.userAgent}</p>
  <p>Platform: ${systemInfo.platform}</p>
  <p>Language: ${systemInfo.language}</p>
  <p>Screen Resolution: ${systemInfo.screenResolution}</p>
  <p>No. of CPU cores: ${systemInfo.cpuCores}</p>
  `
    stats.innerHTML = statsHTML
}
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        am_pm;

    // Displaying the time
    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}
getBrowserSystemInfo();
showTime();
