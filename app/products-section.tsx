"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Product = {
  name: string;
  sector: string;
  description: string;
  status: string;
  tags: string[];
  image: string;
  imageAlt: string;
  url?: string;
};

type ProductsSectionProps = {
  products: Product[];
};

export default function ProductsSection({ products }: ProductsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const hasOverflow = products.length > 3;
  const visibleProducts = useMemo(
    () => (showAll || !hasOverflow ? products : products.slice(0, 3)),
    [products, showAll, hasOverflow]
  );

  return (
    <section id="products" className="mt-20">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold uppercase tracking-[0.3em]">
          Products
        </h2>
        {hasOverflow ? (
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--muted-3)] transition hover:text-[var(--page-text)]"
            aria-expanded={showAll}
            aria-controls="product-grid"
          >
            <span>{showAll ? "Show less" : "View all"}</span>
            <span className="grid h-5 w-5 grid-cols-2 gap-0.5">
              <span className="h-2 w-2 bg-[var(--muted-3)]" />
              <span className="h-2 w-2 bg-[var(--muted-3)]" />
              <span className="h-2 w-2 bg-[var(--muted-3)]" />
              <span className="h-2 w-2 bg-[var(--muted-3)]" />
            </span>
          </button>
        ) : (
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted-3)]">
            View all
          </span>
        )}
      </div>
      <div
        id="product-grid"
        className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {visibleProducts.map((product) => (
          <article
            key={product.name}
            className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card-bg)] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-white">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 bg-[var(--card-bg)] px-6 pb-7 pt-6">
              <h3 className="text-xl font-semibold text-[var(--page-text)]">
                {product.url ? (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noreferrer"
                    className="transition group-hover:text-[var(--muted-2)]"
                  >
                    {product.name}
                  </a>
                ) : (
                  product.name
                )}
              </h3>
              <p className="min-h-[84px] text-base text-[var(--muted)]">
                {product.description}
              </p>
              <div className="min-h-[18px] flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-[var(--muted-2)]">
                {product.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="mt-auto">
                {product.url ? (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--page-text)] transition group-hover:text-[var(--muted-2)]"
                  >
                    Visit {product.name}
                    <span aria-hidden="true">→</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted-2)]">
                    Learn more
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
