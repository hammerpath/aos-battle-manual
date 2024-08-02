/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("nl82pf2tsh1f617");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "xl3uww14",
        name: "abilityUsage",
        type: "relation",
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: "hcbhodrnpks21tp",
          cascadeDelete: false,
          minSelect: null,
          maxSelect: null,
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
        id: "xl3uww14",
        name: "abilityUsage",
        type: "relation",
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: "hcbhodrnpks21tp",
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
