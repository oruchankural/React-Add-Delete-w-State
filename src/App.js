import React, {Component} from "react";
import AddUser from "./components/AddUser";
import Users from "./components/User";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: [
            {
                id : 1,
                fullname : "Oruç Han KURAL",
                email : "oruchankural@gmail.com"
            },
            {
                id : 2,
                fullname : " Han KURAL",
                email : "hankural@gmail.com"
            }
        ]
        };
        this.deleteUser = this.deleteUser.bind(this);
        this.addUser = this.addUser.bind(this);
     
    }
     // It's not efficent way to carrying delete function as prop to > User > User-prop
     deleteUser(id){
        let updatedUsers = this.state.user;
        updatedUsers = updatedUsers.filter(user => user.id !== id);
        // States are Direct Immutable
        this.setState({
            user: updatedUsers
        });

    }
    addUser(newUser){
        let updatedUsers = this.state.user;
        if(updatedUsers.length < 1){
            newUser.id = 1;
        }
        else{
            let maxId = Math.max.apply(Math, updatedUsers.map(function(o) { return o.id; }))
            newUser.id = maxId + 1;
        }

        updatedUsers.push(newUser);
        this.setState({
            user : updatedUsers
        });
    }
    
    render(){

        return (
            <div className="container">
            <h1>User App</h1>
            <hr/>
            <AddUser addUser ={this.addUser} />
            <Users deleteUser={this.deleteUser} users= {this.state.user} />
        </div>
        )
    }
}
export default App;