import { TDir } from '@/types'
import { useRouter } from 'next/navigation';
import qs from 'qs';
import React from 'react'

interface IPropType{
    page:number;
    pagecount:number;
    redirectUrl:string;
    searchparam:string;
}

interface IOptiontype{
    page:number,
    search?:string;
}

const Pagination = ({page,pagecount,redirectUrl = '/',searchparam}:IPropType) => {
    const router = useRouter();
    const isNextDisabled = ():boolean=>{
        return page>=pagecount;
    }
    const isPrevDisabled = (): boolean=>{
        return page<=1;
    }
    
    const handlePaginate= async (dir:TDir)=>{
        if(dir === 1 && isNextDisabled() ) return 
        if(dir ===-1 && isPrevDisabled()) return 
        const options:IOptiontype = {
            page: page + dir,
        }
        if(searchparam){
            options.search = searchparam;
        }
        const queryString = qs.stringify(options);
        router.push(`${redirectUrl}?${queryString}`)
        
    }
  return (
    <div className='flex justify-center mt-24'>
        <button  onClick={()=>handlePaginate(-1)} className={`${'bg-primary py-2 px-4 text-white w-24 rounded ml-4  hover:bg-primaryDark'} ${isPrevDisabled()?'disabled':''}`}>
            Previous
        </button>
        <button  onClick={()=>handlePaginate(1)} className={`${'bg-primary py-2 px-4 text-white w-24 rounded ml-4  hover:bg-primaryDark'} ${isNextDisabled()?'disabled':''}`}>
            Next
        </button>
    </div> 
  )
}

export default Pagination