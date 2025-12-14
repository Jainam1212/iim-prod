import {iimInfo} from '../database/schema.ts'
import data from "../database/data.json"

export const fetchMoreInfo = async(codeQuery:string)=>{
    console.log(data);
    // const searchData = data[type]
    const res = await iimInfo.find({code:codeQuery})
    return res
}