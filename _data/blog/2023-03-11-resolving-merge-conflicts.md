---
template: BlogPost
path: /blog/resolving-merge-conflicts
date: 2023-03-11T06:08:33.275Z
title: Resolving Merge Conflicts
tags:
  - git
  - beginners
featured: false
draft: false
travel: false
author: Urvashi
thumbnail: /assets/getting-started-with-github.png
---

# What are merge conflicts?

While git is intelligent enough to merge changes from one branch to another, sometimes it may get into a confusing situation where it doesn't know what changes to merge and what to discard.

Such situations arise when both the branches have changes made to the exact lines of code and git cannot figure out alone what changes to pick for the merge.
This is known as a merge conflict.

# Resolving Conflicts

Imagine, you have two branches: `main` and `dev`.
You made some changes on line number 3 in the `README.md` file on `dev`.

```md
My first commit
My second commit
My third commit
```

Someone else also made some changes in the exact line and in the exact file on `main`.

```md
My first commit
My second commit
My fourth commit
```

When you try to merge `main` into `dev` or vice-verca, you'll come across this error message:

```bash
> git merge main
Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result.
```

If you open the file, you'll see the conflicts marked like this:

```md
My first commit
My second commit
<<<<<<< HEAD
My third commit
=======
My fourth commit
>>>>>>> main
```

To resolve the conflict, you must edit the file to remove the conflict markers and choose the final changes.
You can also keep both of the changes if you wish to:

```md
My first commit
My second commit
My third commit
My fourth commit
```

Then add these changes to the staging area and continue the merge.

```bash
> git add README.md
> git merge --continue
```

To avoid large merge conflicts, it's advised to regularly keep updating your development branch with the main branch.
