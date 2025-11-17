import { useState } from "react";
import { users } from "./data";
import { ActionMenu } from "./ActionMenu";

export default function UsersTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5); // افتراضي 5 صفوف

  // احسب الصفوف التي ستعرض في الصفحة الحالية
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = users.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(users.length / rowsPerPage);

  return (
    <div className="table-container">
      <div className="table-header">
        <span></span>
        <span>Full Name</span>
        <span>Email Address</span>
        <span>Location</span>
        <span>Joined</span>
        <span>Permissions</span>
        <span></span>
      </div>

      {currentRows.map((u) => (
        <div className="table-row" key={u.id}>
          <label className="checkbox-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <div className="user-cell">
            <span className="status-dot"></span>
            <img src={u.avatar} className="user-avatar" />
            {u.name}
          </div>

          <span>{u.email}</span>
          <span>{u.location}</span>
          <span>{u.joined}</span>

          <span className={`badge badge-${u.role?.toLowerCase()}`}>
            {u.role}
          </span>

          <span></span>

          <ActionMenu />
        </div>
      ))}

      <div className="table-footer">
        {/* Pagination */}
        <div className="pagination-buttons">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            &#8592; {/* Left arrow */}
          </button>

          <span>
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            &#8594; {/* Right arrow */}
          </button>
        </div>

        {/* Show Rows */}
        <div className="show-rows">
          Show{" "}
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>{" "}
          rows
        </div>


      </div>

    </div>
  );
}
