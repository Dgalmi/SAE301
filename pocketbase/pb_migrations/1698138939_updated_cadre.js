/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9ph50e9r0c87hwj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i60yogvk",
    "name": "couleur_cadre",
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
  const collection = dao.findCollectionByNameOrId("9ph50e9r0c87hwj")

  // remove
  collection.schema.removeField("i60yogvk")

  return dao.saveCollection(collection)
})
