/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("h8udigm0bzyb6xn");

    collection.name = "factionType";

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("h8udigm0bzyb6xn");

    collection.name = "faction_type";

    return dao.saveCollection(collection);
  },
);
