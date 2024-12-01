import { useContext, useRef } from "react";
import style from "./headline.module.css";
import { ContextProvider } from "../../store";
function Headline({ data }) {
  const Tag = useRef();
  const { getNoteData } = useContext(ContextProvider);

  function sendNoteData() {
    const text = Tag.current.text;
    const url = Tag.current.href;
    const noteData = {
      text,
      url,
    };
    getNoteData(noteData);
  }
  return (
    <div className={style.headline}>
      <a href={data.Url} ref={Tag}>
        {data.Data}
      </a>
      <i class="bi bi-plus-square" onClick={sendNoteData}></i>
    </div>
  );
}

export default Headline;
