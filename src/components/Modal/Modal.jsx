import React from 'react';
import UiModal from "../UiKit/UiModal/UiModal.jsx";
import UiButton from "../UiKit/UiButton/UiButton.jsx";
import Input from "../Input/Input.jsx";
import classes from "./Modal.module.css";
import {closeModal} from "../../store/modalSlice.js";
import {useDispatch} from "react-redux";

const Modal = ({ onSubmit, value, onChange, onClose }) => {
    const dispatch = useDispatch();
    return (
        <UiModal onClick={onClose} className={classes.modal}>
            <UiModal.header>
                Создание NFT
            </UiModal.header>

            <UiModal.body>
                <form onSubmit={onSubmit} className={classes.body}>
                    <Input placeholder={'Введите ключ'} type={'text'} value={value} onChange={onChange}/>
                    <UiButton variant={'primary'} text={'Добавить'}/>
                </form>
            </UiModal.body>

        </UiModal>
    );
};

export default Modal;