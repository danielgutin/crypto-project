import React, { useContext } from 'react'
import './Register.scss';
import { useForm } from "react-hook-form";
import { registerUser } from '../../../utils/rest/register';
import { displayAlert } from '../../../utils/alert';
import { ALERT_TYPES } from '../../../utils/constants';
import { useHistory } from 'react-router-dom';
import { ApplicationContext } from '../../../store';

export default function Register() {
    const { state, dispatch } = useContext(ApplicationContext);
    
    console.log(state)
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            username: '',
            email: ''
        }
    });

    const onSubmit = async data => {
        try {
            const res = await registerUser(data);
            displayAlert(ALERT_TYPES.SUCCESS, 'failed to fetch', 'dick', () => history.push('/users'))
        } catch(err) {
            displayAlert(
                ALERT_TYPES.ERROR,
                'failed to fetch',
                'dick')
        }
    }
    
    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="username" ref={register} />
            <input type='email' name="email" ref={register({ required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" />
        </form>
        <button onClick={() => dispatch({ type: 'test', payload: 'Sam'})}>Click here</button>
        <p>{ state.name }</p>
    </div>
     
    );
}
