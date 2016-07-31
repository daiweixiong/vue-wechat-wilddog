# Component
公用组件定义

## **规范**
Component创建遵循的规则，类似React里面的组件定义规范。
通过`vuex g componet <CompName>` 创建的组件会自动在`src/components/`目录下生成一个.vue文件，同时会在
`src/styles/components/`目录下生成一个.css文件。

**命名规则 **
* .vue 命名规范为 `pascal`命名
```
// 示例
FFiled
Tables
TextBox
...
```

* .css 为`dashes`命名
```
// 示例
f-filed.css
tables.css
text-box.css
...
```

## **定义**
组件定义采用vue官方中`构建大型应用`中[单文件组件](http://cn.vuejs.org/guide/application.html#单文件组件)的定义方式。
我们剥离style是为了方便样式统一管理
```
<template>
  <div :class="['v-tables', class]">
    <h1>
      表格组件定义
    </h1>
	<table></table>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-tables',
  props: {
    class: {
      type: String,
      default: ''
    }
  }
}
</script>

<style src="styles/components/v-tables"></style>
```

## **使用**

```
<template>
	<div>
		<v-tables></v-tables>
	</div>
</template>
<script>
	import vTables from '../../components/Tables'

	export default {
		name: 'v-layout',
		components: {
			vTables,
		}
	}
</script>
```
