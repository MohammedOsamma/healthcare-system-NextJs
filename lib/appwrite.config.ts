import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_PROJECT_ID,
  NEXT_PUBLIC_API_KEY,
  NEXT_PUBLIC_DATABASE_ID,
  NEXT_PUBLIC_PATIENTS_COLLECTION_ID,
  NEXT_PUBLIC_DOCTORS_COLLECTION_ID,
  NEXT_PUBLIC_APPOINTMENTS_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6830c6fa002cd36bca01")
  .setKey(
    "standard_ea77362905ad982ef4d36a3dd24a33be6e83d2217ae7908e5268bba36bb1d72dcf714221a80d95900a8a90d9902f2b903a7bab7e381565b89baf982d956a7621c7fa87c0999a69a11f4fbbb0e3a8c2e116162d87582f30ecfc4f8a66871744953b9f3d62a210dd43386cb1f3ebebbcd9ffc1d0e969ef7c5ee74bda716c4b0f23"
  );

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
