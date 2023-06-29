import React from 'react';
import Table from "react-bootstrap/Table"

function Topcars(){
    return(
        
        <div className='tables'>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Model</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Mahindra Thar</td>
            <td>Rs. 10.54 - 16.78 Lakh*</td>
            </tr>
            <tr>
            <td>Maruti FRONX</td>
            <td>Rs. 7.46 - 13.13 Lakh*</td>
            </tr>
            <tr>
            <td>Tata Nexon</td>
            <td>Rs. 7.80 - 14.50 Lakh*</td>
            </tr>
            <tr>
            <td>Toyota Fortuner</td>
            <td>Rs. 32.59 - 50.34 Lakh*</td>
            </tr>
            <tr>
            <td>Toyota Innova Crysta</td>
            <td>Rs. 19.99 - 25.43 Lakh*</td>
            </tr>
            <tr>
            <td>Hyundai Creta</td>
            <td>Rs. 10.87 - 19.20 Lakh*</td>
            </tr>
            <tr>
            <td>Tata Punch</td>
            <td>Rs. 6 - 9.52 Lakh*</td>
            </tr>
            <tr>
            <td>Maruti Brezza</td>
            <td>Rs. 8.29 - 14.14 Lakh*</td>
            </tr>
            <tr>
            <td>Mahindra XUV700</td>
            <td>Rs. 14.01 - 26.18 Lakh*</td>
            </tr>
            <tr>
            <td>Hyundai Verna</td>
            <td>Rs. 10.90 - 17.38 Lakh*</td>
            </tr>
        </tbody>
        </Table>
        </div>
    )
}

export default Topcars;