/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: "qgsaihk0fr2v0sg",
      created: "2024-08-01 17:05:12.624Z",
      updated: "2024-08-01 17:05:12.624Z",
      name: "ability_usage_count",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "l8ujhd57",
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
    const collection = dao.findCollectionByNameOrId("qgsaihk0fr2v0sg");

    return dao.deleteCollection(collection);
  },
);
