export const TOGGLE_ADD_WORK_ORDER = 'TOGGLE_ADD_WORK_ORDER';
export const SAVE_SERVICES = "SAVE_SERVICES";
export const SAVE_EMPLOYEES = "SAVE_EMPLOYEES";


export const toggleAddWorkOrder = () => {
    return {type: TOGGLE_ADD_WORK_ORDER};
}

export const saveServices = (services) => {
    return {type: SAVE_SERVICES, services: services};
}

export const saveEmployees = (employees) => {
    return {type: SAVE_EMPLOYEES, employees: employees};
}
