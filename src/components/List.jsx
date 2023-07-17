
const List = ({items, onDeleteItem, onDoneList}) => {

    const numDone = items.filter((item) => item.doneStatus).length;
    
    return (
        <div>
            <div className="table-responsive">  
                <button className="btn btn-danger">Total : {items.length}</button> &nbsp;  &nbsp;  &nbsp;        
                <button className="btn btn-success">Completed : {numDone}</button>        
                <table className="table">
                    <thead>
                    <tr>
                        <th>SL</th>
                        <th>Title</th>
                        <th>Complete</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item, i) => (
                    <tr key={i}>
                        <td>
                            <span style={item.doneStatus ? { textDecoration: "line-through", color: "red" } : {}}>
                            {i+1}
                            </span>
                        </td>
                        <td>
                            <span style={item.doneStatus ? { textDecoration: "line-through", color: "red" } : {}}>
                            {item.newTodo}
                            </span>
                        </td>
                        <td> 
                            <input type="checkbox" value={item.doneStatus} onChange={() => onDoneList(item.id)} title="Complete"/>
                        </td>
                        <td>
                            <button className="btn btn-default" onClick={() => onDeleteItem(item.id)} title="Delete">❌</button>
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>            
        </div>
    );
};

export default List;