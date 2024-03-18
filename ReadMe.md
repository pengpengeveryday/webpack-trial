## html应用webpack打包编译的js文件-多js文件

### 将本文件夹挂载到服务器上
```
python -m http.server 9000
```

### 代码差异点

#### 目录结构
```html
$ tree
.
|-- ReadMe.md
|-- dist            <!-- 输出目录 -->
|   `-- main.js
|-- index.html
|-- package.json
|-- src
|   |-- add.js      <!-- 新增文件 -->
|   `-- index.js
`-- webpack.config.js

2 directories, 7 files


```
#### 源码差异点
```diff
 
diff --git a/src/add.js b/src/add.js
new file mode 100644
index 0000000..c8a34e8
--- /dev/null
+++ b/src/add.js
@@ -0,0 +1,3 @@
+const add = (a, b) => { return a + b };
+
+export { add };
\ No newline at end of file
diff --git a/src/index.js b/src/index.js
index f62d04f..220c478 100644
--- a/src/index.js
+++ b/src/index.js
@@ -1,6 +1,10 @@
+import {add} from "./add";
+
 function component() {
   const element = document.createElement('div');
-  element.innerHTML = 'Hello webpack in bundle'
+  const [a, b] = [10 , 20];
+  const result = add(a, b);
+  element.innerHTML = `Hello webpack in bundle, ${a} + ${b} = ${result}`;
   return element;
 }
 
diff --git a/webpack.config.js b/webpack.config.js
index 7feef13..d0c78c2 100644
--- a/webpack.config.js
+++ b/webpack.config.js
@@ -6,4 +6,5 @@ module.exports = {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
   },
+  mode: 'development',
 };
\ No newline at end of file
```