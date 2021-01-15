import { useState } from "react"


export const useForm = (initialState = {}) => { //recibe un objeto con las propiedades ( campos del form )

    const [values, setFormValues] = useState(initialState);

    const reset = () => {
        setFormValues(initialState);
    }

    const handleInputChange = ({target}) => {

        setFormValues({
            ...values,
            [target.name]: target.value
        });
    }

    return [ values, handleInputChange, reset]
    
}