const ADD = (data) => {
    return {
        type: "Add_To_Cart",
        payload: data,
    };
};

const REMOVE = (data) => {
    return {
        type: "Remove_From_Cart",
        payload: data,
    };
};

const RMV_ONE = (data) => {
    return {
        type: "RMV_ONE",
        payload: data,
    };
};

export { ADD, REMOVE,RMV_ONE }; // Named export for better clarity
