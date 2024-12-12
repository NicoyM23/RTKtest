import React from 'react';
import classes from "./UiButton.module.css";
import classNames from "classnames";

const UiButton = ({text, onClick, variant}) => {
    return (
        <button onClick={onClick} className={classNames(classes.btn, classes[variant])}>
            {text}
        </button>
    );
};

export default UiButton;