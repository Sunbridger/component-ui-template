## 快速上手

本节将介绍如何在项目中使用 test-sdk

### 引入

你可以引入整个 test-sdk，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 test-sdk

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import VueComponent from '@souche-ui/test-sdk';
import '@souche-ui/test-sdk/lib/styles/index.css';
import App from './App.vue';

Vue.use(VueComponent);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 test-sdk 的引入。需要注意的是，样式文件需要单独引入。

### 开始使用

至此，一个基于 Vue 和 test-sdk 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
