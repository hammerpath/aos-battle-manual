/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("9zd20zziprz3ltk");

    return dao.deleteCollection(collection);
  },
  (db) => {
    const collection = new Collection({
      id: "9zd20zziprz3ltk",
      created: "2024-08-01 17:12:45.109Z",
      updated: "2024-08-01 17:46:41.588Z",
      name: "factionTypeItem",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "hfzelsqg",
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
);
