/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9jwmqsqqqdi5kxe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1knewbyb",
    "name": "couleur_verre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "sd5ec019hvnsf4x",
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
  collection.schema.removeField("1knewbyb")

  return dao.saveCollection(collection)
})
