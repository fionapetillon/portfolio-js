import React from "react";
function Tag({tag, bgcolor, textcolor}) {
    return(
        <span className={`bg-${bgcolor} rounded-lg py-1.5 px-2.5 text-${textcolor} text-sm italic mb-1 mr-2`}>{tag}</span>
    )
}

export default Tag;