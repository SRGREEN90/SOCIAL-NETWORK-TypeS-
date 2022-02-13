import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from './components/Music/Music';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MyFriendsContainer from "./components/Navbar/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

//сделано 75 выпусков

type AppType = {
    // state: ReduxStateType
    // dispatch: (action: ActionType) => void
    // store: ReduxStoreType
    // addPost: () => void
    // updateNewPostText: (newLetter: string) => void
}
// params={{userId: 1}}  для атрибутов ProfileContainer

const App: React.FC<AppType> = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<DialogsContainer  />} />

                        <Route path='/profile/:userId' element={<ProfileContainer   />} />
                        <Route path='/profile' element={<ProfileContainer    />} />

                        <Route path='/login' element={<Login/>}/>
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

