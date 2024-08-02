/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("9zd20zziprz3ltk");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "hfzelsqg",
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
    const collection = dao.findCollectionByNameOrId("9zd20zziprz3ltk");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "hfzelsqg",
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
