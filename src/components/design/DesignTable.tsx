import React from 'react';

interface DesignTableProps {
    list:JSX.Element[];
}

export const DesignTable = (props:DesignTableProps) => {
    let tableBody = [];
    for(let i in props.list) {
        tableBody.push(
        <tr>
            <th>{props.list[i]}</th>
            <td>Items1</td>
            <td>Weight1</td>
            <td>Unspecified1</td>
            <td>Occurrence1</td>
        </tr>
        )
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Taxon</th>
                    <th>Items</th>
                    <th>Weight or Volume</th>
                    <th>Unspecified</th>
                    <th>Occurrence</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>Taxon</th>
                    <th>Items</th>
                    <th>Weight or Volume</th>
                    <th>Unspecified</th>
                    <th>Occurrence</th>
                </tr>
            </tfoot>
            <tbody>
                {tableBody}
            </tbody>
        </table>
    )
}