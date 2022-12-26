---
template: BlogPost
path: /blog/getting-started-with-git
date: 2022-01-21T19:13:29.218Z
title: Getting Started with Git for Beginners
tags:
  - git
  - beginners
featured: false
metaDescription: >-
  If you're a complete beginner to git, this post will help you understand what
  git is and what it is used for as well as help you get started with git in
  your projects.
draft: true
---
If you're a complete beginner to git, this post will help you understand what git is and what it is used for as well as help you get started with git in your projects.

# What is Git?
In simple terms, git is a tool that helps you manage software (or rather any set of files). It does so by:

- helping you maintain different versions of a software (a version control system)
- enabling collaboration within a distributed team of developers
- allowing you to work on different features in isolation
- and much more...

# Commits & Branches

It has a "commit" system wherein you wrap a set of changes in a single unit which is known as a commit. It maintains a chronological history of all the commits (and the related information such as the author, the exact changes made, when they were made etc) in a "commit log".

You can use this commit log to go back in history if things go wrong or if you accidentally made a bad commit and you want to go back to the last working state.

When you start a git project, all of your changes live on the `main` (or `master`) branch which acts as the backbone of your project. You can create another branch from this `main` branch and develop any
 features on the new branch and later merge this branch into the `main` when you're happy with the changes.

# Getting Started with Git

## Installing Git

You can check if `git` is already installed on your machine by running this command in the terminal:

`$ git --version`

If git is already installed, it will print the current version otherwise it will print that the command was not found.
You can follow the steps from [this website](https://git-scm.com/downloads) to download git on your machine.

## Basic Commands

Suppose you want to maintain different versions of your resume for different job roles. Instead of maintaining multiple copies of your resume, here's how you can use git to help you with that.

### Initialising a Git Repository

Before you can start using the magic of git, you will need to initialise your repository and enable git. A repository is nothing but just another word for a git enabled directory.

You need to create a new directory for your resume and `cd` into it and use the following command to initialise git:

`$ git init`

This will create a hidden `.git` folder in the same directory.

### Making a Commit

Run the following command to check the current status of the project:

```
$ git status
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	resume.txt

nothing added to commit but untracked files present (use "git add" to track)
```

This will show you any new files that you've added or deleted.
Notice that you are automatically on the `main` branch.
You need to add the `resume.txt` file to the "staging area" before creating a new commit. The staging area refers to the files or the changes that will be a part of the next commit.

`$ git add resume.txt`

You can now create a commit:

`$ git commit -m "Initial commit"`

Every commit has an associated message with it that describes what changes were made in that commit.

You can view the commit log using:

```
$ git log

commit 55a3d942cd1d28394a3330486095785797bf0c2e (HEAD -> main)
Author: ihsavru <your-email>
Date:   Fri Jan 21 23:43:17 2022 +0530

    Initial commit
```

You'll notice that each commit has an alphanumeric string attached with it. It is known as a commit hash or SHA that helps you uniquely identify a commit.

### Creating a Branch

Suppose you now want to customise your resume for a backend developer role by adding a backend related project to it.

You can create a new branch from the `main` branch and call it `backend-developer`.

`$ git branch -b backend-developer`

Now you can edit the resume in your editor and add the new project, you can use git to view the exact changes that you have made.

`$ git diff`

It will show you any lines that you deleted along with any new lines that you added.
You can package all of these changes and add them to a new commit along with a brief message that describes the changes that you made. This message will help you remember in the future what you changed.

You now have two versions of your resume: a general version in the `main` branch and a backend developer version in the `backend-developer` branch.

```
COMMIT LOG (main)
Initial commit

COMMIT LOG (backend-developer)
Added new backend project
Initial commit
```

You can easily switch between one branch to another as and when needed.

`$ git checkout <branch-name>`

You can also maintain further new versions of your resume for more job roles in different branches.

### Reverting Changes

Now suppose you felt like you want a completely different layout for your `backend-developer` resume. So you switched sections around, changed the fonts, and added some more projects to it.  After a few days, you realise that this new layout is not as impressive as you initially thought it was and you want to go back to the older version of your resume.
You can do this by resetting your project to the previous commit.

`$ git reset --hard <commit-hash>`

You can go back further down in history using the relevant commit hash from the commit log.

## Conclusion

As you just saw, by using git you didn't have to explicitly manage multiple copies of your resume with every change because git is already doing that for you in a much more sophisticated way.
