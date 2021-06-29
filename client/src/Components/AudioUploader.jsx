import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadTrack } from "../redux/actions";
import "./AudioUploader.css"

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
      console.log("entro en audio")
      if (!/audio/.test(obj.type) || obj.size >= 6291456)
        errors.file = "Sólo Archivos de Audio, menores a 6 MB.";
    }
    if (tipo === "image") {
      console.log("entro en imagen")
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
            file: e.target.files[0],
            name:e.target.value,
            size: e.target.files[0].size,
            type: e.target.files[0].type,
          },
        );
      } else {
        setImage({
          ...image,
          file: {},
          name: "",
          size: "",
          type: "",
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
  };
  return (
    <div className="eserut">
      <h1 className="titulo">Subi tu Opening</h1>
      <div className="formito">
        <form className="formito" onSubmit={HandleSubmit}>
          <label> Titulo del opening</label>
          <input
          className="inputText"
            type="text"
            name="name"
            value={inputText.name}
            onChange={HandleInput}
          />
          <label>Serie</label>
          <input
            className="inputText"
            type="text"
            name="serie"
            value={inputText.serie}
            onChange={HandleInput}
          />
          <label>Año</label>
          <input
          className="inputText"
            type="number"
            min="1900"
            name="year"
            value={inputText.year}
            onChange={HandleInput}
          />
          <label>Genero</label>
          <input
          className="inputText"
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
            accept="audio/*"
            value={mp3.name}
            onChange={handlerfiles}
          />
          <label>Selecciona la imagen</label>
          <input
            type="file"
            name="image"
            id="file"
            accept="image/*"
            value={image.name}
            onChange={handlerfiles}
          />
          <button className="uploadBtn" type="submit">Subir</button>
        </form>
      </div>
    </div>
  );
}

export default AudioUploader;
