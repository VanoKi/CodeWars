echo "Running branch-setup script..."
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
echo "Current branch: $BRANCH_NAME"
if mkdir -p "$BRANCH_NAME"; then
	echo 'Directory "$BRANCH_NAME" created successfully'
else
	echo 'Failed to create directory "$BRANCH_NAME".'
fi

mkdir -p "BRANCH_NAME"
touch "$BRANCH_NAME/details.md" && echo "Created details.js"
touch "$BRANCH_NAME/solution.js" && echo "Created solution.md"
echo "const ic = require('node-icecream')()" > "$BRANCH_NAME/solution.js"