import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checkTodo, deleteTodo } from "../redux/reducers";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleCheckTodo = (id, updatedTask) => {
    setIsChecked(!isChecked);
    dispatch(checkTodo({ id, ...updatedTask }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id }));
  };

  // const [imgUrl, setImgUrl] = useState("");
  // const [imgLoaded, setImgLoaded] = useState(false);

  // useEffect(() => {
  //   setImgLoaded(false);
  //   const getImagen = async () => {
  //     const response = await fetch(
  //       "https://api.thecatapi.com/v1/images/search",
  //     );
  //     const data = await response.json();
  //     setImgUrl(data[0].url);
  //     setImgLoaded(true);
  //   };

  //   getImagen();
  // }, []);

  const done = item.done;
  const [isChecked, setIsChecked] = useState(done);

  return (
    <div
      className={`flex items-center justify-between rounded-md bg-${item.prioridad}-800 dark:bg-${item.prioridad}-800 ${
        isChecked ? `line-through opacity-50` : ``
      } mt-2 px-4 py-3 transition ease-in-out hover:scale-[101%] hover:bg-${item.prioridad}-500 duration-200`}
    >
      <div className="flex items-center space-x-3">
        <input
          id={item.id}
          className="size-5 accent-gray-700"
          type="checkbox"
          defaultChecked={done}
          onChange={() =>
            handleCheckTodo(item.id, { ...item, done: !item.done })
          }
        />
        <label
          className="flex items-center justify-center text-gray-50 dark:text-gray-50"
          id={item.id}
          htmlFor={item.id}
        >
          {/* {imgLoaded ? (
            <img
              className="rounded-xl object-contain px-2"
              src={imgUrl}
              style={{ width: "150px" }}
              alt="imagen"
            />
          ) : (
            <Placeholder />
          )} */}
          {item.tarea}
        </label>
      </div>
      <button
        variant="ghost"
        size="icon"
        className="text-gray-400 hover:scale-110 hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
        disabled={!item.tarea}
        onClick={() => handleDeleteTodo(item.id)}
      >
        <XIcon className="h-5 w-5" />
        <span className="sr-only">Delete</span>
      </button>
    </div>
  );
};

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default TodoItem;
