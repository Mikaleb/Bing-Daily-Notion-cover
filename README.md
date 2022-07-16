<img src="example.png" />

# Daily Bing to Notion

[![GitHub license](https://img.shields.io/github/license/Mikaleb/README-Model)](https://github.com/Mikaleb/Bing-Daily-Notion-cover/blob/main/LICENSE.md) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
<a href='https://github.com/Mikaleb/Bing-Daily-Notion-cover'><img alt='Get it on GitHub' src='https://img.shields.io/badge/Github-Source-333?logo=github'/></a>

This Notion integration syncs the daily Bing image of the day for a specific repo to a Notion Page. 

## Running Locally

### 1. Setup your local project

```zsh
yarn
```

### 2. Set your environment variables in a `.env` file
```zsh
NOTION_KEY=<your-notion-api-key>
NOTION_PAGE_ID=<notion-page-id>
```

You can create your Notion API key [here](www.notion.com/my-integrations).

### 3. Run code 

```zsh
yarn start
```


### 4. Make it daily with a Cron

```zsh
0 0 7 1/1 * ? *
```