import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/Validators";

const maxLength50 = maxLengthCreator(50)
 const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder={'Enter your message'} name='newMessageBody' validate={[required, maxLength50]}/>
            </div>
            <button>Send</button>
        </form>
    )
}
export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm)