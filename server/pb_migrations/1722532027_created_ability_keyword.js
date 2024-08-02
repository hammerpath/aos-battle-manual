/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: "qxk9semcas07ann",
      created: "2024-08-01 17:07:07.369Z",
      updated: "2024-08-01 17:07:07.369Z",
      name: "ability_keyword",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "wiapgrco",
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
    const collection = dao.findCollectionByNameOrId("qxk9semcas07ann");

    return dao.deleteCollection(collection);
  },
);
