/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("h8udigm0bzyb6xn");

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "kwyg1ukb",
        name: "faction",
        type: "relation",
        required: true,
        presentable: false,
        unique: false,
        options: {
          collectionId: "1xzqzxno8nhis7a",
          cascadeDelete: true,
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
    const collection = dao.findCollectionByNameOrId("h8udigm0bzyb6xn");

    // remove
    collection.schema.removeField("kwyg1ukb");

    return dao.saveCollection(collection);
  },
);
