import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    // Adding a null check to fix the TypeScript error
    if (!models[modelName] || !models[modelName].db || !models[modelName].db.db) {
      throw new Error(`Model ${modelName} or its database connection not found`);
    }
    
    let modelExists = await models[modelName].db.db.listCollections({
      name: collectionName
    }).toArray()

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}
