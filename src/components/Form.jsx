import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ onAddData }) => {
  const [newTodo, setTodo] = useState("");

  const AddProcess = (e) => {
    e.preventDefault();

    if(newTodo=="")
    {
        toast.warning("Please enter new todo ");
        return false
    }

    const newData = { newTodo, doneStatus: false, id: Date.now() };
    onAddData(newData);
    setTodo("");
  };

  return (
    <div>
      <div className="row" style={{ marginTop:'50px'}}>
        <form className="form-inline" onSubmit={AddProcess}>
          <div className="col-sm-12">
            <div className="form-group">
              <label htmlFor="email"><b> New Todo : </b></label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter new todo"
                name="newtodo"
                value={newTodo}
                onChange={(e) => setTodo(e.target.value)}
              />
            </div>
          </div>

          <div className="col-sm-2" style={{ marginBottom:'50px'}}>
            <div className="form-group">
              <label htmlFor="email">&nbsp;</label>
              <button type="submit" className="form-control btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <ToastContainer/>
    </div>
  );
};

export default Form;
