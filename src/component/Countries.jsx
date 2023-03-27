import {useEffect, useState} from "react";
import Country from "./Country.jsx";
import NoCountry from "./NoCountry.jsx";
import {CircleLoader} from "react-spinners";

function Countries({searchValue}) {
    const [loading, setLoading] = useState(true);
    const [country, setCountry] = useState([]);
    const [ptCountry, setAllCountry] = useState([]);

    useEffect(_ => {
        !loading ? setLoading(true) : null;

        let searchKeyword;

        if (searchValue === "") searchKeyword = "all";
        else searchKeyword = "name/" + searchValue;

        (async _ => {
            await fetch("https://restcountries.com/v3.1/" + searchKeyword).then(response => response.json()).then(data => {
                setCountry(data);
                setAllCountry(data.length > 9 ? data.slice(0, 9) : data);
            });

            setLoading(false);
        })();
    }, [searchValue]);

    return (
        <section className="py-3">
            <div className="container">
                {
                    loading ? (
                        <div className="mx-auto" style={{width: "fit-content"}}>
                            <CircleLoader color="#36d7b7" />
                        </div>
                    ) : (
                        ptCountry.length > 0 ? (
                            <>
                                <div className="countries d-grid gap-3">{ptCountry.map((elem, index) => <Country key={index} country={elem} />)}</div>
                                {
                                    country.length > 9 && ptCountry.length !== country.length ? (
                                        <div className="mt-4 text-center">
                                            <button role="button" className="btn btn-sm btn-success" onClick={_ => setAllCountry(country)}>Show All</button>
                                        </div>
                                    ) : null
                                }
                            </>
                        ) : <NoCountry />
                    )
                }
            </div>
        </section>
    )
}

export default Countries