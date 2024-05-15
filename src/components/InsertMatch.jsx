import React from 'react'
import Popup from 'reactjs-popup'
import './InsertMatch.css'
import { useState } from 'react'

const InsertMatch = () => {
    const [rows, setRows] = useState([]);

    const addNewRow = () => {
        const newRow = { map: '', result: '', eliminations: '', deaths: '', damage: '', healing: '', mitigation: ''};
        setRows([...rows, newRow])
    }

    const handleInputChange = (index, event) => {
        const updatedRows = [...rows];
            updatedRows[index][event.target.name] = event.target.value;
            setRows(updatedRows);
    }

    const saveData = () => {
        console.log(rows);
    }


    return (
        <div>
            {rows.map((row, index) => (
                <div key={index}>
                    <input
                        name="map"
                        value={row.map}
                        onChange={event => handleInputChange(index, event)}
                        placeholder="Map"
                    />
                    <input
                        name="result"
                        value={row.result}
                        onChange={event => handleInputChange(index, event)}
                        placeholder="Result"
                    />
                    <input
                        name="eliminations"
                        value={row.eliminations}
                        onChange={event => handleInputChange(index, event)}
                        placeholder='Eliminations'
                    />
                    <input
                        name="deaths"
                        value={row.deaths}
                        onChange={event => handleInputChange(index, event)}
                        placeholder='Deaths'
                    />                    
                    <input
                        name="damage"
                        value={row.damage}
                        onChange={event => handleInputChange(index, event)}
                        placeholder='Damage'
                    />
                    <input
                        name="healing"
                        value={row.healing}
                        onChange={event => handleInputChange(index, event)}
                        placeholder='Healing'
                    />
                    <input
                        name="mitigation"
                        value={row.mitigation}
                        onChange={event => handleInputChange(index, event)}
                        placeholder='Mitigation'
                    />
                </div>
            ))}
            <button onClick={addNewRow}>Add New Row</button>
            <button onClick={saveData}>Save Data</button>
        </div>
    );

}

export default InsertMatch