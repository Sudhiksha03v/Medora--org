"use server";

import { ID, Query } from "node-appwrite";
import { InputFile } from "node-appwrite/file";

import {
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
  try {
    if (!ENDPOINT) {
      throw new Error("ENDPOINT is required");
    }

    // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
    const newuser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    return parseStringify(newuser);
  } catch (error: any) {
    // Check existing user
    if (error && error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      return existingUser.users[0];
    }
    console.error("An error occurred while creating a new user:", error);
  }
};

// GET USER
export const getUser = async (userId: string) => {
  try {
    if (!ENDPOINT) {
      throw new Error("ENDPOINT is required");
    }

    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
};


// REGISTER PATIENT
// REGISTER PATIENT
interface RegisterUserParams {
  identificationDocument: Map<string, any>;
  [key: string]: any;
}

export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams): Promise<any> => {
  try {
    if (!identificationDocument) {
      throw new Error("identificationDocument is required");
    }

    if (!ENDPOINT) {
      throw new Error("ENDPOINT is required");
    }

    // Upload file ->  // https://appwrite.io/docs/references/cloud/client-web/storage#createFile
    const inputFile =
      identificationDocument &&
      InputFile.fromBuffer(
        identificationDocument?.get("blobFile") as Blob,
        identificationDocument?.get("fileName") as string
      );

    const file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);

    const newPatient = await databases.createDocument(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        identificationDocumentId: file.$id,
        identificationDocumentUrl: `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}`,
        ...patient,
        allergies: patient.allergies ? patient.allergies.substring(0, 100) : '',
      }
    );

    return parseStringify(newPatient);
  } catch (error) {
    console.error("An error occurred while creating a new patient:", error);
  }
};

// GET PATIENT
export const getPatient = async (userId: string) => {
  try {
    if (!ENDPOINT) {
      throw new Error("ENDPOINT is required");
    }

    const patients = await databases.listDocuments(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );

    return parseStringify(patients.documents[0]);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
  }
};