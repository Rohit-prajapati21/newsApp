import style from "./headline.module.css";
import Headline from "../../Components/headline/Headline";
import { useContext} from "react";
import { ContextProvider } from "../../store";
import { useNavigate } from "react-router-dom";
function Headlines() {
  const { headlinesData } = useContext(ContextProvider);
//   const navigate = useNavigate();
//  if(headlinesData){
//    navigate('/')
//  }
   
  return (
    <>
      <h3>Headlines</h3>
      <div className={style.Headlines_container}>
        {headlinesData.map((item, index) => (
          <Headline key={index} data={item}></Headline>
        ))}
      </div>
    </>
  );
}

export default Headlines;
