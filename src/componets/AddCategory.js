import React, {useState} from 'react'
import { PropTypes } from "prop-types"

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = ( e ) =>{
        //console.log(e.target.value);
        setinputValue(e.target.value)
    } 

    const handleSubmit = (e) =>{
        e.preventDefault();
        // Estos provienen del otro componente
        // no es necesario tambien pasar el arreglo de categorias a este 
        // componente porque con la funcion de callback tenemos acceso a esos
        // datos 

        if(inputValue.trim().length > 2){
            
            setCategories(cat => [inputValue, ...cat])
            setinputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                placeholder='Agrega algo a la lista'
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
