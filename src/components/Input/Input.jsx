import React from 'react';
import classes from "./Input.module.css";

const Input = ({ type, value, onChange, placeholder }) => {
    return (
        <input placeholder={placeholder} type={type} value={value} onChange={onChange} className={classes.input}/>
    );
};

export default Input;