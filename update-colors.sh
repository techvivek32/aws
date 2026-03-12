#!/bin/bash

# This script updates all color references from pink/primary to teal/magenta
# Run this in the project root: bash update-colors.sh

echo "Updating colors throughout the project..."

# Find all TypeScript/TSX files and update colors
find ./app ./sections ./components -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/text-primary/text-teal/g' {} +
find ./app ./sections ./components -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/bg-primary/bg-teal/g' {} +
find ./app ./sections ./components -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/border-primary/border-teal/g' {} +
find ./app ./sections ./components -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/shadow-primary/shadow-teal/g' {} +
find ./app ./sections ./components -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/hover:bg-primary/hover:bg-teal-dark/g' {} +
find ./app ./sections ./components -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/text-accent/text-teal-dark/g' {} +

# Update specific italic/emphasis text to use magenta
find ./app ./sections ./components -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/text-teal italic/text-magenta italic/g' {} +

echo "Color update complete!"
