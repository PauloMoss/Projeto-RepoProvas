import { Request, Response } from 'express';

import { PostNewTestBody } from '../Protocols/interface';
import * as testsService from '../Services/testsService';

export async function postNewTest (req: Request, res: Response ) {
    try{
        const params = req.body as PostNewTestBody;
        const {link, subjectId, teacherId, categoryId, periodId } = params

        if(!link || !subjectId || !teacherId || !categoryId || !periodId) {
            return res.sendStatus(400);
        }
        
        await testsService.saveNewTest(params)
        return res.sendStatus(201);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getSubjectsWithTeachers (req: Request, res: Response ) {
    try{
        
        const subjects = await testsService.getSubjectsAndTeachers();
        
        return res.send(subjects);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getSubjectsByPeriod (req: Request, res: Response ) {
    try{
        
        const subjects = await testsService.getSemesterSubjects();
        
        return res.send(subjects);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}


export async function getTestsBySubjectId (req: Request, res: Response ) {
    try{
        const id = Number(req.params.id)
        const subjectTests = await testsService.getSubjectTests(id);
        
        return res.send(subjectTests);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}