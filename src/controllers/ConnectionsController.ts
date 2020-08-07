import { Request, Response } from 'express';
import db from "../database/connection";

export default class ConnectionsController {
    async index(request: Request, response: Response) {

    }

    async create(request: Request, response: Response) {
        const { user_id } = request.body;

        try {
            await db('connections').insert({
                user_id
            });
    
            return response.status(201).send();
        } catch(error) {
            return response.status(400).json({
                error
            });
        }
    }
}