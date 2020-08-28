import React, {useState, useEffect} from 'react'
import Style from './hoteller.module.scss'

function Hoteller(props){

    // states til at gemme ID og data fra api
    const [countries, setCountries] = useState([])
    const [countryID, setCountryID] = useState(0)
    const [cities, setCities] = useState([])

    // Funktion til at fetche lande
    async function fetchCountries(){
        const url = `https://api.mediehuset.net/overlook/countries`
        let data = await props.doFetch(url)
        setCountries(data)
    }

    // Funktion til at fetche byer med et lands ID
    async function fetchCities(id){
        const url = `https://api.mediehuset.net/overlook/cities/by_country/${id}`
        let data = await props.doFetch(url)
        setCities(data)
    }

    // UseEffect med et tomt dependency array (kører kun en gang når component mounter)
    useEffect(() => {
        fetchCountries()
    }, [])

    // UseEffect til at fetche cities, kører når Country ID ændrer sig
    useEffect(() => {
        if (!countryID == 0){
            fetchCities(countryID)
        }
    }, [countryID])

    console.log(cities)

    // Returner HTML
    return (
        <>
            <h1>Lande</h1>
            {countries.items && countries.items.map((item, i) => {
                return (
                    <div key={i} className={Style.wrapper}>
                        <h2>{item.name}</h2>
                        <img id={item.id} onClick={(e)=>{setCountryID(e.target.id)}} src={item.image}></img>
                    </div>
                )
            })}
            
        </>
    )
}

export default Hoteller