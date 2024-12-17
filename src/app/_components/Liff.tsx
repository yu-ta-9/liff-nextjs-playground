"use client";

import { useGlobalContext } from "@/hooks/useGlobalContext";
import { FC } from "react";

export const Liff:FC = () => {
  const { liff, liffError } = useGlobalContext();

  return (
    <div>
      <h2>create-liff-app</h2>
      {liff && <p>LIFF init succeeded.</p>}
      {liffError && (
        <>
          <p>LIFF init failed.</p>
          <p>
            <code>{liffError}</code>
          </p>
        </>
      )}
      <a
        href="https://developers.line.biz/ja/docs/liff/"
        target="_blank"
        rel="noreferrer"
      >
        LIFF Documentation
      </a>
    </div>
  );
}