import Note from "../../Components/note/Note"
import style from './notes.module.css'
import { ContextProvider } from "../../store";
import { useContext } from "react";
function Notes() {
  const{notesData}=useContext(ContextProvider);
  return (
    <div className={style.notes_container}>
      {notesData.map((ele)=><Note data={ele.note} key={ele._id}></Note>)}
      
     

    </div>
  )
}

export default Notes