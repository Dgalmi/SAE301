/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9jwmqsqqqdi5kxe",
    "created": "2023-10-25 11:47:33.940Z",
    "updated": "2023-10-25 11:47:33.940Z",
    "name": "verre",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "y3qwd7ny",
        "name": "libelle_verre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9jwmqsqqqdi5kxe");

  return dao.deleteCollection(collection);
})
