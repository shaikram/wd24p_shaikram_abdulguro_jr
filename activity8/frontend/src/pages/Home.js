import DashboardCard from "../component/DashboardCard";
import DashboardButton from "../component/DashboardButton";

function Home() {

    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <DashboardCard 
                        cardTitle="React JS"
                        cardSubtittle = "Card Subtitle 1"
                        cardDescription = "Some quick example text to build on the card title and make up the bulk of the card's content."
                        cardImage="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
                    />
                    <DashboardButton 
                        name="Save 1"
                        bgColor = "btn btn-primary"
                    />
                </div>
                <div className="col-4">
                    <DashboardCard 
                        cardTitle="Angular JS"
                        cardSubtittle = "Card Subtitle 2"
                        cardDescription = "Some quick example text to build on the card title and make up the bulk of the card's content."
                        cardImage="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg"
                    />
                    <DashboardButton
                        name="Save 2" 
                        bgColor = "btn btn-success"
                    />
                </div>
                <div className="col-4">
                    <DashboardCard 
                        cardTitle="Vue JS"
                        cardSubtittle = "Card Subtitle 3"
                        cardDescription = "Some quick example text to build on the card title and make up the bulk of the card's content."
                        cardImage="https://cdn.iconscout.com/icon/free/png-256/vue-dot-js-3629145-3030285.png"
                    />
                    <DashboardButton 
                        name="Save 3"
                        bgColor = "btn btn-warning"
                    />
                </div>

            </div>
        </div>
    );
}

export default Home;