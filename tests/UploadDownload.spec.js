const excel = require('exceljs');
const { test,expect } = require('@playwright/test');

async function writeExcel(path,fruitName,ReplaceName,change) {
    
    
    const workbook = new excel.Workbook();
    await workbook.xlsx.readFile(path);
    const sheet = workbook.getWorksheet("Sheet1");
    
   const Number=await readExcel(sheet,fruitName);
    const cell=sheet.getCell(Number.row,Number.column+change.colChange);
        cell.value=ReplaceName;
        await workbook.xlsx.writeFile(path);
}
async function readExcel(sheet,fruitName)
{
    let Number = { row: -1, column: -1 };
        sheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, columnNumber) => {
            if (cell.value === fruitName) {
                Number.row = rowNumber;
                Number.column = columnNumber;
            }
        })
    })
    return Number;
}

test("download excel from google",async({page})=>
{
    const updatedValue='400';
    const searchText="Apple";
const path="C:/Users/Soft suave/Downloads/download.xlsx";
await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
const download= page.waitForEvent('download');
await page.locator("#downloadButton").click();
await download;
writeExcel(path,searchText,updatedValue,{rowChange:0,colChange:2});
await page.locator("#fileinput").click();
await page.locator("#fileinput").setInputFiles(path);
const textValue=page.getByText(searchText);
const desiredRow=await page.getByRole("row").filter({has:textValue});
expect(desiredRow.locator("#cell-4-undefined")).toHaveText(updatedValue);
});