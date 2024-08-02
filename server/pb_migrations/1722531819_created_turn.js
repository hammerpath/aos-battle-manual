/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: "h2gs3vvt9ms1qkp",
      created: "2024-08-01 17:03:39.262Z",
      updated: "2024-08-01 17:03:39.262Z",
      name: "turn",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "8jmqhzfs",
          name: "value",
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
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("h2gs3vvt9ms1qkp");

    return dao.deleteCollection(collection);
  },
);
