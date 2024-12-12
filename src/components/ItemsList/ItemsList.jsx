import React from 'react';
import classes from "./ItemsList.module.css";
import Cell from "../Cell/Cell.jsx";
import {useDispatch, useSelector} from "react-redux";
import UiButton from "../UiKit/UiButton/UiButton.jsx";
import {removeItem} from "../../store/itemSlice.js";
import IconDelete from "../UiKit/Icons/IconDelete.jsx";


const ItemsList = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.items.items);
    return (
        <div key={Date.now() * Math.random()} className={classes.list}>
            {items.map(e => (
                <div key={Date.now() * Math.random()} className={classes.card}>
                    <div className={classes.name}>
                    <span>Имя: {e.text}</span>
                    </div>
                    <Cell key={e.id} word={e.text}/>
                    <UiButton variant={'transparent'} text={<IconDelete />} onClick={()=>dispatch(removeItem(e.id))} />
                </div>
            ))}
        </div>
    );
};

export default ItemsList;