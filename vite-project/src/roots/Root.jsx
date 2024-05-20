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
                    <p className = "biotext">Elementum eu facilisis sed odio morbi. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. At ultrices mi tempus imperdiet nulla malesuada. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Malesuada fames ac turpis egestas integer eget aliquet. Dui vivamus arcu felis bibendum ut. Elit eget gravida cum sociis natoque penatibus et magnis dis. Egestas tellus rutrum tellus pellentesque eu tincidunt. Accumsan lacus vel facilisis volutpat est. Turpis massa tincidunt dui ut ornare lectus sit amet. Duis at tellus at urna condimentum mattis pellentesque. In hac habitasse platea dictumst vestibulum. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Placerat in egestas erat imperdiet sed euismod.</p>
                </div>
            </div>
		</div>
	);
};
