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
import { connect } from 'react-redux';
import { compose } from 'redux';
import {initializeAppTC} from "./components/Redux/app-reducer";
import {ReduxStateType} from "./components/Redux/redux-store";
import {Preloader} from "./preloader/Preloader";

//сделано 87 выпусков

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

class App extends React.Component<ProfilePropsType > {

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/dialogs' element={<DialogsContainer/>}/>

                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='/profile' element={<ProfileContainer/>}/>

                            <Route path='/login' element={<Login/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/friends' element={<MyFriendsContainer/>}/>

                            <Route path='/users' element={<UsersContainer/>}/>

                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}



const mapStateToProps = (state: ReduxStateType) => ({
    initialized: state.app.initialized
})
type mapStateToPropsType = {
    initialized: boolean
}
type mapDispatchToPropsType = {
    initializeAppTC: () => void
}


export default compose(
    connect <mapStateToPropsType, mapDispatchToPropsType, {}, ReduxStateType>
    (mapStateToProps, {initializeAppTC}))(App)