
function CardComponent(props) {
    return (
        <div>
            <div className={ props.cardClass }>
                <div className="card-body">
                    <span className={ props.cardTitleClass }>{ props.cardTitle }</span>
                    <h3 className={ props.counterHeadClass }>
                        { props.counterHeader }
                    </h3>
                    <h1 className={ props.cardNumberClass }>
                        { props.cardNumber }
                    </h1>
                    <p className={ props.cardDescClass }>
                        { props.cardDescription }
                    </p>
                    <h6 className={ props.cardGreetClass }>
                        { props.cardGreeting }
                    </h6>
                    
                </div>
            </div>
        </div>
    );
}

export default CardComponent;