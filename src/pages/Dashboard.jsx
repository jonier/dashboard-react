import React, { useEffect, useState } from 'react'


const Dashboard = ({ token }) => {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    if(orders === null){

        // fetch(`https://freddy.codesubmit.io/dashboard`, {
        //     method: "GET",
        //     headers: {
        //         "Authorization": `Bearer ${token}`
        //     }
        // }).then((res) => {
        //    return res.json()
        // }).then((data) => {
        //     setOrders(data.dashboard)
        // })      
      
    }
  }, [orders, token])

  return (
    <div className='dashboardArea'>
      <h4>Dashboard</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ width: '200px', height: '75px', border: '1px solid #000', padding: '0 15px', margin: '10px' }}>
          <h5 style={{ padding: '0', margin: '10px 0' }}>Today</h5>
          <div>$ 1456 / 9 orders</div>
        </div>

        <div style={{ width: '200px', height: '75px', border: '1px solid #000', padding: '0 15px', margin: '10px' }}>
          <h5 style={{ padding: '0', margin: '10px 0' }}>Today</h5>
          <div>$ 1456 / 9 orders</div>
        </div>
        <div style={{ width: '200px', height: '75px', border: '1px solid #000', padding: '0 15px', margin: '10px' }}>
          <h5 style={{ padding: '0', margin: '10px 0' }}>Today</h5>
          <div>$ 1456 / 9 orders</div>
        </div>
        <div style={{ width: '200px', height: '75px', border: '1px solid #000', padding: '0 15px', margin: '10px' }}>
          <h5 style={{ padding: '0', margin: '10px 0' }}>Today</h5>
          <div>$ 1456 / 9 orders</div>
        </div>
        

        {/* TODOO CHART */}

      </div>

      <h4>Bestsellers</h4>
      <table>
        <tr>
          <th width="10%">Product name</th>
          <th width="10%">Price</th>
          <th width="10%">#Unit sold</th>
          <th width="10%">Revenue</th>
        </tr>
        {/* {
          orders.bestsellers.map(item => {


            return(
              <tr>
                  <td width="10%">{item.product.name}</td>
                  <td width="10%"></td>
                  <td width="10%">{item.units}</td>
                  <td width="10%">{item.revenue}</td>
              </tr>
            )
          })
        } */}

{/* 
        <tr>
          <td width="10%">Item1</td>
          <td width="10%">$2</td>
          <td width="10%">20</td>
          <td width="10%">2%</td>
        </tr>
        <tr>
          <td width="10%">Item1</td>
          <td width="10%">$2</td>
          <td width="10%">20</td>
          <td width="10%">2%</td>
        </tr>
        <tr>
          <td width="10%">Item1</td>
          <td width="10%">$2</td>
          <td width="10%">20</td>
          <td width="10%">2%</td>
        </tr>
 */}

      </table>
    </div>
  )
}

export default Dashboard