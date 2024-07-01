
import { ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER } from "../types";
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'
const reminders = (state=[], action) => {
    let reminders = []; 

    state = read_cookie('reminders'); 

    if(action.type == ADD_REMINDER){
        reminders = [...state, {text:action.text, date:action.date, id:Math.random()}] ; 
        bake_cookie('reminders',reminders); 
        console.log('from reducer', reminders);
        return reminders;
    }
    else if(action.type == REMOVE_REMINDER){
        reminders = state.filter(item => item.id !== action.id);
        bake_cookie('reminders',reminders);
        return reminders;
    }
    else if(action.type == CLEAR_REMINDER){
        reminders = [];
        bake_cookie('reminders',reminders);
        return reminders ; 
    }
    else{
        return state; 
    }
}

export default reminders; 