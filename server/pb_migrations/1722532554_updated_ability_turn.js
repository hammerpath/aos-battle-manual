/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("h2gs3vvt9ms1qkp");

    collection.name = "abilityTurn";

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("h2gs3vvt9ms1qkp");

    collection.name = "ability_turn";

    return dao.saveCollection(collection);
  },
);
