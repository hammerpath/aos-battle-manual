/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("1xzqzxno8nhis7a");

    collection.name = "faction";

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("1xzqzxno8nhis7a");

    collection.name = "factions";

    return dao.saveCollection(collection);
  },
);
