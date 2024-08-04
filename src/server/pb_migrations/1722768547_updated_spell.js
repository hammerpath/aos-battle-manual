/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("8zvpahw62c51jrm");

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "fxge6nfu",
        name: "factionTypeId",
        type: "relation",
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: "h8udigm0bzyb6xn",
          cascadeDelete: false,
          minSelect: null,
          maxSelect: 1,
          displayFields: null,
        },
      }),
    );

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("8zvpahw62c51jrm");

    // remove
    collection.schema.removeField("fxge6nfu");

    return dao.saveCollection(collection);
  },
);