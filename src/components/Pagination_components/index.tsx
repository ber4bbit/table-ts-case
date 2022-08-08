import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

interface paginationProps {
    postsPerPage: number,
    postsAmount: number,
    currentPage: number,
    navigate: Function,
    prevPage: Function,
    nextPage: Function
}

export default function Pagination({ postsPerPage, postsAmount, navigate, prevPage, nextPage, currentPage }: paginationProps) {
    const pages: number[] = [];

    for (let i = 1; i <= Math.ceil(postsAmount / postsPerPage); i++) pages.push(i);

    return (
        <div className="pagination-container">
            <NavLink to={"/" + (currentPage != 1 ? currentPage - 1 : currentPage) } className="button" onClick={ () => prevPage() }>Назад</NavLink>
            <ul className="pagination">
                {
                    pages.map(page => (
                        <li key={page}>
                            <NavLink to={"/" + page} className="page" onClick={ () => navigate(page) }>{page}</NavLink>
                        </li>
                    ))
                }
            </ul>
            <NavLink to={"/" + (currentPage != Math.ceil(postsAmount / postsPerPage) ? currentPage + 1 : currentPage) } className="button" onClick={ () => nextPage() }>Далее</NavLink>
        </div>
    )
}