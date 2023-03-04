---
template: QuizTemplate
path: /quiz/practical-git-for-beginners
title: Practical Git For Beginners Quiz
description: >-
  Test your git knowledge using this quiz!
published: false
questions:
  - label: "Select the false statement from the below:"
    answer: 0
    options:
      - "Github is an alternative for Git"
      - "Git is a version control system"
      - "You can use git to collaborate effectively with other developers"
      - "Github is a cloud hosting service for software projects"
    type: mcq
  - label: "git -v tells you the last released version of your project's repository."
    answer: 0
    type: boolean
  - label: "What happens when you do git init inside a directory?"
    answer: 2
    options:
      - "It prints the version of git installed in your machine"
      - "It creates a hidden .git_info folder inside the directory"
      - "It initialises the directory as a git repository"
      - "It uploads the directory to your GitHub account"
    type: mcq
  - label: "Which one of the following commands will add all the files in the working directory?"
    answer: 2
    options:
      - "git add_all"
      - "git add -all"
      - "git add -A"
      - "git add -a"
    type: mcq
  - label: "It's optional to add a description for a commit."
    answer: 0
    type: boolean
  - label: Select the command that will display the commit history in reverse chronological order.
    answer: 3
    type: mcq
    options:
      - git history
      - "git commit -h"
      - "git commit --log"
      - git log
  - label: Select the correct statement from the following.
    answer: 2
    type: mcq
    options:
      - git diff is used to view the state of the staging area
      - git status is used to view the changes between commits
      - Only the changes added in the staging area are included in the commit
      - git diff and git status can be used interchangeably
  - label: How would you unstage all the changes?
    answer: 0
    type: mcq
    options:
      - git reset
      - git restore
      - git checkout
      - "git unstage ."
  - label: "`git branch -b new` will create a new branch and switch to it"
    type: boolean
    answer: 0
  - label: "You can use `git switch dev` or `git checkout dev` to switch to the `dev` branch"
    type: boolean
    answer: 1
  - label: "`git checkout -b new` will create a new branch and switch to it"
    type: boolean
    answer: 1
  - label: Select the incorrect statement from below
    type: mcq
    answer: 1
    options:
      - "Remotes refer to different versions of your git repository on different or same machines"
      - Remotes are another name for branches
      - When you create a repository on GitHub, it automatically adds a remote called origin
      - You can sync changes between different changes using `git push` and `git pull`
  - label: "`git pull` does two things: `git fetch` and `git merge`"
    type: boolean
    answer: 1
  - label: You can merge changes from one branch to another using `git merge`
    type: boolean
    answer: 1
  - label: "Select the correct statement from below:"
    type: mcq
    answer: 3
    options:
      - You should always push/pull changes to/from the main branch instead of creating branches as a best practice to avoid confusion
      - Branches should only be used when you want to release two versions of a project
      - You can only create branches from the main branch
      - Different programs should branch from the main branch and work on a separate branch to avoid pushing dangerous changes to the main branch
  - label: You should use Pull Requests as a best practice to merge your branches to the main branch
    type: boolean
    answer: 1
  - label: You can either download a remote repository from GitHub or clone it, it's the same operation.
    type: boolean
    answer: 0
  - label: Git reset, restore and revert are the same.
    type: boolean
    answer: 0
---