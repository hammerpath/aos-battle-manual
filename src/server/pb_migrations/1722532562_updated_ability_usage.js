/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("hcbhodrnpks21tp");

    collection.name = "abilityUsage";

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("hcbhodrnpks21tp");

    collection.name = "ability_usage";

    return dao.saveCollection(collection);
  },
);
