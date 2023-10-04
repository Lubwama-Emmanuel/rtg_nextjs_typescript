/* eslint-disable react/prop-types */
import { useState } from "react";
import Link from "next/link";

const linkItems = [
  {
    id: 0,
    item: "products",
    link: "/products",
  },
  {
    id: 1,
    item: "services",
    link: "/services",
  },
  {
    id: 2,
    item: "contact",
    link: "/contact",
  },
];

type Item = {
  id: Number;
  item: string;
  link: string;
};

interface LinkItemProps {
  el: Item;
}

export default function Links({ styles }: { styles: string }) {
  return (
    <ul className={styles}>
      {linkItems.map((el) => (
        <LinkItem key={el.id} el={el} />
      ))}
    </ul>
  );
}

function LinkItem({ el }: LinkItemProps) {
  return (
    <li>
      <Link
        href={el.link}
        className="hover:text-emerald-500 focus:text-emerald-500"
      >
        {el.item}
      </Link>
    </li>
  );
}
