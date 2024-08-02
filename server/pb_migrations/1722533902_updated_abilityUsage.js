/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("hcbhodrnpks21tp");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "yccnlizs",
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

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("hcbhodrnpks21tp");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "yccnlizs",
        name: "value",
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

    return dao.saveCollection(collection);
  },
);
