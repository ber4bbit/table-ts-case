import React from "react";

import Posts from "./posts";
import { Ipost } from "../../models";

import "./style.css";

interface tableProps {
    posts: Ipost[],
    currentPagePosts: Ipost[],
    setPosts: Function
}

export default function Table({ posts, currentPagePosts, setPosts }: tableProps) {

    const sortPosts = (field: string) => {
        let tempArr = posts.concat();
        let sortedArr;
        switch (field) {
            case "id":
                sortedArr = tempArr.sort((a, b) => (
                    b.id - a.id
                ));
                setPosts(sortedArr);
                break;
            case "title":
                sortedArr = tempArr.sort((a, b) => (
                    a.title.localeCompare(b.title)
                ))
                setPosts(sortedArr);
                break;
            case "body":
                sortedArr = tempArr.sort((a, b) => (
                    a.body.localeCompare(b.body)
                ))
                setPosts(sortedArr);
                break;
        }
    }

    return (
        <div className="table-container">
            <table className="table table-bordered">
                <thead>
                    <tr className="table-heading text-white">
                        <th onClick={() => sortPosts("id")}>ID</th>
                        <th onClick={() => sortPosts("title")}>Заголовок</th>
                        <th onClick={() => sortPosts("body")}>Описание</th>
                    </tr>
                </thead>
                <Posts posts={currentPagePosts}/>
            </table>
        </div>
    )
}