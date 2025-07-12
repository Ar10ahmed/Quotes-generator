const api_url="https://api.quotable.io/random";
    async function getquote(url)
    {
        const response = await fetch(url);
        var data = await response.json();
        document.getElementById("quote").innerHTML=data.content;
        document.getElementById("author").innerHTML=data.author;
    }
    getquote(api_url);