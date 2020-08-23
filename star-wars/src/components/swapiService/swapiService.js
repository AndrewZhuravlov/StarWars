
export default class SwapiServices {

    _apiBase = 'https://swapi.dev/api';
    async getDataFromSwapi(url) {
        try {
            const resolve = await fetch(`${this._apiBase}${url}`);
            return await resolve.json();
            
        } catch (err) {
            console.error(err);
        }

    }

    async getAllPeople (){
        
        const res = await this.getDataFromSwapi(`/people/`);
        return await res.results.map(this._peopleTransformator)
    }
    async getPerson (id){

        const person =  await this.getDataFromSwapi(`/people/${id}`);
        return this._peopleTransformator(person);
    }
    
    async getAllPlanets (){
        
        const res = await this.getDataFromSwapi(`/planets/`);
        return res.results.map(this._planetTransformation)
        
    }
    async getPlanet (id){
        const planet = await this.getDataFromSwapi(`/planets/${id}`);
        return this._planetTransformation(planet);

    }

    async getAllStarships (){

        const res = await this.getDataFromSwapi(`/starships/`);
        return res.results.map(this._transformStarships)
        
    }
    async getStarship (id){

        const starship = await this.getDataFromSwapi(`/starships/${id}`);
        this._transformStarships(starship);
    }

    idRegExpFinder(urlItem){

        const idReg = /([0-9]{1,2})/;
        const id = urlItem.url.match(idReg)[0];
        return id;
    }

    _planetTransformation = (planet)=>{
        const id = this.idRegExpFinder(planet);
        return {
            id,
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }

    _peopleTransformator=(person)=>{

        return{
            id: this.idRegExpFinder(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
        }
    }

    _transformStarships=(starship)=>{

        return{
            id: this.idRegExpFinder(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity 
        }
    }
}
