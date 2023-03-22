import {useEffect, useState} from "react";
import Country from "./Country.jsx";

function Countries() {
    const [country, setCountry] = useState([]);
    useEffect(_ => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => setCountry(data));
    }, []);

    return (
        <section className="py-3">
            <div className="container">
                <div className="countries d-grid gap-3">{country.map(elem => <Country country={elem} />)}</div>
            </div>
        </section>
    )
}

export default Countries