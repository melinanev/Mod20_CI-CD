import models from '../models/index.js';
import db from '../config/connection.js';

/**
 * Clean a database collection if it exists
 * @param modelName The name of the model to clean
 * @param collectionName The name of the collection to drop
 */
export default async (modelName: "Question", collectionName: string): Promise<void> => {
  try {
    // Safely access the model's database properties
    const modelInstance = models[modelName];
    
    // Check if the model and its DB properties exist
    if (!modelInstance || !modelInstance.db || !modelInstance.db.db) {
      throw new Error(`Model ${modelName} or its database connection not found`);
    }
    
    // Check if collection exists
    const modelExists = await modelInstance.db.db.listCollections({
      name: collectionName
    }).toArray();

    // Drop collection if it exists
    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}
