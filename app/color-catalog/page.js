"use client";

import PageWelcoming from "@/components/units/PageWelcoming";
import {
  htmlColorCatalog,
  htmlColorCatalogSource,
} from "@/data/htmlColorCatalog";
import {
  wikiColorCatalog,
  wikiColorCatalogSource,
} from "@/data/wikiColorCatalog";
import { copyToClipboard, generateRandomKey } from "@/utility/rendering";
import Link from "next/link";
import { useState } from "react";
import { clientData } from "./data";

function ColorCatalog() {
  const [catalogType, setCatalogType] = useState("html");

  const renderHTMLCatalog = () => {
    const colorKeys = Object.keys(htmlColorCatalog);
    return colorKeys.map((color) => {
      return (
        <div
          key={generateRandomKey()}
          style={{ background: htmlColorCatalog[color] }}
          className="palette-div"
          onClick={() => copyToClipboard(htmlColorCatalog[color])}
        >
          <div className="palette-label">{color}</div>
        </div>
      );
    });
  };
  const renderWikiCatalog = () => {
    const colorKeys = Object.keys(wikiColorCatalog);
    return colorKeys.map((color) => {
      return (
        <div
          key={generateRandomKey()}
          style={{ background: wikiColorCatalog[color] }}
          className="palette-div"
          onClick={() => copyToClipboard(wikiColorCatalog[color])}
        >
          <div className="palette-label">{color}</div>
        </div>
      );
    });
  };

  return (
    <div className="page-position color-palette-container">
      <PageWelcoming {...clientData} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <label>Select Catalog</label>
        <select
          onChange={(e) => {
            setCatalogType(e.target.value);
          }}
          style={{ fontSize: "18px", minWidth: "120px" }}
        >
          <option value="html">Html</option>
          <option value="wiki">Wiki</option>
        </select>
        <Link
          href={`${
            catalogType === "wiki"
              ? wikiColorCatalogSource
              : htmlColorCatalogSource
          }`}
          rel="noopener noreferrer"
          className="link"
          target="_blank"
        >
          Go to source
        </Link>
      </div>
      <div className="palette-container">
        {catalogType === "html" && renderHTMLCatalog()}
        {catalogType === "wiki" && renderWikiCatalog()}
      </div>
    </div>
  );
}

export default ColorCatalog;
