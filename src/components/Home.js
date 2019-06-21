import React from "react"
import { Jumbotron, Container } from "reactstrap"

const Home = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Welcome to Appsku</h1>
                    <p className="lead">This is website appsku</p>
                </Container>
            </Jumbotron>
        </div>
    )
}
export default Home