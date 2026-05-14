import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

if (!ENDPOINT || !PROJECT_ID || !API_KEY) {
  throw new Error('Missing required environment variables');
}

const client = new sdk.Client();

if (!ENDPOINT || !PROJECT_ID || !API_KEY) {
  console.error("❌ MISSING APPWRITE ENV VARIABLES:", { ENDPOINT, PROJECT_ID, API_KEY: API_KEY ? "EXISTS" : "MISSING" });
}

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);