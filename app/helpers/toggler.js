/**
 * Toggles a single toggler item from a list of multiple items from a FlatList.
 *
 * @param  {function} setState setState function that holds the initial list
 *
 * @param {object}  item toggled item from the List (Note that each item must contain "toggled" and "id" field).
 */

export const toggler = (setState, item) => {
  setState((prevState) => {
    const removedItemIndex = prevState.findIndex((elem) => elem.id == item.id);
    item["toggled"] = !item["toggled"];
    prevState.splice(removedItemIndex, 1);
    return prevState.concat(item);
  });
};
