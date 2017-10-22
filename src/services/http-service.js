import 'whatwg-fetch';

class HttpService{
    getData = (type, query) => {
        if(type==='description'){
            var promise = new Promise((resolve, reject) => {
                fetch(`https://pokeapi.co/api/v2/pokemon-species/${query}/`)
                .then(response => {
                    resolve(response.json());
                })
                });
        }

        else if(type==='sprite'){
            promise = new Promise((resolve, reject) => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${query}/`)
                    .then(response => {
                    resolve(response.json());
                    })
                });
        }

        return promise;
    }
}

export default HttpService;