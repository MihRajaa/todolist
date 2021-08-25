import React from 'react'
import TodoCard from './TodoCard'

const Todolist = ({list, del, comp}) => {
    return (
        <div>
            {
                list.map((el,i) =>
                    <TodoCard key={i} del={del} task={el} comp={comp} />
                    )
            }
        </div>
    )
}

export default Todolist
