import React, { useEffect, useRef, useState } from "react";

const InfiniteImages = ({ url, limit = 10, page = 1, setPage }) => {
  const [posts, setPosts] = useState([]);
  const loadingRef = useRef(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${url}?_page=${page}&_limit=${limit}`);
        const data = await response.json();

        setPosts((prev) => [...prev, ...data]);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    };

    fetchPosts();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: "200px" },
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => {
      if (loadingRef.current) {
        observer.unobserve(loadingRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div>
        {posts?.map((post) => {
          return (
            <div key={post.id} style={{ border: "1px solid black" }}>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>
          );
        })}
        <p ref={loadingRef}>Loading...</p>
      </div>
    </div>
  );
};

export default InfiniteImages;
