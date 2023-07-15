'use client'
import Link from 'next/link';
import React from 'react';
import { ICategory } from '../types';
import { usePathname, useRouter } from 'next/navigation';
import { debounce } from '@/utils';

interface IPropType {
    categories: ICategory[];
}
const Tabs = ({ categories }: IPropType) => {
    const router = useRouter();
    const route = usePathname();
    const handleOnSearch = (query:string)=>{
      router.push(`?search=${query}`)
    }
    const handledebouncsearch = debounce(handleOnSearch,500)
    const isActiveLink = (category: ICategory) => {
        return "/category/"+category.attributes.slug === route;
    };
  
    return (
        <div className="my-8 flex items-center justify-between flex-wrap bg-black sticky top-0 py-6">
            {/* navbar for mobile user */}
            <div className='flex items-center justify-center md:hidden  flex-nowrap overflow-x-scroll w-full bg-black pt-5 '>
            <ul className="flex flex-nowrap md:hidden items-center justify-between w-full mb-5">
                <li
                    className={
                        ' mr-[5vw] pb-4 border-b-4 text-xs rounded-sm hover:text-gray-200 ' +
                        `${
                            route === '/'
                                ? 'border-primary text-primary' 
                                : 'border-black text-gray-400'
                        }`
                    }> 
                    <Link href="/">Recent</Link>
                </li>
                {categories.map((category) => {
                    return (
                        <li
                            key={category.id}
                            className={
                                'mr-[5vw] flex flex-nowrap pb-4 border-b-4 text-xs rounded-sm hover:text-gray-300 ' +
                                `${
                                    isActiveLink(category)
                                        ? 'border-primary text-primary'
                                        : 'border-black text-gray-400'
                                }`
                            }>
                            <Link
                                href={`/category/${category.attributes.slug}`}>
                                {category.attributes.Title}
                            </Link>
                        </li>   
                    );
                })}
            </ul>
            </div>
            <ul className="hidden md:flex md:items-center">
                <li
                    className={
                        'mr-6 pb-6 border-b-4 rounded-sm hover:text-gray-200 ' +
                        `${
                            route === '/'
                                ? 'border-primary text-primary'
                                : 'border-black text-gray-400'
                        }`
                    }>
                    <Link href="/">Recent</Link>
                </li>
                {categories.map((category) => {
                    return (
                        <li
                            key={category.id}
                            className={
                                'mr-6 pb-6 border-b-4 rounded-sm hover:text-gray-300 ' +
                                `${
                                    isActiveLink(category)
                                        ? 'border-primary text-primary'
                                        : 'border-black text-gray-400'
                                }`
                            }>
                            <Link
                                href={`/category/${category.attributes.slug}`}>
                                {category.attributes.Title}
                            </Link>
                        </li>   
                    );
                })}
            </ul>
            <div className="flex items-center bg-gray-900 px-4 py-2 rounded-md">
                <svg
                    className="h-4 fill-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                </svg>
                <input
                    id='search'
                    name='searcharticles'
                    onChange={(e) => handledebouncsearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="outline-none px-2 py-1 ml-1 w-[81vw] md:w-[25vw]  bg-gray-900 text-white"
                />
            </div>
            
        </div>
    );
};

export default Tabs;