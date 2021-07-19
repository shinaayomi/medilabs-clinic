import Navigation from "../components/Navigation"
import Profile from "../components/Profile"
import Content from "../components/Content"
import CovidCard from "../components/CovidCard"
import CardList from "../components/CardList"

export default function LandingPage() {
    return (
        <>
            <Navigation />

            <div className="container py-5">
                <div className="row">
                    <div className="col-md">
						<Profile />
                    </div>
                    <div className="col-md mt-5 mt-md-0">
                        <Content />
                    </div>
                    <div className="col-md mt-5 mt-md-0">
                        <CovidCard />
                    </div>
                </div>
            </div>

            <div className="container pb-5">
                <div className="row">
                    <div className="col-md-8">
                        <CardList />
                    </div>
                </div>
            </div>				
        </>
    )
}
