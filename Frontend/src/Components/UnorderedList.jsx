import React from "react";

function UnorderedList({ items }){
    const list = items;
    const updatedlist = list.map((listItem)=>{
        return <li>{listItem}</li>;
    });

    return(
        <ul>{updatedlist}</ul>
    );
}

export default UnorderedList;