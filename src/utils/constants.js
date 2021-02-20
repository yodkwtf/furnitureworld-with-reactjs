import React from 'react';
import { GiBigGear, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiBigGear />,
    title: 'custom build',
    text:
      'Get furnitures built by your prefernce and style at very effective costs',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'quality',
    text: 'Feel and experience the quality of our wide range of products',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'consultant experts',
    text:
      'Get experts suggestions from our experts consultation and profressional designers',
  },
];

export const products_url = 'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
