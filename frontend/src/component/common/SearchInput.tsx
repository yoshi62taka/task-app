import React, { useState } from "react";
import { BaseInputTextProps } from "../../types/InputTypeProps";
import { BaseButtonProps } from "../../types/ButtonProps";
import "../../styles/search-input.css";

interface SearchInputProps {
  items: { id: number; title: string; createdAt: string; completed: boolean }[];
  onSearch: (
    filteredItems: {
      id: number;
      title: string;
      createdAt: string;
      completed: boolean;
    }[],
  ) => void;
}

export const SearchInput = ({ items, onSearch }: SearchInputProps) => {
  const [searchWord, setSearchWord] = useState("");

  const handleSearch = () => {
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(searchWord.toLowerCase()),
    );
    onSearch(filtered);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-input-container">
      <input
        type="text"
        className="search-input"
        placeholder="タスクを検索..."
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="search-button" onClick={handleSearch}>
        検索
      </button>
    </div>
  );
};
