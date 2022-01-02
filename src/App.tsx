import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from './components/Music/Music';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {newStoreType, StateType} from "./index";
import Friends from "./components/Navbar/Friends/Friends";
import {ActionType} from "./index";
import {ReduxStateType, ReduxStoreType} from "./components/Redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

//сделано 47 выпусков

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
                        {/*<Route path='/friends' element={<Friends appState={props.state.sidebar}/>}/>*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

