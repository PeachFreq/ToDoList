import React from "react";

function InputArea(props) {
    return (
        <form className="form" onSubmit={props.onSubmit}>
            <input type="text" name="itemName" onChange={props.onChange} value={props.text}/>
            <button type="submit">
                <span>Add</span>
            </button>
        </form>
    )}

export default InputArea;