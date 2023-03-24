import {useEffect, useState} from "react";
import Country from "./Country.jsx";

function Countries({searchValue}) {
    const [country, setCountry] = useState([]);
    useEffect(_ => {
        let searchKeyword;

        if (searchValue === "") searchKeyword = "all";
        else searchKeyword = "name/" + searchValue;

        fetch("https://restcountries.com/v3.1/" + searchKeyword)
            .then(response => response.json())
            .then(data => setCountry(data));
    }, [searchValue]);

    return (
        <section className="py-3">
            <div className="container">
                <div className="countries d-grid gap-3">{country.map((elem, index) => <Country key={index} country={elem} />)}</div>
            </div>
        </section>
    )
}

export default Countries