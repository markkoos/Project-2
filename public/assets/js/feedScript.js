const data = null;
const xhr = new XMLHttpRequest();

xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
    const res = JSON.parse(this.responseText);

    function h3(text){
        const articleOne = document.querySelector(".article__one");
        var hea = document.createElement("h3");
        var tex = document.createTextNode(text);
        hea.appendChild(tex);
        articleOne.appendChild(hea);
    }
    function paragraph(text){
        const articleOne = document.querySelector(".article__one");
        var par = document.createElement("p");
        var t2 = document.createTextNode(text);
        par.appendChild(t2);
        articleOne.appendChild(par); 
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
xhr.setRequestHeader("x-rapidapi-key", "570565d3dbmshaa50c044e67a7c3p147829jsn2a024d94fd11");
xhr.send(data);
