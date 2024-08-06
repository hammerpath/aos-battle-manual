/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: "9vs7feye7kf6b22",
      created: "2024-08-04 16:17:08.281Z",
      updated: "2024-08-04 16:17:08.281Z",
      name: "battleFormation",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "a7s3sznx",
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
          id: "gdjrcc5k",
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
    const collection = dao.findCollectionByNameOrId("9vs7feye7kf6b22");

    return dao.deleteCollection(collection);
  },
);
