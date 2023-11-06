import React from 'react'
import { Link } from 'react-router-dom';
import '../Stylesheets/Clientlist.css'
import img from '../Imges/CRIMINALPRC.jpg'

function Clientlist() {
  return (
    <>
    <div className="top-left buttonnn">
        <Link to="/dashboard">Go Back</Link>
      </div>
    <div className='body1'>
<main className="table">
  <section className="table__header">
    <h1>Client List</h1>
    <div className="input-group">
      <input type="search" placeholder="Search Data..." />
      <img src="images/search.png" alt="search" />
    </div>
    <div className="export__file">
      <label htmlFor="export-file" className="export__file-btn" title="Export File" />
      <input type="checkbox" id="export-file" />
      <div className="export__file-options">
        <label>Export As &nbsp; ➜</label>
        <label htmlFor="export-file" id="toPDF">PDF <img src={img} alt="pic" /></label>
        <label htmlFor="export-file" id="toJSON">JSON <img src={img} alt="pic" /></label>
        <label htmlFor="export-file" id="toCSV">CSV <img src={img} alt="pic" /></label>
        <label htmlFor="export-file" id="toEXCEL">EXCEL <img src={img} alt="pic" /></label>
      </div>
    </div>
  </section>
  <section className="table__body">
    <table>
      <thead>
        <tr>
          <th> Id <span className="icon-arrow">↑</span></th>
          <th> Client <span className="icon-arrow">↑</span></th>
          <th> Location <span className="icon-arrow">↑</span></th>
          <th> Date <span className="icon-arrow">↑</span></th>
          <th> Status <span className="icon-arrow">↑</span></th>
          <th> Amount <span className="icon-arrow">↑</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 1 </td>
          <td> <img src="images/Zinzu_Chan_Lee.jpg" alt="pic" />Zinzu Chan Lee</td>
          <td> Seoul </td>
          <td> 17 Dec, 2022 </td>
          <td>
            <p className="status delivered">OK</p>
          </td>
          <td> <strong> $128.90 </strong></td>
        </tr>
        <tr>
          <td> 2 </td>
          <td><img src={img} alt="pic" /> Jeet Saru </td>
          <td> Kathmandu </td>
          <td> 27 Aug, 2023 </td>
          <td>
            <p className="status cancelled">Meeting</p>
          </td>
          <td> <strong>$5350.50</strong> </td>
        </tr>
        <tr>
          <td> 3</td>
          <td><img src={img} alt="pic" /> Sonal Gharti </td>
          <td> Pakistan </td>
          <td> 14 Mar, 2023 </td>
          <td>
            <p className="status shipped">Shipped</p>
          </td>
          <td> <strong>$210.40</strong> </td>
        </tr>
        <tr>
          <td> 4</td>
          <td><img src={img} alt="pic" /> Alson GC </td>
          <td> Lahore </td>
          <td> 25 May, 2023 </td>
          <td>
            <p className="status delivered">OK</p>
          </td>
          <td> <strong>$149.70</strong> </td>
        </tr>
        <tr>
          <td> 5</td>
          <td><img src={img} alt="pic" /> Sarita Limbu </td>
          <td> Karachi </td>
          <td> 23 Apr, 2023 </td>
          <td>
            <p className="status pending">Pending</p>
          </td>
          <td> <strong>$399.99</strong> </td>
        </tr>
        <tr>
          <td> 6</td>
          <td><img src={img} alt="pic" /> Alex Gonley </td>
          <td> Islamabad </td>
          <td> 23 Apr, 2023 </td>
          <td>
            <p className="status cancelled">Cancelled</p>
          </td>
          <td> <strong>$399.99</strong> </td>
        </tr>
        <tr>
          <td> 7</td>
          <td><img src={img} alt="pic" /> Jeet Saru </td>
          <td> New York </td>
          <td> 20 May, 2023 </td>
          <td>
            <p className="status delivered">OK</p>
          </td>
          <td> <strong>$399.99</strong> </td>
        </tr>
        <tr>
          <td> 8</td>
          <td><img src={img} alt="pic" /> Aayat Ali Khan </td>
          <td> Islamabad </td>
          <td> 30 Feb, 2023 </td>
          <td>
            <p className="status pending">Pending</p>
          </td>
          <td> <strong>$149.70</strong> </td>
        </tr>
        <tr>
          <td> 9</td>
          <td><img src={img} alt="pic" /> Alson GC </td>
          <td> Dhaka </td>
          <td> 22 Dec, 2023 </td>
          <td>
            <p className="status cancelled">Cancelled</p>
          </td>
          <td> <strong>$249.99</strong> </td>
        </tr>
      </tbody>
    </table>
  </section>
</main>
</div>



    </>
  )
}

export default Clientlist