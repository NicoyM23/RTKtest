import classes from "./Cell.module.css";

const Cell = ({ word }) => {
    return (
        <div className={classes.block}>
            {word.split('').map(c => c.codePointAt(0).toString(2)).join('').split('').map((value) => (
                <div key={Math.random()}
                    className={value === '0' ? classes.empty : classes.cell}
                />
            ))}
        </div>
    );
};

export default Cell;