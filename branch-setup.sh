echo "Running branch-setup script..."
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
echo "Current branch: $BRANCH_NAME"
if mkdir -p "$BRANCH_NAME"; then
	echo "Directory \"$BRANCH_NAME\" created successfully"
else
	echo "Failed to create directory "$BRANCH_NAME"."
fi

mkdir -p "$BRANCH_NAME"
touch "$BRANCH_NAME/details.md" && echo "Created details.md"
touch "$BRANCH_NAME/solution.js" && echo "Created solution.js"
echo "
function nameFunction (params) {
  return params
}
console.log(nameFunction())
" > "$BRANCH_NAME/solution.js"
