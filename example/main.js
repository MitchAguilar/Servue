import Vue from 'vue'
import Servue from '../'
import fs from 'fs'

import example_render from './component'

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
      this.io.emit('tag', val);
      console.log("Object secondname has changed", val)
    }
  },
  methods: {
    '': (req, res, next) => {
      res.sendfile(__dirname + '/index.html');
    },
    profile: (req, res, next) => {
      //res.send("Hello, This is a profile");
      console.log("Renderer:", new Vue())
      renderer(example_render).then(html => {
        res.send(html);
      })
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

setInterval(() => {
  MyVue.secondname = 'Julian';
}, 800);