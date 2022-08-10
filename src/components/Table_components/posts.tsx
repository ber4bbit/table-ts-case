import React from "react";

import { Ipost } from "../../models";

interface postsProps {
    posts: Ipost[],
    page: number,
    postsPerPage: number,
    setCurrentPage: Function
}

export default function Posts({ posts, page, postsPerPage, setCurrentPage }: postsProps) {
    const lastPostIndex = page * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPagePosts = posts.slice(firstPostIndex, lastPostIndex);

    setCurrentPage(page);

    return (
        <tbody>
            {
                currentPagePosts.map(post => (
                    <tr>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                ))
            }
        </tbody>
    )
}