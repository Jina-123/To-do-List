import {useState} from 'react'
import Item from './Item'
import {v4 as uuid4} from 'uuid'

export default function Form() {

    const [dataArr, setDataArr] = useState([
        {txt: "Promener le chien", id: uuid4()},
        {txt: "Sport", id: uuid4()}
    ])

    const [stateInput, setStateInput] = useState();

    const deleteElement = id => {
        //console.log(id);*
        const filterdState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filterdState)
    }

    const addTodo = e => {
        e.preventDefault();
        const newArr = [...dataArr]

        const newTodo = {};
        newTodo.txt = stateInput;
        newTodo.id = uuid4();

        newArr.push(newTodo);
        setDataArr(newArr);

        setStateInput('')
    }

    const linkedInput = e => {
        setStateInput(e);
    }

    return (

        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

            <form className="mb-3" onSubmit={addTodo}>
                <label htmlFor="todo" className="form-label mt-3"></label>
                <input class="text-menu" value={stateInput} onInput={e => linkedInput(e.target.value)} type="text" className="form-control" id="todo" />
                <button id="bouton" class="btn btn-primary">Add</button>
            </form>

            <ul class="list" className="list-group">
                {dataArr.map(item => {
                    return (
                        <Item txt={item.txt} key={item.id} id={item.id} delFunc={deleteElement} />
                    )
                })}
            </ul>
        </div>
    )
}