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
  const hasOverflow = products.length > 6;
  const visibleProducts = useMemo(
    () => (showAll || !hasOverflow ? products : products.slice(0, 6)),
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
          <article key={product.name} className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-[var(--border)]">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover grayscale"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-semibold uppercase tracking-[0.2em]">
                {product.url ? (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-[var(--muted-2)]"
                  >
                    {product.name}
                  </a>
                ) : (
                  product.name
                )}
              </h3>
              <p className="text-sm text-[var(--muted)]">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-[var(--muted-2)]">
                {product.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
