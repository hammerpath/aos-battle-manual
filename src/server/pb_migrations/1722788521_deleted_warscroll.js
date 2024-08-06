/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("fkch0nqvxe5bpol");

    return dao.deleteCollection(collection);
  },
  (db) => {
    const collection = new Collection({
      id: "fkch0nqvxe5bpol",
      created: "2024-07-25 14:10:56.091Z",
      updated: "2024-08-01 17:18:34.937Z",
      name: "warscroll",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "29sa914q",
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
          id: "b1lrwg2c",
          name: "factionTypeId",
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
