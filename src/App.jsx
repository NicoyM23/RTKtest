import {useState} from 'react'
import classes from "./App.module.css";
import Modal from "./components/Modal/Modal.jsx";
import {useDispatch, useSelector} from "react-redux";
import {closeModal, openModal} from "./store/modalSlice.js";
import UiButton from "./components/UiKit/UiButton/UiButton.jsx";
import {addItem} from "./store/itemSlice.js";
import ItemsList from "./components/ItemsList/ItemsList.jsx";


function App() {
    const [word, setWord] = useState('');

    const {isOpen} = useSelector((store)=> store.modal);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setWord(e.target.value)
    }
    const trimValue = word.trim()

    const itemSubmit = () => {
        if (trimValue !== '') {
            dispatch(addItem(trimValue))
            dispatch(closeModal())
            setWord('');
        }
    }

    return (
        <div className={classes.content}>
            <UiButton variant={'primary'} onClick={() => {dispatch(openModal())}} text={'Сгенерировать NFT'} />
            <ItemsList />
            {isOpen &&
                <Modal
                    onClose={()=> {
                        dispatch(closeModal())
                        setWord('')
                    }}
                    value={word}
                    onSubmit={(e)=>{
                        e.preventDefault()
                        itemSubmit()
                    }}
                    onChange={handleInputChange}
                />
            }
        </div>
    )
}

export default App
