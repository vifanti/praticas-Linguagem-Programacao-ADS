export class HeroService {
    data: any

    constructor(public http: any){
        console.log('olá herois');
    }

    load(){
        if (this.data){
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
            

            fetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=8ca0518c7fafefd3f0dc5eee818d10e1&hash=d00bcd4bd21c377afe07d3381a853a35', {
                method: 'get'
            })
            .then(response => response.json())
            .then(jsonData => {

                this.data = jsonData;

                resolve(this.data);

            })
            .catch(err => {
                    //error block
            });
        });
    }
}

function carregaHerois() {

    

}