
import { FilterQuery } from "mongoose";

export class QueryBuilderService {
    private _perPage: number;
    
    constructor(){
        this._perPage = 20
    }
    extractFind(){
        return {msg:'Okay'}
    }
    getFindOptions(rawQuery:FilterQuery<any>){
        const {
            page=null,
            perPage=null
            } = rawQuery;
        const mongooseLimit      = this.extractLimit(perPage)
        const mongooseSkip       = this.extractSkip(page,perPage)
        return {
            options   :{
                ...mongooseLimit,
                ...mongooseSkip
            }
        }
    }

    extractSkip(page:number|null,perPage:number|null){
        const limit = perPage ?? this._perPage
        if(page && page>1) {
            return {
                skip:(page-1)*limit
            }
        }
    }

    extractLimit(perPage:number){
        const limit = perPage ?? this._perPage
        return {
            limit:Number(limit)
        }
    }


}