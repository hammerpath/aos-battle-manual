/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("fsk1izq70g8dd0t");

    collection.listRule = "";
    collection.createRule = "";
    collection.updateRule = "";

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("fsk1izq70g8dd0t");

    collection.listRule = null;
    collection.createRule = null;
    collection.updateRule = null;

    return dao.saveCollection(collection);
  },
);
