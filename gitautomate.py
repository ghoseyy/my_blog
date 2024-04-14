import os
from git import Repo, GitCommandError

# Define the path to your local Git repository
repo_path = '/Users/bimalchhetry/Documents/My_blog'

# Initialize the repository object
repo = Repo(repo_path)
git = repo.git

try:
    # Pull changes from the remote repository
    git.pull()

    # Add all changes to the staging area
    git.add('--all')

     # Ask user for commit message
    commit_message = input("Enter your commit message: ")

    # Commit changes
    git.commit('-m', commit_message)

    # Push changes to the remote repository
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
