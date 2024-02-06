import Form from './components/Form'
import { useState } from 'react'
import axios from 'axios'

function Message() {
    const [messageData, setMessageData] = useState({ email: "", firstName: "", lastName: "", message: "", acceptedMailing: true })
    const [successMessage, setSuccessMesage] = useState(false)
    function handleChange(event) {
        // eslint-disable-next-line eqeqeq
        const value = event.target.type == "checkbox" ? event.target.checked : event.target.value
        const property = event.target.id
        setMessageData({ ...messageData, [property]: value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.post("https://pin2303.000webhostapp.com/api/add-people", messageData)
            .then(response => {
                setSuccessMesage(true)
            })
    }
    return (
        <section id="contact">
            <Form handleChange={handleChange} handleSubmit={handleSubmit} />

            {
                successMessage &&
                <div class="alert alert-success" role="alert">
                    Tu mensaje se ha enviado correctamente
                </div>
            }
        </section>
    )
}

export default Message
