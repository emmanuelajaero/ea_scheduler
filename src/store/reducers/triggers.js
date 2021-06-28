import { TOGGLE_ADD_WORK_ORDER, SAVE_SERVICES, SAVE_EMPLOYEES } from '../actions/triggers'

const storedTriggers = {triggers: {
    addWorkOrder: false,
}};

const triggersReducer = (state=storedTriggers, action) => {
    switch(action.type){
        case TOGGLE_ADD_WORK_ORDER:
            return {...state, triggers: {...state.triggers, addWorkOrder: state.triggers.addWorkOrder ? false : true}};
        case SAVE_SERVICES:
            return {...state, triggers: {...state.triggers, services: action.services}};
        case SAVE_EMPLOYEES:
            return {...state, triggers: {...state.triggers, employees: action.employees}};
        default:
            return state;
    }
}

export default triggersReducer;