import React, {useEffect, useState} from "react";
import axios from "axios";

import Posts from "./posts";

import "./style.css";

export default function Table() {
    const [posts, setPosts] = useState([]);
    const [postsPerPage] = useState(10);
    const url: string = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        const getPosts = async (url: string) => {
            const response = await axios.get(url);
            setPosts(response.data);

        }
        getPosts(url);
    }, [])

    return (
        <div className="table-container">
            <table className="table table-bordered">
                <thead>
                    <tr className="table-heading text-white">
                        <th>ID</th>
                        <th>Заголовок</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <Posts posts={posts}/>
            </table>
        </div>
    )
}