## html应用webpack打包编译的js文件

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
|-- dist
|   `-- main.js
|-- index.html
|-- package.json
|-- src
|   `-- index.js
`-- webpack.config.js <!-- 新增 -->

2 directories, 6 files


```
#### 源码差异点
```diff
 
diff --git a/index.html b/index.html
index 5edd372..bc312c7 100644
--- a/index.html
+++ b/index.html
@@ -5,6 +5,6 @@
     <title>webpack-trial</title>
 </head>
 <body>
-<script src="./src/index.js"></script>
+<script src="./dist/main.js"></script>
 </body>
 </html>
\ No newline at end of file
diff --git a/package.json b/package.json
index 678ce18..ac885d0 100644
--- a/package.json
+++ b/package.json
@@ -4,7 +4,8 @@
   "description": "```\r npm init -y\r ```",
   "private": true,
   "scripts": {
-    "test": "echo \"Error: no test specified\" && exit 1"
+    "test": "echo \"Error: no test specified\" && exit 1",
+    "build": "webpack"
   },
   "keywords": [],
   "author": "",
diff --git a/src/index.js b/src/index.js
index 00cdcc0..f62d04f 100644
--- a/src/index.js
+++ b/src/index.js
@@ -1,6 +1,6 @@
 function component() {
   const element = document.createElement('div');
-  element.innerHTML = 'Hello webpack'
+  element.innerHTML = 'Hello webpack in bundle'
   return element;
 }
 
diff --git a/webpack.config.js b/webpack.config.js
new file mode 100644
index 0000000..7feef13
--- /dev/null
+++ b/webpack.config.js
@@ -0,0 +1,9 @@
+const path = require('path');
+
+module.exports = {
+  entry: './src/index.js',
+  output: {
+    filename: 'main.js',
+    path: path.resolve(__dirname, 'dist'),
+  },
+};
\ No newline at end of file
```