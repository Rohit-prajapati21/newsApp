import style from "./list.module.css";
import { ContextProvider } from "../../store";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function List() {
  const navigate = useNavigate();
  const { handleTabFunctionality } = useContext(ContextProvider);


  // const [data, setdata] = useState({});
  // const { theHindu, theIndianExpress, theEconomicTimes } = data;
  // useEffect(() => {
  //   const datafunction = async () => {
  //     try {
  //       const respose = await axios.get("http://localhost:8080/");
  //       const { headlines } = respose.data;
  //       setdata(headlines);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   datafunction();
  // }, []);

  // function handleEvent(tempTab) {
  //   if (tempTab === "theIndianExpress") {
  //     getData(theIndianExpress);
  //   } else if (tempTab === "theHindu") {
  //     getData(theHindu);
  //   } else if (tempTab === "theEconomicTimes") {
  //     getData(theEconomicTimes);
  //   }
  //   navigate("/news");
  // }

  return (
   
    <div className={style.list_container}>
      
   
      <div className={style.list}>
        <span>List of News Papers</span>
        <div>
          <img
            src="https://www.thehindu.com/theme/images/th-online/thehindu-logo.svg"
            onClick={(e) => {
              e.preventDefault();
              navigate("/news");
              handleTabFunctionality("theHindu");
              
            }}
          ></img>
        </div>

        <div>
          <img
            src="	https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg"
            onClick={(e) => {
              e.preventDefault();
              navigate("/news");
              handleTabFunctionality("theIndianExpress");
              
            }}
          ></img>
        </div>
        <div>
          <img
            src="	https://economictimes.indiatimes.com/photo/msid-74451948,quality-100/et-logo.jpg"
            onClick={(e) => {
              e.preventDefault();
              navigate("/news");
              handleTabFunctionality("theEconomicTimes");
              
            }}
          ></img>
        </div>
      </div>

    </div>
  );
}

export default List;
