/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("bki330a134rovlo");

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "mj0vmfdg",
        name: "abilityKeywords",
        type: "relation",
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: "qxk9semcas07ann",
          cascadeDelete: false,
          minSelect: null,
          maxSelect: null,
          displayFields: null,
        },
      }),
    );

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("bki330a134rovlo");

    // remove
    collection.schema.removeField("mj0vmfdg");

    return dao.saveCollection(collection);
  },
);
