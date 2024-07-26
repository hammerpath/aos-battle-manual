/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: "1xzqzxno8nhis7a",
      created: "2024-07-25 14:04:05.895Z",
      updated: "2024-07-25 14:04:05.895Z",
      name: "factions",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "2xstonx1",
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
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("1xzqzxno8nhis7a");

    return dao.deleteCollection(collection);
  },
);
