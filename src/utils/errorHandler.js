export function ExceptionNotFound(message){
    this.status = 404;
    this.message = message;
}

export function ExceptionRequestError(message){
    this.status = 400;
    this.message = message;
}