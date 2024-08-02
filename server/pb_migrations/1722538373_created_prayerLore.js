/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: "fsk1izq70g8dd0t",
      created: "2024-08-01 18:52:53.489Z",
      updated: "2024-08-01 18:52:53.489Z",
      name: "prayerLore",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "obwnxmh6",
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
          id: "9mxw7e6j",
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
    const collection = dao.findCollectionByNameOrId("fsk1izq70g8dd0t");

    return dao.deleteCollection(collection);
  },
);
