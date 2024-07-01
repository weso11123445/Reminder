import React,{Component} from "react";
import { AddReminder, ClearReminder, RemoveReminder } from "../actions";
import { connect } from "react-redux";
import reminders from "../reducers";
import moment from 'moment'; 
import DatePicker from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css";


class App extends Component{

    state = {
        text:'',
        date: new Date(), 
    }

    render_reminders = () => {
        const reminders = this.props.reminders; 

        return(
            <ul className="list-group">
                {
                    reminders.map(reminder => {
                        return(
                            <li key={reminder.id} className="list-group-item">
                                <div>{reminder.text}</div>
                                <div>{moment(new Date(reminder.date)).fromNow()}</div>
                                <div className="remove btn btn-danger remove" onClick={() => this.props.RemoveReminder(reminder.id)}>x</div>
                            </li>
                        )
                    })
                }
            </ul>
        )

        
    }

    render(){
        console.log(this.props);
        return(

            <div className="App">
                   <img src="./EDU-Reminders-Hero@2x.jpg" className="reminder-image"></img>
                   <div className="reminder-title">
                    <h2>What should u do ?</h2>
                    </div>
                    <input type="text"
                     placeholder="Enter what u think ..."
                     className="form-control"
                     onChange={(e) => this.setState({text:e.target.value})}
                     value={this.state.text}
                     ></input> 
                   
                    <DatePicker
                    className="form-control datepicker"
                    value={this.state.date}
                    selected={this.state.date}
                    onChange={(date) => this.setState({date:date})}
                    showTimeSelect
                    timeFormat="HH:mm"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="time"
                    ></DatePicker>
                    <button  className="btn btn-primary"
                    onClick={() => {this.props.AddReminder(this.state.text,this.state.date);
                        this.setState({
                            text:'', 
                            
                        })

                    }}
                    >Add Reminder</button>

                    {this.render_reminders()}   

                    <button className="btn btn-danger"
                    onClick={() => this.props.ClearReminder()}
                    >Clear Reminder</button>            
            </div>
            
        )
    }
};

/*function mapDispatchToProps(dispatch){
    return{
        add_Reminder:() => dispatch(AddReminder())
    }
}*/



export default connect(state => {
    return{
        reminders:state
    }
},{AddReminder, RemoveReminder, ClearReminder})(App); 