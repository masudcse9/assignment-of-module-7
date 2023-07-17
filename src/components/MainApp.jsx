import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from "./Form";
import List from "./List";


const MainApp = () => {
    const [items, setItems] = useState([]);

    function handleAddData(item) {        
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        toast.success("Data has been successfully deleted");
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleDoneList(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, doneStatus: !item.doneStatus } : item
            )
        );
    }
    
    return (
        <div>
            <div className="container">
                <Form onAddData={handleAddData} />
                <List items={items} onDeleteItem={handleDeleteItem} onDoneList={handleDoneList}/>
            </div>

            <ToastContainer/>
        </div>
    );
};

export default MainApp;