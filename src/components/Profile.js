import React from 'react'
import { Container } from "reactstrap"

class Profile extends React.Component {

    componentDidMount(){
        document.title = "APPSKU | Profile"
    }

    render() {
        return (
            <div>
                <h2>Ini Profile</h2>
            </div>
        )
    }
}
export default Profile