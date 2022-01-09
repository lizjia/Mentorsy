import { useState } from "react"
import React from "react"

const Login = () => {
    // own component level state 
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setconfirmPass] = useState('')
    const [mentor, setMentor] = useState(false)
    const [mentee, setMentee] = useState(false)

    // takes in event object that prevents submitting nothing 
    const onSubmit = (e) => {
        // doesn't submit to a page
        e.preventDefault()

        // validate if text is there 
        if (!first || !last || !email || !password) {
            alert('Please ensure that all your information is entered.')
            return
        }

        // onAdd({ first, last, email })

        // clear the form 
        setFirst(``)
        setLast(``)
        setEmail(``)
        setPassword('')
        setconfirmPass('')

    }


    return (
        <form className='add-form' onSubmit={onSubmit} >

            <div className='form-control'>
                <label> Email </label>
                <input type='text' placeholder='Add Email'
                    value={email} onChange={(e) => setEmail(e.target.value)}

                />
            </div>
            <div className='form-control'>
                <label> Password </label>
                <input type='password' placeholder='Password'
                    value={password} onChange={(e) => setPassword(e.target.value)}

                />
            </div>
            <input type='submit' value='Login' className='button' />

        </form>
    )
}

export default Login