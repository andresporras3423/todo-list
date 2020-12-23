localStorage = {
    store:{},
    getItem(key){
        return this.store[key];
    },
    setItem(key, value)
    {
        this.store[key] = value;
    },
    clear(){
        this.store={};
    }
  }

  export default localStorage;