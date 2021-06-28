import { ADD_WORK_ORDER, REFRESH_WORK_ORDERS } from '../actions/work-orders'
// import axios
// import { TOGGLE_ADD_WORK_ORDER } from '../actions/triggers'

const storedWorkOrders = {workOrders: []};



const workOrdersReducer = (state=storedWorkOrders, action) => {
    // console.log("Action time with", action)
    switch(action.type){
        case ADD_WORK_ORDER:
            return {...state, workOrders: [...state.workOrders, action.workOrder]};
        case REFRESH_WORK_ORDERS:
            return {...state, workOrders: action.workOrders};
        // case TOGGLE_ADD_WORK_ORDER:
        //     return {...state, addWorkOrder: state.addWorkOrder ? false : true};
        default:
            return state;
    }
}

export default workOrdersReducer;