/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("1xzqzxno8nhis7a");

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "3b0wqmv8",
        name: "active",
        type: "bool",
        required: false,
        presentable: false,
        unique: false,
        options: {},
      }),
    );

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("1xzqzxno8nhis7a");

    // remove
    collection.schema.removeField("3b0wqmv8");

    return dao.saveCollection(collection);
  },
);
