/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("k2b70awkbfz18ag");

    collection.createRule = "";

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("k2b70awkbfz18ag");

    collection.createRule = null;

    return dao.saveCollection(collection);
  },
);
