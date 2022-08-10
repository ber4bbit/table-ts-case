import React from "react";
import { Route, Routes } from "react-router-dom";

import Posts from "./posts";
import { Ipost } from "../../models";

import headingIcon from "./heading-arrow-icon.svg"
import "./style.css";

interface tableProps {
    posts: Ipost[],
    postsPerPage: number,
    setPosts: Function,
    setCurrentPage: Function
}

export default function Table({ posts, setPosts, setCurrentPage, postsPerPage }: tableProps) {
    const pages: number[] = [];

    for (let i = 1; i <= Math.ceil(posts.length / 10); i++) pages.push(i);


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
                        <th onClick={() => sortPosts("id")}>ID
                            <img src={headingIcon} className="table-heading__icon"/>
                        </th>
                        <th onClick={() => sortPosts("title")}>Заголовок
                            <img src={headingIcon} className="table-heading__icon"/>
                        </th>
                        <th onClick={() => sortPosts("body")}>Описание
                            <img src={headingIcon} className="table-heading__icon"/>
                        </th>
                    </tr>
                </thead>
                <Routes>
                    <Route path="/" element={ <Posts posts={posts} page={1} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} /> } />
                    {
                        pages.map(page => (
                            <Route path={ "/" + page } element={ <Posts posts={posts} page={page} setCurrentPage={setCurrentPage} postsPerPage={postsPerPage} /> } />
                        ))
                    }
                </Routes>
            </table>
        </div>
    )
}