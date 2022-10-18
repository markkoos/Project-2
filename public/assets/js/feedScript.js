const data = null;
const xhr = new XMLHttpRequest();

xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
    const res = JSON.parse(this.responseText);

    function h3(text){
        const articleOne = document.querySelector(".article__one");
        var h = document.createElement("h3");
        var t = document.createTextNode(text);
        h.appendChild(t);
        articleOne.appendChild(h);
    }
    function paragraph(text){
        const articleOne = document.querySelector(".article__one");
        var p = document.createElement("p");
        var t2 = document.createTextNode(text);
        p.appendChild(t2);
        articleOne.appendChild(p); 
    }
    function hr() {
        const articleOne = document.querySelector(".article__one");
        var hr2 = document.createElement("hr");
        articleOne.appendChild(hr2);
    }

    let counter = 1;
    for(const key in res) {
        if (this.readyState === this.DONE) {
            hr();
            h3(` ${res[key].text}`);
            paragraph(`URL : ${res[key].url}`);
            paragraph(`Source : ${res[key].source}`);
            paragraph(`Publication : ${res[key].publication}`);
            counter++;
            
        } 
    }
});

xhr.open("GET", "https://video-game-news.p.rapidapi.com/all");
xhr.setRequestHeader("x-rapidapi-host", "video-game-news.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "xxxxxxxxxxxxxxxxxxxxxxxxxxxx");
xhr.send(data);

