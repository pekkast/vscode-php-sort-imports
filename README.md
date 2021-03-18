# php-sort-imports README

PHP Import Sorting

## Direct usage from source
1. ``git clone https://github.com/pekkast/vscode-php-sort-imports.git``
2. ``cd vscode-php-sort-imports``
3. ``npm i && npm run build``
4. Note the generated vsix-file location
5. Install to vscode
    * Ctrl+Shift+P > type vsix
    * Select _Extensions: Install from vsix_
    * Select previously generated vsix-file

## Features

This small extension will sort your php imports by length or alphabetically on save (default setting) or via command `phpSortImports.sort`. If you want to save a specifi file without sorting on save you can use the `phpSortImports.saveWithoutSorting` command or disable the `onSave` setting.

## Extension Settings

This extension contributes the following settings:

* `phpSortImports.onSave`: Automatically sort imports on save
* `phpSortImports.sorting`: Sort by 'length' or 'alphabetically'
* `phpSortImports.suppressWarnings`: Suppress warnings when sorting fails

## Release Notes

Users appreciate release notes as you update your extension.

### 0.0.1

Initial release of the extension
