import { IArticle } from '@/types'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { formatDate } from '@/utils';

interface IPropType{
  article: IArticle;
}
const Blogcard = ({ article }: IPropType) => {
  
  return (
    <div>
      <Link href={`/article/${article.attributes.slug}`}>
        <h1 className='text-white font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary text-lg'>
          {article.attributes.Title}
        </h1>
      </Link>
      <div className='flex items-center my-4'>
        <div className='rounded-lg overflow-hidden flex items-center justify-center mr-2'>

          <Image alt='userimg'  
            height={25} 
            width={25} 
            src={`${article.attributes.author.data.attributes.avatar.data[0].attributes.formats.thumbnail.url}`
            }/>

        </div>
        <span className='text-sm font-bold text-gray-100'>
          {article.attributes.author.data.attributes.firstname}{' '}
          {article.attributes.author.data.attributes.lastname} on &nbsp;

          <span className='text-gray-400 '>
            {formatDate(article.attributes.createdAt)}
          </span>
        </span>
      </div>
      <div className='text-gray-100 text-justify '>
      <Link href={`/article/${article.attributes.slug}`}>
        {article.attributes.shortDescription.slice(0,210)} ...
      </Link>
      </div>
    </div>
  )
}

export default Blogcard