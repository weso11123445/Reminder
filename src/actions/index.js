
import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDER } from "../types";

export const AddReminder = (text,date) => {
    const action = {
        type:ADD_REMINDER,
        text:text,
        date:date,
    }
    console.log('Add',action); 
    return action ; 
}

export const RemoveReminder = (id) =>{ 
    const action = {
        type:REMOVE_REMINDER,
        id:id,
    }
    console.log('Remove', action);
    return action; 
}

export const ClearReminder = () => {
    const action = {
        type:CLEAR_REMINDER,
    }
    return action
}