import { useState } from "react"
import React from "react"

const MainPage = () => {
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
        if (!first || !last) {
            alert('Please enter your name')
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
                <label> First Name </label>
                <input type='text' placeholder='Enter First Name'
                    // name from the state, onChange (controlled component that will be fired off once user starts typing)
                    // e is the event object, target.value is whatever thats going to be passed in
                    value={first} onChange={(e) => setFirst(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label> Last Name </label>
                <input type='text' placeholder='Enter Last Name'
                    value={last} onChange={(e) => setLast(e.target.value)}
                />
            </div>
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
            <div className='form-control'>
                <label> Confirm Password </label>
                <input type="password" placeholder='Confirm Password'
                    value={confirmPass} onChange={(e) => setconfirmPass(e.target.value)}

                />
            </div>
            <div className='form-control form-control-check'>
                <label>Mentor </label>
                <input type='checkBox'
                    onChange={(e) => setMentor(e.currentTarget.checked)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Mentee </label>
                <input type='checkBox'
                    onChange={(e) => setMentee(e.currentTarget.checked)}
                />
            </div>
            <input type='submit' value='Create Account' className='button btn-block' />
        </form>
    )
}

export default MainPage