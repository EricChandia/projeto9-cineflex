
promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies/1/showtimes");

promise.then(logar);


function logar(bolinha){

    console.log(bolinha.data.days[0]);

}