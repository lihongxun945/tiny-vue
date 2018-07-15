# tiny-vue

## What is this?

[中文版文档](./README.cn.md)

There is several detailed articles show how to write tiny-vue (in Chinese) [Write tiny-vue in 8 hours](https://github.com/lihongxun945/myblog/labels/vue1.0%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90)

A dead simple implement of vuejs, use to learn the source code of vuejs (v1.0.28).
Vuejs source code is very elegant, but it's difficult for beginner to understand. You can try to learn this project, it will be very helpful to understand vuejs.
Most of lifecycle, modular and function name is same to vuejs, but all the code is rewrited (except `dep.js` and very few function implements)

There are two main part:

1. state: reactive state, listen to state's change, State -> Observer -> Dep -> Watcher
2. directive: support directive, you can add your own directives: Compile -> Directive -> directives

You can use it ike this:

```
<div id="a">
	<input v-model="message" />
	<button v-on:click="increase">Increase</button>
	<p v-text="message"></p>
</div>
<script>
	new Vue({
		el: "#a",
		data: {
			message: 1
		},
		methods: {
			increase () {
				this.message += 1
			}
		}
	})
</script>
```

## Supported Features

1. reactive data.
2. interal directives: `v-on:click`, `v-text`, `v-model`
3. two-way data binding
4. more feature is coming

## implements

![1](./imgs/1.png)
![2](./imgs/2.png)
![3](./imgs/3.png)
![4](./imgs/4.png)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
