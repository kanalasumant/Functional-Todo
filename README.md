# Functional Todo Trello Clone app

This app is divided into 2 sections.

## Architecure

## Usage

### Architecture

#### Store

- This project uses react, redux and Ant UI components.
- I started to designing a single object for the store which consisted of a top level boards array and other keys like currentId, etc.. to keep track of the running board state.
- Each board array had it's associated list array and it's relevant keys. Similarly each list consisted of an array of cards.
- After writing the reducers for create, update and delete of a board object, I realized that managing reducer logic was getting quite nested and the at same time convoltued and harder to reason about, especially for list object and even worse for a card object.
- This led to me find out about a common and a great architecture for designing store - **Normalization**

- This led to me separate board, list and card into separate objects.
  - All objects are stored by id, text and also have an array of ids.
  - Each list object has a boardId associated with it and an array of ids.
  - Each card object has a listId associated with it and an array of ids.
- This helped to easily reason about state and keep reducer logic **_sane_**. Other advantages include avoiding unecessary re-rendering(since deeply nested state updates trigger unwanted re-renders).
- The **_gist_** of this **_normalization_** is moving complex reducer logic to be handled in the components itself, in the form of selectors, which we'll get to further along.
  <br />

#### UI & application state

- I found out that the best way to organize state in components is to keep UI state in the component itself and the business logic enabled state in redux store.
  - State related to Modal and Input components are handled in stateful components.
  - Application state such as board, list and card's details such as text, ids are kept in redux store.
    <br />

#### Re-use patterns

- In this app, the most common pattern I saw which was getting repeated with slight differences was the modal and the input which was required by all the features (board, list and card).
- I found that the click component which triggers the modal can be rendered in a **render prop** component which contains the functionality for **_handling modal toggling_** and **_input_** state.
- Event handlers are then passed directly as props to the render prop component.
- This pattern eliminated duplication of the bulky modal and input elements and also allowed to handle the UI state.

#### Re-ducks pattern & Slice Reducers

- Now that the basic app functionality is in place, it's time to break up and group components by a famous redux pattern called the **_re-ducks_** pattern.

- Each feature such as board, list and card are grouped together in a directory, which consist of actions, reducers, components, selectors and styles.

- This also calls for splitting the reducers, since they are exported as a single state object. Breaking this down, would be to slice them by a specific key and handle parts of state in different components and this pattern is called **slice reducers**.

- The shape of the initial store was:

```
{
  board: {
    byId: {},
    allIds: [],
    activeId: 0,
    currentId: 0
  },
  list: {
    byId: {},
    allIds: [],
    currentId: 0
  },
  card: {
    byId: {},
    allIds: [],
    currentId: 0
  }
}
```

After slicing reducers and grouping them alongside components, i.e. board, key and card objects are then combined like so:

```
import { combineReducers } from "redux";
import boardsReducer from "../components/board/board-reducer";
import listReducer from "../components/list/list-reducer";
import cardReducer from "../components/card/card-reducer";

export default combineReducers({
  board: boardsReducer,
  list: listReducer,
  card: cardReducer
});
```

### Usage

#### Header

- The left and right top corners in the header section consists of icons for displaying and creating boards respectively.
- Clicking **create board icon** on the right **toggles** a modal which cosists of an input element which is a render prop.
- **Hovering** on the top left icon displays an **Ant UI Popover** component which has a list of boards.
- Two actions can be performed on each of the board. Clicking on it loads the board's related data children in the **_Main View_**.
  Clickiong the **red** cross icon on the right of the board, deletes it.

#### Main View

- The first element is the boardName. It be updated by clicking on it and entering a new name in the re-usable modal component.
- The next view is a text Input which when filled and submitted by entering the **return** or the **enter** key creates a new list.
- Each list is a shown vertically which in turn contain cards and lists themselves are separated horizontally.
- Each list has an add card div when clicked upon toggles the reusable modal which can be used to create a new card in the list.
- Cards are stacked vertically in the list.
- Updations work by clicking on the text itself and entering a new value and submitting it.
- Deletions work by clicking on the **red\* cross** icon towards the right of the text.

### Remarks

- I have learned a few important patterns building this app such as code composition with the help of **reusable patterns** like **render props**, **normalizing state** for structuring otherwise **deeply nested state**. I have also learned a bit about reducer composition, slicing state trees, usage of selectors by ardently following the **re-dcuks** pattern.

-

## License

Copyright © 2018, [Sumant Kanala](https://github.com/kanalasumant).
Released under the MIT LICENSE: http://rem.mit-license.org
