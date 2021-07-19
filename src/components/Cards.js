import { CardDeck, Card } from "react-bootstrap"

export default function Cards() {
    return (
        <>
            <CardDeck className="text-center px-3 pb-3">
							<Card className="border-0">
									<Card.Img variant="top" src="/icon/card1.svg/" width="49" height="63" />
									<Card.Body className="p-2">
											<p className="big_weight mb-0 mt-2">1000+</p>
											<Card.Text>										
													<p className="small_weight mb-1">Patients</p>
											</Card.Text>
									</Card.Body>									
							</Card>
							<Card className="border-0">
									<Card.Img variant="top" src="/icon/card2.svg" width="49" height="63" />
									<Card.Body className="p-2">
									<p className="big_weight mb-0 mt-2">10 Yrs</p>
											<Card.Text>
													<p className="small_weight mb-1">Experience</p>
											</Card.Text>
									</Card.Body>									
							</Card>
							<Card className="border-0">
									<Card.Img variant="top" src="/icon/card3.svg" width="49" height="63" />
									<Card.Body className="p-2">
									<p className="big_weight mb-0 mt-2">4.5</p>
											<Card.Text>
													<p className="small_weight mb-1">Ratings</p>
											</Card.Text>
									</Card.Body>									
							</Card>
					</CardDeck>
        </>
    )
}
