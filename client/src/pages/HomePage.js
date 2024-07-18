import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import FilterBar from "../components/FilterBar";
import AudiobookCard from "../components/AudiobookCard";

const Home = () => {
  const [audioBooks, setAudioBooks] = useState([]);
  const [filteredAudioBooks, setFilteredAudioBooks] = useState([]);
  const [filter, setFilter] = useState({ genre: "", author: "", rating: "" });

  useEffect(() => {
    const getAudioBooks = async () => {
      // const data = await fetchAudioBooks();
      // const data = [];
      const data = [
        {
          id: 1,
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          coverImage:
            "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 2,
          title: "1984",
          author: "George Orwell",
          coverImage:
            "https://m.media-amazon.com/images/I/519zR2oIlmL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 3,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          coverImage:
            "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 4,
          title: "Pride and Prejudice",
          author: "Jane Austen",
          coverImage:
            "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 1,
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          coverImage:
            "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 2,
          title: "1984",
          author: "George Orwell",
          coverImage:
            "https://m.media-amazon.com/images/I/519zR2oIlmL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 3,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          coverImage:
            "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 4,
          title: "Pride and Prejudice",
          author: "Jane Austen",
          coverImage:
            "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 1,
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          coverImage:
            "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 2,
          title: "1984",
          author: "George Orwell",
          coverImage:
            "https://m.media-amazon.com/images/I/519zR2oIlmL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 3,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          coverImage:
            "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 4,
          title: "Pride and Prejudice",
          author: "Jane Austen",
          coverImage:
            "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 1,
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          coverImage:
            "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 2,
          title: "1984",
          author: "George Orwell",
          coverImage:
            "https://m.media-amazon.com/images/I/519zR2oIlmL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 3,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          coverImage:
            "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 4,
          title: "Pride and Prejudice",
          author: "Jane Austen",
          coverImage:
            "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
        },
      ];
      setAudioBooks(data);
      setFilteredAudioBooks(data);
    };
    getAudioBooks();
  }, []);

  useEffect(() => {
    const filteredAudioBooks = () => {
      let filtered = audioBooks;

      if (filter.genre) {
        filtered = filtered.filter(
          (audioBook) => audioBook.genre === filter.genre
        );
      }

      if (filter.author) {
        filtered = filtered.filter(
          (audioBook) => audioBook.author === filter.author
        );
      }

      if (filter.rating) {
        filtered = filtered.filter(
          (audioBook) => audioBook.rating === filter.rating
        );
      }

      setFilteredAudioBooks(filtered);
    };

    filteredAudioBooks();
  }, [filter, audioBooks]);

  return (
    <div className="custom-scrollbar">
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-semibold text-center">Audio Books</h1>

          <FilterBar setFilter={setFilter} />

          {filteredAudioBooks.length === 0 ? (
            <p className="text-center mt-4">No audio books found</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
              {filteredAudioBooks.map((audioBook) => (
                <AudiobookCard key={audioBook.id} audiobook={audioBook} />
              ))}
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
