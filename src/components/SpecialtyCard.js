import { CardDeck, Card } from "react-bootstrap"

export default function SpecialtyCard() {
    return (
        <>
					<p className="big_weight big_text">Specialty 😷</p>
					<CardDeck>
						<Card className="card-list">
								<Card.Img variant="top" src="/icon/brain-icon.svg" width="37" height="38" />
								<Card.Body className="px-0">
								<button className="border-0 bg-transparent">Neurology</button>
								<Card.Text>								
									<p className="smaller_text mb-0">2,029 Doctors</p>
								</Card.Text>
								</Card.Body>									
						</Card>
						<Card className="card-list">
								<Card.Img variant="top" src="/icon/dna-icon.svg" width="27" height="38" />
								<Card.Body className="px-0">
								<button className="border-0 bg-transparent">Genetics</button>
								<Card.Text>								
									<p className="smaller_text mb-0">1,870 Doctors</p>
								</Card.Text>
								</Card.Body>									
						</Card>
						<Card className="card-list">																	
								<Card.Img variant="top" src="/icon/dentist.svg" width="44" height="40" />								
								<Card.Body className="px-0">
									<button id="myBtn" className="border-0 bg-transparent">Dentistry</button>
								<Card.Text>								
									<p className="smaller_text mb-0">1,064 Doctors</p>
								</Card.Text>
								</Card.Body>									
						</Card>
						<Card className="card-list">
								<Card.Img variant="top" src="/icon/surgery.svg" width="44" height="40" />
								<Card.Body className="px-0">
								<button className="border-0 bg-transparent">Surgery</button>
								<Card.Text>
									<p className="smaller_text mb-0">1,064 Doctors</p>
								</Card.Text>
								</Card.Body>									
						</Card>
					</CardDeck>
        </>
    )
}
