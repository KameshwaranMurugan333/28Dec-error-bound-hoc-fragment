import React from "react";
import { withBorderBottom } from "../HOCs/withBottomBorder";

const Heading = (props) => {
    return <>
        <h1>I am a HEADING</h1>
        <p>{props.title}</p>
    </>
}

export default withBorderBottom(Heading);