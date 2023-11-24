module.exports = {
    // Use single quotes instead of double quotes
    singleQuote: true,
  
    // Add a trailing comma at the end of object literals and arrays
    trailingComma: 'all',
  
    // Specify the number of spaces per indentation-level
    tabWidth: 4,
  
    // Use tabs instead of spaces
    useTabs: false,
  
    // Print semicolons at the ends of statements
    semi: false,
  
    // Specify the maximum line length that Prettier will wrap code
    printWidth: 80,
  
    // Place the > of a multi-line JSX element at the end of the last line
    jsxBracketSameLine: false,
  
    // Specify which parser to use for parsing HTML files
    htmlWhitespaceSensitivity: 'css',
  
    // Do not add a newline at the end of the file
    insertPragma: false,
  
    // Specify the file type to be used when writing the .prettierignore file
    ignorePath: '.prettierignore',
  
    // Do not print the file path or filename at the start of the printed result
    filepath: 'none',
  
    // Override default options for specific file globs
    overrides: [
      {
        files: '*.test.js',
        options: {
          // Indent JSX elements with 4 spaces
          tabWidth: 4,
        },
      },
    ],
  };
  