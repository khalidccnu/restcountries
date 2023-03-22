function Country({country}) {
    const {name, flags} = country;

    return (
        <div className="card p-3 bg-light">
            <img src={flags.png} className="card-img-top rounded-bottom" alt="" height="170" />
            <div className="card-body px-0">
                <h5 className="card-title fw-semibold fs-4 text-center">{name.common}</h5>
            </div>
        </div>
    )
}

export default Country