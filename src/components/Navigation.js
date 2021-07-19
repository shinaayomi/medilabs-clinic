import {Navbar, Nav,  Form, FormControl, Button} from 'react-bootstrap';
import Link from 'next/link';


function Navigation() {
    return (
        <>
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
        </>
    )
}

export default Navigation

