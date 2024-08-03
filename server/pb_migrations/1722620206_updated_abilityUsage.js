/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("hcbhodrnpks21tp");

    collection.viewRule = "";

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("hcbhodrnpks21tp");

    collection.viewRule = null;

    return dao.saveCollection(collection);
  },
);
