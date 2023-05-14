# index.html
line01
async function fillForm() {
  const browser = await puppeteer.launch({ headless: false }); // 打开浏览器窗口
  const page = await browser.newPage(); // 打开新标签页

  const url = '輸入你的表單網址'; // 输入表单的网址
  await page.goto(url); // 前往表单页面

  // 填写文本字段
  await page.type('input[name="商品名稱"]', 'AI自動生成家中寵物貼圖（可自行上架LINE商店賺錢）');
  await page.type('input[name="產品狀態"]', '圖形（24張）');
  await page.type('input[name="價錢"]', '50元');
  await page.type('input[name="有無保固"]', '無');
  await page.type('input[name="面交地點"]', 'FB（請私訊需要的風格及相片）');

  // 填写单选单
  await page.type('input[name="您的line Id"]', '輸入你的line Id');
  await page.type('input[name="購買數量"]', '輸入購買數量');
  await page.type('input[name="購買金額"]', '輸入購買金額');
  await page.type('input[name="風格呈現"]', '輸入風格呈現');

  // 上传图片
  const filePath = '輸入圖片的檔案路徑';
  const fileInput = await page.$('input[type="file"]'); // 找到上传图片的input元素
  await fileInput.uploadFile(filePath); // 上传图片

  // 提交表单
  await page.click('input[type="submit"]');

  // 等待表单提交完成后，可以进一步处理结果页面

  // 关闭浏览器
  await browser.close();
}

fillForm();
