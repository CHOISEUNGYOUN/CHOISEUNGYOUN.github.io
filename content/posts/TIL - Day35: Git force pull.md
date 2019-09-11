---
title: "TIL - Day35: Git force pull"
date: "2019-09-02T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL - Day35: Git force pull/"
category: "TIL"
tags:
  - "Git"
  - "Force pull"
description: "How to pull the latest version from a master branch"
---
Whenever you are doing your own projects with others, you might face a problem:
```
$ git pull 
remote: Counting objects: 5, done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 5 (delta 3), reused 0 (delta 0)
Unpacking objects: 100% (5/5), done.
From bitbucket.org:my-team/my-repository
   273bd1a..ca527ec  master       -> origin/master
Auto-merging index.php
CONFLICT (content): Merge conflict in index.php
Automatic merge failed; fix conflicts and then commit the result.
```
It is such an annoying thing when you try to update it. The reason why it happens is whenever you make a revision on the code, the git recognizes it is different from the version in the master.
If it is a push case, that is fine, because we have `-f push`! Then, you simply think: "there must be force pull as well!" __No, there is no such thing.__ Why? This is because `pull` command is just a function containing 2 features: `fetch` and `merge`. We should get to know those 2 things so as to `git pull --force`! 

### Steps
`git fetch` updates the remote tracking branch. and `git merge FETCH_HEAD` is the merge of the remote tracking branch into the local branch.
However, we do not use `git merge` for conducting `git pull --force`. We use `git reset --hard origin/master` instead. It is very dangerous, but sometimes it is useful to make it in sync.
The reason is, the branch will go back to the latest commit from the master. It means that your code being ameneded will go away as you do. That is why you need to think long and hard before doing that.

Anyway, the code to make it in sync is as follows:
```
git fetch --all
git reset --hard origin/master
git pull origin master
```

Just try when you do not make any revision, just want to pull the latest version of the master!!

*Reference: [P vladimirtsyupko/gist:10964772](https://gist.github.com/vladimirtsyupko/10964772)</br> [WWW Creators - How to force “git pull” to overwrite a local branch?](http://www-creators.com/en/archives/1687)</br>