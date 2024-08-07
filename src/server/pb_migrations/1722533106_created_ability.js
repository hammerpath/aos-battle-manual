/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: "nl82pf2tsh1f617",
      created: "2024-08-01 17:25:06.390Z",
      updated: "2024-08-01 17:25:06.390Z",
      name: "ability",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "c9haoa24",
          name: "name",
          type: "text",
          required: true,
          presentable: false,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: "",
          },
        },
        {
          system: false,
          id: "rc0rsoay",
          name: "declare",
          type: "text",
          required: false,
          presentable: false,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: "",
          },
        },
        {
          system: false,
          id: "ikv4gy4t",
          name: "effect",
          type: "text",
          required: false,
          presentable: false,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: "",
          },
        },
        {
          system: false,
          id: "e2niclau",
          name: "abilityUsageCountId",
          type: "relation",
          required: true,
          presentable: false,
          unique: false,
          options: {
            collectionId: "qgsaihk0fr2v0sg",
            cascadeDelete: false,
            minSelect: null,
            maxSelect: 1,
            displayFields: null,
          },
        },
        {
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
            maxSelect: 1,
            displayFields: null,
          },
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
          system: false,
          id: "i4e3ffzf",
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
        },
        {
          system: false,
          id: "w7xsnnao",
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
        },
      ],
      indexes: [],
      listRule: null,
      viewRule: null,
      createRule: null,
      updateRule: null,
      deleteRule: null,
      options: {},
    });

    return Dao(db).saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("nl82pf2tsh1f617");

    return dao.deleteCollection(collection);
  },
);
