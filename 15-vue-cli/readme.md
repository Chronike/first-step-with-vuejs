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

# 4. Using slots

In this task we will use slots to make our components more flexible

## Solve the following tasks:

- [ ] Make the last BookListRow column more flexible
  - [ ] `BookListRow.vue`: Add a scoped slot with the name `actionCol` into the last td. The slot has no default content.
  - [ ] Implement the BaseButton into the `BookList` component and use the new scoped slot of the imported BookListRow component.
- [ ] Make the BaseButton more flexible with a default slot
  - [ ] `BasteButton.vue`: Replace the `prop` text with a default slot
  - BookList.vue:
    - [ ] Update the `BaseButton` by using the slots
    - [ ] Add a icon to slot. Use the plus icon when `isBookmarked` is false or the remove icon when it's true. See section `Material` below the tasks to get the svg code for the icons.
    - [ ] The icons are too big. Try to fix it.


