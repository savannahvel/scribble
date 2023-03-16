import { openDB } from 'idb';

const initdb = async () =>
  openDB('scribble', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('scribble')) {
        console.log('scribble database already exists');
        return;
      }
      db.createObjectStore('scribble', { keyPath: 'id', autoIncrement: true });
      console.log('scribble database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
