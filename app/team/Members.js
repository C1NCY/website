"use client";

import { useState } from "react";

export default function Members() {

    const members = [
        { name: "Saxton Short", subteam: "Controls", year: "Second", major: "Computer Science", href: "https://www.linkedin.com/in/saxtonshort/" },
        { name: "Beck Grider", subteam: "Controls", year: "Second", major: "Computer Science", href: "www.linkedin.com/in/beck-grider-109ba52a5 " },
        { name: "Noah Foertmeyer", subteam: "Controls", year: "First", major: "Computer Science", href: "https://www.linkedin.com/in/noah-foertmeyer" }

    ];

    const [filters, setFilters] = useState({
        name: "",
        subteam: "",
        year: "",
        major: "",
    });

    const columns = [
        { key: "name", label: "Name" },
        { key: "subteam", label: "Subteam" },
        { key: "year", label: "Year" },
        { key: "major", label: "Major" },
    ];

    // Generate unique dropdown options from the members array.
    const getOptions = (key) => {
        return [
            ...new Set(
                members.map((member) => member[key]).filter(Boolean)
            ),
        ].sort((a, b) => a.localeCompare(b));
    };

    // Apply all selected filters simultaneously.
    const filteredMembers = members.filter((member) =>
        columns.every(({ key }) => {
            if (!filters[key]) return true;

            // Name filtering is case-insensitive and supports partial matches.
            if (key === "name") {
                return member.name
                    .toLowerCase()
                    .includes(filters.name.toLowerCase());
            }

            return member[key] === filters[key];
        })
    );

    const updateFilter = (key, value) => {
        setFilters((previous) => ({
            ...previous,
            [key]: value,
        }));
    };

    const clearFilters = () => {
        setFilters({
            name: "",
            subteam: "",
            year: "",
            major: "",
        });
    };

    return (
        <div className="members-container">
            <div className="Member-Title">
                <h2 >Team Members</h2>
            </div>

            <div className="members-filters">
                {columns.map(({ key, label }) => (
                    <label className="members-filter" key={key}>
                        <span>{label}</span>

                        <select
                            value={filters[key]}
                            onChange={(event) =>
                                updateFilter(key, event.target.value)
                            }
                        >
                            <option value="">All {label}s</option>

                            {getOptions(key).map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </label>
                ))}

                <button
                    type="button"
                    onClick={clearFilters}
                    className="clear-filters"
                >
                    Clear Filters
                </button>
            </div>

            <p className="members-count">
                Showing {filteredMembers.length} of {members.length} members
            </p>

            <div className="members-table-wrapper">
                <table className="members-table">
                    <thead>
                        <tr>
                            {columns.map(({ key, label }) => (
                                <th key={key} scope="col">
                                    {label}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {filteredMembers.length > 0 ? (
                            filteredMembers.map((member) => (
                                <tr key={`${member.name}-${member.subteam}`}>
                                    <td>
                                        {member.href ? (
                                            <a
                                                href={member.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {member.name}
                                            </a>
                                        ) : (
                                            member.name
                                        )}
                                    </td>
                                    <td>{member.subteam}</td>
                                    <td>{member.year}</td>
                                    <td>{member.major}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length} className="no-results">
                                    No members match the selected filters.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <style jsx>{`
        .members-container {
          width: 100%;
          margin: 0 auto;
        }

        .members-filters {
          display: flex;
          flex-wrap: wrap;
          align-items: end;
          gap: 16px;
          margin: 20px 0;
        }

        .members-filter {
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-width: 150px;
          flex: 1;
        }

        .members-filter span {
          font-weight: 600;
          font-size: 14px;
        }

        .members-filter select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
          background: white;
          color: #222;
          font-size: 14px;
        }

        .clear-filters {
          padding: 10px 16px;
          border: 1px solid #ccc;
          border-radius: 6px;
          background: transparent;
          cursor: pointer;
        }

        .clear-filters:hover {
          background: #f0f0f0;
        }

        .members-count {
          font-size: 14px;
          margin: 12px 0;
        }

        .members-table-wrapper {
          width: 100%;
          overflow-x: auto;
        }

        .members-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .members-table th,
        .members-table td {
          padding: 12px 16px;
          border-bottom: 1px solid #ddd;
        }

        .members-table th {
          font-weight: 600;
        }

        .members-table a {
          text-decoration: none;
          color: inherit;
        }

        .members-table a:hover {
          text-decoration: underline;
        }

        .no-results {
          text-align: center;
          padding: 24px;
        }

        @media (max-width: 600px) {
          .members-filter {
            min-width: 100%;
          }
        }
      `}</style>
        </div>
    );
}