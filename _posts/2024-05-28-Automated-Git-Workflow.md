---
layout: post
title: "Automated Git Workflow with Python"
tags: [python, blog, tech , informative]

date: 2024-05-28
---

This script takes care of all the git pull and push actions.
here is how this works

1. Pull changes from the remote repository
2. Add all changes to the staging area
3. Ask the user for a commit message
4. Commit changes
5. Push changes to the remote repository

# Steps to Perform This
To perform this, follow these steps.

# Install Python
Learn how to install Python on your device:[Python installation](https://realpython.com/installing-python/)

# Install GitPython
The following library is used for interacting with Git repositories, run the following code in your terminal.
```bash
pip3 install gitpython
```
# Script
after installing the necessary libraries, copy and paste the following code. Save it under your preferred name.
```bash
import os
from git import Repo, GitCommandError

# Define the path to your local Git repository
repo_path = '/Users/bimql/desktop/gitautomate' #example path

# Initialize the repository object
repo = Repo(repo_path)
git = repo.git

try:
    git.pull()
    git.add('--all')
    commit_message = input("Enter your commit message: ")
    git.commit('-m', commit_message)
    git.push()

    print("Successfully pushed changes to GitHub.")

except GitCommandError as e:
    print("An error occurred while executing a Git command:", e)

    # Handle conflicts
    if "conflict" in str(e).lower():
        print("Merge conflict detected. Please resolve conflicts manually.")

    # Handle other errors as needed

except Exception as e:
    print("An unexpected error occurred:", e)

```
# Configuration
In this code, you only need to change this part:
```bash
repo_path = 'the path to your local Git repository'
```
# Run the Program
After specifying the repository path, run the program. Your terminal will prompt you to enter your commit message. After committing your changes, the final message displayed will be: "Successfully pushed changes to GitHub."