const TinyURL = require("tinyurl");

const shortenURL = async (url) => {
  return await new Promise((res, rej) =>
    TinyURL.shorten(url, (response, erorr) =>
      response ? res(response) : rej(erorr)
    )
  );
};

module.exports = shortenURL;