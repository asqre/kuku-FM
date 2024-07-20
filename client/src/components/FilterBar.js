import React from "react";

const FilterBar = ({ setFilter }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  return (
    <div className="flex sm:space-x-4 mb-8 flex-col sm:flex-row justify-end items-center space-y-4 sm:space-y-0">
      <select
        name="genre"
        onChange={handleFilterChange}
        className="p-2 border rounded w-full sm:w-auto"
      >
        <option value="">All Genres</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Mystery">Mystery</option>
        <option value="Fantasy">Fantasy</option>
      </select>

      <select
        name="author"
        onChange={handleFilterChange}
        className="p-2 border rounded w-full sm:w-auto"
      >
        <option value="">All Authors</option>
        <option value="Harper Lee">Harper Lee</option>
        <option value="George Orwell">George Orwell</option>
        <option value="F. Scott Fitzgerald">F. Scott Fitzgerald</option>
        <option value="J.K. Rowling">J.K. Rowling</option>
        <option value="Frank Herbert">Frank Herbert</option>
        <option value="Paulo Coelho">Paulo Coelho</option>
        <option value="J.R.R. Tolkien">J.R.R. Tolkien</option>
        <option value="J.D. Salinger">J.D. Salinger</option>
        <option value="Douglas Adams">Douglas Adams</option>
      </select>
      <select
        name="rating"
        onChange={handleFilterChange}
        className="p-2 border rounded w-full sm:w-auto"
      >
        <option value="">All Ratings</option>
        <option value="5">5 Stars</option>
        <option value="4">4 Stars & Up</option>
        <option value="3">3 Stars & Up</option>
        <option value="2">2 Stars & Up</option>
        <option value="1">1 Star & Up</option>
      </select>
    </div>
  );
};

export default FilterBar;
