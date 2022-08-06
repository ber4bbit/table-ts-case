import React from "react";

import { Ipost } from "../../models";

interface postsProps {
    posts: Ipost[]
}

export default function Posts(props: postsProps) {
    return (
        <tbody>
            {
                props.posts.map(post => (
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