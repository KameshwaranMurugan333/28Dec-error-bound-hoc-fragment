import React from "react";
import { withBorderBottom } from "../HOCs/withBottomBorder";

const SubHeading = (props) => {
    return <h6>I am SUB_HEADING</h6>
}

export default withBorderBottom(SubHeading);