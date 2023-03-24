import logoEarth from "../asset/lg-earth.svg"
import {useState} from "react";

function Nav({setSearchValue: ancestorSearchValue}) {
    const [searchValue, setSearchValue] = useState("");

    function handleSearch({target: {value}}) {
        setSearchValue(value);
        ancestorSearchValue(value);
    }

    return (
        <nav className="navbar">
            <div className="container flex-nowrap">
                <a className="navbar-brand" style={{width: "5rem"}}>
                    <img src={logoEarth} alt="" className="img-fluid" />
                </a>
                <div className="input-group w-auto">
                    <input id="search" className="form-control" type="search" placeholder="Search by name" value={searchValue} onChange={e => handleSearch(e)} />
                    <label className="input-group-text" htmlFor="search">
                        <box-icon name="search"></box-icon>
                    </label>
                </div>
            </div>
        </nav>
    )
}

export default Nav