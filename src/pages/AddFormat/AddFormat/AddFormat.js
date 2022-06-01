import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AddFormat.css';

const AddFormat = () => {
    return (
        <div className='topMargin'>
            <h2>VERSATILE AD FORMATS</h2>
        {/* //     <div className="divLink">
        //         <Nav.Link as={Link} to="/advertisers/popunder"><button>POP-UNDER</button></Nav.Link>
        //         <Nav.Link as={Link} to="/advertisers/banner"><button>BANNER AD</button></Nav.Link>
        //         <Nav.Link as={Link} to="/advertisers/native"><button>NATIVE</button></Nav.Link>
        //         <Nav.Link as={Link} to="/advertisers/skim"><button>SKIM</button></Nav.Link>
        //     </div>
        // </div> */}

        <Navbar collapseOnSelect expand="lg">
                <Container>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <nav className="navBarButton">
                            <Nav.Link as={Link} to="/advertisers/popunder"><button>POP-UNDER</button></Nav.Link>
                            <Nav.Link as={Link} to="/advertisers/banner"><button>BANNER AD</button></Nav.Link>
                            <Nav.Link as={Link} to="/advertisers/native"><button>NATIVE</button></Nav.Link>
                            <Nav.Link as={Link} to="/advertisers/skim"><button>SKIM</button></Nav.Link>
                            </nav>
                        </Nav>
                        
                        <Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
    );
};

export default AddFormat;