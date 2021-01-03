const axios = require('axios'),
cheerio = require('cheerio');

module.exports = {
    yengec: async function() {
        const response = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/yengec-burcu-gunluk-yorumu.html');
        const $ = cheerio.load(response.data);
        return $('#contextual > div > p:nth-child(1)').text();
    },
    akrep: async function() {
        const response = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/akrep-burcu-gunluk-yorumu.html');
        const $ = cheerio.load(response.data);
        return $('#contextual > div > p:nth-child(1)').text();
    },
    koc: async function() {
        const response = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/koc-burcu-gunluk-yorumu.html');
        const $ = cheerio.load(response.data);
        return $('#contextual > div > p:nth-child(1)').text();
    },
    kova: async function() {
        const response = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/kova-burcu-gunluk-yorumu.html');
        const $ = cheerio.load(response.data);
        return $('#contextual > div > p:nth-child(1)').text();
    },
    oglak: async function() {
        const response = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/oglak-burcu-gunluk-yorumu.html');
        const $ = cheerio.load(response.data);
        return $('#contextual > div > p:nth-child(1)').text();
    },
    ikizler: async function() {
        const response = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/ikizler-burcu-gunluk-yorumu.html');
        const $ = cheerio.load(response.data);
        return $('#contextual > div > p:nth-child(1)').text();
    },
    yay: async function() {
        const response = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/yay-burcu-gunluk-yorumu.html');
        const $ = cheerio.load(response.data);
        return $('#contextual > div > p:nth-child(1)').text();
    },
    balik: async function() {
        const response = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/balik-burcu-gunluk-yorumu.html');
        const $ = cheerio.load(response.data);
        return $('#contextual > div > p:nth-child(1)').text();
    },
    terazi: async function() {
        const response = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/terazi-burcu-gunluk-yorumu.html');
        const $ = cheerio.load(response.data);
        return $('#contextual > div > p:nth-child(1)').text();
    },
    boga: async function() {
        const response = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/boga-burcu-gunluk-yorumu.html');
        const $ = cheerio.load(response.data);
        return $('#contextual > div > p:nth-child(1)').text();
    },
    basak: async function() {
        const response = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/basak-burcu-gunluk-yorumu.html');
        const $ = cheerio.load(response.data);
        return $('#contextual > div > p:nth-child(1)').text();
    },
    aslan: async function() {
        const response = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/aslan-burcu-gunluk-yorumu.html');
        const $ = cheerio.load(response.data);
        return $('#contextual > div > p:nth-child(1)').text();
    }
}
