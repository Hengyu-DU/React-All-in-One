## git交互：
* 本地代码、远程的代码（github网站）

1. 创建github远程仓库
2. 本地文件夹git初始化
```
$ git init
```
3. 推送到暂存库
```
$ git add .(或*)
```
或使用vscode的git中点 ＋ 号

4. 推动到远程库
```powershell
$ git commit -m 'description'
```
或使用vscode的git中的 √ 号，并输入描述

5. 删除git库，直接删除根目录下的 .git 文件

6. 连接在线远程库和本地的远程库
```powershell
$ git remote add origin git@github.com:Hengyu-DU/20210929.git
$ git push origin master -u
```

7. 查看远程仓库地址：
```powershell
$ git remote -v
```

移除远程仓库地址：
```
git remote rm origin
git remote add origin url
```