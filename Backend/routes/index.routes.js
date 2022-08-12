const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/index.controller')
const {
	createItem,
	deleteItemsById,
	getAllItems,
	getItemsById,
	updateItem
} = require('../controllers/items.controller')
const {
	getAllGroups,
	createGroup,
	getGroupById,
	updateGroup
} = require('../controllers/categories.controller')

router.route('/').get(IndexController.index)

router.route('/shopping_list').post(createItem).get(getAllItems)

router.route('/shopping_list/:id').delete(deleteItemsById).get(getItemsById).patch(updateItem)

// categories route
router.route('/categories').post(createGroup).get(getAllGroups)
router.route('/categories/:id').get(getGroupById).patch(updateGroup)

module.exports = router
