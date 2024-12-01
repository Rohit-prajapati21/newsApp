import { createContext, useReducer, useEffect,useState } from "react";
import {useNavigate} from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import axios from "axios";
// contexProvide intial work
export const ContextProvider = createContext({
  headlinesData: [],
  notesData: [],
  getNoteData: () => {},
  getUserNotes: () => {},
  deleteNote: () => {},
  handleTabFunctionality:()=>{}
});





// headline pure function 1
function handleDataOfheadlines(currentData, action) {
  let updataHeadlineData = currentData;
  if (action.type === "ADD_INITIAL_DATA") {
    updataHeadlineData = action.payload;
  }
  return updataHeadlineData;
}

// notes purefunction 2
function handleDataOfNotes(currentData, action) {
  let updataData = currentData;
  if (action.type === "ADD_NOTE") {
    updataData = [...currentData, action.payload];
  } else if (action.type === "DELETE_NOTE") {
    updataData = action.payload;
  }else if(action.type === "GET_NOTES"){
      updataData=action.payload
  }
  return updataData;
}

// storeProvider component
function StoreProvider({ children }) {
const navigate  = useNavigate()

  //  headlinesReducer 1
  const [headlinesData, headlinesDispatch] = useReducer(
    handleDataOfheadlines,
    [],
    () => {
      const localData = localStorage.getItem("headlinesData");
      return localData ? JSON.parse(localData) : [];
    }
  );

  // to store headlinesData into local storage
  useEffect(() => {
    localStorage.setItem("headlinesData", JSON.stringify(headlinesData));
  }, [headlinesData]);

  // notesDataReducer 2
  const [notesData, notesDispatch] = useReducer(handleDataOfNotes, 
    [], ()=>{
    const localData = localStorage.getItem("notesData");
    return localData ? JSON.parse(localData) : [];
    }
  );

  // to store notesData into local storage
  useEffect(() => {
    localStorage.setItem("notesData", JSON.stringify(notesData));
  }, [notesData]);

  function getSingleNewsPaperData(singleNewsPaperData) {
    console.log(singleNewsPaperData)
    const { data, url } = singleNewsPaperData;
    console.log(data)
    console.log(url)

    const integrateData = [];
    let i = 0;
    while (i < data.length && i < url.length) {
      const tempObj = {
        Data: data[i],
        Url: url[i],
      };
      integrateData.push(tempObj);
      i++;
    }

    headlinesDispatch({
      type: "ADD_INITIAL_DATA",
      payload: integrateData,
    });
  }

async  function getNoteData(noteDataObj) {
     try{
      const result = await axios.post("http://localhost:8080/api/notes/create",noteDataObj,{withCredentials:true})
      console.log(result.data)
     }catch(e){
      console.log(e)
       navigate('/login')
     }

        
    // notesDispatch({
    //   type: "ADD_NOTE",
    //   payload: noteDataObj,
    // });
  }
  async  function getUserNotes() {
    
    const result = await axios.get("http://localhost:8080/api/notes/all-notes",{withCredentials:true})
    const {notesData} = result.data
    
  notesDispatch({
    type: "GET_NOTES",
    payload: notesData,
  });
}


  async function deleteNote(deleteKey) {
    const payload = {
      field:deleteKey
    }
    console.log(deleteKey)
    const result = await axios.delete("http://localhost:8080/api/notes/delete-note",{
      data: payload,
      withCredentials:true
    })
    console.log(result.data)
    let tempObj = notesData.filter((item) => item.note["text"] != deleteKey);
    console.log(tempObj);
    notesDispatch({
      type: "DELETE_NOTE",
      payload: tempObj,
    });
  }

 
   //  fetch all data ofvarious news papper from server
   
   const [allNewsPaperData, setdata] = useState({});
   console.log(allNewsPaperData)
   const { theHindu, theIndianExpress, theEconomicTimes } = allNewsPaperData;
   useEffect(() => {
    console.log(Math.random())
     const getAllData= async () => {
       try {
         const receivedData = await axios.get("http://localhost:8080/api/news/headlines");
         const { headlinesData} = receivedData.data; 
         setdata(headlinesData);
       } catch (e) {
         console.log(e);
       }
     };
     getAllData();
   }, []);
 
   function handleTabFunctionality(Tab) {
     if (Tab === "theIndianExpress") {
       getSingleNewsPaperData(theIndianExpress);
     } else if (Tab === "theHindu") {
       getSingleNewsPaperData(theHindu);
     } else if (Tab === "theEconomicTimes") {
       getSingleNewsPaperData(theEconomicTimes);
     }
    
   }
 
   
  return (
    <ContextProvider.Provider
      value={{
        headlinesData,
        notesData,
        handleTabFunctionality,
        getNoteData,
        deleteNote,
        getUserNotes
        
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

export default StoreProvider;
