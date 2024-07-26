import { chromium } from 'playwright';

//below headless controls whether the website pops up
async function submitForm() {
    const browser = await chromium.launch({ headless: false });
  
    const context = await browser.newContext();
    const page = await context.newPage();
  
    
    await page.goto('https://tally.so/r/3qP8lO'); // Replace with the actual URL of the form

  

  
    console.log("accessing fields")
    const textField = page.locator('#dd2bd7d8-4274-42b8-b7b7-6a3bc527ca47');
    const fileInput = page.locator('input[type="file"][aria-label="Untitled file upload field"]');

    await textField.fill('John');

    const filePath = 'dates23-24confirmed.pdf';
    await fileInput.setInputFiles(filePath);

    //wait for 10 seconds for the file to be uploaded
    await page.waitForTimeout(10000);

    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();
    await page.waitForNavigation()

    await browser.close();

    console.log("submitted")

};

submitForm();