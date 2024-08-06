/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: "k2b70awkbfz18ag",
      created: "2024-08-04 16:21:33.873Z",
      updated: "2024-08-04 16:21:33.873Z",
      name: "artefactsOfPower",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "ktx6t0l9",
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
          id: "4ngs5l14",
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
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("k2b70awkbfz18ag");

    return dao.deleteCollection(collection);
  },
);
