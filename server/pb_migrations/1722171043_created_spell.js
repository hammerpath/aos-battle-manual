/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: "8zvpahw62c51jrm",
      created: "2024-07-28 12:50:43.704Z",
      updated: "2024-07-28 12:50:43.704Z",
      name: "spell",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "epoxxf02",
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
          id: "p1uhme8p",
          name: "declare",
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
          id: "ci8zkrx5",
          name: "effect",
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
          id: "hfiateoc",
          name: "value",
          type: "number",
          required: true,
          presentable: false,
          unique: false,
          options: {
            min: null,
            max: null,
            noDecimal: true,
          },
        },
        {
          system: false,
          id: "t4axum0r",
          name: "faction_type",
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
        },
      ],
      indexes: [],
      listRule: "",
      viewRule: "",
      createRule: "",
      updateRule: "",
      deleteRule: "",
      options: {},
    });

    return Dao(db).saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("8zvpahw62c51jrm");

    return dao.deleteCollection(collection);
  },
);
