const env_config = {
    appwriteURL:            String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:      String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId:     String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId:   String(import.meta.env.VITE_APPWRITE_COLLECCTION_ID),
    appwriteBucketId:       String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default env_config