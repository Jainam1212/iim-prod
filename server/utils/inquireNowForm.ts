import {iimInfo} from "../database/schema";
export const inquireNow = async() => {
  const data = await iimInfo.find({title:'ACC Limited'});
  return data;
};
