import logoEarth from "../asset/lg-earth.svg"

function Nav() {
    return (
        <nav className="navbar">
            <div className="container flex-nowrap">
                <a className="navbar-brand" style={{width: "5rem"}}>
                    <img src={logoEarth} alt="" className="img-fluid" />
                </a>
                <div className="input-group w-auto">
                    <input id="search" className="form-control" type="search" placeholder="Search by name" />
                    <label className="input-group-text" htmlFor="search">
                        <box-icon name="search"></box-icon>
                    </label>
                </div>
            </div>
        </nav>
    )
}

export default Nav