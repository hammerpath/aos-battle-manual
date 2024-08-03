/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("qxk9semcas07ann");

    collection.name = "abilityKeyword";

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("qxk9semcas07ann");

    collection.name = "ability_keyword";

    return dao.saveCollection(collection);
  },
);
