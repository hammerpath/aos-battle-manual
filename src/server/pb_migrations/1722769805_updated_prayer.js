/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("bki330a134rovlo");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "c33oe6na",
        name: "factionTypeId",
        type: "relation",
        required: true,
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
    const collection = dao.findCollectionByNameOrId("bki330a134rovlo");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "c33oe6na",
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
);
