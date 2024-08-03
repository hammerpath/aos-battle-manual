/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("nl82pf2tsh1f617");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "e2niclau",
        name: "abilityUsageCountId",
        type: "relation",
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: "qgsaihk0fr2v0sg",
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
        id: "e2niclau",
        name: "abilityUsageCountId",
        type: "relation",
        required: true,
        presentable: false,
        unique: false,
        options: {
          collectionId: "qgsaihk0fr2v0sg",
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
