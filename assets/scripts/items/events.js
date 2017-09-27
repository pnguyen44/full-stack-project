'use strict'
const itemsApi = require('./api')
const itemsUi = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const store = require('../store')

const onCreateItem = function (e) {
  e.preventDefault()
  console.log('onCreateItem - created item')
  const data = getFormFields(this)
  console.log('onCreateItem data = ', data)
  const item = data.item
  console.log('item = ', item)
  itemsApi.create(item.name, item.mark, item.list_id)
    .then(itemsUi.onCreateSuccess)
    .catch(itemsUi.onError)
}

const createOneItem = function (name, mark, listId) {
  mark = false
  itemsApi.create(name, mark, listId)
    .then(itemsUi.onCreateSuccess)
    .catch(itemsUi.onError)
}

const getItems = function () {
  itemsApi.index()
    .then(itemsUi.getItemsSuccess)
    .catch(itemsUi.onError)
}
const getOneItem = function (id) {
  itemsApi.show(id)
    .then(itemsUi.getOneItemSuccess)
    .catch(itemsUi.onError)
}

const onUpdateItem = function (name, mark, itemId, listId) {
  itemsApi.update(name, mark, itemId, listId)
    .then(itemsUi.onUpdateSuccess)
    .catch(itemsUi.onError)
}

const onDeleteItem = function (id) {
  itemsApi.destroy(id)
    .then(itemsUi.onDeleteSuccess(id))
    .catch(itemsUi.onError)
}
const addHandlers = function () {
  // $('#create-list-form').on('submit', onCreateItem)
  // $('.content').on('submit', onCreateItem)

  $('#edit-item-form').on('submit', function (e) {
    e.preventDefault()
    // const listId = store.listId
    // const listName = $(this).attr('data-list-edit-name')
    // console.log('listId=', listId)
    const data = getFormFields(this)
    store.item = data.item
    console.log('store.item=', store.item)
    // console.log('listName=', listName)
    // $('.edit-list-input').val(listName)
    // const updatedName = $('.edit-list-input').val()
    // console.log('updateName = ', updatedName)
    // $('form').trigger('reset')
    onUpdateItem(store.item.name, store.editItemMark, store.editItemId, store.editItemlistId)
  })
}

// module.exports = {
//   onCreateGame,
//   onUpdateGame,
//   getOneGame,
//   getGames,
//   addHandlers,
//   test
// }

exports.onCreateItem = onCreateItem
exports.onUpdateItem = onUpdateItem
exports.getOneItem = getOneItem
exports.getItems = getItems
exports.addHandlers = addHandlers
exports.onDeleteItem = onDeleteItem
exports.createOneItem = createOneItem
