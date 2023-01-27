function DashboardCard(props) {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.cardSubtittle}</h6>
                    <p className="card-text">{props.cardDescription}</p>
                    <a to="#" className="card-link">Card link</a>
                    <a to="#" className="card-link">Another link</a>
                    <img src={props.cardImage} width="100%" height="auto"/>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard