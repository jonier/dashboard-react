import React from 'react'

const Order = () => {
  return (
    <div className='orderPage'>
      <div style= {{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <h4>Orders</h4>
        <input type="search" />
      </div>
      <div style={{marginTop: '60px'}}>
        <table>
          <tr>
            <th width="10%">Product name</th>
            <th width="10%">Date</th>
            <th width="10%">Price</th>
            <th width="10%">Status</th>
          </tr>
          <tr>
            <td width="10%">Item1</td>
            <td width="10%">$2</td>
            <td width="10%">20</td>
            <td width="10%" style={{color: 'red'}}>Processin</td>
          </tr>
          <tr>
            <td width="10%">Item1</td>
            <td width="10%">$2</td>
            <td width="10%">20</td>
            <td width="10%">Shipped</td>
          </tr>
          <tr>
            <td width="10%">Item1</td>
            <td width="10%">$2</td>
            <td width="10%">20</td>
            <td width="10%" style={{color: 'green'}}>Delivered</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Order