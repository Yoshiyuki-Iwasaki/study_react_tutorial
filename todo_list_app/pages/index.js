import { useState } from "react";
const App = () => {
  // 作成したtodoを入れておくためのstate
  const [todos, setTodos] = useState([]);
  // フォームに入力された値をtodoに登録するまでに入れておくためのstate
  const [tmpTodo, setTmpTodo] = useState("");

  // formの内容が空白の場合はalertを出す
  const addTodo = () => {
    if (tmpTodo === "") {
      alert("文字を入力してください");
      return;
    }
    setTodos([...todos, tmpTodo]);
    setTmpTodo(""); //Addを押したした後にinputを空にする
  };

  // todoを削除する処理
  const deletetodo = index => {
    const newTodos = todos.filter((todo, todoIndex) => {
      return index !== todoIndex; //removeを押したリスト以外表示
    });
    setTodos(newTodos);
  };

  return (
    <>
      <h1>Todoアプリ</h1>
      <div className="form">
        <input
          type="text"
          name="todo"
          // formの入力値をtmpTodoで持っておく
          onChange={e => setTmpTodo(e.target.value)}
          value={tmpTodo}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              <button onClick={() => deletetodo(index)}>x</button>
            </li>
          );
        })}
      </ul>
      <style>{`
        h1 {
          text-align: center;
        }
        .form {
          display: flex;
          justify-content: center;
        }
        ul {
          width: 200px;
          margin: 10px auto;
        }
      `}</style>
    </>
  );
};

export default App;
