import React from "react";
import { Link } from "react-router-dom";

const AudiobookCard = ({ audiobook }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img
        src={audiobook.coverImage}
        alt={audiobook.title}
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{audiobook.title}</h3>
      <p className="text-lg mb-2">Author: {audiobook.author}</p>
      <Link
        to={`/audiobooks/${audiobook.id}`}
        className="text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default AudiobookCard;
