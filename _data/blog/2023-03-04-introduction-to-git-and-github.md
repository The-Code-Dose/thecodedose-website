---
template: BlogPost
path: /blog/introduction-to-git-and-github
date: 2023-03-04T11:37:27.544Z
title: Introduction to Git & GitHub
tags:
  - git
  - github
featured: false
draft: false
travel: false
metaDescription: ''
author: Urvashi
thumbnail: /assets/what_is_git.png
---

# What is Git?

“Git is a version control system.”

Let's take a deeper look into this statement and understand what a “version control system” means. Imagine this scenario:

You're building an application and you decide upon a green UI theme for the website.

![Green Theme](/assets/website_green.png)

After playing around for some time, you come up with a yellow UI theme that also looks nice! But now you want to go back and view the green theme to compare the two and pick the one that looks better.

![Yellow Theme](/assets/website_yellow.png)

If the changes are not too many, you might just consider undoing the changes to go back to the previous state of the application. But if the changes are too many and scattered around the codebase, then it makes sense to create a copy of the two versions as separate directories.

![Manual Version Control](/assets/manual_version_control.png)

But this solution doesn’t work if you have multiple themes or multiple versions of a project.

Creating such copies of the project is essentially you doing manual version control. This is where git comes in and makes the version controlling easier. Git helps you track any changes made to a set of files and helps you maintain different versions. It allows you to move back and forth between these versions or even work on different versions simultaneously. It also enables collaboration within a team of developers.

# What is GitHub?

Now that you understand what git is, let's understand how it's different from GitHub and how they work together.

Let’s go back to the previous scenario, suppose you wanted to share your website with a friend for advice or code review, what would you do? You might upload the code to a Google drive or Dropbox (or any other cloud based service) and share it with them. Well, that might work but there are better tools out there.

GitHub is a cloud-based version control system that allows developers to track changes to their code and manage it across multiple users and teams. It uses Git, a distributed version control system, as its underlying technology.

You can "push" your projects to GitHub and other developers can contribute to it.
They can also perform code reviews and leave feedback when necessary.

To learn more about Git & GitHub, you can read the next posts in this series:
- [Getting Started With Git](https://www.thecodedose.com/blog/getting-started-with-git)
- [Branching & Merging in Git](https://www.thecodedose.com/blog/branching-with-git)
- [Getting Started With Github](https://www.thecodedose.com/blog/getting-started-with-github)
- [Resolving Merge Conflicts](https://www.thecodedose.com/blog/resolving-merge-conflicts)
- [7 Free Git Resources For Beginners](https://www.thecodedose.com/blog/free-git-resources-for-beginners)
