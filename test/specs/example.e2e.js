describe("test", () => {
  it("run a large JS multiple times", async () => {
    await browser.url(`https://example.com`);

    const code = await getJquery()

    async function getJquery() {
      const url = "https://code.jquery.com/jquery-3.6.0.js";
      let data = ""

      return new Promise((resolve) => {
       const https = require("https")
        https.get(url, (res) => {
          res.on("data", (chunk) => {
            data += chunk;
          });
          res.on("end", () => {
            resolve(data);
          });
        });
      });
    }

    for (let i = 0; i < 30; i++) {
      await browser.execute(code)
      await browser.pause(300)
    }
  });
});
