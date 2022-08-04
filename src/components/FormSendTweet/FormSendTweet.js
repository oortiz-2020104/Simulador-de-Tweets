import React, { useState } from 'react'

import { FormControl, FormGroup, TextField, Button } from '@mui/material'

import './FormSendTweet.scss'

const FormSendTweet = (props) => {
    const { sendTweet } = props
    const [formValue, setFormValue] = useState({
        name: '',
        tweet: '',
    })

    const onFormChange = event => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className='form-send-tweet'>
            <h2 className='form-send-tweet__title'>Twittear</h2>
            <form
                className='form-send-tweet__form'
                onSubmit={(event) => sendTweet(event, formValue)}
                onChange={onFormChange}
            >
                <FormControl>
                    <FormGroup>
                        <TextField
                            variant="outlined"
                            className='form-send-tweet__form-name'
                            type='text'
                            name='name'
                            label='Nombre de usuario'
                            margin='normal'
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            variant="outlined"
                            className='form-send-tweet__form-textarea'
                            type='text'
                            name='tweet'
                            multiline
                            label='¿Qué está pasando?'
                            rows='6'
                            margin='normal'
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button type='submit'>Enviar tweet</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    )
}

export default FormSendTweet