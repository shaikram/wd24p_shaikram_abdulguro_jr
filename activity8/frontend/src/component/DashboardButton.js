function DashboardButton(props) {
    return (
        <div>
            <button type="button" className={props.bgColor}>
                {props.name}
            </button>
        </div>
    )
}

export default DashboardButton