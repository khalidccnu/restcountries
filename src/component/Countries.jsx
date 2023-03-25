import {useEffect, useState} from "react";
import Country from "./Country.jsx";
import NoCountry from "./NoCountry.jsx";

function Countries({searchValue}) {
    const [country, setCountry] = useState([]);
    const [ptCountry, setAllCountry] = useState([]);

    useEffect(_ => {
        let searchKeyword;

        if (searchValue === "") searchKeyword = "all";
        else searchKeyword = "name/" + searchValue;

        fetch("https://restcountries.com/v3.1/" + searchKeyword)
            .then(response => response.json())
            .then(data => {
                setCountry(data);
                setAllCountry(data.length > 9 ? data.slice(0, 9) : data);
            });
    }, [searchValue]);

    function showAllCountry({target: elem}) {
        setAllCountry(country);
        elem.parentElement.classList.add("d-none");
    }

    return (
        <section className="py-3">
            <div className="container">
                {
                    ptCountry.length > 0 ? (
                        <>
                        <div className="countries d-grid gap-3">{ptCountry.map((elem, index) => <Country key={index} country={elem} />)}</div>
                        {
                            country.length > 9 ? (
                                <div className="mt-4 text-center">
                                    <button role="button" className="btn btn-sm btn-success" onClick={e => showAllCountry(e)}>Show All</button>
                                </div>
                            ) : null
                        }
                        </>
                    ) : <NoCountry />
                }
            </div>
        </section>
    )
}

export default Countries