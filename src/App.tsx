import React, {useEffect, useState} from 'react';
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

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPagePosts = posts.slice(firstPostIndex, lastPostIndex);

    const navigate = (page: number) => setCurrentPage(page);
    const prevPage = () => currentPage != 1 && setCurrentPage(prev => prev - 1);
    const nextPage = () => {
        if ((currentPage !== Math.ceil(posts.length / postsPerPage)) && posts.length !== 0) setCurrentPage(prev => prev + 1);
    }

    useEffect(() => {
        const getPosts = async (url: string) => {
            const response = await axios.get(url);
            setPosts(response.data);
            setOriginalPosts(response.data)
        }
        getPosts(url);
    }, []);


  return (
    <div className="container" style={{ marginTop: "2%" }}>
      <SearchInput setPosts={setPosts} originalPosts={originalPosts} />
      <Table currentPagePosts={currentPagePosts} posts={posts} setPosts={setPosts}/>
      <Pagination
          postsPerPage={postsPerPage} postsAmount={posts.length} navigate={navigate}
          prevPage={prevPage} nextPage={nextPage} currentPage={currentPage}
      />
    </div>
  );
}
