import TeachersRepo from './teachers-repo.js';
import UsersRepo from './users-repo.js';
import Render from './render.js';
import EventsHandler from './eventsHandler.js'; 

let teachersRepo = new TeachersRepo();
let usersRepo = new UsersRepo()
let render = new Render();
let eventsHandler = new EventsHandler(teachersRepo, usersRepo, render);
