/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("8zvpahw62c51jrm");

    // remove
    collection.schema.removeField("t4axum0r");

    // add
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

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("8zvpahw62c51jrm");

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "t4axum0r",
        name: "factionTypeId",
        type: "relation",
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: "h8udigm0bzyb6xn",
          cascadeDelete: false,
          minSelect: null,
          maxSelect: 1,
          displayFields: null,
        },
      }),
    );

    // remove
    collection.schema.removeField("lrsiroov");

    return dao.saveCollection(collection);
  },
);
