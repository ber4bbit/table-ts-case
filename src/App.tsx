import React from 'react';
import SearchInput from "./components/SearchInput_components";
import Table from "./components/Table_components";

export default function App() {
  return (
    <div className="container" style={{ marginTop: "2%" }}>
      <SearchInput />
      <Table />
    </div>
  );
}
