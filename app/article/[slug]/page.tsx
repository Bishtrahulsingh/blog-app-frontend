'use client'
import { fetchArticleBySlug } from '@/http'
import { IArticle, ICollectionResponse } from '@/types'
import { AxiosResponse } from 'axios'
import React from 'react'
import qs from 'qs';
import { useParams } from 'next/navigation';
import Image from 'next/image'
import { formatDate} from '@/utils'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'


const page = async() => {
    let notfound = false;
    const slug = useParams();
    const queryString = qs.stringify({
        populate:["image",'author.avatar'],
        filters:{
            slug:{
                $eq:slug.slug
            }
        }
    })
    const{data:article}:AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticleBySlug(queryString);
    if(article.data.length === 0){
        notfound = true;
    }
    const narticle:any = await serialize(article.data[0].attributes.body,{
        mdxOptions:{
            development:process.env.NODE_ENV==='development',
        }
    });
  return (
    <div>
        <div className='my-12 grid lg:grid-cols-3 gap-12 singleArticle'>
            <div className='col-span-2 '>
                <h1 className='text-2xl font-bold py-2 text-white'>{article.data[0].attributes.Title}</h1>
                <div className='flex items-center my-4'>
                    <div className='rounded-lg overflow-hidden flex items-center justify-center mr-2'>
                        
                    <Image alt='userimg' 
                        height={25}
                        width={25} 
                        src={`${article.data[0].attributes.author.data.attributes.avatar.data[0].attributes.formats.thumbnail.url}`
                        }/>
 
                    </div>
                    <span className='text-sm font-bold text-gray-50'>
                    {article.data[0].attributes.author.data.attributes.firstname}{' '}
                    {article.data[0].attributes.author.data.attributes.lastname} on &nbsp;

                    <span className='text-gray-400 '>
                        {formatDate(article.data[0].attributes.createdAt)}
                    </span>
                    </span>
                </div>
                <div className='text-white leading-8 text-justify'>
                    <img 
                    className='my-12 mb-6 w-auto'
                    src={`${article.data[0].attributes.image.data.attributes.url}`} alt="mainimg" />
                    <MDXRemote 
                            {...narticle}
                            components={{}}
                        />
                </div>
            </div>
            
            <div> 
            <div className="sticky top-0">
                    <h2 className="font-bold text-gray-50 text-lg">
                        Signup to our newsletter
                    </h2>
                    <p className="mt-4 text-gray-50">
                        Get the latest article on all things data delivered
                        straight to your inbox
                    </p>
                    <input
                        className="border bg-gray-900 w-full p-2 pl-3 my-6 outline-primary text-white"
                        type="email"
                        placeholder="Your work email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    />
                    <button className="border-2 border-primary rounded py-1 px-6 text-primary font-bold active:text-primaryDark">
                        Subscribe
                    </button>
                    <hr className="my-6 border-gray-100" />
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <span className="text-gray-50 mr-2">Share</span>
                        <a className="text-gray-500">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24">
                                <rect
                                    width="20"
                                    height="20"
                                    x="2"
                                    y="2"
                                    rx="5"
                                    ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="0"
                                className="w-5 h-5"
                                viewBox="0 0 24 24">
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle
                                    cx="4"
                                    cy="4"
                                    r="2"
                                    stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                    <hr className="my-6 border-gray-100" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default page