# 1. Task: Add a reset.css file

We need to normalize some styling

- [ ] Remove all styles from existing files.
- [ ] Add the `src/reset.css` css styles to the application
  - [ ] Use one of the techniques you learned before

# 2. Task: Header & Booklist Component

In this task we will practice the handling with single file components in Vue CLI projects.

## Solve the following tasks:

- [ ] Remove the HelloWorld component
- [ ] Remove dummy stuff from App.vue
- [ ] Add global css styles from `src/global.css`
  - [ ] Choose your favorite technique to add css
- [ ] Create a Header Component
  - [ ] Take use of provided resources `src/LayoutHeader`
  - [ ] Register it in the App.vue
- [ ] Create a BookList Component
  - [ ] Take use of provided resources `src/BookList`
  - [ ] Register it in the App.vue

# 3. Task: Use custom events

In this task we will use custom events to modify parent state.

## Solve the following tasks:

- [ ] Add a custom event when the `Add Bookmark` button was clicked.
- [ ] Add `isBookmarked` with a value `true` when the `Add Bookmark` button was clicked.
- [ ] When a book has a `isBookmarked` property that is `true`, display the text remove button.
  - [ ] Otherwise show `Add Bookmark` as button text.
- [ ] Implement that the `isBookmarked` state of each book could be changed between true and false.
