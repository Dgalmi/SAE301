/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9jwmqsqqqdi5kxe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mef8xkvf",
    "name": "verre_mat",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "iu5o6172b4kmhcb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9jwmqsqqqdi5kxe")

  // remove
  collection.schema.removeField("mef8xkvf")

  return dao.saveCollection(collection)
})
