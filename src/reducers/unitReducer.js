export default (state = [], action) => {
    switch (action.type) {
        case "Set_Unit":
            return action.payload;
        default:
            return state;
    }
};
