import {MDXRemoteSerializeResult} from 'next-mdx-remote'

export interface ICategory{
    id:number;
    attributes:ICategoryAttribute; 
}
export interface IPagination{
    page:number;
    pagesize:number;
    pageCount:number;
    total:number;
} 

export interface IQueryOptions {
    filters: any;
    sort: any;
    populate: any;
    pagination: {
        page: number;
        pageSize: number;
    };
}

export interface IResourceMeta{
    pagination:IPagination;
}

export interface ICollectionResponse<T>{
    article: any;
    categories: ICategory;
    data:T;
    meta:IResourceMeta;
}

export interface ICategoryAttribute{
    Title:string;
    slug:string;
}
export interface IImageData{
    data: {
        attributes:{
            url:string;
            formats:{
                small:{
                    url:string;
                }
            }
        }
    }
}
export interface IAuthor{
    data:{
        attributes:{
            firstname:string;
            lastname:string;
            avatar:{
                data:[{
                    attributes:{
                        formats:{
                            thumbnail:{
                                url:string;
                            }
                        }
                    }
                }]
            }
        }
    }
}
export interface IArticlesAttribute{
    Title: string;
    body : string;
    slug : string;
    image : IImageData;
    createdAt:string;
    author: IAuthor;
    shortDescription:string
}
export interface IArticle{
    id:number;
    attributes:IArticlesAttribute;
}

export type TDir = 1|-1;