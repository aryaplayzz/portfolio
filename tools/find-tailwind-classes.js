/**
 * Script to find Tailwind classes in components
 * Run with: node tools/find-tailwind-classes.js
 */

const fs = require('fs');
const path = require('path');

// Common Tailwind class prefixes
const tailwindPrefixes = [
  'bg-', 'text-', 'p-', 'm-', 'px-', 'py-', 'mx-', 'my-', 'mt-', 'mb-', 'ml-', 'mr-',
  'pt-', 'pb-', 'pl-', 'pr-', 'w-', 'h-', 'min-w-', 'min-h-', 'max-w-', 'max-h-',
  'flex-', 'grid-', 'rounded-', 'border-', 'shadow-', 'opacity-', 'z-', 'transition-',
  'transform-', 'scale-', 'rotate-', 'translate-', 'skew-', 'space-', 'gap-', 'font-',
  'tracking-', 'leading-', 'list-', 'overflow-', 'inset-', 'top-', 'right-', 'bottom-', 'left-'
];

// Common complete Tailwind classes
const commonTailwindClasses = [
  'flex', 'grid', 'block', 'inline', 'inline-block', 'hidden', 'container',
  'absolute', 'relative', 'fixed', 'sticky', 'static',
  'rounded', 'rounded-full', 'rounded-none',
  'shadow', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl', 'shadow-none',
  'transition', 'transform',
  'antialiased', 'subpixel-antialiased',
  'uppercase', 'lowercase', 'capitalize', 'normal-case',
  'truncate', 'overflow-ellipsis', 'overflow-clip',
  'clearfix',
  'sr-only', 'not-sr-only'
];

// Directories to scan
const directories = [
  path.join(__dirname, '../src/components'),
  path.join(__dirname, '../src')
];

// Function to check if a classname contains a Tailwind class
function containsTailwindClass(className) {
  if (!className) return false;
  
  // Ignore CSS Module references (styles.*)
  if (className.startsWith('styles.')) return false;
  
  // Check for common complete classes
  for (const commonClass of commonTailwindClasses) {
    if (className === commonClass) return true;
  }
  
  // Check for prefixed classes
  for (const prefix of tailwindPrefixes) {
    if (className.startsWith(prefix)) return true;
  }
  
  return false;
}

// Function to extract classes from a line of code
function extractClasses(line) {
  // Skip lines that only contain CSS Module references
  if (line.includes('className={styles.') && !line.includes('className="') && !line.includes('className={`')) {
    return [];
  }
  
  // Looking for patterns like className="..." or className={`...`}
  const patterns = [
    /className=["']([^"']+)["']/g,
    /className={\s*["']([^"']+)["']\s*}/g,
    /className={\s*`([^`]+)`\s*}/g
  ];
  
  let matches = [];
  
  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(line)) !== null) {
      matches.push(match[1]);
    }
  }
  
  return matches;
}

// Function to scan a file for Tailwind classes
function scanFile(filePath) {
  // Only scan TSX, JSX, TS, JS files
  if (!['.tsx', '.jsx', '.ts', '.js'].includes(path.extname(filePath))) {
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  let tailwindUsages = [];
  
  lines.forEach((line, lineNumber) => {
    const classNames = extractClasses(line);
    
    classNames.forEach(classes => {
      // Split by space to get individual classes
      const individualClasses = classes.split(/\s+/);
      
      for (const cls of individualClasses) {
        if (containsTailwindClass(cls)) {
          tailwindUsages.push({
            file: filePath,
            line: lineNumber + 1,
            class: cls,
            context: line.trim()
          });
        }
      }
    });
  });
  
  return tailwindUsages;
}

// Function to scan a directory recursively
function scanDirectory(dir) {
  let results = [];
  
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      results = results.concat(scanDirectory(filePath));
    } else {
      const fileResults = scanFile(filePath);
      if (fileResults && fileResults.length > 0) {
        results = results.concat(fileResults);
      }
    }
  }
  
  return results;
}

// Main function
function main() {
  let allResults = [];
  
  for (const dir of directories) {
    if (fs.existsSync(dir)) {
      const results = scanDirectory(dir);
      allResults = allResults.concat(results);
    }
  }
  
  if (allResults.length === 0) {
    console.log('No Tailwind classes found! Your migration is complete.');
  } else {
    console.log(`Found ${allResults.length} Tailwind class usages:`);
    console.log('-----------------------------------');
    
    allResults.forEach(result => {
      console.log(`File: ${result.file}`);
      console.log(`Line: ${result.line}`);
      console.log(`Class: ${result.class}`);
      console.log(`Context: ${result.context}`);
      console.log('-----------------------------------');
    });
    
    console.log('Summary:');
    const fileCount = new Set(allResults.map(r => r.file)).size;
    console.log(`- ${fileCount} files contain Tailwind classes`);
    console.log(`- ${allResults.length} total Tailwind class usages`);
  }
}

// Run the script
main(); 