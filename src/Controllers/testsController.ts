import { Request, Response } from 'express';
import dayjs from 'dayjs';

import { PostNewTestBody } from '../Protocols/interface';
import * as testsService from '../Services/testsService';
import {newTestSchema} from '../Schemas/testsSchemas'

export async function postNewTest (req: Request, res: Response ) {
    try{
        const {link, subjectId, teacherId, categoryId, period } = req.body as PostNewTestBody;
        let { year } = req.body as PostNewTestBody;

        if(!link || !subjectId || !teacherId || !categoryId || !period || !year) {
            return res.sendStatus(400);
        }

        const err = newTestSchema.validate({link, subjectId, teacherId, categoryId, period, year }).error;
        if(err) {
            return res.sendStatus(400);
        }

        const periodId = await testsService.checkYears(period, dayjs(year).format("YYYY"))

        const params = {link, subjectId, teacherId, categoryId, periodId }
        
        await testsService.saveNewTest(params);
        
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

export async function getSubjectsBySemester (req: Request, res: Response ) {
    try{
        
        const subjects = await testsService.getSemesterSubjects();
        
        return res.send(subjects);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getTestsByTeacherId (req: Request, res: Response ) {
    try{
        const id = Number(req.params.id)
        const subjects = await testsService.getTeachersTests(id);
        
        return res.send(subjects);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getAllTeachers (req: Request, res: Response ) {
    try{
        
        const teachers = await testsService.getTeachers();
        
        return res.send(teachers);
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