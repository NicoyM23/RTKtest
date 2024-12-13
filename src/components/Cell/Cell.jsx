import classes from "./Cell.module.css";

const Cell = ({ word }) => {
    return (
        <div className={classes.block}>
            {word.split('').map(c => c.codePointAt(0).toString(2)).join('').split('').map((value, index) => (
                <div key={index}
                    className={value === '0' ? classes.empty : classes.cell}
                />
            ))}
        </div>
    );
};

export default Cell;