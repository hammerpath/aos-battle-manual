/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("8zvpahw62c51jrm");

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "ozvuycq4",
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
    const collection = dao.findCollectionByNameOrId("8zvpahw62c51jrm");

    // remove
    collection.schema.removeField("ozvuycq4");

    return dao.saveCollection(collection);
  },
);
