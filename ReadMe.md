## 构建最简单的web页面演示

### 将本文件夹挂载到服务器上
```
python -m http.server 9000
```

### 代码差异点

```diff

---
 index.html   | 10 ++++++++++
 package.json |  2 +-
 src/index.js |  7 +++++++
 4 files changed, 24 insertions(+), 10 deletions(-)
 create mode 100644 index.html
 create mode 100644 src/index.js

diff --git a/index.html b/index.html
new file mode 100644
index 0000000..5edd372
--- /dev/null
+++ b/index.html
@@ -0,0 +1,10 @@
+<!DOCTYPE html>
+<html>
+<head>
+    <meta charset="utf-8" />
+    <title>webpack-trial</title>
+</head>
+<body>
+<script src="./src/index.js"></script>
+</body>
+</html>
\ No newline at end of file
diff --git a/package.json b/package.json
index 7d4db35..678ce18 100644
--- a/package.json
+++ b/package.json
@@ -2,7 +2,7 @@
   "name": "webpack",
   "version": "1.0.0",
   "description": "```\r npm init -y\r ```",
-  "main": "index.js",
+  "private": true,
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   },
diff --git a/src/index.js b/src/index.js
new file mode 100644
index 0000000..00cdcc0
--- /dev/null
+++ b/src/index.js
@@ -0,0 +1,7 @@
+function component() {
+  const element = document.createElement('div');
+  element.innerHTML = 'Hello webpack'
+  return element;
+}
+
+document.body.appendChild(component());
\ No newline at end of file
-- 
2.29.0.windows.1
```