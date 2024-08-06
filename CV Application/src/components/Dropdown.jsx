import { useState } from 'react';

function DropdownInput(name, items){
    const[open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <div onClick={handleOpen}> {name} </div>
            <div onClick={handleOpen}>{open ? items.map(item => {item.name}) : null}</div>
        </>
    )
}

export default DropdownInput;