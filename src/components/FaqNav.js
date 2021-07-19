import { Navbar, Nav, Button, Form } from "react-bootstrap"
import Link from 'next/link'

export default function FaqNav() {
    return (
        <>
					<div className="faqNav">
						<Navbar className="px-md-5" expand="lg">
							<Navbar.Brand href="/?"  className="pl-md-3">
								<img src="/img/logo.svg" alt="Medilabs Logo" />
							</Navbar.Brand>

							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav" className="pr-md-3">
									<Nav className="ml-auto">
									<Nav.Link className="mr-4" href="/about">About Us</Nav.Link>
									<Nav.Link className="mr-4" href="/track-transaction">Track Transaction</Nav.Link>
									<Nav.Link className="mr-4" href="/faq">FAQ</Nav.Link>
									</Nav>
									<Form inline>									
										<Button className="btn">
											<img src="/icon/calculator 1.svg" alt="cal" className="mr-2"/>
											Book Consultations
										</Button>
									</Form>
							</Navbar.Collapse>
						</Navbar>
						<div className="pl-md-5 ml-md-5">
							<p className="pl-md-5 ml-md-5 px-3">Frequently asked questions</p>
						</div>
					</div>
        </>
    )
}
