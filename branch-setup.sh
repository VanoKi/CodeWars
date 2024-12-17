BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
mkdir -p "BRANCH_NAME"
touch "$BRANCH_NAME/details.md"
touch "$BRANCH_NAME/solution.js"
echo "const ic = require('node-icecream')()" > "$BRANCH_NAME/solution.js"

