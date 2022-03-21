import React, { useState } from "react";
import Item from "./Item";
import style from "./Lista.module.scss"

function Lista() {
    const [tarefas, setTarefas] = useState([{
        tarefa: "React",
        tempo: "02:00:00",
    },
    {
        tarefa: "Javascript",
        tempo: "01:00:00",
    },
    {
        tarefa: "typescript",
        tempo: "03:00:00"
    }
    ])
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                console.log("fui clicado", tarefas);

                setTarefas ([...tarefas, { tarefa: "estudar Estado", tempo: "05:00:00" }])
            }}>estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}

            </ul>
        </aside>
    )
}

export default Lista