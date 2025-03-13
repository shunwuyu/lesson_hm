假设你在开发一个新功能， 不太方便添加到仓库中， 但是一个main 紧急的bug 需要去完成

- feature1 
  a.txt
  b.txt 
  git add .
  git commit -m ''

- main
  停下 - > fixed bug 

- git stash
  暂时保存代码
- git stash list  
- git  checkout main
  。。。。。
- git stash pop 