import { TOGGLE_ADD_WORK_ORDER } from '../actions/triggers'

const storedTriggers = {triggers: {
    addWorkOrder: false,
}};

const triggersReducer = (state=storedTriggers, action) => {
    switch(action.type){
        case TOGGLE_ADD_WORK_ORDER:
            return {...state, triggers: {...state.triggers, addWorkOrder: state.triggers.addWorkOrder ? false : true}};
        default:
            return state;
    }
}

export default triggersReducer;