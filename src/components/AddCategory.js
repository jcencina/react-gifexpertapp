import React,{ useState } from 'react';
import PropTypes from "prop-types";

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) =>{
        setInputValue(e.target.value)
    };

    const handleSumit = (e) => {
        e.preventDefault();
        
        if(inputValue.trim().length >2){
            setCategories(cats => [ inputValue, ...cats]);
            setInputValue('')
        }
    };

    return (
        <form onSubmit={handleSumit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="escribe aqui"
            />
        </form>);
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};
