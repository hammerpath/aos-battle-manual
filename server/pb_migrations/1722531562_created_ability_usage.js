/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: "hcbhodrnpks21tp",
      created: "2024-08-01 16:59:22.971Z",
      updated: "2024-08-01 16:59:22.971Z",
      name: "ability_usage",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "yccnlizs",
          name: "value",
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
    const collection = dao.findCollectionByNameOrId("hcbhodrnpks21tp");

    return dao.deleteCollection(collection);
  },
);
