/// <reference path="../pb_data/types.d.ts" />
migrate(
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

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "ruor8fat",
        name: "artefactOfPowerId",
        type: "relation",
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: "k2b70awkbfz18ag",
          cascadeDelete: false,
          minSelect: null,
          maxSelect: 1,
          displayFields: null,
        },
      }),
    );

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "p0gbnufp",
        name: "heroicTraitId",
        type: "relation",
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: "6d8db8nnvczb99z",
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
    const collection = dao.findCollectionByNameOrId("nl82pf2tsh1f617");

    // remove
    collection.schema.removeField("qawdemzg");

    // remove
    collection.schema.removeField("ruor8fat");

    // remove
    collection.schema.removeField("p0gbnufp");

    return dao.saveCollection(collection);
  },
);
