import React, {useEffect, useState} from "react";

import "./style.css"
import { Ipost } from "../../models";

interface searchProps {
    posts: Ipost[],
    originalPosts: Ipost[],
    setPosts: Function
}

export default function SearchInput ({posts, setPosts, originalPosts}: searchProps) {
    const [searchWord, setSearchWord] = useState('');

    const sortedPosts = posts.filter(post => (
        isNaN(Number(searchWord)) ? post.title.toLowerCase().includes(searchWord.toLowerCase()) : String(post.id).toLowerCase().includes(searchWord)

    ))

    useEffect(() => {
        if (searchWord === '') setPosts(originalPosts);
        else setPosts(sortedPosts);
    }, [searchWord])

    return (
        <div className="input-group mb-3" style={{ width: "70%" }}>
            <input type="text" className="form-control search-input" placeholder="Поиск"
                   style={{ borderRadius: "0", backgroundColor: "#5A5C66" }}
                   onChange={(event) => setSearchWord(event.target.value)}
            />
        </div>
    )
}
