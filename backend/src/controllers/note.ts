import { RequestHandler } from "express";
import NoteModel from '../models/note';

export const getNotes: RequestHandler = async (req, res, next) => {
    // res.send('Hello world!');
    try {
        const notes = await NoteModel.find().exec();
        res.status(200).json(notes);
        console.log('Notes', notes);

    } catch (error) {
        next(error);
    }
};

export const getNote: RequestHandler = async (req, res, next) => {
    const noteId = req.params.noteId;
    try {
        const note = await NoteModel.findById(noteId).exec();
        res.status(200).json(note);
    } catch (error) {
        next(error);
    }
}

export const createNote: RequestHandler = async (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    try {
        const newNote = await NoteModel.create({
            title: title,
            description: description
        });

        res.status(201).json(newNote);
    } catch (error) {
        next(error);
    }
};