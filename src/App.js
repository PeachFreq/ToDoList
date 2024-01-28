import React, {useState} from "react";
import ToDoItem from "./components/ToDoItem";
import InputArea from "./components/InputArea";

function App() {
    const [items, setItems] = useState([
        {id: 1, itemName: "Find Mike", done: false},
        {id: 2, itemName: "Destroy Demogorgen", done: false},
        {id: 3, itemName: "Save the World", done: false}
    ])

    const [newItemName, setNewItemName] = useState("");

    function handleChange(event) {
        const textString = event.target.value;
        setNewItemName(textString)
    }

    function addItem(event) {
        event.preventDefault();
        setItems((prevState) => [
            ...prevState,
            {id: Math.max(...prevState.map(item => item.id)) + 1, itemName: newItemName, done: false}
        ]);
        setNewItemName("")
    }

    function toggleDone(itemId) {
        const newItems = items.map((item) => {
            if (item.id === itemId) {
                return {...item, done: !item.done}
            } else {
                return {...item}
            }
        });
        setItems(newItems)
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <InputArea
                text={newItemName}
                onChange={handleChange}
                onSubmit={addItem}
            />
            <div>
                <ul>
                    {items.map((item, index) => (
                        <ToDoItem
                            key={item.id} //Note that you're not setting an id when you add a new item
                            text={item.itemName}
                            done={item.done}
                            onClick={() => toggleDone(item.id)}
                        />
                        )
                    )}
                </ul>
            </div>
        </div>
    );
}

export default App;
