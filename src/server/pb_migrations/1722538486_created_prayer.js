/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: "bki330a134rovlo",
      created: "2024-08-01 18:54:46.727Z",
      updated: "2024-08-01 18:54:46.727Z",
      name: "prayer",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "b4bmuhi0",
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
          id: "fzf12n7x",
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
          id: "ptrkzqlg",
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
          id: "cd4qmrns",
          name: "value",
          type: "number",
          required: true,
          presentable: false,
          unique: false,
          options: {
            min: null,
            max: null,
            noDecimal: false,
          },
        },
        {
          system: false,
          id: "zjcok8yj",
          name: "prayerLoreId",
          type: "relation",
          required: true,
          presentable: false,
          unique: false,
          options: {
            collectionId: "fsk1izq70g8dd0t",
            cascadeDelete: false,
            minSelect: null,
            maxSelect: 1,
            displayFields: null,
          },
        },
        {
          system: false,
          id: "ebdbfuym",
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
    const collection = dao.findCollectionByNameOrId("bki330a134rovlo");

    return dao.deleteCollection(collection);
  },
);
