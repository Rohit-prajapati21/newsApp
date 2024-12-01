import style from "./note.module.css";
import { ContextProvider } from "../../store";
import { useContext } from "react";
function Note({ data }) {
  const { deleteNote } = useContext(ContextProvider);
  return (
    <div className={style.list}>
      <a href={data.url}>{data.text}</a>
      <i
        class="bi bi-trash3"
        onClick={() => {
          deleteNote(data.text);
        }}
      ></i>
    </div>
  );
}

export default Note;
