"use client";

import { escapeCpf } from "@/utils/escapeCpf";
import { useState } from "react";

type Props = {
  onSearchButton: (cpf: string) => void;
}

export const SearchForm = ({ onSearchButton }: Props) => {
  const [cpfInput, setCpfInput] = useState('');

  return (
    <div>
      <p className="mb-3 text-xl">Qual seu CPF?</p>
      <input
        type="text"
        inputMode="numeric"
        placeholder="Digite seu CPF"
        className="w-full p-3 bg-white text-black text-center text-4xl outline-none rounded-lg"
        autoFocus
        value={cpfInput}
        onChange={e => setCpfInput(escapeCpf(e.target.value))}
      />
      <button
        className="w-full p-3 mt-3 rounded-lg bg-blue-800 text-white text-4xl border-b-4 border-blue-600 active:border-0 hover:opacity-90"
        onClick={() => onSearchButton(cpfInput)}
      >Entrar</button>
    </div>
  );
}