"use client";
import { useState } from "react";
import FilterButton from "./FilterButton";
import Products from "../components/Products";

type Filter = {
  id: number;
  filter: string;
};
interface ProductsSectionProps {
  filters: Filter[];
  data: [];
}

export default function ProductsSection({
  filters,
  data,
}: ProductsSectionProps) {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <section className="m-auto max-w-[98%]">
      <Filters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filters={filters}
      />
      <ProductsList data={data} activeFilter={filters[activeFilter].filter} />
    </section>
  );
}

interface FiltersProps {
  activeFilter: number;
  setActiveFilter: (state: number) => void;
  filters: Filter[];
}

function Filters({ activeFilter, setActiveFilter, filters }: FiltersProps) {
  const base = `flex gap-2 sm:gap-5 overflow-x-auto justify-between py-7 bg-white`;
  return (
    <div>
      {filters.map((el, index) => (
        <FilterButton
          key={el.id}
          isActive={activeFilter === index}
          onClick={() => setActiveFilter(index)}
        >
          {el.filter}
        </FilterButton>
      ))}
    </div>
  );
}

interface ProductListProps {
  activeFilter: string;
  data: [];
}

function ProductsList({ activeFilter, data }: ProductListProps) {
  return (
    <div className="space-x-5">
      <Products data={data} filter={activeFilter} />
    </div>
  );
}
