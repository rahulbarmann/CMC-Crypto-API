const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

async function getPriceFeed(){
    try{
        const siteUrl = 'https://coinmarketcap.com/new/'

        const fs = require('fs');

        const { data } = await axios({
            method: 'GET',
            url: siteUrl,
        })

        const $ = cheerio.load(data)
        const elmSelector = '#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.h7vnx2-1.bFzXgL > table > tbody > tr'

        const keys = [
            'rank',
            'name',
            'price',
            '1h',
            '24h',
            'marketCap',
            'volume',
            'blockChain',
            'added'
        ]
        const coinArr = []

        $(elmSelector).each((parentIdx, parentElem) => {

            let keyIdx = 0
            const coinObj = {}

            if (parentIdx <= 9){
                $(parentElem).children().each((childIdx, childElem) => {
                    let tdValue = $(childElem).text()

                    if (keyIdx === 1 || keyIdx === 9){
                        tdValue = $('p:first-child', $(childElem).html()).text()
                    }

                    if (tdValue){
                        coinObj[keys[keyIdx]] = tdValue

                        keyIdx++
                    }
                })
                coinArr.push(coinObj)
            }
        })
        let gae = JSON.stringify(coinArr);
        fs.writeFileSync('Obj.json', gae);
    }catch(err){
        console.error(err)
    }
}

getPriceFeed();