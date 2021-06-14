// import { ChangeEvent, useState } from "react"
import { useForm } from "../hooks/useForm"

interface FormData {
    email: string,
    name: string
}

export const Formulario = () => {

    // const [formulario, setFormulario] = useState({
    //     email: '',
    //     name: ''
    // })

    // const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    //     const {name, value} = target;

    //     setFormulario({
    //         ...formulario,
    //         [name]: value
    //     })
    // }

    const { email, name, formulario, handleChange } = useForm<FormData>({
        email: '',
        name: ''
    })

    return (
        <form>
            <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="email"
                    onChange={handleChange} 
                    value={email}/>
            </div>
            <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                    value={name} />
            </div>

            <pre>{JSON.stringify(formulario)}</pre>
        </form>

    )
}
