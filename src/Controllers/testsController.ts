import { Request, Response } from 'express';

import { PostNewTestBody } from '../Protocols/interface';
import * as testsService from '../Services/testsService';

export async function postNewTest (req: Request, res: Response ) {
    try{
        const params = req.body as PostNewTestBody;
        const {testLink, subjectId, teacherId, categoryId, semesterId } = params

        if(!testLink || !subjectId || !teacherId || !categoryId || !semesterId) {
            return res.sendStatus(400);
        }
        
        await testsService.saveNewTest(params)
        return res.sendStatus(201);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getSubjects (req: Request, res: Response ) {
    try{
        
        const subjects = await testsService.getAllSubjects();
        
        return res.send(subjects);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}