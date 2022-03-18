import React from "react";

export default function Layer({backgroundImage}) {
    // API call to get image
    return (
        <div>
            <img src={backgroundImage}></img>
        </div>
    )
}