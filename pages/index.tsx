import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { Button, Checkbox, TextInput } from "@mantine/core";
import { ChangeEvent, useState } from "react";

const Home: NextPage = () => {
  const [todo, setTodo] = useState<string>("");
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);

  const changeTodo = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
  };

  const addTodo = (): void => {
    if (todo === "") return;
    const newTodo = [...incompleteTodos, todo];
    setIncompleteTodos(newTodo);
    setTodo("");
  };

  const completeTodo = (index: number): void => {
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    const newIncompleteTodos = incompleteTodos.filter((todo, i) => i !== index);
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const unCompleteTodo = (index: number): void => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    const newCompleteTodos = completeTodos.filter((todo, i) => i !== index);
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <Layout>
      <div className="flex justify-center items-center mt-16 gap-10">
        <TextInput
          placeholder="todoを追加"
          classNames={{
            input: "bg-[#F5F5F5]",
            wrapper: "w-[356px] text-[#AAAAAA]",
          }}
          value={todo}
          onChange={changeTodo}
        />
        <Button
          className="text-xl font-bold"
          onClick={addTodo}
          disabled={todo.length < 0}
        >
          Todoを追加
        </Button>
      </div>
      <div className="pl-56">
        <div className="text-xl mt-10 mb-7">📝 未完了</div>
        <ul className="pl-3">
          {incompleteTodos.map((incompleteTodo, index) => {
            return (
              <li className="mb-6" key={index}>
                <Checkbox
                  label={incompleteTodo}
                  onChange={() => completeTodo(index)}
                  checked={false}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pl-56">
        <div className="text-xl mt-10 mb-7">✅ 完了済み</div>
        <ul className="pl-3">
          {completeTodos.map((completeTodo, index) => {
            return (
              <li className="mb-6" key={index}>
                <Checkbox
                  label={completeTodo}
                  checked={true}
                  onChange={() => unCompleteTodo(index)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
