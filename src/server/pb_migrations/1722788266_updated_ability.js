/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("nl82pf2tsh1f617");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "1anf8oji",
        name: "factionTypeItemId",
        type: "relation",
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: "9zd20zziprz3ltk",
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
    const collection = dao.findCollectionByNameOrId("nl82pf2tsh1f617");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "1anf8oji",
        name: "factionTypeItemId",
        type: "relation",
        required: true,
        presentable: false,
        unique: false,
        options: {
          collectionId: "9zd20zziprz3ltk",
          cascadeDelete: false,
          minSelect: null,
          maxSelect: 1,
          displayFields: null,
        },
      }),
    );

    return dao.saveCollection(collection);
  },
);
