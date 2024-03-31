import React from "react";

interface Props {
  perPage: number;
  page: number;
  nextPage: () => void;
  previousPage: () => void;
  maxItems: number;
}

export const Pagination = ({
  perPage,
  page,
  nextPage,
  previousPage,
  maxItems,
}: Props) => {
  const lastPage = Math.ceil(maxItems / perPage);

  return (
    <div className="row mt-3 justify-content-between">
      <button disabled={page === 1} onClick={previousPage} className="col-1">
        Back
      </button>
      <button disabled={page === lastPage} onClick={nextPage} className="col-1">
        Next
      </button>
    </div>
  );
};
