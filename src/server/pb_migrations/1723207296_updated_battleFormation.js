/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("9vs7feye7kf6b22");

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "ldkgg0ka",
        name: "abilityId",
        type: "relation",
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: "nl82pf2tsh1f617",
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
    const collection = dao.findCollectionByNameOrId("9vs7feye7kf6b22");

    // remove
    collection.schema.removeField("ldkgg0ka");

    return dao.saveCollection(collection);
  },
);
