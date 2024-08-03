/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("qgsaihk0fr2v0sg");

    collection.name = "abilityUsageCount";

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("qgsaihk0fr2v0sg");

    collection.name = "ability_usage_count";

    return dao.saveCollection(collection);
  },
);
