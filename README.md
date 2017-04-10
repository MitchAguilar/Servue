# servue

> A Vue.js project

- [x] Routes
- [ ] Reactive Socket
- [ ] Render templates VueJS
- [ ] Reactive cookies
- [ ] Reactive localstorage

## Usage

```js
import Vue from 'vue'
import Servue from 'servue'

Vue.use(Servue);


var MyVue = new Vue({
  name: 'app',
  data: () => {
    return {
      secondname: 'David'
    }
  },
  watch: {
    secondname: function (val) {
      this.socket.emit('tag', this.val)
      console.log("Object secondname has changed", this.socket, this.$options.socket)
    }
  },
  methods: {
    profile: (req, res, next) => {
      res.send("Hello, This is a profile");
    },
    'get:token': (req, res, next) => {
      res.send("Token is" + Math.random());
    }
  }
});

const port = 3000;

MyVue.serve('localhost', port, function () {
  console.log(`Listening ${port}...`)
});
```

## Build Setup

``` bash
# install dependencies
npm install

# serve localhost:3000
npm run start
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


https://alligator.io/vuejs/creating-custom-plugins/
https://github.com/alexmingoia/koa-router