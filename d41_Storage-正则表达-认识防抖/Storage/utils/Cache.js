class Cache {
  setCache(key, value) {
    if(!value) {
      throw new Error('value is required,value必须有值');
    }

    if(value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getCache(key) {
    const result = this.storage.getItem(key);
    if(result) {
      return JSON.parse(result);
    }
  }

  removeCache(key) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

  //目的:判断用户是sessionStorage还是localStorage
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage;
  }
}