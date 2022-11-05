const getJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random', {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((data) => {
            const joke = document.getElementById("joke")
            quote.innerHTML = `${data.value}`    
        })
        .catch(error => console.log(error))
};

const btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", () => {
    getJoke()
});
