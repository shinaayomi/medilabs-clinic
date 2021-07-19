import { CardDeck, Card, Form, Button, onClick } from "react-bootstrap"
import {useState} from 'react';


export default function CardList() {
	const [step, setStep] = useState(0);
	
	const handleClick = () => {
		setStep(1)
	}


    return (
      <>
				{step == 0 && 
					<div id="sup">
						<p className="big_weight">Available Doctors</p>
						<CardDeck>
							<Card className="card-list">
									<Card.Img variant="top" src="/img/image1.svg" width="78" height="78" />
									<Card.Body>
									<button className="big_weight border-0 bg-transparent">Dr. Klimisch J</button>
									<Card.Text>
										<p className="small_text mb-0">Surgeon</p>
										<p className="smaller_text mb-0">⭐️ 4.3 (130 reviews)</p>
									</Card.Text>
									</Card.Body>									
							</Card>
							<Card className="card-list">
									<Card.Img variant="top" src="/img/image2.svg" width="78" height="78" />
									<Card.Body>
									<button className="big_weight border-0 bg-transparent">Dr. Mensah T</button>
									<Card.Text>
									<p className="small_text mb-0">Oncologists</p>
										<p className="smaller_text mb-0">⭐️ 4.3 (130 reviews)</p>
									</Card.Text>
									</Card.Body>									
							</Card>
							<Card className="card-list">
								<div className="card_pic">
										<div className="active"></div>
										<Card.Img variant="top" src="/img/image3.svg" width="78" height="78" />
									</div>
									<Card.Body>
										<button id="myBtn" className="big_weight border-0 bg-transparent" onClick={handleClick}>Dr. Bellamy N</button>
									<Card.Text>
									<p className="small_text mb-0">Viralogist</p>
										<p className="smaller_text mb-0">⭐️ 4.5 (135 reviews)</p>
									</Card.Text>
									</Card.Body>									
							</Card>
							<Card className="card-list">
									<Card.Img variant="top" src="/img/image4.svg" width="78" height="78" />
									<Card.Body>
									<button className="big_weight border-0 bg-transparent">Dr. Marc M</button>
									<Card.Text>
									<p className="small_text mb-0">Rheumatologists</p>
										<p className="smaller_text mb-0">⭐️ 4.3 (130 reviews)</p>
									</Card.Text>
									</Card.Body>									
							</Card>
						</CardDeck>
					</div>
				}

				{step == 1 && 
					<div id="sub" className="">
						<Form className="profile_review">
							<h6 className="small_text">Send a Review For Dr. Bellamy</h6>							
							<textarea name="" className="form-control pl-5 pt-3 border-0 bg-light" 
								style={{height:129}} placeholder="Review" id="" cols="30" rows="10"></textarea>
							
							<div className="row mt-3">
								<div className="col">
									<span className="small_text">Ratings </span> 
									<br />
									<img src="/icon/star.svg" alt="star" />
									<img src="/icon/star.svg" alt="star" />
									<img src="/icon/star1.svg" alt="star" />
									<img src="/icon/star1.svg" alt="star" />
									<img src="/icon/star1.svg" alt="star" />
								</div>
								<div className="col">
									<Button variant="primary" className="float-right py-3 px-5" type="submit">
										Submit
									</Button>
								</div>
							</div>				
						</Form>			
					</div>
				}
					

					
      </>
    )
}
