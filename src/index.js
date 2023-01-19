class API {
  constructor(url, method = 'GET') {
    this.url = url;
    this.method = method;
    #secure = url.startsWith("https") ? true : false;
  }
  isSecure() {
    return this.#secure;
  }
  updateURL(newUrl) {
    this.url = newUrl;
    this.#secure = newUrl.startsWith("https") ? true : false;
  }
}

module.exports = { API }
