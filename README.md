# td-candidate-test

A project to help facilitate UI engineer candidate testing.

## Conventions within this Document

- Commands beginning with the `$` symbol are intended to be entered at the terminal. The `$` shouldn't be entered -- this is simply to denote terminal commands.
- If you're on Windows, use the `git-bash` utility that is included in the Windows version of Git.
- All commands after those in the installation instructions should be entered with `~/Projects/td-candidate-test` (or whatever location you choose to install this project to) as the current working directory, unless otherwise directed.


## Setup

### Installation

1. [Fork this repository](https://github.com/djmccormick/td-candidate-test/fork) to your own account.
2. Ensure you've installed the following utilities:
    - [Git](http://git-scm.com/downloads): a free and open source distributed version control system.
    - [Node.js](http://nodejs.org/download/): a software platform that is used to build server-side applications.
    - [Grunt](http://gruntjs.com/getting-started): a JavaScript task runner. If you have access issues, type `sudo` before the following command:

            $ npm install -g grunt-cli
    - [Bower](http://bower.io/#installing-bower): a package manager for the web. If you have access issues, type `sudo` before the following command:

            $ npm install -g bower
3. Ensure you have [set up public SSH key authentication with GitHub](https://help.github.com/articles/generating-ssh-keys/).
4. Clone your copy of this repository to wherever you prefer to keep your projects (be careful to replace `your-username` with your own GitHub username):

        $ git clone git@github.com:your-username/td-candidate-test.git ~/Projects/td-candidate-test

5. Navigate to where you've cloned your copy of this repository:

        $ cd ~/Projects/td-candidate-test

6. Install the dependencies:

        $ npm install
        $ bower install


### Running the App

Run the app from your localhost ([the page](http://localhost:4000/src/) should open in your browser automatically):

        $ grunt serve


## Testing

- Run linting:

        $ grunt test


## Troubleshooting

- If you have trouble with git URLs (i.e., `git://`):

        $ git config --global url.https://.insteadOf git://

- Check the entire project for code quality:

        $ grunt test

- Look for any script errors by opening your browser's developer tools with this project running and opening its console.
- Mind your whitespace! Ensure you're not introducing mixed whitespace (this project uses tabs, except for `package.json` and `bower.json`). Ensure you're not leaving extraneous whitespace at the end of your lines. These things are enforced by the testing script.
- If you're still stumped, [create an issue](https://github.com/djmccormick/td-candidate-test/issues) under this project and describe to your best ability the problems you're seeing.


Copyright 2015 Teradata
