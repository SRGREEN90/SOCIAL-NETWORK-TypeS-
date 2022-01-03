import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from './components/Music/Music';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MyFriendsContainer from "./components/Navbar/Friends/FriendsContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";

//сделано 51 выпуск

type AppType = {
    // state: ReduxStateType
    // dispatch: (action: ActionType) => void
    // store: ReduxStoreType
    // addPost: () => void
    // updateNewPostText: (newLetter: string) => void
}

const App: React.FC<AppType> = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<DialogsContainer  />} />

                        <Route path='/profile' element={<Profile  />} />

                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/friends' element={<MyFriendsContainer />}/>
                        <Route path='/users' element={<UsersContainer/>}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

