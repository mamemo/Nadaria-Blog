import { Client, Databases } from "appwrite";

export const client = new Client();
export const databases = new Databases(client);

client
  .setEndpoint(import.meta.env.APPWRITE_ENDPOINT)
  .setProject(import.meta.env.APPWRITE_PROJECT_ID);
