/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("8zvpahw62c51jrm");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "p1uhme8p",
        name: "declare",
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
        id: "ci8zkrx5",
        name: "effect",
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
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("8zvpahw62c51jrm");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "p1uhme8p",
        name: "declare",
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
        id: "ci8zkrx5",
        name: "effect",
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
