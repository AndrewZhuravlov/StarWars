
export default class SwapiServices {

    _apiBase = 'https://swapi.dev/api';
    _imgBase = 'https://starwars-visualguide.com/assets/img'
    getDataFromSwapi= async (url)=> {
        try {
            const resolve = await fetch(`${this._apiBase}${url}`);
            return await resolve.json();
            
        } catch (err) {
            console.error(err);
        }

    }

    getAllPeople = async () => {
        
        const res = await this.getDataFromSwapi(`/people/`);
        return await res.results.map(this._peopleTransformator)
    }
    getPerson = async (id) => {

        const person =  await this.getDataFromSwapi(`/people/${id}`);
        return this._peopleTransformator(person);
    }
    
    getAllPlanets = async () => {
        
        const res = await this.getDataFromSwapi(`/planets/`);
        return res.results.map(this._planetTransformation)
        
    }
    getPlanet = async (id) => {
        const planet = await this.getDataFromSwapi(`/planets/${id}`);
        return this._planetTransformation(planet);

    }

    getAllStarships = async () => {

        const res = await this.getDataFromSwapi(`/starships/`);
        return res.results.map(this._transformStarships)
        
    }
    getStarship= async (id) => {

        const starship = await this.getDataFromSwapi(`/starships/${id}`);
        return this._transformStarships(starship);
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

    imagePersonDownloader =(id) =>{
       return `${this._imgBase}/characters/${id}.jpg`
         
    }

    imagePlanetDownloader =(id) =>{
        return `${this._imgBase}/planets/${id}.jpg`
         
    }

    imageStarshipDownloader =(id) =>{
        console.log(id);
        return `${this._imgBase}/starships/${id}.jpg`
         
    }
}



