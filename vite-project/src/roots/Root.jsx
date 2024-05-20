import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar.jsx"; 
import "../styles/root.css";

export const Root = () => {
	return (
		<div>
            <Navbar />
            <div className="container">
                <div className="left">
                    <div className = "imageDiv"></div>

                </div>
                <div className="right">
                    <p className = "biotext">
                    Ethan is deeply passionate about the intersection of technology and business. As a Computer Science major and Data Science minor, he has experience with tools used in both industries. Ethan enjoys the rapid pace of innovation within both subjects and loves being surrounded by other forward-thinking individuals. In the future, Ethan wants to dive deeper into the design decisions that underpin creating great software, mastering tools such as AWS and React in the process.
                    </p>
                </div>
            </div>
		</div>
	);
};
