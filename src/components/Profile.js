import React from "react"
import ProfilePicture from "./ProfilePicture"
import Title from "./Title"
import Blurb from "./Blurb"


export default function Profile() {
    return (
        <div>
            <ProfilePicture/>
            <Title title={"Dan Borah"}/>
            <Blurb/>
        </div>
    )
}