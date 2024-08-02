/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: "u7ln4ld9p7vrkly",
      created: "2024-07-28 12:46:11.041Z",
      updated: "2024-07-28 12:46:11.041Z",
      name: "unit",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "kzuwbjfd",
          name: "name",
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
    const collection = dao.findCollectionByNameOrId("u7ln4ld9p7vrkly");

    return dao.deleteCollection(collection);
  },
);
