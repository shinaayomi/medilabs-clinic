import { Button, Dropdown, ButtonGroup, Card, CardDeck} from 'react-bootstrap';
import Cards from './Cards';


export default function Profile() {
    return (
        <div className="profile">
            <div className="container">
							<div className="row">
								<div className="col px-md-0">
									<button className="btn"><img src="/icon/back.svg" alt="" /></button>
								</div>
								<div className="col d-flex justify-content-end align-items-center px-md-0">
									<button className="btn"><img src="/icon/icon.svg" alt="" /></button>
								</div>
							</div>							
            </div>

						<div className="text-center">
								<div className="profile_pics">
									<img src="/img/image.png" width="110" height="110" alt="" />
								</div>
								<h5 className="big_weight">Dr. Bellamy Nicholas</h5>
								<p className="small_text">Viralogist</p>
						</div>

						<Cards />			
        </div>
    )
}
