class EventsHandler {
    constructor(teachersRepo, usersRepo, render) {
        this.teachersRepo = teachersRepo;
        this.usersRepo = usersRepo;
        this.render = render;
    }
}

export default EventsHandler