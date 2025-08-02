import {iimInfo} from '../database/schema'

export const fetchMoreInfo = async(codeQuery:string)=>{
    const res = await iimInfo.find({code:codeQuery})
    return res
}