import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"
import {uploadTrack} from "../redux/actions"

function AudioUploader() {
  const dispatch= useDispatch()
  const [inputText, setInputText] = useState({
    name: "",
    year: "",
  });
  const [file, setFile] = useState({
    file: [],
    name: "",
    size: "",
    type: "",
  });
  const [errors, setErrors] = useState({});
  const HandleInput = (e) => {
    let { name, value } = e.target;
    setInputText({
      ...inputText,
      [name]: value,
    });
  };
  const valifile = (obj) => {
    let errors ={}
    if (obj.file && (!/audio/.test(obj.file.type) || obj.file.size >= 8388608)){
      errors.file = "Sólo Archivos de Audio, menores a 8 MB.";
    }
    return errors;
  };

  const handlerfiles = (e) => {
    if (e.target.files[0]) {
      setFile({
        ...file,
        file: e.target.files[0],
        name: e.target.value,
        size: e.target.files[0].size,
        type: e.target.files[0].type,
      });
    }
    setErrors(
      valifile({ size: e.target.files[0].size, type: e.target.files[0].type })
    );
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    let formito = new FormData();
    formito.append("body",{...inputText})
    formito.append("tracks",file.file)
    dispatch(uploadTrack(formito))    
};  
  return (
    <div>
      <h1 className="titulo">Subite Ese TEMAIKEN</h1>
      <div className="formito">
        <form id="uploader" onSubmit={HandleSubmit}>
          <label> Subi tu Opening</label>
          <label> Titulo del opening</label>
          <input type="text" name="name" onChange={HandleInput} />
          <label>Serie</label>
          <input type="text" name="serie" onChange={HandleInput} />
          <label>Año</label>
          <input type="number" min="1900" name="year" onChange={HandleInput} />
          <label>Genero</label>
          <input type="text"name="genre" onChange={HandleInput}></input>
          <input
            type="file"
            name="Mp3"
            id="file"
            value={file.name}
            onChange={handlerfiles}
          />
          <button type="submit">Subir</button>
        </form>
      </div>
    </div>
  );
}

export default AudioUploader;
