import CovidCard from "../components/CovidCard"
import Navigation from "../components/Navigation"
import TrackTransaction from "../components/TrackTransaction"
import SpecialtyCard from "../components/SpecialtyCard"

export default function Track() {
    return (
        <>
					<Navigation />

					<div className="container py-5">
						<div className="row">
							<div className="col-md-8">
								<TrackTransaction />
							</div>
							<div className="col-md-4">
								<CovidCard />
							</div>

							<div className="col-md-6 pt-5 pt-md-0 mt-4 mt-md-0">
								<SpecialtyCard />
							</div>
						</div>
					</div>
        </>
    )
}
