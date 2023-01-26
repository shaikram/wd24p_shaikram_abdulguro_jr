
function ButtonComponent(props) {
    return (
        <div>
            <button
                className={props.btnClass}
                height={props.btnHeight}
                width={props.btnWidth}
                type={props.btnType}
            >
                {props.btnName}
            </button>
        </div>
    );
}

export default ButtonComponent;