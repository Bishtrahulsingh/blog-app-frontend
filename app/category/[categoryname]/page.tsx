"use client"
import Tabs from '@/components/Tabs';
import { fetchArticles, fetchCategories } from '@/http';
import { IArticle, ICategory, ICollectionResponse, IQueryOptions } from '@/types';
import { AxiosResponse } from 'axios';
import Head from 'next/head';
import React from 'react';
import qs from 'qs';
import { useParams, useSearchParams } from 'next/navigation';
import ArticleList from '@/components/ArticleList';
import Pagination from '@/components/Pagination';


const Categoryname =async () => {
  const searchparam = useSearchParams().get('search')|| ""; 
  let query:number = Number(useSearchParams().get('page'));
  const pathname = useParams();
  const options:Partial<IQueryOptions> = {
    populate:['author.avatar'],
    sort: ['id:desc'],
    filters:{
      category:{
        slug: pathname.categoryname,
      },
    },
    pagination:{
      page:query?query:1,
      pageSize:8
  }
  }
  if(searchparam){
    options.filters={
        ...options.filters,
        Title:{
            $containsi:searchparam,
        }
    } 
  } 

  const queryString = qs.stringify(options);
  const {data:categories}:AxiosResponse<ICollectionResponse<ICategory[]>> =await fetchCategories();
  const {data:articles}:AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticles(queryString);
  const {page,pageCount} = articles.meta.pagination;
  
  const formattedCategory=()=>{
    return "test";
  }
  return (
    <div>
      <Tabs categories={categories.data}/>
      <ArticleList articles={articles.data}/>
      <Pagination page={page} pagecount={pageCount} redirectUrl={pathname.categoryname} searchparam={searchparam}/>
    </div>
  )
}

export default Categoryname