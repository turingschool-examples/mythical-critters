# Mythical Critters

Each exercise emphasizes the fundamentals of object oriented programming in JavaScript.

## Installation Steps

1. While in the root of this repository, run `npm install` in your terminal
2. Test that the unit tests are working: Run the command `npm test test/unicorn-test.js` in your terminal

You should see something like:

```shell
> foundations@1.0.0 test /Users/robbie/turing/front-end/1mod/mythical-critters
> mocha "test/unicorn-test.js"

  Unicorn
    - should be a function
    - should instantiate our good friend, Unicorn
    - should have a name
    - should have a color
    - should be white as default
    - should refute isWhite
    - should say sparklying stuff


  0 passing (6ms)
  7 pending
```

### Running the Tests

Most of the tests are skipped. When you see `it.skip('should be a function', () => {` in a test, it means that test has been skipped. They are skipped for a good reason - that way, when you run the test suite for the first time, you don't see tons of errors screaming at you in the terminal.

Un-skip each test, one at a time in order, so you can concentrate on making one test pass. Un-skip the test by deleting the `.skip` from the test's first line so it should look more like `it('should be a function', () => {`. Run the test to see what kind of error you are getting, and then implement the code to make the test pass!

### Video Tutorial!

[Here is a video](https://youtu.be/wfrwMYn2BCg) that walks through the setup and first mythical creature. (Note: some names of directories/files may differ slightly from this repo).

### Critter Order

* `unicorn`
* `vampire`
* `dragon`
* `hobbit`
* `pirate`
* `wizard`
* `medusa`
* `werewolf`
* `centaur`

### Extra Challenges

#### The Dreaded `if` Statement

Can you complete implementations of each of the critters without using `if`
statements? Think about how removing them affects your code.

#### Imagine Two Critters

Can you add two new critters to the repository? How about a Hydra? Add unit
tests exercising some of the following concepts:

* Initializing constructor with data
* Using methods to change the internal state of an instance
* Using methods to query the internal state of an instance

### Extra Critters
If you've done the critters above and feel comfortable with those, try conquering a few more critters!

* `direwolf`
* `fairy`
* `ogre`
* `sphinx`
