!function(t)
{
    let o = t.location.href;
    if (o && !/([http|https]:\/\/[a-zA-Z0-9\_\.]+\.toutiao\.com)/gi.test(o) && t.navigator.appName)
    {
        let n = document.getElementById("ttzz").src.split("?")[1],
            e = "https://zhanzhang.toutiao.com/s.gif",
            a = new Image;
        o && (e += "?url=" + encodeURIComponent(o)),
        n && (e += "&token=" + n),
        n && (a.src = e)
    }
}(window);
