import puppeteer from "puppeteer";

export const generatePDF = async (req, res) => {
  try {
    const { html } = req.body;

    const browser = await puppeteer.launch({
      headless: "new",
    });

    const page = await browser.newPage();

   await page.setContent(html, { waitUntil: "domcontentloaded" });

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=resume.pdf",
    });

    res.send(pdf);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "PDF generation failed" });
  }
};
