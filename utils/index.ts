import { IArticle } from "@/types";
import { serialize } from "next-mdx-remote/serialize";

export const formatDate = (dateString: string):string =>{
    const date = new Date(dateString).toLocaleDateString('en-US',{
        weekday:'short',
        year:'numeric',
        month:'short',
        day:'numeric'
    })
    return date;
}

export const debounce = (fn:(query:string)=>void,timeout=300)=>{
    let timer:NodeJS.Timeout;

    const debfunc=(...args:any)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this,args)
        },timeout)
    }

    return debfunc;
}

export const serializeMd = async(item: IArticle)=>{
    const body = (await serialize(item.attributes.body as string))
    return {
        ...item,
        attributes:{
            ...item.attributes,
            body,
        }
    }
}