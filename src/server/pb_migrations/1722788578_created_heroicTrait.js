/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: "6d8db8nnvczb99z",
      created: "2024-08-04 16:22:58.578Z",
      updated: "2024-08-04 16:22:58.578Z",
      name: "heroicTrait",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "vrpro7ne",
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
          id: "wim8rxux",
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
      listRule: "",
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
    const collection = dao.findCollectionByNameOrId("6d8db8nnvczb99z");

    return dao.deleteCollection(collection);
  },
);
