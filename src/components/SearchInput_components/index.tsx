import React from "react";

import "./style.css"

export default function SearchInput () {
    return (
        <div className="input-group mb-3" style={{ width: "70%" }}>
            <input type="text" className="form-control search-input" placeholder="Поиск"
                   style={{ borderRadius: "0", backgroundColor: "#5A5C66" }}
            />
        </div>
    )
}