/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("h2gs3vvt9ms1qkp");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "8jmqhzfs",
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
    const collection = dao.findCollectionByNameOrId("h2gs3vvt9ms1qkp");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "8jmqhzfs",
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
