const request = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://tophub.today/n/KqndgxeLl9';

async function scrapeTopHub() {
    try {
        // 发送HTTP请求获取网页内容
        const html = await request(url);
        // 使用cheerio加载HTML
        const $ = cheerio.load(html);

        // 定义一个数组来存储热榜数据
        const topList = [];

        // 选择表格中的每一行（除了表头）
        $('table.table-bordered.table-hover.table-striped tr').each((index, element) => {
            if (index === 0) return; // 跳过表头

            // 获取排名、标题、热度和链接
            const rank = $(element).find('td:nth-child(1)').text().trim();
            const title = $(element).find('td:nth-child(2) a').text().trim();
            const heat = $(element).find('td:nth-child(3)').text().trim();
            const link = $(element).find('td:nth-child(2) a').attr('href');

            // 将数据添加到数组中
            topList.push({ rank, title, heat, link });
        });

        // 将数据写入CSV文件
        const csv = topList.map(item => `${item.rank},${item.title},${item.heat},${item.link}`).join('\n');
        fs.writeFileSync('tophub.csv', csv);

        console.log('数据已成功保存到tophub.csv文件中');
    } catch (error) {
        console.error('爬取数据时出错:', error);
    }
}

scrapeTopHub();