/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: "h8udigm0bzyb6xn",
      created: "2024-07-25 14:07:23.448Z",
      updated: "2024-07-25 14:07:23.448Z",
      name: "faction_type",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "oxjodlsu",
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
    const collection = dao.findCollectionByNameOrId("h8udigm0bzyb6xn");

    return dao.deleteCollection(collection);
  },
);
