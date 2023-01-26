import ButtonComponent from "../components/ButtonComponent";
import CardComponent from "../components/CardComponent";

function Home() {
    return (
        <div>
            <div className="row mt-2">
                <div className="col-5">
                    <div className="d-grid gap-2">
                        <ButtonComponent
                            btnName="Regular"
                            btnClass="btn btn-primary w-100 m-1 p-5"
                            btnHeight="500px"
                            btnType="button"
                        />
                        <ButtonComponent
                            btnName="Senior/PWD"
                            btnClass="btn btn-success w-100 m-1 p-5"
                            btnHeight="500px"
                            btnType="button"
                        />
                        <CardComponent
                            cardClass="card text-center p-5 cardBoxStyle"
                            cardTitleClass="currentQueTitle"
                            cardTitle="This is your queue"
                            cardNumberClass="currentQueNumber"
                            cardNumber="001"
                            cardDescClass="currentQueDesc"
                            cardDescription="Please wait on your queue to be called and proceed to your designated counter"
                            cardGreetClass="currentQueGreet"
                            cardGreeting="Thanks for using My Queueing System"
                        />
                    </div>

                </div>
                <div className="col-2">
                    <CardComponent
                        cardClass="card text-center p-1 cardHeadStyle"
                        counterHeader="COUNTER 1"
                        counterHeadClass="currentCounterHead"

                    />
                    <CardComponent
                        cardClass="card text-center p-1 mt-2 cardNumberStyle"
                        counterHeadClass="currentCounterHead counterBodyHeader"
                        counterHeader="Now Serving"
                        cardNumberClass="currentCounterNumber"
                        cardNumber="001"
                        cardGreetClass="bodyCounterPgph"
                        cardGreeting="Please proceed to the counter"
                    />
                    <ButtonComponent
                        btnClass="btn btn-light border border-secondary w-100 m-1 p-2"
                        btnName="Next"
                        btnHeight="500px"
                        btnType="button"
                    />
                    <ButtonComponent
                        btnClass="btn btn-secondary border border-dark-subtle w-100 m-1 p-2"
                        btnName="Serve"
                        btnHeight="500px"
                        btnType="button"
                    />
                    <CardComponent
                        cardClass="card text-left mt-1 cardTotalDiv"
                        cardDescClass="cardTotalDesc"
                        cardDescription="Total Served: 10"
                    />
                </div>
                <div className="col-2">
                    <CardComponent
                        cardClass="card text-center p-1 cardHeadStyle"
                        counterHeadClass="currentCounterHead"
                        counterHeader="COUNTER 2"
                    />
                    <CardComponent
                        cardClass="card text-center p-1 mt-2 cardNumberStyle"
                        counterHeadClass="currentCounterHead counterBodyHeader"
                        counterHeader="Now Serving"
                        cardNumberClass="currentCounterNumber"
                        cardNumber="002"
                        cardGreetClass="bodyCounterPgph"
                        cardGreeting="Please proceed to the counter"
                    />
                    <ButtonComponent
                        btnClass="btn btn-light border border-secondary w-100 m-1 p-2"
                        btnName="Next"
                        btnHeight="500px"
                        btnType="button"
                    />
                    <ButtonComponent
                        btnClass="btn btn-secondary border border-dark-subtle w-100 m-1 p-2"
                        btnName="Serve"
                        btnHeight="500px"
                        btnType="button"
                    />
                    <CardComponent
                        cardClass="card text-left mt-1 cardTotalDiv"
                        cardDescClass="cardTotalDesc"
                        cardDescription="Total Pending: 5"
                    />

                </div>
                <div className="col-3">
                    <CardComponent
                        cardClass="card text-center p-1 cardHeadStyle"
                        counterHeadClass="currentCounterHead"
                        counterHeader="SENIOR/PWD"
                    />
                    <CardComponent
                        cardClass="card text-center p-1 mt-2 cardNumberStyle"
                        counterHeadClass="currentCounterHead counterBodyHeader"
                        counterHeader="Now Serving"
                        cardNumberClass="currentCounterNumber"
                        cardNumber="009"
                        cardGreetClass="bodyCounterPgph pb-3"
                        cardGreeting="Please proceed to the counter"
                    />
                    <ButtonComponent
                        btnClass="btn btn-light border border-secondary w-100 m-1 p-2"
                        btnName="Next"
                        btnHeight="500px"
                        btnType="button"
                    />
                    <ButtonComponent
                        btnClass="btn btn-secondary border border-dark-subtle w-100 m-1 p-2"
                        btnName="Serve"
                        btnHeight="500px"
                        btnType="button"
                    />
                    <CardComponent
                        cardClass="card text-left mt-1 cardTotalDiv"
                        cardDescClass="cardTotalDesc"
                        cardDescription="Overall Total: 10"
                    />

                </div>
            </div>
        </div>
    );
}

export default Home;