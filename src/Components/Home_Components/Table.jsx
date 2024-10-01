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
    <div className="flex flex-col items-center text-white shadow-lg p-3 md:p-6 lg:p-6 py-4 m-2 rounded-xl md:space-y-4 space-y-2 bg-[#282828]">
      <div className="flex items-center justify-between w-full px-4">
        <div className="w-full flex gap-x-4">
          <GrTable size={28} className="text-gray-500" />
          <div className="text-xl text-[#9147BC] font-bold">
            Easy Dynamic Tables
          </div>
        </div>
        <div className="items-end">
          <RxDragHandleHorizontal size={32} />
        </div>
      </div>
      <div className="h-[0.5px] bg-gray-300 w-full border-none"></div>
      <div className="flex md:flex-row lg:flex-row flex-col md:items-center md:justify-between w-full px-2 space-y-3">
        <div className="space-x-2 flex justify-between items-center">
          <span>Show entries</span>
          <select
            value={selectedOption}
            onChange={handleChange}
            className="bg-[#6A707E] text-gray-200 placeholder-gray-200 focus:outline-0 p-1 px-2 cursor-pointer rounded-lg focus:ring-2 focus:ring-gray-200 border-none"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="flex items-center space-x-2 justify-between">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="bg-indigo-200/40 text-gray-200 w-48 placeholder-gray-200 focus:outline-0 px-4 py-1 rounded-lg focus:ring-2 focus:ring-gray-200 border-none"
          />
          <button
            onClick={handleReset}
            className="bg-[#6F3DD4] text-gray-200 px-2 py-1 rounded-lg hover:bg-[#6f3dd4d0]"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="w-full border flex justify-between items-center overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#282828] text-white w-full  border-b cursor-pointer text-lg font-semibold text-left">
              <td
                className="px-4 py-2 min-w-[260px] md:min-w-[300px]"
                onClick={() => handleSort("name")}
              >
                Name
                {getSortIcon("name")}
              </td>
              <td
                className="px-4 py-2 min-w-[220px]"
                onClick={() => handleSort("Vehicle_No")}
              >
                Vehicle No.
                {getSortIcon("position")}
              </td>
              <td
                className="px-4 py-2 min-w-[180px]"
                onClick={() => handleSort("office")}
              >
                License No. {getSortIcon("office")}
              </td>
              <td
                className="px-4 py-2 min-w-[160px]"
                onClick={() => handleSort("Trips_Completed")}
              >
                Trips{getSortIcon("Trips_Completed")}
              </td>
              <td
                className="px-4 py-2 min-w-[180px]"
                onClick={() => handleSort("Status")}
              >
                Status {getSortIcon("Status")}
              </td>
              <td
                className="px-4 py-2 min-w-[180px]"
                onClick={() => handleSort("Feedback")}
              >
                Ratings {getSortIcon("Feedback")}
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
                  className="border-b hover:bg-gray-500 font-serif"
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
                  <td className="px-4 py-2">{data.Vehicle_No}</td>
                  <td className="px-4 py-2">{data.License_No}</td>
                  <td className="px-4 py-2">{data.Trips_Completed}</td>
                  <td
                    className={`${
                      data.Status === "En Route"
                        ? "text-[#FFA500]"
                        : data.Status === "Available"
                        ? "text-[#32CD32]"
                        : "text-[#FF4500]"
                    } px-4 py-2`}
                  >
                    {data.Status}
                  </td>
                  <td className="px-4 py-2">{data.Feedback}</td>
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
              className="bg-[#6A707E] text-gray-200 placeholder-gray-600 focus:outline-0 px-2 py-1 rounded-lg focus:ring-2 focus:ring-gray-200 border-none"
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
