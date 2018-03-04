export function tableStructure(state = { x: 7, y: 7 }, action) {
    const value = action.type === "TABLE_STRUCTURE" ? action.value : state
    return value;
}

export function modifiedData(state = [], action) {
    const data = action.data === "MODIFIED_DATA" ? action.data : state
    return data;
}

export function modifiedStyle(state = [], action) {
    const type = action.type === "MODIFIED_STYLE" ? action.type : state
    return type;
}

export function buttonClicked(state = false, action) {
    const buttonClicked = action.buttonClicked === "BUTTON_CLICKED" ? action.buttonClicked : state
    return buttonClicked;
}

export function buttonName(state = "", action) {
    const val = action.type === "BUTTON_NAME" ? action.type : state
    return val;
}
export function currentSelection(state = {}, action) {
    const type = action.type === "CURRENT_SELECTION" ? action.type : state
    return type;
}