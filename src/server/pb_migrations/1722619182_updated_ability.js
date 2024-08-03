/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("nl82pf2tsh1f617");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "xl3uww14",
        name: "abilityUsageId",
        type: "relation",
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: "hcbhodrnpks21tp",
          cascadeDelete: false,
          minSelect: null,
          maxSelect: null,
          displayFields: null,
        },
      }),
    );

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "s5ogy4zi",
        name: "abilityTurnId",
        type: "relation",
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: "h2gs3vvt9ms1qkp",
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
        id: "g5qadejs",
        name: "factionTypeId",
        type: "relation",
        required: true,
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

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "1anf8oji",
        name: "factionTypeItemId",
        type: "relation",
        required: true,
        presentable: false,
        unique: false,
        options: {
          collectionId: "9zd20zziprz3ltk",
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

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "xl3uww14",
        name: "abilityUsage",
        type: "relation",
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: "hcbhodrnpks21tp",
          cascadeDelete: false,
          minSelect: null,
          maxSelect: null,
          displayFields: null,
        },
      }),
    );

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "s5ogy4zi",
        name: "abilityTurn",
        type: "relation",
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: "h2gs3vvt9ms1qkp",
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
        id: "g5qadejs",
        name: "factionType",
        type: "relation",
        required: true,
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

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "1anf8oji",
        name: "factionTypeItem",
        type: "relation",
        required: true,
        presentable: false,
        unique: false,
        options: {
          collectionId: "9zd20zziprz3ltk",
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
