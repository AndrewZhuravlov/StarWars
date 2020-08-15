
export default class SwapiServices {

    _apiBase = 'https://swapi.dev/api';
    async getDataFromSwapi(url) {
        try {
            const resolve = await fetch(`${this._apiBase}${url}`);
            const data = await resolve.json();
            return data;
        } catch (err) {
            console.error(err);
        }

    }

    async getAllPeople (){
        
        const res = await this.getDataFromSwapi(`/people/`);
        return res.results;
    }
    getPerson (id){

        return this.getDataFromSwapi(`/people/${id}`);
    }
    
    async getAllPlanets (){
        
        const res = await this.getDataFromSwapi(`/planets/`);
        return res.results;
        
    }
    getPlanet (id){

        return this.getDataFromSwapi(`/planets/${id}`);
    }

    async getAllStarships (){

        const res = await this.getDataFromSwapi(`/starships/`);
        return res.results;
        
    }
    getStarship (id){

        return this.getDataFromSwapi(`/starships/${id}`);
    }
}