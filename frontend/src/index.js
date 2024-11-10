import axios from 'axios' ;

window.readMovies = function() {
    axios.get('http://localhost:8080/movies')
        .then((response) => {
            const movielist = response.data;
            const movieUl = document.getElementById('movies');
            movielist.forEach(item => {
                const li = document.createElement('li');
                li.appendChild(document.createTextNode(item.tittle + '(' + item.year + ') ' + item.description));
                movieUl.appendChild(li);
            })

        });
}