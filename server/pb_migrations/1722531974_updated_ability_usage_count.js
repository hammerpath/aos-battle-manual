/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("qgsaihk0fr2v0sg");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "l8ujhd57",
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
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("qgsaihk0fr2v0sg");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "l8ujhd57",
        name: "value",
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

    return dao.saveCollection(collection);
  },
);
