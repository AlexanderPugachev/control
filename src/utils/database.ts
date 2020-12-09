
export const DBConfig = {
  name: 'ControlDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'actions',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'type', keypath: 'type', options: { unique: false } },
        { name: 'value', keypath: 'value', options: { unique: false } },
        { name: 'category', keypath: 'category', options: { unique: false } },
        { name: 'account', keypath: 'account', options: { unique: false } },
        { name: 'createDate', keypath: 'createDate', options: { unique: false } },
        { name: 'updateDate', keypath: 'updateDate', options: { unique: false } },
      ]
    },
    {
      store: 'accounts',
      storeConfig: { keyPath: 'id', autoIncrement: true},
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false }},
        { name: 'value', keypath: 'value', options: { unique: false }},
      ]
    }
  ]
};