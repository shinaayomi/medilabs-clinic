import { Navbar } from 'react-bootstrap';
import Link from 'next/link'

export default function About() {
    return (
        <div className="medi-apple">
            <div className="container pt-4">
                <div className="row">
                    <div className="col-md-7">
                        <Navbar.Brand href="/?">
													<img src="../img/logo-2.svg" alt="medilabs" />
												</Navbar.Brand>
                        <h1 className="mt-5 mb-4 big_weight">Book a COVID-19 test at the UK's best rated private clinics</h1>
                        <p className="colored big">Get tested at one of our UK based, government approved provider COVID-19 
                            test centres. Over 5,000 5 star reviews and 25,000 tests administered.</p>
                        <button className=" btn py-3 px-5 choose border-0">Choose Test</button>
                        <hr class="my-5" />																						
                    </div>
                </div>

								<div className="container pb-5 pl-md-5">
									<div className="row align-items-center ">
										<div className="col-md-2 d-flex justify-content-center order-12 mt-md-0 mt-5">
											<button className="narrow_btn">
												<img src="/icon/vector 5.svg" alt="" />
											</button>
											<button className="narrow_btn ml-3">
												<img src="/icon/vector 4.svg" alt="" />
											</button>
										</div>
										<div className="col-md-6 order-1 order-md-12">
											⭐⭐⭐⭐⭐️
											<p className="big_text mt-3">“ Efficient service and results received ahead of the 48h guarantee. Recommend and will use again. ”</p>
											<span className="small_weight">Powered by</span>
											<img src="/icon/Review.svg" class="img-fluid" alt="Review" />
										</div>
									</div>
								</div>
            </div>
        </div>
    )
}
