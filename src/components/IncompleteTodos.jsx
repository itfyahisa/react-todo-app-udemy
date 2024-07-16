import React from 'react'

const IncompleteTodos = (props) => {
    const { todos, onClickComplete, onClickDelete } = props
    return (
        <div className="incomplete-area">
            <p className="title">未完了のTODO</p>
            <ul>
                {todos.map((todo, index) => {
                    //仮想DOMでは差分のみを抽出してDOMに反映していく。
                    //ループでレンダリングするときは正確に反映するために目印をつける必要がある
                    //indexでは並び替え等で数字が変わるため一意ではないので不適、keyをつける！
                    return ( //return と {} は消してもいい アロー関数は返り値が単一行の時省略できる
                        <li key={todo}>
                            <div className="list-row">
                                <p className="todo-item">{todo}</p>
                                {/* 引数を設定して関数を実行したいとき、アロー関数で関数を渡すようにする */}
                                <button onClick={() => onClickComplete(index)}>完了</button>
                                <button onClick={() => onClickDelete(index)}>削除</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default IncompleteTodos