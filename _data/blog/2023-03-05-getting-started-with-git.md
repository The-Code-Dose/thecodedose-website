---
template: BlogPost
path: /blog/getting-started-with-git
date: 2023-03-05T11:37:27.544Z
title: Getting Started With Git
tags:
  - git
  - github
featured: false
draft: false
travel: false
metaDescription: ''
author: Urvashi
thumbnail: /assets/get_started_with_git.png
---

Git is a powerful tool for version control that allows developers to track changes made to their code over time.
If you don't understand what Git and GitHub are, start with this blog post first - [Introduction to Git & Github](https://www.thecodedose.com/blog/introduction-to-git-and-github)

In this post, I'll help you get started with working with Git and learn how to create your first git repository and create your first commit.

# What is a git repository?

Any directory with git initialised in it is called a git repository.

This just means that you've "switched on" git for a particular project.
This will tell git to track changes made within this project and allow you to use its features for project management and version controlling.

# Creating your first git repository

Here are the steps to create a git repository (also called a git repo):

1. Create a directory where you project's code will live.
2. Enter into that directory in the terminal using `cd <root_project>`
3. Initialise git using `git init`.

![Create a git repo](/assets/create_a_git_repo.webp)

`git init` creates a hidden `.git` directory in the root of your project.
You can check if this directory was created using `ls -a`.
The `.git` directory contains all the metadata and configuration information that git requires to manage your project's version control history.

# How does git "version control"?

Git has a "commit-based" system wherein you wrap a set of changes in a single unit which is known as a commit.
It maintains a chronological history of all the commits (and the related information such as the author, the exact changes made, when they were made etc) in a "commit log".

# Creating your first commit

![Lifecycle of a commit](/assets/commit_lifecycle.png)

Here are the steps to create a commit:

1. Create some changes in your project. For ex, create a new file, add some code, delete some lines etc.
2. Add the changes that will be included in the commit to the staging area.
3. Create the commit and add a description.

After you make the changes, you can check what files were changed using `git status`.

```
$ git status
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	README.md

nothing added to commit but untracked files present (use "git add" to track)
```

This will show you any new files that you've added or if you've deleted any files along with any changes made to existing files.
You need to add these changes to the "staging area" before creating a new commit. The staging area refers to the files or the changes that will be a part of the next commit.

`$ git add README.md` will add the changes made to `README.md` to the next commit.
You can now create a commit using:

`$ git commit -m "Initial commit"`

Every commit has an associated message with it that describes what changes were made in that commit.
You can also edit the commit message after you've already created a commit using `git commit --amend -m "updated desc"`.

You can view the commit history in reverse chronological order using:

```
$ git log

commit 55a3d942cd1d28394a3330486095785797bf0c2e (HEAD -> main)
Author: ihsavru <your-email>
Date:   Fri Jan 21 23:43:17 2022 +0530

    Initial commit
```

You'll notice that each commit has an alphanumeric string attached with it.
It is known as a commit hash or SHA that helps you uniquely identify a commit.

You can use this commit log to go back in history if things go wrong or if you accidentally made a bad commit and you want to go back to the last working state.

# When to create a commit?

Now that you know how to create a commit, you might be wondering when to create a commit?
Should you be creating a commit for every line of code?
Or should you be creating commits when you create a new version of the project?

To answer, you should create commits whenever you want to save progress.
You can create a commit when you add a new feature, or fix a bug etc.
However, you should also try to create meaningful commits that are "working".
Here are some best practices for commits:

- Commits should be atomic. This means that you should not commit code that doesn't compile or pass tests and if any commit is reverted (or removed), it should remove a change completely, without leaving any side effects.
- You should always write clear and descriptive commit messages. Start your commit message with verbs, such as "Add", "Fix", "Update", or "Remove". This makes it clear what action the commit is taking. You can also check out the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) standard for writing commit messages.
- Use the present tense for describing the change and the past tense for describing the original state of the code, for example, "Fix a bug" instead of "Fixed a bug".
- Keep your commits small and focused.
- Do not commit unrelated changes in a single commit.
