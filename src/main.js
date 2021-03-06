import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jsrender';
import '@css/main.less';
import { jQueryFn } from './core';
import Router from './router/router';

window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

// 注册 jQuery 函数
jQueryFn.register();
// 启动路由
new Router();
