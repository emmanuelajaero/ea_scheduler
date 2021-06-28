// import axios

export const REFRESH_WORK_ORDERS = 'REFRESH_WORK_ORDERS';
export const ADD_WORK_ORDER = 'ADD_WORK_ORDER';



export const refreshWorkOrders = (workOrders) => {
    return {type: REFRESH_WORK_ORDERS, workOrders: workOrders};
}

export const addWorkOrder = (workOrder) => {
    return {type: ADD_WORK_ORDER, workOrder: workOrder};
}