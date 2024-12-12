import React from 'react';
import classes from "./UiModal.module.css";
import classNames from "classnames";
import IconCross from "../Icons/IconCross.jsx";
const UiModal = ({ className, children, variant, onClick,  }) => {
    return (
        <div className={classes.overlay} onClick={onClick}>
            <div
                className={classNames(classes.modal, classes[variant], className)}
                onClick={(e) => {e.stopPropagation()}}
            >
                <button onClick={onClick} className={classes.close}><IconCross width={15} height={15}/></button>
                {children}
            </div>
        </div>
    );
};

UiModal.header = function UiModalHeader({children, className}){
    return (
        <div className={classNames(classes.header, className)}>{children}</div>
    )
}
UiModal.body = function UiModalBody({children, className}){
    return (
        <div className={classNames(classes.body, className)}>{children}</div>
    )
}
UiModal.footer = function UiModalFooter({children, className}){
    return (
        <div className={classNames(classes.footer, className)}>{children}</div>
    )
}

export default UiModal;