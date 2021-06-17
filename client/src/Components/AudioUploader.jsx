import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadTrack } from "../redux/actions";

function AudioUploader() {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState({
    name: "",
    year: "",
  });
  const [mp3, setMp3] = useState({
    file: [],
    name: "",
    size: "",
    type: "",
  });
  const[image,setImage]=useState({
    image: "",
    file: {}
  })
  const [errors, setErrors] = useState({});
  const HandleInput = (e) => {
    let { name, value } = e.target;
    setInputText({
      ...inputText,
      [name]: value,
    });
  };
  const valifile = (obj, tipo) => {
    let errors = {};
    if (tipo === "mp3") {
      if (!/audio/.test(obj.type) || obj.file.size >= 6291456)
        errors.file = "Sólo Archivos de Audio, menores a 6 MB.";
    }
    if (tipo === "image") {
      if (!/image/.test(obj.type) || obj.size >= 2097152)
        errors.file = "Sólo Archivos de Imagen, menores a 2 MB.";
    }
    return errors;
  };

  const handlerfiles = (e) => {
    if (e.target.name === "mp3") {
      if (e.target.files[0]) {
        setMp3({
          ...mp3,
          file: e.target.files[0],
          name: e.target.value,
          size: e.target.files[0].size,
          type: e.target.files[0].type,
        });
      } else {
        setMp3({
          ...mp3,
          file: {},
          name: "",
          size: "",
          type: "",
        });
      }
    } else {
      if (e.target.files[0]) {
        setImage({
          ...image,
          image: e.target.files[0],
          file: {
            size: e.target.files[0].size,
            type: e.target.files[0].type,
          },
        });
      } else {
        setImage({
          ...image,
          image: "",
          file: {},
        });
      }
    }

    setErrors(
      valifile(
        { size: e.target.files[0].size, type: e.target.files[0].type },
        e.target.name
      )
    );
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    let formito = new FormData();
    formito.append("body", JSON.stringify(inputText));
    formito.append("tracks", mp3.file);
    formito.append("tracks",image.file);
    dispatch(uploadTrack(formito));
    console.log("te lo confirmo", formito);
  };
  return (
    <div>
      <h1 className="titulo">Subite Ese TEMAIKEN</h1>
      <div className="formito">
        <form id="uploader" onSubmit={HandleSubmit}>
          <label> Subi tu Opening</label>
          <label> Titulo del opening</label>
          <input
            type="text"
            name="name"
            value={inputText.name}
            onChange={HandleInput}
          />
          <label>Serie</label>
          <input
            type="text"
            name="serie"
            value={inputText.serie}
            onChange={HandleInput}
          />
          <label>Año</label>
          <input
            type="number"
            min="1900"
            name="year"
            value={inputText.year}
            onChange={HandleInput}
          />
          <label>Genero</label>
          <input
            type="text"
            name="genre"
            value={inputText.genre}
            onChange={HandleInput}
          />
          <label> Selecciona el Audio </label>
          <input
            type="file"
            name="mp3"
            id="file"
            value={mp3.name}
            onChange={handlerfiles}
          />
          <label>Selecciona la imagen</label>
          <input
            type="file"
            name="image"
            id="file"
            value={image.image}
            onChange={handlerfiles}
          />
          <button type="submit">Subir</button>
        </form>
      </div>
    </div>
  );
}

export default AudioUploader;
