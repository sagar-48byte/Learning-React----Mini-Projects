import env_config from '../env_config/env_config';
import { Client, Account, ID } from "appwrite";

export class Authservice{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(env_config.appwriteURL)
        .setProject(env_config.appwriteProjectId)

        this.account = new Account(this.client)
    }
    
    
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)

            if (userAccount) {
                // calling login method
                return this.login({email, password})

            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }


    async login({email, password}){
        try {
            await this.account.createEmailPasswordSession(email, password)

        } catch (error) {
            throw error;           
        }
    }


    async getCurrentUser(){
        try {
            return await this.account.get();
            // Logged in
        } catch (error) {
            // Not logged in
            console.log("Appwrite Service :: getCurrentUser :: error :: ", error)
        }
        
        return null;
    }


    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }
    
};

const authservice = new Authservice;



export default authservice; 