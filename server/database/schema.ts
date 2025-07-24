import mongoose from 'mongoose';

const moreInfoSchema = new mongoose.Schema({
  content: String,
  title: String
}, {
  collection: 'information'
});

const iim = new mongoose.Schema({
    content: String,
    title: String,
    images: Array,
    code: String
})

// 'MoreInfo' is model name; collection is forced to 'information'
export const moreInfo = mongoose.model('MoreInfo', moreInfoSchema);
export const iimInfo = mongoose.model('iimInfo',iim)