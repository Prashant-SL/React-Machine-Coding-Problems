import React, { useState } from "react";

const List = ({ data, isSelected, setIsSelected }) => {
  const [isExpanded, setIsExpanded] = useState({});

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          paddingLeft: "20px",
        }}
      >
        {data.map((node) => {
          return (
            <div key={node.id}>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  console.log("typeof ", typeof node);
                  setIsSelected(node);
                  //   setIsSelected((prev) => ({...node}));
                  setIsExpanded((prev) => ({
                    ...prev,
                    [node.name + node.id]: !prev[node.name + node.id],
                  }));
                }}
              >
                {node.isFolder &&
                  (isExpanded[node.name + node.id] ? "v " : "> ")}
                {node.name}
              </span>
              {node?.children && isExpanded[node.name + node.id] && (
                <List
                  data={node.children}
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
