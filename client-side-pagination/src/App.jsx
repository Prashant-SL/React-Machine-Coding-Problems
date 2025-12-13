import { useState } from "react";
import "./App.css";
import tabledata from "./data.json";
import { useEffect } from "react";
import { useNewdata } from "./useNewdata";

function App() {
  const { data: fullData, metadata } = tabledata;
  const limit = metadata.limit;
  const headerKeys = Object.keys(tabledata.data[0]);

  const { data, currentPage, totalPages, setCurrentPage } = useNewdata(
    fullData,
    limit,
    metadata.page
  );

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            {headerKeys.map((key) => {
              return <td key={key}>{key}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.status}</td>
                <td>{row.updated_at}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div style={{ display: "flex" }}>
        <p
          style={{
            cursor: currentPage == 1 ? "not-allowed" : "pointer",
            padding: "0.5rem",
          }}
          onClick={() => setCurrentPage(1)}
        >
          {"|<<"}
        </p>
        <p
          style={{
            cursor: currentPage == 1 ? "not-allowed" : "pointer",
            padding: "0.5rem 1rem 0.5rem 0.5rem",
          }}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          {"<"}
        </p>

        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              style={{
                color: currentPage === page ? "red" : "blue",
                padding: "0.6rem",
                margin: "0.5rem",
              }}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          );
        })}

        <p
          style={{
            cursor:
              currentPage == metadata.total_pages ? "not-allowed" : "pointer",
            padding: "0.5rem 0.5rem 0.5rem 1rem",
          }}
          onClick={() => setCurrentPage((p) => p + 1)}
        >{`>`}</p>
        <p
          style={{
            cursor:
              currentPage == metadata.total_pages ? "not-allowed" : "pointer",
            padding: "0.5rem",
          }}
          onClick={() => setCurrentPage(totalPages)}
        >{`>>|`}</p>
      </div>
    </>
  );
}

export default App;
