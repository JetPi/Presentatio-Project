import React from "react";

interface Props {
  text: string;
  onClick: React.MouseEventHandler;
}

export default function Button({ text, onClick }: Props) {
  return (
    <button
      className="px-2 py-1 m-1 font-semibold bg-green-200 border-green-800 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
