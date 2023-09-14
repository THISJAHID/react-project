import { useEffect, useState } from "react";
import Country from "../Country/Country";



const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
     
    },[])
    return (
        <div className="grid grid-cols-3 container mx-auto gap-4 justify-center">
           
           {
            countries.map(country => <Country country ={country} key={country.cca3}></Country>)

           }
        </div>
    );
};

export default Countries;