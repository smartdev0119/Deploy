"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface BreadcrumbItem {
  text: string;
  href?: string;
  onClick?: () => void;
  // You can add more properties depending on your requirements, such as `isActive`, `icon`, etc.
}

import React from 'react';
import Link from 'next/link';

const Breadcrumbs: React.FC = () => {

  const router = useRouter();
  const [items, setItems] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    alert(router);
  }, [router])

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
        {items && items.map((item, index) => (
          <li
            key={index}
            className={`${
              index === 0 ? 'pr-4' : 'px-4'
            } font-medium text-gray-500 hover:text-gray-700`}
          >
            {item.href ? (
              <Link href={item.href} className="text-blue-600 hover:underline">
                {item.text}
              </Link>
            ) : (
              <span className="text-gray-500">{item.text}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;