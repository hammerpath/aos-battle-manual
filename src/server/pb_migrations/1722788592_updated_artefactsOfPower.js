/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("k2b70awkbfz18ag");

    collection.name = "artefactOfPower";
    collection.listRule = "";

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("k2b70awkbfz18ag");

    collection.name = "artefactsOfPower";
    collection.listRule = null;

    return dao.saveCollection(collection);
  },
);
