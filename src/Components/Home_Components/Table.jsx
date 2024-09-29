import React, { useState } from "react";
import { GrTable } from "react-icons/gr";
import { RxDragHandleHorizontal } from "react-icons/rx";
import Data from "./TableData";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

function Table() {
  const [selectedOption, setSelectedOption] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchrecord, setSearchRecord] = useState(Data);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);

  const totalRecord = searchrecord.length;
  const totalPage = Math.ceil(totalRecord / selectedOption);

  // Handle search input
  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    // Filter data based on all relevant columns
    const newData = Data.filter((row) => {
      return (
        row.name.toLowerCase().includes(searchValue) ||
        row.position.toLowerCase().includes(searchValue) ||
        row.office.toLowerCase().includes(searchValue) ||
        row.age.toString().includes(searchValue) ||
        row.startDate.toLowerCase().includes(searchValue) ||
        row.salary.toString().includes(searchValue)
      );
    });
    setSearchRecord(newData);
    setCurrentPage(1); // Reset to first page on search
    setSelectedPage(1); // Reset page dropdown
  };

  // Handle dropdown options
  const handleChange = (event) => {
    setSelectedOption(parseInt(event.target.value));
    setCurrentPage(1); // Reset to first page on entries change
    setSelectedPage(1); // Reset page dropdown
  };

  // Handle column sorting
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sortedData = [...searchrecord].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setSearchRecord(sortedData);
  };

  // Sort icons
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return <FaSort className="inline-block ml-2" />;
    }
    if (sortConfig.direction === "ascending") {
      return <FaSortUp className="inline-block ml-2" />;
    }
    return <FaSortDown className="inline-block ml-2" />;
  };

  // Handle page changes
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPage) {
      setCurrentPage(page);
      setSelectedPage(page); // Update page dropdown
    }
  };

  // Handle page dropdown change
  const handlePageDropdownChange = (event) => {
    const page = parseInt(event.target.value);
    handlePageChange(page);
  };

  // Handle reset
  const handleReset = () => {
    setSearchTerm("");
    setSearchRecord(Data);
    setCurrentPage(1); // Reset to first page on reset
    setSelectedPage(1); // Reset page dropdown
  };

  // Slice data for current page
  const startIndex = (currentPage - 1) * selectedOption;
  const endIndex = startIndex + selectedOption;
  const paginatedData = searchrecord.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col items-center bg-[#FFFFFF] shadow-md p-6 py-4 m-2 rounded-md space-y-4 hidden">
      <div className="flex items-center justify-between w-full">
        <div className="w-[5%]">
          <GrTable size={28} className="text-gray-500" />
        </div>
        <div className="w-[92%] text-xl font-semibold text-gray-800">
          Easy Dynamic Tables
        </div>
        <div className="w-[3%] items-end">
          <RxDragHandleHorizontal size={32} />
        </div>
      </div>
      <div className="p-[0.5px] bg-gray-300 w-full"></div>
      <div className="flex items-center justify-between w-full">
        <div className="space-x-2">
          <span>Show</span>
          <select
            value={selectedOption}
            onChange={handleChange}
            className="bg-indigo-200/40 text-gray-600 placeholder-gray-700 focus:outline-0 p-1 px-2 cursor-pointer rounded-lg focus:ring-2 focus:ring-indigo-500 border-none"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
          </select>
          <span>entries</span>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="bg-indigo-200/40 text-gray-600 placeholder-gray-700 focus:outline-0 px-4 py-1 rounded-lg focus:ring-2 focus:ring-indigo-500 border-none"
          />
          <button
            onClick={handleReset}
            className="bg-gray-200 text-gray-800 px-4 py-1 rounded-lg hover:bg-gray-300 hidden"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="w-full border flex justify-between items-center">
        <table className="min-w-full text-left">
          <thead>
            <tr className="bg-gray-100 text-indigo-800 cursor-pointer text-lg font-semibold text-left">
              <td
                className="px-4 py-2 w-[20%]"
                onClick={() => handleSort("name")}
              >
                Name
                {getSortIcon("name")}
              </td>
              <td
                className="px-4 py-2 w-[30%]"
                onClick={() => handleSort("position")}
              >
                Position
                {getSortIcon("position")}
              </td>
              <td
                className="px-4 py-2 w-[15%] hidden"
                onClick={() => handleSort("office")}
              >
                Office {getSortIcon("office")}
              </td>
              <td
                className="px-4 py-2 w-[10%] hidden"
                onClick={() => handleSort("age")}
              >
                Age {getSortIcon("age")}
              </td>
              <td
                className="px-4 py-2 w-[15%] hidden"
                onClick={() => handleSort("startDate")}
              >
                Start Date {getSortIcon("startDate")}
              </td>
              <td
                className="px-4 py-2 w-[15%]"
                onClick={() => handleSort("salary")}
              >
                Salary {getSortIcon("salary")}
              </td>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-4 py-2 text-center">
                  No records found
                </td>
              </tr>
            ) : (
              paginatedData.map((data) => (
                <tr
                  key={data.id}
                  className="border-b hover:bg-indigo-50 font-serif"
                >
                  <td className="px-4 py-2 gap-2 flex">
                    <div
                      className="text-white w-7 h-7 flex items-center justify-center rounded-full"
                      style={{ backgroundColor: data.bg }}
                    >
                      {data.name.slice(0, 1)}
                    </div>
                    <div>{data.name}</div>
                  </td>
                  <td className="px-4 py-2">{data.position}</td>
                  <td className="px-4 py-2 hidden">{data.office}</td>
                  <td className="px-4 py-2 hidden">{data.age}</td>
                  <td className="px-4 py-2 hidden">{data.startDate}</td>
                  <td className="px-4 py-2">
                    <span className="text-yellow-500 font-semibold">$</span>
                    {data.salary.toString().slice(0, 2)},
                    {data.salary.toString().slice(2, 5)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* Render pagination controls only if more than one page exists */}
      {totalPage > 1 && (
        <div className="flex justify-between w-full mt-4">
          <span className="self-center">
            Page {currentPage} of {totalPage}
          </span>
          <div className="flex items-center space-x-3">
            {currentPage > 1 && (
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="bg-gray-200 text-gray-800 px-4 py-1 rounded-lg hover:bg-gray-300"
              >
                <GrFormPrevious size={24} className="font-semibold" />
              </button>
            )}
            <select
              value={selectedPage}
              onChange={handlePageDropdownChange}
              className="bg-indigo-200/40 text-gray-600 placeholder-gray-700 focus:outline-0 px-2 py-1 rounded-lg focus:ring-2 focus:ring-indigo-500 border-none"
            >
              {Array.from({ length: totalPage }, (_, index) => index + 1).map(
                (page) => (
                  <option key={page} value={page}>
                    {page}
                  </option>
                )
              )}
            </select>
            {currentPage < totalPage && (
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="bg-gray-200 text-gray-800 px-4 py-1 rounded-lg hover:bg-gray-300"
              >
                <GrFormNext size={24} className="font-semibold" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Table;
