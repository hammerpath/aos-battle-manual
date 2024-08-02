/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("9zd20zziprz3ltk");

    collection.name = "factionTypeItem";

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("9zd20zziprz3ltk");

    collection.name = "faction_type_item";

    return dao.saveCollection(collection);
  },
);
