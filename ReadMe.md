## html应用webpack打包编译的js文件-多js文件
|-- dist            <!-- 输出目录 -->
|   |-- add.js      <!-- 新增文件 -->
`-- webpack.config.js
2 directories, 7 files
diff --git a/src/add.js b/src/add.js
new file mode 100644
index 0000000..c8a34e8
--- /dev/null
+++ b/src/add.js
@@ -0,0 +1,3 @@
+const add = (a, b) => { return a + b };
+
+export { add };