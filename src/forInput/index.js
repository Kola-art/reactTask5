import React from 'react';

export class UsersNumber extends React.Component{
    constructor(props){
        super(props);
        this.HandleChange=this.HandleChange.bind(this);
        this.state = {
            value: ''
        }

    }

    HandleChange(e){
        let inp =  this.setState({value: e.target.value});
        if(Number.isNaN(inp)) return '';
        else return inp;
       
    }

    render(){   
        let resNumber1 = this.state.value * 0.5;
        let resNumber2 = this.state.value * 0.05;
        return(
           <div>
               <p>Task 5.3</p>
            <div>
                <label>Введите число</label>
                <input type='text' onChange={this.HandleChange}></input>
            </div>
            <div>
                <label>Введенное число * 0.5: </label>
                 <input value={resNumber1}></input>; <br></br>
                 <label>Введенное число * 0.05: </label>
                 <input value={resNumber2}></input>;
            </div>
           </div>

        )

    }
}
