import { useState } from "react";


const Country = ({ country }) => {
    console.log(country)
    const { name, flags, population, timeZone } = country;
    const [visited, setVisited] = useState([false])
    const handaleVisited = () => {
        setVisited(!visited) ;
    } 
    return (
        <>
            <div className="border border-black p-4 text-center ">

                <img className=" w-48 border-[5px] m-5" src={flags?.png} alt="" />
                <h2>name : {name?.common}</h2>
                <p>population: {population} </p>
                <p>Time Zone: {timeZone} </p>
                <button className="btn btn-success text-white " onClick={handaleVisited}>visited</button>
                {visited ? '      i am not visited' : '   visited'}
                
            </div>
        </>
    );
};

export default Country;