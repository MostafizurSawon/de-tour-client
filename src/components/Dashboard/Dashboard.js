import React, { useState } from 'react';
import AllOrders from '../Orders/AllOrders';
import MyOrders from '../Orders/MyOrders';
import AddService from '../Services/AddService';
import './Dashboard.css';

const Dashboard = () => {
    const [control, setControl] = useState("myOrders");
    return (
        <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-3 ">
              <div className="admin-area p-3">
                <h2 className="pt-4">Dashboard</h2>
                <div className="all-menu mt-5">
                  <li
                    onClick={() => setControl("myOrders")}
                    className="admin-menu p-2"
                  >
                    My Orders
                  </li>
                  <li
                    onClick={() => setControl("allOrders")}
                    className="admin-menu p-2"
                  >
                   Manage All Orders
                  </li>
                  <li
                    onClick={() => setControl("addServices")}
                    className="admin-menu p-2"
                  >
                    Add A new Service
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-9 text-center d-flex align-items-center">
              <div className="bg-light px-3 py-2 rounded shadow">
                {control === "myOrders" && <MyOrders></MyOrders>}
                {control === "allOrders" && <AllOrders></AllOrders>}
                {control === "addServices" && <AddService></AddService>}
              </div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Dashboard;