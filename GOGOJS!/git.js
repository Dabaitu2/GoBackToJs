/**
 *    Created by tomokokawase
 *    On 2018/5/24
 *    阿弥陀佛，没有bug!
 */
// git 多人协作

/** 创建git，并首次推送ReadMe, ShortName 用来代替远程库的全称
 *  -> git init
 *  -> git add README.md
 *  -> git commit -m "balabala"
 *  -> git remote add [ShortName] git@github.com/yourAccount/yourProject.git
 *  -> git push -u [name] master
 */

/** 创建本地分支, 并完成正常add和commit, 推送到远程分支(如果有)
 *  -> git checkout -b [branchName]
 *  -> git add [file1] [file2] ...
 *  -> git commit -m "balabala"
 *  -> git push -u [name] [branchName]
 */

/** 拉取远程分支的内容(已经remote add 的情况下)
 *  -> git pull [branchName]
 *
 *  合并分支到主分支
 *  -> git merge [branchName]
 *
 *  恢复到上一次commit，撤销本次commit的内容(非常危险)
 *  -> git checkout
 *
 *  显示当前文件和上一次commit文件的差异
 *  -> git diff
 */

function hello() {
    console.log("hello");
}