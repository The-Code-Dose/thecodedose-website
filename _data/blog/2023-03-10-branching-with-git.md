---
template: BlogPost
path: /blog/branching-with-git
date: 2023-03-10T01:08:33.275Z
title: Branching With Git
tags:
  - git
  - beginners
featured: false
draft: false
travel: false
author: Urvashi
thumbnail: /assets/branching-with-git.png
---

Here are the previous posts in the "Practical Git For Beginners" series.

- [Introduction to Git & Github](https://www.thecodedose.com/blog/introduction-to-git-and-github)
- [Getting Started With Git](https://www.thecodedose.com/blog/getting-started-with-git)

In the previous posts, you learnt about:
- What Git is
- What GitHub is
- How to create a git repository
- How to create a commit
- How to edit a commit message
- How to view the commit log
- How to reset the git history to a particular commit
- The best practices for creating a commit

In this post, you'll learn about the basics of branches in git.

# What is a git branch?

When you create a commit, you build a "linear" commit history.
Each new commit sits on top of the previous commit.
Suppose, you wanted to work on two simultaneous versions of the same project.
Maybe you wanted to work on a experimental feature but you didn't want to do it on the "main" branch.
Git allows you the branch off your history and create a new version of your project at any point in time.

In Git, a branch is essentially a snapshot of your codebase at a specific point in time. It is a pointer to a particular commit that serves as the base for creating new commits. Each branch can have its own set of changes and can be worked on independently of the other branches. This makes branching an important feature in Git as it enables developers to work on different features or versions of the codebase concurrently.

# Creating your first branch

The default branch of your project is called the "master" or "main" branch.
It acts as the backbone or the trunk of your project.
It's the source of truth.
You can create a branch using `git branch <branch-name>`.

```bash
git branch dev
```

This does not automatically take you to the new branch, to do that you can use  `git switch <branch-name>`.

```bash
> git switch dev
Switched to branch 'dev'
> git switch master
Switched to branch 'master'
```

You can also use `git checkout -b <branch-name>` to do what the above two commands did.
It creates a new branch and switches to it.

You can view the list of all the branches using `git branch -l`.

```bash
> git branch -l
  dev
* master
```

The active branch will be highlighted with an asterisk.

When you create a new commit on this branch, its history will diverge from the main branch.

![](/assets/creating-a-branch.jpeg)

You can continue working on the two branches in isolation.
The history of the two branches converge at the base of the commit where the branch was created from.

![](/assets/branching-log.png)

# Merging branches

Suppose after experimenting with the new feature, you decide that you want to keep it.
Once you have completed your work in a branch, you can merge it back into the main branch using the `git merge` command.

```bash
git switch main
git merge dev
```

This will combine the history of the two branches into the main branch.

![](/assets/git-merge.png)
