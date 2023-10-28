---
layout: post
title: Creating New site in Jekyll
tags: [site, tutorial, guide , blog]
---

# Documentation for Creating New Sites on Jekyll

When creating a new post, remember not to set the date beyond the current date. To create a new post, follow this format: `YYYY-MM-DD-TITLE-OF-YOUR-PROJECT.md`.

## Using the Command Line

To create a new post, use the following command:

```bash
touch _posts/2023-11-01-my-new-post.md
```
## Running the Jekyll Server

To start the Jekyll development server, run this command:

```bash
jekyll serve
```
After running this command, you can open a web browser and navigate to http://localhost:4000 (or the custom URL if you've configured it differently) to see your site as it will appear when deployed.

Once you are satisfied with the local version, you can use jekyll build to generate the final version of your site, which can be deployed to a web server or hosting platform.

## Stage your changes

Stage your changes: Before you commit, you need to stage the changes you want to include in the commit. You can do this using the git add command. For example:

```bash
git add .
```

## Committing Changes to Git

After making changes, commit them to your Git repository with a meaningful message:

```bash
git commit -m "Add a descriptive message here"
```
## Pull the git 
```python
git pull origin master 
```
## Pushing Changes from Git

To retrieve updates from the remote Git repository, use this command:

```bash
git push origin master 
```
Now you're all set to review your new blog sites.

This revised version maintains a cohesive flow while providing instructions for creating Jekyll sites, creating posts, and managing Git repositories.
