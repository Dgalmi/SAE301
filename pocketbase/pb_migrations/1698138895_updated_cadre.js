/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9ph50e9r0c87hwj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ugw9aakc",
    "name": "cadre_mat",
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
  const collection = dao.findCollectionByNameOrId("9ph50e9r0c87hwj")

  // remove
  collection.schema.removeField("ugw9aakc")

  return dao.saveCollection(collection)
})
