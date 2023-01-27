import axios from "axios";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const columns = [
    {
        name : 'ID',
        selector : row => row.id,
        sortable : true
    },
    {
        name : 'Name',
        selector : row => row.name,
        sortable : true
    },
    {
        name : 'Age',
        selector : row => row.age,
        sortable : true
    },
];

function Employee() {
    return (
        <div>
            <div className="row">
                <div className="col-4 p-4">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" value={employeeName} onChange={handleEmployeeName} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input type="number" value={age} onChange={handleAge} className="form-control" />
                    </div>
                    <button type="button" onClick={handleSave} className="btn btn-primary">SAVE</button>
                    <button type="button" onClick={handleUpdate} className="btn btn-success">UPDATE</button>
                    <button type="button" onClick={handleDelete} className="btn btn-danger">DELETE</button>
                </div>
                <div className="col-8">
                    <DataTable
                        title="Employee List"
                        columns={columns}
                        data={data}
                        selectableRows
                        onSelectedRowsChange={handleRowSelected}
                    />
                </div>

            </div>

        </div>
    )
}

export default Employee