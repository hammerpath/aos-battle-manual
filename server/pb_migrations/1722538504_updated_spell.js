/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("8zvpahw62c51jrm");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "lrsiroov",
        name: "spellLoreId",
        type: "relation",
        required: true,
        presentable: false,
        unique: false,
        options: {
          collectionId: "ii34s0il6as1o06",
          cascadeDelete: false,
          minSelect: null,
          maxSelect: 1,
          displayFields: null,
        },
      }),
    );

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "svpnvspi",
        name: "unitId",
        type: "relation",
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: "u7ln4ld9p7vrkly",
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
    const collection = dao.findCollectionByNameOrId("8zvpahw62c51jrm");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "lrsiroov",
        name: "spellLore",
        type: "relation",
        required: true,
        presentable: false,
        unique: false,
        options: {
          collectionId: "ii34s0il6as1o06",
          cascadeDelete: false,
          minSelect: null,
          maxSelect: 1,
          displayFields: null,
        },
      }),
    );

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "svpnvspi",
        name: "unit",
        type: "relation",
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: "u7ln4ld9p7vrkly",
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
