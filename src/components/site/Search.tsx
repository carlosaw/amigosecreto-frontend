"use client";

import { SearchResult } from "@/types/SearchResult";
import { useState } from "react";
import { SearchForm } from "./SearchForm";
import * as api from "@/api/site";
import { SearchReaveal } from "./SearchReveal";

type Props = {
  id: number;
}

export const Search = ({ id }: Props) => {
  const [results, setResults] = useState<SearchResult>();

  const handleSearchButton = async (cpf: string) => {
    if(!cpf) return;
    const result = await api.searchCPF(id, cpf);
    if(!result) return alert('Descuple, não encontramos seu CPF');

    setResults(result);
  }

  return (
    <section className="bg-gray-900 p-5 rounded">
      {!results && <SearchForm onSearchButton={handleSearchButton} />}
      {results && <SearchReaveal results={results} />}
    </section>
  );
}