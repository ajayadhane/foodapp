import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("Pizza");
  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
}

export default Search;
