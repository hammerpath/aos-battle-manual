/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("nl82pf2tsh1f617");

    // remove
    collection.schema.removeField("qawdemzg");

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("nl82pf2tsh1f617");

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "qawdemzg",
        name: "battleFormationId",
        type: "relation",
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: "9vs7feye7kf6b22",
          cascadeDelete: false,
          minSelect: null,
          maxSelect: 1,
          displayFields: null,
        },
      }),
    );

    return dao.saveCollection(collection);
  },
);
