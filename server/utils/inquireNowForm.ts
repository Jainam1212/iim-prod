import {iimInfo} from "../database/schema.ts";
export const inquireNow = async() => {
  const data = await iimInfo.find({title:'ACC Limited'});
  return data;
};
