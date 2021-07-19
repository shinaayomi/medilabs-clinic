export default function Content() {
    return (
        <>
           <h6 className="big_weight pt-2">Working time</h6>
					 <p className="small_weight">Mon - Sat (08:30 AM - 09:00 PM)</p>

					 <h6 className="big_weight pt-2">About Doctor</h6>
					 <p className="small_weight">Dr. Bellamy Nicholas is a top specialist at London 
					 	Bridge Hospital at London. He has achieved several awards and recognition for is 
					 	contribution and service in his own field. He is available for private consultation.</p>

						<h6 className="big_weight pt-2">Communication</h6>

						<div className="container">
							<div className="row">
								<div className="col-md-6 col-8">
										<div className="row">
											<div className="col-2 col-md-3 pl-0">
												<img src="/icon/message.svg" alt="" />
											</div>
											<div className="col-9 pr-0">
												<h6>Messaging</h6>
												<p className="small_weight">Chat me up, share photos.</p>
											</div>											
										</div>
								</div>
								<div className="col-md-6 col-8">
										<div className="row">
											<div className="col-2 col-md-3 pl-0">
												<img src="/icon/video.svg" alt="" />	
											</div>
											<div className="col-9 pr-0">
												<h6>Video call</h6>
												<p className="small_weight">See your doctor live.</p>
											</div>											
										</div>
								</div>
								{/* Another div */}
								<div className="col-8">
										<div className="row">
											<div className="col-2 col-md-3 pl-0">
												<img src="/icon/call.svg" alt="" />	
											</div>
											<div className="col-9">
												<h6>Audio call</h6>
												<p className="small_weight">Call your doctor directly.</p>
											</div>											
										</div>
								</div>
							</div>
						</div>
        </>
    )
}
