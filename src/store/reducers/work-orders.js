import { ADD_WORK_ORDER, REFRESH_WORK_ORDERS } from '../actions/work-orders'

const storedWorkOrders = {workOrders: []};

const workOrdersReducer = (state=storedWorkOrders, action) => {
    // console.log("Action time with", action)
    switch(action.type){
        case ADD_WORK_ORDER:
            return {...state, workOrders: [...state.workOrders, action.workOrder]};
        case REFRESH_WORK_ORDERS:
            return {...state, workOrders: action.workOrders};
        default:
            return state;
    }
}

export default workOrdersReducer;