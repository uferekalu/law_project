import React, { useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie } from 'recharts';
import { BarChart, Bar } from 'recharts';

function Dashboard() {
    const [style, setStyle] = useState(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    );

    const changeStyle = () => {
        if (
            style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        ) {
            setStyle(
                "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
            );
        } else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
        }
    };
    const changeStyle1 = () => {
        if (
            style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        ) {
            setStyle(
                "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
            );
        } else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
        }
    };
    // chart data
    const data = [
        { name: "Crime Case", Client: 2000000000 },
        { name: "Family Case", Client: 1500000000 },
        { name: "Property Case", Client: 1000000000 },
        { name: "Divorce", Client: 500000000 },
    ];
    // chart data end
    return (
        <div id="page-top">
                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper">
                    {/*  <!-- Sidebar --> */}
                    <ul className={style} id="accordionSidebar">
                        {/*  <!-- Sidebar - Brand --> */}
                        <Link
                            className="sidebar-brand d-flex align-items-center justify-content-center"
                            to="#"
                        >
                            <div className="sidebar-brand-text mx-3">Law Office</div>
                            <div className="text-center d-none d-md-inline">
                                <button
                                    className="rounded-circle border-0"
                                    id="sidebarToggle"
                                    onClick={changeStyle}
                                ></button>
                            </div>
                        </Link>

                        {/*   <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />

                        {/*  <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Home">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>

                        {/* <!-- Nav Item - Client --> */}
                        <div className="item">
                            <div className="dropdown ">
                                <div
                                    className="text "
                                    type="text"
                                    id="dropdownMenu"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fa-solid fa-user-nurse"></i>
                                    Client
                                </div>
                                <ul className="dropdown-menu " aria-labelledby="dropdownMenu">
                                    <li>
                                        <Link className="dropdown-item " to="/client">
                                            Client List
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/newclient">
                                            Create New Client
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- Nav Item - Causes --> */}
                        <div className="item">
                            <div className="dropdown ">
                                <div
                                    className="text "
                                    type="text"
                                    id="dropdownMenu"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fa-solid fa-suitcase"></i>
                                    Cases
                                </div>
                                <ul className="dropdown-menu " aria-labelledby="dropdownMenu">
                                    <li>
                                        <Link className="dropdown-item " to="/caselist">
                                            Cases List
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/createcase">
                                            Create New Case
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>



                        {/* <!-- Nav Item - task --> */}
                        <div className="item">
                            <div className="dropdown ">
                                <div
                                    className="text "
                                    type="text"
                                    id="dropdownMenu"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fa-solid fa-list-check"></i>
                                    Task
                                </div>
                                <ul className="dropdown-menu " aria-labelledby="dropdownMenu">
                                    <li>
                                        <Link className="dropdown-item " to="#">
                                            Task List
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Pending Task
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Nav Item - task --> */}
                        <div className="item">
                            <div className="dropdown ">
                                <div
                                    className="text "
                                    type="text"
                                    id="dropdownMenu"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fa-solid fa-list-check"></i>
                                    Expense
                                </div>
                                <ul className="dropdown-menu " aria-labelledby="dropdownMenu">
                                    <li>
                                        <Link className="dropdown-item " to="#">
                                            Task List
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Pending Task
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- Nav Item - task --> */}
                        <div className="item">
                            <div className="dropdown ">
                                <div
                                    className="text "
                                    type="text"
                                    id="dropdownMenu"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fa-solid fa-gear"></i>
                                    setting
                                </div>
                                <ul className="dropdown-menu " aria-labelledby="dropdownMenu">
                                    <li>
                                        <Link className="dropdown-item " to="#">
                                            Account settings
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Privacy settings
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Payment settings
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ul>

                    <div id="content-wrapper" className="d-flex flex-column">
                        {/*  <!-- Main Content --> */}
                        <div id="content">
                            {/*  <!-- Topbar --> */}
                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                                <button
                                    id="sidebarToggleTop"
                                    className="btn btn-link d-md-none rounded-circle mr-3"
                                    onClick={changeStyle1}
                                >
                                    <i className="fa fa-bars"></i>
                                </button>

                                {/*  <!-- Topbar Search --> */}
                                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control bg-light border-0 small"
                                            placeholder="Search for..."
                                            aria-label="Search"
                                            aria-describedby="basic-addon2"
                                        />
                                        <div className="input-group-append">
                                            <button className="btn btn-light " type="button">
                                                <i className="fas fa-search fa-sm cls"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                {/*  <!-- Topbar Navbar --> */}
                                <ul className="navbar-nav ml-auto">
                                    {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                                    <li className="nav-item dropdown no-arrow d-sm-none">
                                        <Link
                                            className="nav-link dropdown-toggle"
                                            to="#"
                                            id="searchDropdown"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="fas fa-search fa-fw"></i>
                                        </Link>
                                        {/*   <!-- Dropdown - Messages --> */}
                                        <div
                                            className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                            aria-labelledby="searchDropdown"
                                        >
                                            <form className="form-inline mr-auto w-100 navbar-search">
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control bg-light border-0 small"
                                                        placeholder="Search for..."
                                                        aria-label="Search"
                                                        aria-describedby="basic-addon2"
                                                    />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-primary" type="button">
                                                            <i className="fas fa-search fa-sm"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </li>

                                    {/*  <!-- Nav Item - Alerts --> */}
                                    <li className="nav-item dropdown no-arrow mx-1">
                                        <Link
                                            className="nav-link dropdown-toggle"
                                            to="#"
                                            id="alertsDropdown"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="fas fa-bell fa-fw"></i>
                                            {/*  <!-- Counter - Alerts --> */}
                                            <span className="badge badge-danger badge-counter">
                                                3+
                                            </span>
                                        </Link>

                                    </li>

                                    {/*  <!-- Nav Item - Messages --> */}
                                    <li className="nav-item dropdown no-arrow mx-1">
                                        <Link
                                            className="nav-link dropdown-toggle"
                                            to="#"
                                            id="messagesDropdown"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="fas fa-envelope fa-fw"></i>
                                            {/*  <!-- Counter - Messages --> */}
                                            <span className="badge badge-danger badge-counter">
                                                7
                                            </span>
                                        </Link>

                                    </li>

                                    <div className="topbar-divider d-none d-sm-block"></div>

                                    {/* <!-- Nav Item - User Information --> */}
                                    <li className="nav-item dropdown no-arrow">
                                        <Link
                                            className="nav-link dropdown-toggle"
                                            to="#"
                                            id="userDropdown"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                                                Douglas McGee
                                            </span>
                                            <img
                                                className="img-profile rounded-circle"
                                                src="img/undraw_profile.svg" alt="pic"
                                            />
                                        </Link>

                                    </li>
                                </ul>
                            </nav>
                            {/*  <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <div className="container-fluid">
                                {/*  <!-- Page Heading --> */}
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                                    <Link
                                        to="#"
                                        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                                    >
                                        <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                                        Generate Report
                                    </Link>
                                </div>

                                {/*  <!-- Content Row --> */}
                                <div className="row">
                                    {/*  <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4 ">
                                        <div className="card border-left-primary shadow  py-2 ">
                                            <div className="card-body">
                                                <div className="row no-gutters ">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 my-class">
                                                            16
                                                        </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-00">
                                                            Clients
                                                        </div>
                                                        <div className="h5 mb-0 text-gray-800">
                                                            <h6 className="text3"> Total Client</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fa-solid fa-user-nurse fa-3x text-gray-400"></i>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4 ">
                                        <div className="card border-left-primary shadow  py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters ">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 my-class">
                                                            25
                                                        </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-00">
                                                            Cases
                                                        </div>
                                                        <div className="h5 mb-0 text-gray-800">
                                                            <h6 className="text3"> Total Cases</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fas fa-calendar fa-3x text-gray-400"></i>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4 ">
                                        <div className="card border-left-primary shadow  py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters ">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 my-class">
                                                            7
                                                        </div>
                                                        <div className="font-weight-bold text-gray-400">
                                                            Import Cases
                                                        </div>
                                                        <div className="h5 mb-0 text-gray-800">
                                                            <h6 className="text3"> Total  Import Cases </h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fa-solid fa-star fa-3x text-gray-400"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  <!-- Pending Requests Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4 ">
                                        <div className="card border-left-primary shadow py-2 ">
                                            <div className="card-body">
                                                <div className="row no-gutters ">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 my-class">
                                                            0
                                                        </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-00">
                                                            Archived
                                                        </div>
                                                        <div className="h5 mb-0 text-gray-800">
                                                            <h6 className="text3"> Total  Archived</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">

                                                        <i className="fa-regular fa-file-zipper fa-3x text-gray-400"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  <!-- // chart data start --> */}

                                <div style={{ textAlign: "center", display: "flex" }}>

                                    <div className="Appp">
                                        <PieChart width={400} height={400}>
                                            <Pie
                                                dataKey="Client"
                                                isAnimationActive={false}
                                                data={data}
                                                cx={200}
                                                cy={200}
                                                outerRadius={80}
                                                fill="#8884d8"
                                                label
                                            />
                                            <Tooltip />
                                        </PieChart>
                                        <BarChart
                                            width={500}
                                            height={300}
                                            data={data}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 80,
                                                bottom: 5,
                                            }}
                                            barSize={20}
                                        >
                                            <XAxis
                                                dataKey="name"
                                                scale="point"
                                                padding={{ left: 10, right: 10 }}
                                            />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <Bar dataKey="Client" fill="#8884d8" background={{ fill: "#eee" }} />
                                        </BarChart>
                                    </div>
                                </div>

                                {/*   <!-- // chart data end--> */}

                            </div>
                        </div>
                    </div>
                </div>
        </div>

    );
}

export default Dashboard;
