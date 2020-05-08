import React, { Component } from "react";
// import User from "./User";
// import UsersList from "./UsersList";

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
    const isPrevPageAvaible = currentPage === 0;
    const isNextPageAvaible = currentPage === Math.ceil(totalItems / itemsPerPage) - 1;

    return (
        <div className="pagination">
            <button className="btn" onClick={goPrev} disabled={isPrevPageAvaible}>
                {isPrevPageAvaible ? "" : "←"}
            </button>
            <span className="pagination__page">{currentPage + 1}</span>
            <button className="btn" onClick={goNext} disabled={isNextPageAvaible}>
                {isNextPageAvaible ? "" : "→"}
            </button>
        </div>
    );
};
export default Pagination;
