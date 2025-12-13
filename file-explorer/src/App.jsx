import { useState } from "react";
import List from "./List.jsx";
import fileslist from "./fileslist.json";

function App() {
  const [isSelected, setIsSelected] = useState({});
  const [data, setData] = useState(fileslist);

  const handleAddFolderClick = (node) => {
    if (!node.isFolder) return;

    const folderName = prompt("Enter Folder name");

    function findNode(tree) {
      return tree.map((node) => {
        if (node.id == isSelected.id) {
          node.children.push({
            name: folderName,
            id: folderName + new Date(),
            isFolder: true,
            children: [],
          });

          return node;
        }

        if (node.children) {
          findNode(node.children);
        }

        return node;
      });
    }

    const treedata = findNode(data);
    setData(treedata);
  };

  const handleAddFileClick = (node) => {
    console.log("node");
    if (!node.isFolder) {
      alert("You have to select a folder to add a file");
      return;
    }

    const fileName = prompt("Enter File name");

    function findNode(tree) {
      return tree.map((node) => {
        if (node.id == isSelected.id) {
          node.children.push({
            name: fileName,
            isFolder: false,
            id: fileName + new Date(),
          });

          return node;
        }

        if (node.children) {
          findNode(node.children);
        }

        return node;
      });
    }

    const treedata = findNode(data);
    setData(treedata);
  };

  return (
    <div style={{ height: "98vh", paddingLeft: "1rem" }}>
      <p className="read-the-docs">File Structure</p>
      <div style={{ display: "flex" }}>
        <button onClick={() => handleAddFolderClick(isSelected)}>
          Add Folder
        </button>
        <button onClick={() => handleAddFileClick(isSelected)}>
          {" "}
          Add File{" "}
        </button>
      </div>
      <p>Selected File is: {`${isSelected?.name || "no file is selected"}`}</p>

      <List data={data} isSelected={isSelected} setIsSelected={setIsSelected} />
    </div>
  );
}

export default App;
