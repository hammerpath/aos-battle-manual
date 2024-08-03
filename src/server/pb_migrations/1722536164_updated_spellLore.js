/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("ii34s0il6as1o06");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "mjzezlxy",
        name: "name",
        type: "text",
        required: true,
        presentable: false,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: "",
        },
      }),
    );

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "uxfxf1ki",
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
    const collection = dao.findCollectionByNameOrId("ii34s0il6as1o06");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "mjzezlxy",
        name: "name",
        type: "text",
        required: false,
        presentable: false,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: "",
        },
      }),
    );

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "uxfxf1ki",
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
