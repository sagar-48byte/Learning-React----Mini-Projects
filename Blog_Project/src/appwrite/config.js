import env_config from "../env_config/env_config";
import {Client, Databases, Storage, ID, Query} from 'appwrite'

export class Service{
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({title, content, featuredImage, slug = ID.unique(), status, userId}){
        try {
            return await this.databases.createDocument(
                env_config.appwriteDatabaseId,
                env_config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async updatePost(slug = ID.unique(), {title, content, featuredImage, status}){

        try {
            return await this.databases.updateDocument(
                env_config.appwriteDatabaseId,
                env_config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log('Appwrite Service :: UpdatePost :: error', error);
        }
    }

    async deletePost(slug=ID.unique()){
        try {
            await this.databases.deleteDocument(
                env_config.appwriteDatabaseId,
                env_config.appwriteCollectionId,
                slug
            )
            return true; 
        } catch (error) {
            console.log("Appwrite Service :: DeletePost :: error", error);
        }
            return false;
    }

    async getPost(slug=ID.unique()){
        try {
            return await this.databases.getDocument(
                env_config.appwriteDatabaseId,
                env_config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite Service :: GetPost :: error", error)
        }
        return false;
    }

    async getList(filter = [Query.equal("status", 'active')]){
        try {
            return await this.databases.listDocuments(
                env_config.appwriteDatabaseId,
                env_config.appwriteCollectionId,
                filter
            )
        } catch (error) {
            console.log("Appwrite Service :: GetList :: error", error);
        }
        return false;
    }
    
    
    // File Upload Service


    async uploadFile(file){
        try {
            await this.storage.createFile(
                env_config.appwriteBucketId,
                ID.unique(),
                file
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: UploadFile :: error", error)
        }
        return false;
    }

    async deleteFile(fileID){
        try {
            await this.storage.deleteFile(
                env_config.appwriteBucketId,
                fileID
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: DeleteFile :: error", error)
        }
        return false;
    }

    getFilePreview(fileID){
        try {
            return this.storage.getFilePreview(
                env_config.appwriteBucketId,
                fileID
            )
        } catch (error) {
            console.log("Appwrite Service :: GetFilePreview :: error", error)
        }
        return false;
    }

    async updateFile(fileID){
        try{
            return await this.storage.updateFile(
                env_config.appwriteBucketId,
                fileID
            )
        }catch (error) {
            console.log("Appwrite Service :: UpdateFile :: error", error)
    }
}
}
const service = new Service();
export default service;