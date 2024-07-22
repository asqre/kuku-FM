import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import FilterBar from "../components/FilterBar";
import AudiobookCard from "../components/AudiobookCard";
import { fetchAudioBooks } from "../api/audiobookApi";
import { Spin } from 'antd';

const Home = () => {
  const [audioBooks, setAudioBooks] = useState([]);
  const [filteredAudioBooks, setFilteredAudioBooks] = useState([]);
  const [filter, setFilter] = useState({ genre: "", author: "", rating: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAudioBooks = async () => {
      setLoading(true);
      const data = await fetchAudioBooks();
      setAudioBooks(data);
      setFilteredAudioBooks(data);
      setLoading(false);
    };
    getAudioBooks();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
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
          (audioBook) => audioBook.rating >= parseFloat(filter.rating)
        );
      }

      setFilteredAudioBooks(filtered);
    };

    applyFilters();
  }, [filter, audioBooks]);

  return (
    <div className="custom-scrollbar">
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-semibold text-center">Audio Books</h1>

          <FilterBar setFilter={setFilter} />

          {loading ? (
            <div className="flex w-[100%] h-[100%] justify-center items-center"><Spin/></div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
              {filteredAudioBooks.map((audioBook) => (
                <AudiobookCard key={audioBook._id} audiobook={audioBook} />
              ))}
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
