/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("9vs7feye7kf6b22");

    collection.createRule = "";
    collection.updateRule = "";

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("9vs7feye7kf6b22");

    collection.createRule = null;
    collection.updateRule = null;

    return dao.saveCollection(collection);
  },
);
