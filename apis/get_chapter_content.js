const axios = require('axios');

const READING_CHAPTER = (url) =>
    axios.get(url)
        .then((res) => {
            const cheerio = require('cheerio');
            const $ = cheerio.load(res.data);
            let data = [];
            $('.page-chapter img').map((index, item) => {
                let img = item.attribs['data-original'];
                if(img.includes('anhtoc')){
                    img = 'http:'+img;
                }else if(!img.includes('http')){
                    img = 'http:'+img;
                }
                data.push(img);
            });
            console.log(data)
            return data;
        }).catch(e => console.log('Error: '+e));

export default READING_CHAPTER;
