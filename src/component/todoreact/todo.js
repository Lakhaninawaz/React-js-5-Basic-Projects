import React, { useEffect, useState } from 'react';
import "../style.css"

// get the localstorage dat function
const getLocalData = () => {
    const lists = localStorage.getItem("myTodoList");

    if(lists) {
        return JSON.parse(lists)
    } else {
        return [];
    }
}

const Todo = () => {

    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);


    // add items function
    const addItem = () => {
        if(!inputData) {
            alert('Plz fill the Data');
        } else if(inputData && toggleButton){
            setItems(
                items.map((curElem) => {
                    if(curElem.id === isEditItem){
                        return {...curElem, name: inputData}
                    }
                    return curElem;
                })
            );

        setInputData([]);
        setIsEditItem("");
        setToggleButton(false);
        } else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            }
            setItems([...items, myNewInputData]);
            setInputData("");
        }
    }

    // delete items function
    const deleteItem = (index) => {
        const updatedItems = items.filter((curElem) => {
            return curElem.id !== index;
        })
        setItems(updatedItems)
    }

    // remove all items
    const removeAll = () => {
        setItems([]);
    }

    // edit Item function
    const editItem = (index) => {
        const item_todo_edited = items.find((curElem) => {
            return curElem.id === index;
        })

        setInputData(item_todo_edited.name);
        setIsEditItem(index);
        setToggleButton(true);
    }


    // adding Localstorage
    useEffect(() => {
        localStorage.setItem("myTodoList", JSON.stringify(items))
    }, [items]);

  return (
    <>
        <div className='body-todo'>
            <div className="app-title">
                <figure>
                    <img src="./images/todo.svg" alt="todo-logo" />
                    <figcaption className='text'>Add Your List Here ✌️</figcaption>
                </figure>
                <div className="todo-input">
                    <input type="text" placeholder='✍️ Add Item' className="form-control" 
                    value={inputData}
                    onChange={(event) => setInputData(event.target.value)}

                    />
                    {toggleButton ? ( <i class="fa fa-edit add-btn" onClick={() => addItem()}></i> ) : ( <i class="fa fa-plus add-btn" onClick={() => addItem()}></i> )}
                </div>
                {/* show our Items */}

                <div className='showItems'>
                    {items.map((curElem) => {
                        return(
                    <div className="eachItem" key={curElem.id}>
                    <h3 className='text'>{curElem.name}</h3>
                    <div className="todo-btn">
                    <i class="fa fa-edit" onClick={() => { editItem(curElem.id) }}></i> 
                    <i class="fa fa-trash" onClick={() => { deleteItem(curElem.id)}}></i> 
                    </div>
                    </div>
                        );
                    })}
                </div>

                {/* remove all button */}
                <div className='showItems'>
                <button className='btn effect-3' data-sm-link-text="Remove All" onClick={removeAll}>
                    <span>CHECK LIST</span>
                </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo