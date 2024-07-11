#!/bin/bash
 
# Fetch the tags and prune any deleted ones
git fetch --prune --prune-tags
git fetch --tags
 
# Get the highest version tag
LATEST_TAG=$(git tag | grep -o 'v[0-9]*\.[0-9]*\.[0-9]*' | sort -V | tail -n1)
 
# Default to v0.0.0 if no tags are found
if [ -z "$LATEST_TAG" ]; then
    LATEST_TAG="v0.0.0"
fi
 
echo "Dernier tag : $LATEST_TAG"
 
# Remove the 'v' and split the version numbers
IFS='.' read -ra ADDR <<< "${LATEST_TAG//v/}"
MAJOR=${ADDR[0]}
MINOR=${ADDR[1]}
PATCH=${ADDR[2]}
 
# Increment the version numbers
if [ "$PATCH" -eq 9 ]; then
    PATCH=0
    if [ "$MINOR" -eq 9 ]; then
        MINOR=0
        MAJOR=$((MAJOR + 1))
    else
        MINOR=$((MINOR + 1))
    fi
else
    PATCH=$((PATCH + 1))
fi
 
# Create the new tag
NEW_TAG="v$MAJOR.$MINOR.$PATCH"
echo "Nouveau tag : $NEW_TAG"
git tag $NEW_TAG
 
# Push the new tag to the repository
if git push https://oauth2:${GITLAB_API_TOKEN}@gitlab.com/t-esp-panel-admin/panel-admin.git $NEW_TAG; then
    echo "TAG $NEW_TAG créé et pushé sur le repo gitlab"
else
    echo "Erreur lors du push du tag $NEW_TAG"
    exit 1
fi