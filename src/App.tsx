import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import SearchInput from "./components/SearchInput_components";
import Table from "./components/Table_components";
import Pagination from "./components/Pagination_components";

export default function App() {
    const url: string = "https://jsonplaceholder.typicode.com/posts";

    const [posts, setPosts] = useState([]);
    const [originalPosts, setOriginalPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const navigate = (page: number) => setCurrentPage(page);
    const prevPage = () => currentPage != 1 && setCurrentPage(prev => prev - 1);
    const nextPage = () => {
        if ((currentPage !== Math.ceil(posts.length / postsPerPage)) && posts.length !== 0) setCurrentPage(prev => prev + 1);
    }

    useEffect(() => {
        const getPosts = async (url: string) => {
            const response = await axios.get(url);
            setPosts(response.data);
            setOriginalPosts(response.data);
        }
        getPosts(url);
    }, []);


  return (
    <div className="container" style={{ marginTop: "2%" }}>
      <SearchInput setPosts={setPosts} originalPosts={originalPosts} />
      <Table posts={posts} setPosts={setPosts} setCurrentPage={setCurrentPage} postsPerPage={postsPerPage}/>
      <Pagination
          postsPerPage={postsPerPage} postsAmount={posts.length} navigate={navigate}
          prevPage={prevPage} nextPage={nextPage} currentPage={currentPage}
      />
    </div>
  );
}
