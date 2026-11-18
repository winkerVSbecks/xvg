# Architecture: xvg

## What this project is
The `xvg` project appears to be a web development tool that includes various utilities and components for creating and manipulating web pages. It seems to focus on providing a set of functions for tasks like DOM manipulation, zooming, and skeletonizing content.

## How it is laid out
The project is organized into several directories:
- `config/`: Contains configuration files for the project, such as `webpack.config.js` and `webpack.site.config.js`.
- `src/`: Holds the core source code, including modules like `anchors.js`, `skeletonize.js`, and `xvg.js`.
- `website/`: Contains the entry point for the website, `index.js`.

## Key modules
| Module Name | Path | Commits | Description |
|-------------|------|---------|-------------|
| `anchors` | `src/anchors.js` | 6 | Manages anchor elements and their behavior. |
| `skeletonize` | `src/skeletonize.js` | 6 | Creates a skeleton version of a webpage for loading states. |
| `x-ray` | `src/x-ray.js` | 5 | Extracts data from web pages using a query-like syntax. |
| `arc-guides` | `src/arc-guides.js` | 4 | Provides guidance or tooltips for users. |
| `index` | `website/index.js` | 4 | The main entry point for the website. |
| `webpack.config` | `config/webpack.config.js` | 4 | Configuration for Webpack, the module bundler. |
| `xvg` | `src/xvg.js` | 4 | The main module that ties everything together. |
| `utils` | `src/utils.js` | 3 | Contains utility functions that are used across the project. |
| `zoom` | `src/zoom.js` | 3 | Handles zooming in and out of web content. |
| `clear-console` | `config/clear-console.js` | 1 | Clears the console on startup. |
| `dom` | `src/dom.js` | 1 | Provides functions for manipulating the Document Object Model. |
| `expand` | `src/expand.js` | 1 | Handles expanding and collapsing content. |
| `options` | `src/options/options.js` | 1 | Manages user options and preferences. |
| `settings` | `src/settings.js` | 1 | Manages application settings. |

## Public API surface
The project exports several functions and modules that are intended to be used by other parts of the application or by external users. These include functions for manipulating the DOM, zooming, and extracting data from web pages.

## Hotspots and gotchas
The modules with the highest churn are `anchors.js`, `skeletonize.js`, and `x-ray.js`, each with 6 commits. These modules are likely areas where the codebase has been frequently updated, which could indicate potential complexity or areas where bugs may have been introduced. If you are new to the project, these are the modules you should focus on understanding first.