import React from "react";
import {generateExp} from "./Generate";

const Clubs = () =>{
    return (
        <div class="exp-container">
            <div class="section-header">Extracirriculars</div>
            {generateExp("Yale Volunteer Income Tax Assistance", "Incoming Co-Director of Training", "Sep 2020 - Present")}
            {generateExp("The Urban Philanthropic Fund", "Grants Team Leader / Portfolio Managament Team", "Sep 2020 - May 2021")}
            {generateExp("Yale Net Impact", "Consultant", "Sep 2020 - Present")}
            {generateExp("Branford Housing Committee", "Class Representative", "Mar 2021 - Present")}
        </div>
    );
}

export default Clubs;