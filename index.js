const { Client } = require("@notionhq/client")
const dotenv = require("dotenv")
const axios = require('axios').default;

dotenv.config()
const notion = new Client({ auth: process.env.NOTION_KEY })
const notionPageId = process.env.NOTION_PAGE_ID

const bingUrlDaily = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US"


const getBingImageUrl = async () => {
    const imageUrl = await axios.get(bingUrlDaily).then(response => {
        const { data } = response
        return data.images[0].url
    })
    return `https://www.bing.com${imageUrl}`
}

function updateNotionImageDaily(bingImage) {
    notion.pages.update({
        page_id: notionPageId,
        cover: {
                "external": {
                    url: bingImage,
                },
                "type": "external",
              },
    })
    .then(() => {
        console.log("\n✅ Notion database is synced with Bing.")
    })
    .catch((error) => {
        console.log(error)
    })
}

getBingImageUrl().then((bingImage) => {
    updateNotionImageDaily(bingImage)
})