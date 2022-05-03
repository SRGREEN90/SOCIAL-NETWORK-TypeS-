import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/Validators";
import {connect} from "react-redux";
import {LoginThunkCreator} from "../Redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {ReduxStateType} from "../Redux/redux-store";
import s from "../common/FormsControls/FormsControls.module.css";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'}
                       component={Input}/> remember me
            </div>
            {props.error &&
                <div className={s.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

// type LoginType = {
//     onSubmit: (formData: FormDataType) => void
// }

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.LoginThunkCreator(formData.email, formData.password, formData.rememberMe) // здесь login - это другая ф-я callBack, которая внутри себя диспатчит вызов LoginThunkCreator
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state: ReduxStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {LoginThunkCreator})(Login)