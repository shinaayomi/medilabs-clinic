import { Card } from "react-bootstrap"

export default function CovidCard() {
    return (
        <>
            <Card className="covid-card pr-5">
							<Card.Body>
								<h2 className="big_weight">Covid-19 Healthcare</h2>							
								<Card.Text>
									Book your next online appointments
								</Card.Text>							
							</Card.Body>
					</Card>
        </>
    )
}
