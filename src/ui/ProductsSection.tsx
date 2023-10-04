/* eslint-disable react/prop-types */
import { useState } from "react";
import FilterButton from "./FilterButton";
import Products from "../components/Products";

export default function ProductsSection({ filters, isFilterToTop, data }) {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <section className="m-auto max-w-[98%]">
      <Filters
        isFilterToTop={isFilterToTop}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filters={filters}
      />
      <ProductsList data={data} activeFilter={filters[activeFilter].filter} />
    </section>
  );
}

function Filters({ isFilterToTop, activeFilter, setActiveFilter, filters }) {
  const base = `flex gap-2 sm:gap-5 overflow-x-auto justify-between py-7 bg-white`;
  return (
    <div
      className={
        isFilterToTop ? `${base} fixed left-0 right-0 top-14 z-20` : base
      }
    >
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

function ProductsList({ activeFilter, data }) {
  return (
    <div className="">
      <Products data={data} filter={activeFilter} />
    </div>
  );
}
