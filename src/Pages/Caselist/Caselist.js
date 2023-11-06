import React from 'react';
import '../Caselist/Caselist.css';
import { Link } from 'react-router-dom';

const cases = [
  {
    title: "Smith v. Jones",
    date: "January 1, 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/case/1"
  },
  {
    title: "Doe v. Roe",
    date: "February 15, 2021",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    link: "/case/2"
  },
  {
    title: "Doe v. Roe",
    date: "February 15, 2021",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    link: "/case/2"
  },
  {
    title: "Doe v. Roe",
    date: "February 15, 2021",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    link: "/case/2"
  },
  {
    title: "Doe v. Roe",
    date: "February 15, 2021",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    link: "/case/2"
  },
  {
    title: "Doe v. Roe",
    date: "February 15, 2021",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    link: "/case/2"
  },
  {
    title: "Doe v. Roe",
    date: "February 15, 2021",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    link: "/case/2"
  },
  {
    title: "Doe v. Roe",
    date: "February 15, 2021",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    link: "/case/2"
  },
  {
    title: "Garcia v. Johnson",
    date: "March 30, 2021",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
    link: "/case/3"
  },
];

function Caselist() {
  return (
   <>
      <div className="top-left buttonnn">
        <Link to="/dashboard">Go Back</Link>
      </div>
    <h1 className="heading3">Cases List Detail</h1>
    <div className="container3">
   
      <div className="row">
        {cases.map((caseItem, index) => (
          <div key={index} className="col1">
            <h2 className="title1">{caseItem.title}</h2>
            <p className="date1">{caseItem.date}</p>
            <p className="description1">{caseItem.description}</p>
            <a href={caseItem.link} className="link1">Read More</a>
          </div>
        ))}
      </div>
    </div>
   </>
  );
}

export default Caselist;