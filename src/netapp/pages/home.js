import React, { Component } from 'react';
import { Button} from 'semantic-ui-react'

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:window.localStorage.getItem('username')
        }
        let name=window.localStorage.getItem('username');
        if(name===null)
        {
            let path = `/login`;
            this.props.history.push(path);
        }
        this.pageChange = this.pageChange.bind(this);
    }
    pageChange() {
       
        localStorage.clear();
        let path = `/login`;
        this.props.history.push(path);
       
    }
    render(
        
        
    ) {
        return (
            <div>
            <div>home</div>
            <div>Welcome {this.state.username} <Button color='teal' type="button" onClick={this.pageChange} className="btn btn-rad"  >Logout</Button></div>
            
            </div>
        );
    }
}
export default home
