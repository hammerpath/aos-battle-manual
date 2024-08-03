/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: "ii34s0il6as1o06",
      created: "2024-08-01 17:34:07.082Z",
      updated: "2024-08-01 17:34:07.082Z",
      name: "spellLore",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "mjzezlxy",
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
        {
          system: false,
          id: "uxfxf1ki",
          name: "factionTypeId",
          type: "relation",
          required: false,
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
    const collection = dao.findCollectionByNameOrId("ii34s0il6as1o06");

    return dao.deleteCollection(collection);
  },
);
