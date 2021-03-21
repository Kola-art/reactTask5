import React from 'react';


export class UsersForm extends React.Component {
    constructor(props){
        super(props);
        this.HandleSubmit=this.HandleSubmit.bind(this);
        this.HandleChange=this.HandleChange.bind(this);
        this.ViewInfo=this.ViewInfo.bind(this);
        this.state = {
            result: ''
        }
    }
    
        HandleSubmit(e){
            e.preventDefault();
            
          return  this.setState({result: JSON.stringify(this.state)});
        }
         ViewInfo(){
            
             return this.state.result;

        }
       
        HandleChange(e){
            const name = e.target.name;
            const value = e.target.value;
            this.setState({[name]: value });
            // console.log(this.state);
            

        }
    render(){
       
        return (
            <div>
                <p>Task 5.2</p>
                <form onSubmit={this.HandleSubmit}>
                   <input name="Input1" onChange={this.HandleChange}></input>
                   <input name="Input2" onChange={this.HandleChange}></input>
                   <input name="Input3" onChange={this.HandleChange}></input>
                   <button  type="submit">GetIt</button>
                </form>
               <div><this.ViewInfo /></div>
            </div>
        )
    }

}