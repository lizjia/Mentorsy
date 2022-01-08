import { useState } from "react"

const MainPage = () => {
    // own component level state 
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')

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
            <input type='submit' value='Create Account' className='button btn-block' />
        </form>
    )
}

export default MainPage