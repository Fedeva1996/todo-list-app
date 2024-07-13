import React, { useState, useEffect } from "react";

const TodoItem = (props) => {
  const [imgUrl, setImgUrl] = useState("");
  //console.log(props)
  useEffect(() => {
    // codigo de lo que queremos que se ejecute:
    // La llamada a una API externa para traer una imagen random
    const getImagen = async () => {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=BHLENVE3VWZb7D1S9cpbmORAkiVCHg0HMjYBHzF2&count=1",
      );
      const data = await response.json();
      // console.log(data[0]);
      /* data[0] = {
          date: "una fecha",
          ...
          url: "url de imagen"
       } */
      // console.log("url de la imagen", data[0].url);
      // nombreDeLaFuncion(nuevoValorDelEstado)
      setImgUrl(data[0].url);
    };

    getImagen();
  }, []);

  const {
    onChange,
    item: { _id, name, done },
  } = props;

  //console.log(_id, name, done);
  return (
    <div className={`mt-2 flex items-center justify-between transition ease-in-out hover:scale-[101%] ${done ? ' line-through opacity-50' : ''}`}>
      <div className="flex items-center space-x-3">
        <input
          id={_id}
          className="size-5 accent-gray-700"
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <label
          className={`flex items-center justify-center text-gray-50 dark:text-gray-50`}
          id={_id}
          htmlFor={_id}
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
          {name}
        </label>
      </div>
    </div>
  );
};

export default TodoItem;
