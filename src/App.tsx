import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap-css-only/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { newCategory, newBook, APIUrl } from "./constants";
import axios from "axios";
import { BooksClass, Login, Ranking } from "./pages";
import { category, IUser } from "./interfaces";
import { Profile, Register } from "./components";
import { getCurrentUser, logout } from "./hoooks";
import EventBus from "./hoooks/EventBus";

function App() {
  const [activUpdat, setActivUpdat] = useState<boolean>(false);
  const [returnAll, setReturnAll] = useState<number>(0);

  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    const user = getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on("logout", logOut);

    return () => {
      EventBus.remove("logout", logOut);
    };
  }, []);

  const logOut = () => {
    logout();
    setCurrentUser(undefined);
  };





















  const actualisationAllData = ()=>{
    setLoagCategories(loagCategories+1)
  }

  const [dataCategories, setDataCategories] = useState<category[]>([
    newCategory,
  ]);
  const [loagCategories, setLoagCategories] = useState<number>(0);
  useEffect(() => {
    axios({
      url: APIUrl+"/categories",
    })
      .then((response) => {
        setDataCategories(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error in GET COCTAIL :");
        console.log(error);
      });
  }, [loagCategories]);

  return (
    <div className="App">
      <div>
        <body>
          <BrowserRouter>
            <Routes>
              <Route path="/login" 
                    element={
                      <>
                          {Login()}
                      </>
                    }
                />
                <Route path="/" 
                    element={
                      <>
                        {<Ranking 
                          items={[newBook]} //book[];
                          actualisationAllData={actualisationAllData} //() => void;
                          setActivUpdat={setActivUpdat} //React.Dispatch<React.SetStateAction<boolean>>;
                          dataCompose={dataCategories}
                        />}
                      </>
                    }
                />
                <Route path="/Ranking" 
                    element={
                      <>
                        {<Ranking 
                          items={[newBook]} //book[];
                          actualisationAllData={actualisationAllData} //() => void;
                          setActivUpdat={setActivUpdat} //React.Dispatch<React.SetStateAction<boolean>>;
                          dataCompose={dataCategories}
                        />}
                      </>
                    }
                />
                <Route path="/BooksClass" 
                    element={
                      <>
                        {<BooksClass 
                          items={[newBook]} //book[];
                          actualisationAllData={actualisationAllData} //() => void;
                          setActivUpdat={setActivUpdat} //React.Dispatch<React.SetStateAction<boolean>>;
                          dataCompose={dataCategories}
                        />}
                      </>
                    }
                />


                <Route path="/user" 
                    element={
                      <>
                        <Profile/>
                      </>
                    }
                />


            <Route path="/singUp" 
                    element={
                      <>
                        <Register/>
                      </>
                    }
                />
            </Routes>

          </BrowserRouter>
        </body>
      </div>
    </div>
  );
}

export default App;
